"use client";

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollToSection(target: string | HTMLElement, offset: number = -68) {
  if (instance) {
    instance.scrollTo(target, {
      offset,
      duration: 1.6,
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

