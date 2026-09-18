"use client";

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}

export function scrollToSection(target: string | HTMLElement, offset: number = -84) {
  if (instance) {
    instance.scrollTo(target, {
      offset,
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (el) {
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// ---------------------------------------------------------------------
// Scroll lock, refcounted. Both the Dialog primitive and the Lightbox can
// be open at once (a lightbox launched from inside a modal), so a naive
// stop()/start() pair breaks: closing the inner one would re-enable page
// scroll behind the still-open outer one. Every caller must pair
// lockScroll() with exactly one unlockScroll().
// ---------------------------------------------------------------------
let lockCount = 0;
let previousBodyOverflow = "";
let previousBodyPaddingRight = "";

export function lockScroll() {
  lockCount += 1;
  if (lockCount !== 1) return;

  instance?.stop();

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  previousBodyOverflow = document.body.style.overflow;
  previousBodyPaddingRight = document.body.style.paddingRight;
  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount !== 0) return;

  instance?.start();
  document.body.style.overflow = previousBodyOverflow;
  document.body.style.paddingRight = previousBodyPaddingRight;
}
