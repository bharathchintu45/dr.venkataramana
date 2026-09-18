"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { useParallax } from "@/hooks/useParallax";

interface SectionBackground {
  src: string;
  alt?: string;
  position?: string;
  priority?: boolean;
}

interface SectionShellProps {
  id: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "paper" | "plate";
  width?: "default" | "wide";
  background?: SectionBackground;
  aside?: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const WIDTH_CLASS: Record<NonNullable<SectionShellProps["width"]>, string> = {
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

/**
 * One shell for every homepage section — replaces the 12-file copy-pasted
 * background+scrim+badge+heading pattern from the previous build. `tone`
 * switches between paper (the default reading surface) and plate (a dark,
 * full-bleed photo interlude with gentle parallax).
 */
export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  label,
  title,
  lede,
  tone = "paper",
  width = "default",
  background,
  aside,
  cta,
  className,
  children,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const isPlate = tone === "plate";
  useParallax(bgRef, isPlate && Boolean(background));

  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        isPlate ? "overflow-hidden bg-plate py-20 text-plate-ink sm:py-28" : "bg-paper py-16 text-ink sm:py-24",
        className
      )}
    >
      {isPlate && background && (
        <div className="absolute inset-0 z-0" aria-hidden>
          <div ref={bgRef} className="absolute inset-0">
            <Image
              src={background.src}
              alt=""
              fill
              sizes="100vw"
              priority={background.priority}
              className={cn("object-cover", background.position)}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-plate via-plate/45 to-plate/75" />
        </div>
      )}

      <div className={cn("relative z-10 mx-auto w-full px-5 sm:px-8", WIDTH_CLASS[width])}>
        <div className={cn("grid gap-8 sm:gap-10", aside ? "lg:grid-cols-[1fr_260px]" : "grid-cols-1")}>
          {/* An explicit ch-width, not Tailwind's `max-w-prose` (65ch): at
              this font, "ch" (the width of "0") undershoots Inter/Fraunces'
              real average character width enough that 65ch rendered closer
              to 86 characters per line at desktop, past the ~80ch comfort
              limit. */}
          <header data-reveal style={{ ["--reveal-y" as string]: "14px" }} className="max-w-[56ch]">
            <div className="mb-3 flex items-center gap-3">
              <span className={cn("h-px w-8", isPlate ? "bg-plate-ink/40" : "bg-herbarium/50")} />
              <span className={cn("text-[13px] font-semibold tracking-[0.01em]", isPlate ? "text-plate-ink" : "text-herbarium")}>
                {label}
              </span>
            </div>
            <h2
              className={cn(
                "font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15]",
                isPlate ? "text-plate-ink" : "text-ink"
              )}
            >
              {title}
            </h2>
            {lede && (
              <p className={cn("mt-3 text-base leading-relaxed", isPlate ? "text-plate-ink-muted" : "text-ink-secondary")}>
                {lede}
              </p>
            )}
          </header>
          {aside && (
            <aside data-reveal style={{ ["--reveal-y" as string]: "14px" }} className="lg:pt-1">
              {aside}
            </aside>
          )}
        </div>

        {children && <div className="mt-10 sm:mt-14">{children}</div>}
        {cta && <div className="mt-10 flex justify-center sm:mt-14">{cta}</div>}
      </div>
    </section>
  );
};
