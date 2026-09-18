import React from "react";
import { cn } from "@/lib/cn";

interface ProseProps {
  size?: "sm" | "md" | "lg";
  tone?: "paper" | "plate";
  className?: string;
  children: React.ReactNode;
}

const SIZE_CLASS = {
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
};

export const Prose: React.FC<ProseProps> = ({ size = "md", tone = "paper", className, children }) => (
  <div className={cn("max-w-prose", SIZE_CLASS[size], tone === "plate" ? "text-plate-ink-muted" : "text-ink-secondary", className)}>
    {children}
  </div>
);
