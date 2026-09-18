"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { hasMotion } from "@/lib/motion";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

const format = (n: number, decimalPlaces: number) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }).format(
    Number(n.toFixed(decimalPlaces))
  );

/**
 * Ported from Magic UI's Number Ticker
 * (https://magicui.design/docs/components/number-ticker), with two fixes:
 *  1. The upstream version's initial render is `{startValue}` (usually 0),
 *     animated in afterwards via `textContent` — so no-JS visitors, and
 *     everyone during the pre-hydration paint, see the wrong number. Here
 *     the JSX renders the real final value from the start; the effect
 *     only resets it to `startValue` and counts back up when motion is
 *     actually enabled, still writing through `textContent` (not React
 *     state), so this causes no extra re-render or hydration mismatch.
 *  2. Dropped the hardcoded `text-black dark:text-white` — color is the
 *     caller's job (here, `Metric`'s `tone` prop already owns it).
 */
export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || !hasMotion()) return;
    // Only animate when motion is on — otherwise the JSX's own final
    // value (already painted) is left exactly as it is. `jump` snaps the
    // spring's own displayed value back to the start with no animation,
    // then the delayed `set` lets it spring forward to the real target.
    springValue.jump(startValue);
    if (ref.current) ref.current.textContent = format(startValue, decimalPlaces);
    const timer = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value);
    }, delay * 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = format(latest, decimalPlaces);
      }),
    [springValue, decimalPlaces]
  );

  return (
    <span ref={ref} className={className} {...props}>
      {format(value, decimalPlaces)}
    </span>
  );
}
