"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { lockScroll, unlockScroll } from "@/lib/smoothScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";

type DialogSize = "sm" | "md" | "lg" | "xl";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  size?: DialogSize;
  footer?: React.ReactNode;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

const SIZE_CLASS: Record<DialogSize, string> = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

/**
 * The one overlay primitive for the whole site: portalled to <body>,
 * traps focus, closes on Escape or backdrop click, locks page scroll
 * (refcounted — safe alongside a nested Lightbox), and plays a real
 * exit animation before unmounting.
 */
export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  size = "lg",
  footer,
  initialFocusRef,
  children,
  className,
  bodyClassName,
}) => {
  const [mounted, setMounted] = useState(false);
  const [presence, setPresence] = useState<"closed" | "open" | "closing">("closed");
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setPresence("open");
      lockScroll();
      return () => unlockScroll();
    }
    setPresence((p) => (p === "open" ? "closing" : "closed"));
  }, [open]);

  useEffect(() => {
    if (presence !== "closing") return;
    const t = window.setTimeout(() => setPresence("closed"), 180);
    return () => window.clearTimeout(t);
  }, [presence]);

  useFocusTrap(presence !== "closed", panelRef, initialFocusRef);

  useEffect(() => {
    if (presence === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Capture phase, so a Lightbox opened from inside this dialog
        // consumes its own Escape first and doesn't also close this one.
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [presence, onClose]);

  if (!mounted || presence === "closed") return null;

  const isClosing = presence === "closing";

  const dialog = (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={cn(
          "absolute inset-0 bg-plate/70 backdrop-blur-sm transition-opacity duration-fast",
          isClosing ? "opacity-0" : "opacity-100"
        )}
        aria-hidden
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        tabIndex={-1}
        data-lenis-prevent
        className={cn(
          "relative flex max-h-[88vh] w-full flex-col overflow-hidden rounded-lg border border-line bg-paper-raised text-ink shadow-raised",
          SIZE_CLASS[size],
          isClosing ? "animate-dialog-out" : "animate-dialog-in",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div>
            <h2 id={titleId} className="font-display text-lg text-ink sm:text-xl">
              {title}
            </h2>
            {description && (
              <p id={descId} className="mt-0.5 text-sm text-ink-secondary">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="focus-ring shrink-0 rounded-full p-2 text-ink-muted transition-colors hover:bg-herbarium-tint hover:text-herbarium-deep"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className={cn("flex-1 overflow-y-auto px-5 py-5 sm:px-6", bodyClassName)} data-lenis-prevent>
          {children}
        </div>
        {footer && <div className="border-t border-line px-5 py-4 sm:px-6">{footer}</div>}
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};
