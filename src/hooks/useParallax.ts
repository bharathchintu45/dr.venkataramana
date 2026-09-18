"use client";

import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";

/**
 * Gentle scroll parallax + scale on a single element, scoped to that
 * element only (no document-wide selector sweep). Used on the ~4 dark
 * "photo plate" sections, desktop only in effect (mobile gets a much
 * subtler version), and fully skipped under reduced motion.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ desktop: "(min-width: 768px)" }, (context) => {
        const isDesktop = Boolean((context.conditions as { desktop: boolean }).desktop);
        const yPercent = isDesktop ? 8 : 3;
        const scale = isDesktop ? 1.1 : 1.04;

        gsap.set(el, { scale, transformOrigin: "50% 50%" });
        const tween = gsap.to(el, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        return () => tween.scrollTrigger?.kill();
      });
      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, [ref, enabled]);
}
