"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import YetAnotherLightbox, { type Slide } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Check, Share2, RotateCcw, RotateCw, FlipHorizontal, FlipVertical } from "lucide-react";
import { lockScroll, unlockScroll } from "@/lib/smoothScroll";
import { hasMotion } from "@/lib/motion";

export interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  /** Intrinsic size of `src`; enables responsive loading via `thumb`. */
  width?: number;
  height?: number;
  /** Smaller version of the same photo (e.g. /images/<cat>/thumbs/<file>.webp, max 640px). */
  thumb?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  open: boolean;
  index?: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

const THUMB_MAX_EDGE = 640;

function toSlide(img: LightboxImage): Slide {
  const slide: Slide = {
    src: img.src,
    alt: img.alt,
    title: img.title,
    description: img.description,
    // Without an explicit filename the Download plugin falls back to
    // opening the image in a new tab instead of forcing a save dialog.
    download: { url: img.src, filename: img.src.split("/").pop() || "photo.webp" }
  };
  if (img.width && img.height) {
    slide.width = img.width;
    slide.height = img.height;
    if (img.thumb) {
      const scale = Math.min(1, THUMB_MAX_EDGE / Math.max(img.width, img.height));
      slide.srcSet = [
        { src: img.thumb, width: Math.round(img.width * scale), height: Math.round(img.height * scale) },
        { src: img.src, width: img.width, height: img.height }
      ];
    }
  }
  return slide;
}

interface ShareButtonProps {
  slide: Slide | undefined;
}

/**
 * A custom share/copy-link control. yet-another-react-lightbox ships a
 * Share plugin, but it hard-gates on `navigator.canShare` existing at all
 * — unsupported on most desktop browsers — so the button would simply
 * vanish there. This version always renders: native share sheet when
 * available (mobile), otherwise copies the link and confirms in place.
 */
const ShareButton: React.FC<ShareButtonProps> = ({ slide }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = useCallback(async () => {
    if (!slide) return;
    const url = typeof window !== "undefined" ? new URL(slide.src, window.location.origin).toString() : slide.src;
    const title = typeof slide.title === "string" ? slide.title : "Photograph";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled the native share sheet — fall through to copy.
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 1800);
      } catch {
        // Clipboard permission denied or unavailable — fail silently
        // rather than surface an error for a nice-to-have action.
      }
    }
  }, [slide]);

  return (
    <button
      type="button"
      className="yarl__button"
      onClick={handleClick}
      aria-label={copied ? "Link copied" : "Share this photo"}
    >
      {copied ? <Check className="yarl__icon" /> : <Share2 className="yarl__icon" />}
    </button>
  );
};

interface SlideTransform {
  rotate: number;
  flipH: boolean;
  flipV: boolean;
}

const IDENTITY_TRANSFORM: SlideTransform = { rotate: 0, flipH: false, flipV: false };

type TransformKind = "rotate-left" | "rotate-right" | "flip-h" | "flip-v";

const TRANSFORM_BUTTONS: Record<TransformKind, { label: string; icon: React.ReactNode; apply: (t: SlideTransform) => SlideTransform }> = {
  "rotate-left": {
    label: "Rotate left",
    icon: <RotateCcw className="yarl__icon" />,
    apply: (t) => ({ ...t, rotate: t.rotate - 90 })
  },
  "rotate-right": {
    label: "Rotate right",
    icon: <RotateCw className="yarl__icon" />,
    apply: (t) => ({ ...t, rotate: t.rotate + 90 })
  },
  "flip-h": {
    label: "Flip horizontal",
    icon: <FlipHorizontal className="yarl__icon" />,
    apply: (t) => ({ ...t, flipH: !t.flipH })
  },
  "flip-v": {
    label: "Flip vertical",
    icon: <FlipVertical className="yarl__icon" />,
    apply: (t) => ({ ...t, flipV: !t.flipV })
  }
};

interface TransformButtonProps {
  kind: TransformKind;
  onApply: (apply: (t: SlideTransform) => SlideTransform) => void;
}

/** Rotate/flip control — yet-another-react-lightbox has no built-in
 * plugin for this, so it's applied as a CSS transform on a wrapper
 * around the current slide via `render.slideContainer` below. */
const TransformButton: React.FC<TransformButtonProps> = ({ kind, onApply }) => {
  const { label, icon, apply } = TRANSFORM_BUTTONS[kind];
  return (
    <button
      type="button"
      className="yarl__button site-lightbox-btn-transform"
      onClick={() => onApply(apply)}
      aria-label={label}
    >
      {icon}
    </button>
  );
};

