"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      // ---- Depth parallax on every full-bleed forest background ----
      const allSections = gsap.utils.toArray<HTMLElement>("main > section");
      allSections.forEach((section) => {
        const bgLayer = section.querySelector<HTMLElement>(
          ":scope > div.absolute.inset-0.z-0"
        );
        if (!bgLayer) return;
        gsap.set(bgLayer, { scale: 1.16, transformOrigin: "50% 50%" });
        gsap.to(bgLayer, {
          yPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        });
      });

      // ---- Heading / grid / CTA reveals for every walked-into section ----
      const journeySections = gsap.utils.toArray<HTMLElement>(
        "main > section:not(#hero)"
      );
      journeySections.forEach((section) => {
        const heading = section.querySelector<HTMLElement>("h2");
        if (heading) {
          const revealTarget = heading.parentElement ?? heading;
          gsap.from(revealTarget, {
            opacity: 0,
            y: 44,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          });
        }

        const cardGrids = section.querySelectorAll<HTMLElement>(
          ".grid:not([class*='lg:grid-cols-12'])"
        );
        cardGrids.forEach((grid) => {
          const children = Array.from(grid.children) as HTMLElement[];
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 32,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          });
        });

        section
          .querySelectorAll<HTMLElement>(".shadow-botanical-glow")
          .forEach((cta) => {
            gsap.from(cta, {
              opacity: 0,
              y: 18,
              scale: 0.94,
              duration: 0.55,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: cta,
                start: "top 94%",
                toggleActions: "play none none reverse"
              }
            });
          });
      });

      // ---- Footer settles into the clearing at the end of the walk ----
      gsap.from("footer", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      });

      // ---- Cinematic entrance: stepping into the forest on load ----
      const header = document.querySelector("header");
      const connectRail = document.querySelector(
        "aside[aria-label='Academic and Contact Links']"
      );
      const heroBlocks = gsap.utils.toArray<HTMLElement>(
        "#hero > div.relative.z-10"
      );

      const tl = gsap.timeline({ delay: 0.15 });
      if (header) {
        tl.from(header, { opacity: 0, y: -24, duration: 0.7, ease: "power2.out" }, 0);
      }
      if (heroBlocks.length) {
        tl.from(
          heroBlocks,
          { opacity: 0, y: 46, duration: 1.05, stagger: 0.25, ease: "power3.out" },
          0.25
        );
      }
      if (connectRail) {
        tl.from(
          connectRail,
          { opacity: 0, x: -18, duration: 0.7, ease: "power2.out" },
          0.6
        );
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const settleTimer = setTimeout(refresh, 1200);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(settleTimer);
      ctx.revert();
    };
  }, []);

  return null;
};
