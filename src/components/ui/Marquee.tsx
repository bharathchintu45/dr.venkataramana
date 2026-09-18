import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

/**
 * Ported from Magic UI's Marquee (https://magicui.design/docs/components/marquee).
 * No npm dependency — pure CSS — but the upstream source targets Tailwind
 * v4 (`gap-(--gap)`), which this v3.4 project doesn't understand; rewritten
 * as the arbitrary-property form `[gap:var(--gap)]`, which has worked
 * since Tailwind v3.1. The `marquee`/`marquee-vertical` keyframes and
 * animation utilities are added in tailwind.config.js.
 *
 * Each repeated track carries `data-marquee-track`, which
 * `html:not(.has-motion) [data-marquee-track]` (globals.css) freezes at
 * rest under reduced motion / no JS — without that, the project's global
 * reduced-motion rule (which sets `animation-duration: 0.01ms` rather than
 * removing the animation) would snap the track to its scrolled-away end
 * frame instead of leaving it in place.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            data-marquee-track
            aria-hidden={i > 0}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
