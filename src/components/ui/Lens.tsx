"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate } from "motion/react";
import { cn } from "@/lib/cn";
import { hasMotion } from "@/lib/motion";

interface Position {
  x: number;
  y: number;
}

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  position?: Position;
  defaultPosition?: Position;
  isStatic?: boolean;
  duration?: number;
  lensColor?: string;
  /** Only emitted on the root when set — the caller (usually already a
   *  labelled button, as on the specimen photo) may not want a second,
   *  redundant accessible region nested inside it. */
  ariaLabel?: string;
  className?: string;
}

/**
 * Ported from Magic UI's Lens (https://magicui.design/docs/components/lens),
 * with fixes for this codebase:
 *  1. `cn` imported from `@/lib/cn`, not `@/lib/utils`.
 *  2. Accepts `className` — the upstream root is always `relative`, which
 *     collapses to zero height around a `next/image fill` child; callers
 *     that need `absolute inset-0` (see ImageGallery) can now pass it.
 *  3. `role="region"`/`aria-label` are only emitted when `ariaLabel` is
 *     explicitly passed, since the upstream default of always setting
 *     `role="region"` breaks when this wraps content already inside a
 *     labelled `<button>` (a region can't nest in a button).
 *  4. The zoomed duplicate of `children` is `aria-hidden` and
 *     `pointer-events-none` — upstream duplicates the DOM (including any
 *     `alt` text) without hiding it from assistive tech.
 *  5. Gated on `hasMotion()`: under reduced motion the lens still works
 *     (it's a functional magnifier, not decoration) but skips the
 *     scale/opacity transition, matching the "no motion, still usable"
 *     rule the rest of the site follows.
 */
export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 0, y: 0 },
  defaultPosition,
  duration = 0.1,
  lensColor = "rgb(var(--plate))",
  ariaLabel,
  className,
}: LensProps) {
  if (zoomFactor < 1) throw new Error("zoomFactor must be greater than 1");
  if (lensSize < 0) throw new Error("lensSize must be greater than 0");

  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState<Position>(position);
  const containerRef = useRef<HTMLDivElement>(null);
  const animated = hasMotion();

  const currentPosition = useMemo(() => {
    if (isStatic) return position;
    if (defaultPosition && !isHovering) return defaultPosition;
    return mousePosition;
  }, [isStatic, position, defaultPosition, isHovering, mousePosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsHovering(false);
  }, []);

  const maskImage = useMotionTemplate`radial-gradient(circle ${lensSize / 2}px at ${currentPosition.x}px ${
    currentPosition.y
  }px, ${lensColor} 100%, transparent 100%)`;

  const lensDuration = animated ? duration : 0;

  const LensContent = useMemo(() => {
    const { x, y } = currentPosition;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.58 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: lensDuration }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ maskImage, WebkitMaskImage: maskImage, transformOrigin: `${x}px ${y}px`, zIndex: 50 }}
        aria-hidden
      >
        <div className="absolute inset-0" style={{ transform: `scale(${zoomFactor})`, transformOrigin: `${x}px ${y}px` }}>
          {children}
        </div>
      </motion.div>
    );
  }, [currentPosition, maskImage, zoomFactor, children, lensDuration]);

  return (
    <div
      ref={containerRef}
      className={cn("relative z-20 overflow-hidden rounded", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      {...(ariaLabel ? { role: "region", "aria-label": ariaLabel, tabIndex: 0 } : {})}
    >
      {children}
      {isStatic || defaultPosition ? (
        LensContent
      ) : (
        <AnimatePresence mode="popLayout">{isHovering && LensContent}</AnimatePresence>
      )}
    </div>
  );
}
