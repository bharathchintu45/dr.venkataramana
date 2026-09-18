"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type React from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";
import { hasMotion } from "@/lib/motion";
import { tokenColor } from "@/lib/tokenColor";

type AnnotationAction = "highlight" | "underline" | "box" | "circle" | "strike-through" | "crossed-off" | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  /** A resolved CSS color. Defaults to the `--annotation` token — "rare
   *  highlight ink, never a CTA color" — read at draw time via
   *  `tokenColor()`, since rough-notation needs a real color string, not
   *  a Tailwind class or an unresolved `rgb(var(--x))`. */
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

/**
 * Ported from Magic UI's Highlighter
 * (https://magicui.design/docs/components/highlighter), with fixes:
 *  1. Default `color` was a raw hex (`#ffd1dc`) — now resolved from the
 *     `--annotation` token at draw time, so it stays in sync with the
 *     rest of the palette.
 *  2. Draw is delayed until `hasMotion()` AND (when the phrase sits
 *     inside a `[data-reveal]` block, as the Hero lede does) the fade-in
 *     transition has finished. rough-notation measures
 *     `getBoundingClientRect()` once and positions its SVG absolutely;
 *     drawing mid-transition leaves the mark permanently offset by
 *     whatever distance the reveal was still animating through.
 *  3. Skips drawing entirely under reduced motion / no JS — plain text
 *     renders instead of an unannotated, motionless mark appearing.
 */
export function Highlighter({
  children,
  action = "highlight",
  color,
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => setMotionOk(hasMotion()), []);

  const isInView = useInView(elementRef, { once: true, margin: "-10%" });
  const shouldShow = motionOk && (!isView || isInView);

  useLayoutEffect(() => {
    const element = elementRef.current;
    let annotation: RoughAnnotation | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (shouldShow && element) {
      const draw = () => {
        const currentAnnotation = annotate(element, {
          type: action,
          color: color ?? tokenColor("--annotation"),
          strokeWidth,
          animationDuration,
          iterations,
          padding,
          multiline,
        });
        annotation = currentAnnotation;
        currentAnnotation.show();

        resizeObserver = new ResizeObserver(() => {
          currentAnnotation.hide();
          currentAnnotation.show();
        });
        resizeObserver.observe(element);
        resizeObserver.observe(document.body);
      };

      // Clears the ~420ms [data-reveal] fade-in this phrase may still be
      // mid-transition through when it first enters view.
      timer = setTimeout(draw, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      annotation?.remove();
      resizeObserver?.disconnect();
    };
  }, [shouldShow, action, color, strokeWidth, animationDuration, iterations, padding, multiline]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