/**
 * Site-wide photo lightbox: pinch/scroll/double-tap zoom (with explicit
 * zoom in/out buttons for keyboard and mouse users), swipe navigation,
 * swipe-down-to-dismiss, fullscreen, a hands-free slideshow, rotate/flip,
 * download, share/copy link, captions with a show/hide toggle, a photo
 * counter and a thumbnail strip for multi-photo sets — styled as one
 * continuous dark top toolbar + bottom thumbnail strip, lightGallery-style.
 */
export const Lightbox: React.FC<LightboxProps> = ({ images, open, index = 0, onClose, onIndexChange }) => {
  const slides = useMemo(() => images.map(toSlide), [images]);
  const multiple = slides.length > 1;
  const hasCaptions = images.some((img) => img.title || img.description);
  const [activeIndex, setActiveIndex] = useState(index);
  const [transforms, setTransforms] = useState<Record<string, SlideTransform>>({});

  useEffect(() => {
    if (open) setActiveIndex(index);
  }, [open, index]);

  // Rotate/flip is per-viewing, not a permanent edit — forget it once
  // the lightbox closes rather than surprise the user next time they open it.
  useEffect(() => {
    if (!open) setTransforms({});
  }, [open]);

  // Refcounted lock: a lightbox opened from inside a Dialog must not
  // re-enable page scroll behind the dialog when it closes first.
  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  const activeSrc = slides[activeIndex]?.src;
  const applyTransform = useCallback(
    (apply: (t: SlideTransform) => SlideTransform) => {
      if (!activeSrc) return;
      setTransforms((prev) => ({ ...prev, [activeSrc]: apply(prev[activeSrc] ?? IDENTITY_TRANSFORM) }));
    },
    [activeSrc]
  );

  const plugins = [
    Zoom,
    Fullscreen,
    Download,
    ...(multiple ? [Slideshow] : []),
    ...(hasCaptions ? [Captions] : []),
    ...(multiple ? [Counter, Thumbnails] : []),
  ];

  return (
    <YetAnotherLightbox
      className={hasCaptions ? "site-lightbox site-lightbox--has-captions" : "site-lightbox"}
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={plugins}
      // Looping a 2-photo set makes the carousel duplicate slides (3 thumbnails
      // for 2 photos), so only loop larger sets.
      carousel={{ finite: slides.length <= 2, preload: 2 }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      animation={{
        fade: 320,
        swipe: 420,
        easing: {
          fade: "cubic-bezier(0.16, 1, 0.3, 1)",
          swipe: "cubic-bezier(0.16, 1, 0.3, 1)",
          navigation: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      }}
      zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true, doubleClickMaxStops: 2 }}
      slideshow={{ delay: 3200 }}
      captions={{ descriptionTextAlign: "center", descriptionMaxLines: 2, showToggle: hasCaptions }}
      toolbar={{
        buttons: [
          <ShareButton key="share" slide={slides[activeIndex]} />,
          <TransformButton key="rotate-left" kind="rotate-left" onApply={applyTransform} />,
          <TransformButton key="rotate-right" kind="rotate-right" onApply={applyTransform} />,
          <TransformButton key="flip-h" kind="flip-h" onApply={applyTransform} />,
          <TransformButton key="flip-v" kind="flip-v" onApply={applyTransform} />,
          ...(multiple ? ["slideshow" as const] : []),
          "fullscreen",
          "zoom",
          ...(hasCaptions ? ["captions" as const] : []),
          "download",
          "close",
        ],
      }}
      thumbnails={{ width: 88, height: 60, border: 2, borderRadius: 8, gap: 10, vignette: true }}
      on={{
        view: ({ index: i }) => {
          setActiveIndex(i);
          onIndexChange?.(i);
        },
      }}
      render={{
        ...(multiple ? {} : { buttonPrev: () => null, buttonNext: () => null }),
        slideContainer: ({ slide, children }) => {
          const t = transforms[slide.src] ?? IDENTITY_TRANSFORM;
          if (t.rotate === 0 && !t.flipH && !t.flipV) return <>{children}</>;
          return (
            <div
              className="site-lightbox-transform"
              style={{ transform: `rotate(${t.rotate}deg) scaleX(${t.flipH ? -1 : 1}) scaleY(${t.flipV ? -1 : 1})` }}
            >
              {children}
            </div>
          );
        },
        controls: () => (
          <>
            <div className="site-lightbox-topbar" />
            {multiple && hasMotion() ? (
              <p
                key={open ? "hint-open" : "hint-closed"}
                className="site-lightbox-hint pointer-events-none absolute left-1/2 top-14 z-10 hidden -translate-x-1/2 rounded-full bg-plate-raised/80 px-3 py-1.5 text-xs text-plate-ink-muted backdrop-blur-sm sm:block"
              >
                Arrow keys or swipe to browse · Esc to close
              </p>
            ) : null}
          </>
        ),
      }}
    />
  );
};
