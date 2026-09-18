"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Tone = "sheet" | "plain" | "label";
type Aspect = "4/3" | "3/4" | "1/1" | "16/9" | "5/4";

interface CardMedia {
  src: string;
  alt: string;
  /** Required — every card image must declare how wide it actually renders. */
  sizes: string;
  aspect?: Aspect;
  priority?: boolean;
}

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  as?: "div" | "article" | "li";
  tone?: Tone;
  interactive?: boolean;
  href?: string;
  onSelect?: () => void;
  media?: CardMedia;
  mediaClassName?: string;
}

const TONE_CLASS: Record<Tone, string> = {
  sheet: "bg-paper-raised border border-line shadow-card",
  plain: "bg-transparent",
  label: "bg-paper-raised border border-line",
};

const ASPECT_CLASS: Record<Aspect, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "5/4": "aspect-[5/4]",
};

/**
 * The rule that fixes ~40 unfocusable `<div onClick>` cards across the
 * old build: pass `onSelect` and this renders a real `<button>`; pass
 * `href` and it renders a real link. A plain display card renders as
 * `div`/`article`/`li`.
 */
export const Card: React.FC<CardProps> = ({
  as: As = "div",
  tone = "sheet",
  interactive,
  href,
  onSelect,
  media,
  className,
  mediaClassName,
  children,
  ...rest
}) => {
  const isInteractive = interactive || Boolean(href) || Boolean(onSelect);
  const base = cn(
    "group relative overflow-hidden rounded",
    TONE_CLASS[tone],
    isInteractive &&
      "focus-ring transition-all duration-base hover:-translate-y-0.5 hover:shadow-raised active:translate-y-0 active:shadow-card",
    className
  );

  const mediaBlock = media && (
    <div className={cn("relative overflow-hidden bg-plate", ASPECT_CLASS[media.aspect ?? "4/3"], mediaClassName)}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={media.sizes}
        priority={media.priority}
        className="object-cover transition-transform duration-slow group-hover:scale-[1.04]"
      />
    </div>
  );

  if (onSelect) {
    return (
      <button type="button" onClick={onSelect} className={cn(base, "block w-full text-left")} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {mediaBlock}
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cn(base, "block")} {...(rest as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}>
        {mediaBlock}
        {children}
      </Link>
    );
  }

  const Comp = As as React.ElementType;
  return (
    <Comp className={base} {...rest}>
      {mediaBlock}
      {children}
    </Comp>
  );
};
