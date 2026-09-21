"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Tone = "sheet" | "plain" | "label";
type Aspect = "4/3" | "3/4" | "4/5" | "1/1" | "16/9" | "5/4";

interface CardMedia {
  src: string;
  alt: string;
  /** Required — every card image must declare how wide it actually renders. */
  sizes: string;
  aspect?: Aspect;
  priority?: boolean;
  /** A short specimen-tag chip pinned over the top-left corner (year, family,
   *  photo count…) — the one label style every image card now shares instead
   *  of each card inventing its own badge placement. */
  label?: React.ReactNode;
}

/**
 * An action that belongs to the image only, not the whole card — for the one
 * layout that genuinely needs two separate targets (a photo that opens a
 * lightbox, plus a real link elsewhere in the card body). Mutually exclusive
 * with the card-level `href`/`onSelect` below: pick one or the other, never
 * both, or you get a link nested inside a button again.
 */
interface CardMediaAction {
  href?: string;
  onSelect?: () => void;
  /** Required — this is the only accessible name the action gets. */
  label: string;
}

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  as?: "div" | "article" | "li";
  tone?: Tone;
  interactive?: boolean;
  href?: string;
  onSelect?: () => void;
  media?: CardMedia;
  mediaAction?: CardMediaAction;
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
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "5/4": "aspect-[5/4]",
};

/** Writes the pointer position straight onto the element as CSS vars for the
 *  `.card-spotlight` cursor-follow glow (see globals.css) — never through
 *  React state, so a grid of dozens of cards never re-renders on mousemove.
 *  The gradient itself is gated to fine-pointer hover devices with motion
 *  enabled in CSS, so this handler stays cheap to leave unconditional. */
export function handleSpotlightMove(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

/**
 * The rule that fixes ~40 unfocusable `<div onClick>` cards across the
 * old build: pass `onSelect` and this renders a real `<button>`; pass
 * `href` and it renders a real link. A plain display card renders as
 * `div`/`article`/`li`.
 *
 * Every card is a `flex h-full flex-col` box, so cards in the same grid row
 * share a height regardless of how much text each one has — pair the body
 * with `CardBody`/`CardTitle`/`CardMeta`/`CardText`/`CardFooter` below so
 * titles clamp consistently and footers pin to the bottom.
 */
export const Card: React.FC<CardProps> = ({
  as: As = "div",
  tone = "sheet",
  interactive,
  href,
  onSelect,
  media,
  mediaAction,
  className,
  mediaClassName,
  children,
  ...rest
}) => {
  const isInteractive = interactive || Boolean(href) || Boolean(onSelect) || Boolean(mediaAction);
  const base = cn(
    "group relative flex h-full flex-col overflow-hidden rounded",
    TONE_CLASS[tone],
    isInteractive &&
      cn(
        "card-spotlight focus-ring transition-all duration-base hover:-translate-y-1 hover:shadow-raised hover:ring-1 hover:ring-herbarium/25",
        "active:translate-y-0 active:scale-[0.98] active:shadow-card"
      ),
    className
  );

  const mediaContent = media && (
    <>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={media.sizes}
        priority={media.priority}
        className="object-cover transition-transform duration-slow ease-enter group-hover:scale-[1.05]"
      />
      {media.label && <span className="card-label">{media.label}</span>}
    </>
  );

  let mediaBlock: React.ReactNode = null;
  if (media) {
    const box = cn("relative overflow-hidden bg-plate", ASPECT_CLASS[media.aspect ?? "4/3"], mediaClassName);
    if (mediaAction?.onSelect) {
      mediaBlock = (
        <button type="button" onClick={mediaAction.onSelect} aria-label={mediaAction.label} className={cn("focus-ring block w-full", box)}>
          {mediaContent}
        </button>
      );
    } else if (mediaAction?.href) {
      mediaBlock = (
        <Link href={mediaAction.href} aria-label={mediaAction.label} className={cn("focus-ring block", box)}>
          {mediaContent}
        </Link>
      );
    } else {
      mediaBlock = <div className={box}>{mediaContent}</div>;
    }
  }

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        onPointerMove={isInteractive ? handleSpotlightMove : undefined}
        className={cn(base, "block w-full text-left")}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {mediaBlock}
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        onPointerMove={isInteractive ? handleSpotlightMove : undefined}
        className={cn(base, "block")}
        {...(rest as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}
      >
        {mediaBlock}
        {children}
      </Link>
    );
  }

  const Comp = As as React.ElementType;
  return (
    <Comp className={base} onPointerMove={isInteractive ? handleSpotlightMove : undefined} {...rest}>
      {mediaBlock}
      {children}
    </Comp>
  );
};

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={cn("flex flex-1 flex-col p-4", className)} {...rest} />
);

export const CardEyebrow: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={cn("stamp text-herbarium", className)} {...rest} />
);

interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h2" | "h3" | "p";
  italic?: boolean;
}

/** Clamped to 2 lines with a reserved min-height, so a one-line title and a
 *  two-line title in the same row still leave the footer at the same y. */
export const CardTitle: React.FC<CardTitleProps> = ({ as: As = "p", italic, className, ...rest }) => {
  const Comp = As as React.ElementType;
  return (
    <Comp
      className={cn(
        "line-clamp-2 min-h-[2.5rem] font-display text-sm leading-snug text-ink transition-colors group-hover:text-herbarium-deep",
        italic && "italic",
        className
      )}
      {...rest}
    />
  );
};

export const CardMeta: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={cn("mt-1 line-clamp-1 text-xs text-ink-muted", className)} {...rest} />
);

export const CardText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={cn("mt-2 line-clamp-3 text-xs leading-relaxed text-ink-secondary", className)} {...rest} />
);

/** `mt-auto` pins badges/links to the bottom of the card regardless of how
 *  tall the title/text above ended up — this is what keeps footers aligned
 *  across a row of uneven-content cards. */
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={cn("relative z-10 mt-auto flex flex-wrap items-center gap-1.5 pt-3", className)} {...rest} />
);
