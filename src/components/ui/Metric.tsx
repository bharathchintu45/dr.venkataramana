import React from "react";
import { cn } from "@/lib/cn";
import { NumberTicker } from "./NumberTicker";

interface MetricBase {
  label: string;
  /** A rendered icon element, e.g. `<FileText className="h-4 w-4" />`. */
  icon?: React.ReactNode;
  tone?: "paper" | "plate";
  className?: string;
}

// Exactly one of `value` (any pre-formatted string/number, rendered as-is
// — needed by call sites like a "₹1,23,76,000" grants figure that isn't a
// plain count) or `countTo` (an actual number, counted up on scroll into
// view via NumberTicker) — never both. Additive: every existing
// `<Metric value=… />` call site keeps typechecking and rendering exactly
// as before.
type MetricProps = MetricBase &
  (
    | { value: string | number; countTo?: never; suffix?: never; decimalPlaces?: never }
    | { value?: never; countTo: number; suffix?: string; decimalPlaces?: number }
  );

export const Metric: React.FC<MetricProps> = ({ label, icon, tone = "paper", className, ...props }) => (
  <div className={cn("flex flex-col gap-1", className)}>
    <div className="flex items-center gap-2">
      {icon}
      <span
        className={cn(
          "font-display tabular-nums text-2xl font-medium leading-none sm:text-3xl",
          tone === "plate" ? "text-plate-ink" : "text-ink"
        )}
      >
        {"countTo" in props && props.countTo !== undefined ? (
          <>
            <NumberTicker value={props.countTo} decimalPlaces={props.decimalPlaces} delay={0.2} />
            {props.suffix}
          </>
        ) : (
          props.value
        )}
      </span>
    </div>
    <span className={cn("text-xs leading-snug", tone === "plate" ? "text-plate-ink-muted" : "text-ink-muted")}>{label}</span>
  </div>
);
