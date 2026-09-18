"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  /** A rendered icon element (e.g. `<ArrowRight className="h-4 w-4" />`), not
   *  a component reference — keeps this prop passable from Server Components. */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps &
  Omit<React.ComponentProps<typeof Link>, keyof ButtonOwnProps | "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "bg-herbarium text-paper-raised border border-herbarium hover:bg-herbarium-deep hover:border-herbarium-deep",
  secondary: "bg-transparent text-ink border border-line-strong hover:border-herbarium hover:text-herbarium-deep",
  ghost: "bg-transparent text-ink-secondary border border-transparent hover:bg-herbarium-tint hover:text-herbarium-deep",
  link: "bg-transparent text-herbarium border-none underline-offset-4 hover:underline px-0 py-0",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "touch-target relative text-xs px-3 py-1.5 gap-1.5 rounded-sm",
  md: "text-sm px-4 py-2.5 gap-2 rounded",
  lg: "text-sm px-5 py-3 gap-2 rounded",
  icon: "p-2.5 rounded-full",
};

/**
 * Every focus-visible ring, active-press feedback and disabled state in
 * the app comes from this one component — including the polymorphic
 * `as={Link}` rendering for internal navigation.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading,
  fullWidth,
  className,
  children,
  ...rest
}) => {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center font-medium transition-colors duration-fast",
    "active:translate-y-px active:scale-[0.98] motion-reduce:active:transform-none",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANT_CLASS[variant],
    variant !== "link" && SIZE_CLASS[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {loading ? <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden /> : iconLeft}
      {children}
      {!loading && iconRight}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} aria-busy={loading || undefined} {...linkRest}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} aria-busy={loading || undefined} disabled={loading || buttonRest.disabled} {...buttonRest}>
      {content}
    </button>
  );
};
