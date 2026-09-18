import { stagger as staggerTokens } from "./motion";

const REVEAL_SELECTOR = "[data-reveal], [data-reveal-scale]";

/**
 * Scroll-reveal engine driven entirely by data attributes, never by
 * presentational class names — renaming a Tailwind class can no longer
 * silently kill an animation.
 *
 * `data-reveal` / `data-reveal-scale` — the animated unit; its start state
 *   lives in CSS behind `html.has-motion` (see globals.css), so this script
 *   only ever ADDS `.is-revealed`. It never sets an inline hidden state,
 *   which means a JS failure, or reduced motion, leaves content visible.
 * `data-reveal-group` (+ `data-reveal-stagger="tight|base|loose"`) — a
 *   container whose direct `[data-reveal-item]` children get a staggered
 *   transition-delay computed here, so a card grid enters as a sequence.
 *
 * Reveals fire once (an element is unobserved as soon as it is revealed) —
 * scrolling back up never re-hides content.
 */
export function initScrollReveal(root: ParentNode = document): () => void {
  if (typeof window === "undefined") return () => {};

  const revealed = new WeakSet<Element>();

  const reveal = (el: Element) => {
    if (revealed.has(el)) return;
    revealed.add(el);
    el.classList.add("is-revealed");
  };

  root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>(":scope > [data-reveal-item]"));
    const key = group.dataset.revealStagger as keyof typeof staggerTokens | undefined;
    const gap = staggerTokens[key ?? "base"] ?? staggerTokens.base;
    items.slice(0, 14).forEach((item, i) => {
      item.style.transitionDelay = `${(i * gap).toFixed(3)}s`;
    });
  });

  const targets = Array.from(root.querySelectorAll(REVEAL_SELECTOR));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));

  // Failsafe: a layout shift from a late image, or an element that never
  // crosses the threshold (very short viewport), must not stay invisible.
  const failsafe = window.setTimeout(() => {
    targets.forEach((el) => reveal(el));
  }, 3000);

  return () => {
    observer.disconnect();
    window.clearTimeout(failsafe);
  };
}
