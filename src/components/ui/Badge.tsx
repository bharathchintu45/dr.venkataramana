import React from "react";
import { cn } from "@/lib/cn";

type Tone = "accent" | "neutral" | "annotation" | "outline";
type Size = "sm" | "md";

interface BadgeProps {
  tone?: Tone;
  size?: Size;
  /** A rendered icon element, e.g. `<Award className="h-3 w-3" />`. */
  icon?: React.ReactNode;
  mono?: boolean;
  className?: string;
  children: React.ReactNode;
}

const TONE_CLASS: Record<Tone, string> = {
  accent: "bg-herbarium-tint text-herbarium-deep",
  neutral: "bg-paper text-ink-secondary border border-line",
  annotation: "bg-annotation/10 text-annotation border border-annotation/25",
  outline: "border border-line-strong text-ink-secondary bg-transparent",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "text-xs px-2 py-1 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
};

export const Badge: React.FC<BadgeProps> = ({ tone = "neutral", size = "sm", icon, mono, className, children }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-sm font-semibold",
      mono && "font-mono tabular-nums",
      TONE_CLASS[tone],
      SIZE_CLASS[size],
      className
    )}
  >
    {icon}
    {children}
  </span>
);
