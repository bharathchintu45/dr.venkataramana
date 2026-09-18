"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, type HTMLMotionProps } from "motion/react";
import { hasMotion } from "@/lib/motion";

/**
 * Ported from Magic UI's Pointer (https://magicui.design/docs/components/pointer)
 * with three fixes for this codebase:
 *  1. `cn` doesn't exist here — this component doesn't need it at all once
 *     the demo's Tailwind-v4-only `transform-[...]` utility is replaced.
 *  2. Positioning and the motion-driven scale are split across two nested
 *     elements: `motion` writes `transform` as an inline style for the
 *     scale spring, which would silently clobber a Tailwind translate
 *     class on the same element.
 *  3. Gated on `hasMotion()` and `(hover: hover) and (pointer: fine)` —
 *     under reduced motion, no JS, or on touch, this renders nothing and
 *     the real cursor is left alone. `cursor: none` is applied via a class
 *     (`.pointer-host`, globals.css) rather than an inline style, because
 *     a child <a>'s UA-stylesheet `cursor: pointer` beats an inherited
 *     inline `none` — only a descendant selector wins that fight.
 *
 * A custom pointer component that displays an animated cursor. Add this
 * as a child to any element to enable a custom pointer when hovering it;
 * pass custom children to render as the pointer (default: an arrow).
 */
export function Pointer({ className, children, ...props }: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(hasMotion() && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const parentElement = containerRef.current?.parentElement ?? null;
    if (!parentElement) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsActive(true);
    };
    const handleLeave = () => setIsActive(false);

    parentElement.classList.add("pointer-host");
    parentElement.addEventListener("mousemove", handleMove);
    parentElement.addEventListener("mouseenter", handleMove);
    parentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      parentElement.classList.remove("pointer-host");
      parentElement.removeEventListener("mousemove", handleMove);
      parentElement.removeEventListener("mouseenter", handleMove);
      parentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return <div ref={containerRef} />;

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          // Positioning only — Tailwind owns this element's transform.
          <motion.div className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2" style={{ top: y, left: x }}>
            {/* The scale/opacity spring — `motion` owns this element's transform. */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={className}
              {...props}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
