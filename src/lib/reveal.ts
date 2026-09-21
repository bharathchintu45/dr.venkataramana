import { stagger as staggerTokens } from "./motion";

const REVEAL_SELECTOR = "[data-reveal], [data-reveal-scale]";
const FAILSAFE_MS = 3000;

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
 *
 * A MutationObserver keeps watching after the initial scan, so elements
 * added later WITHOUT a route change — a paginated "Load more" grid, a
 * filter widening its result set — still get observed and revealed. Without
 * it, a [data-reveal] node added this way starts hidden (per the CSS in
 * globals.css) and is never scanned again: it stays invisible forever while
 * remaining a real, clickable element underneath — exactly the "load more
 * shows empty space, but it's still clickable" bug this fixes.
 */
export function initScrollReveal(root: ParentNode = document): () => void {
  if (typeof window === "undefined") return () => {};

  const revealed = new WeakSet<Element>();

  const reveal = (el: Element) => {
    if (revealed.has(el)) return;
    revealed.add(el);
    el.classList.add("is-revealed");
    observer.unobserve(el);
  };

  const applyGroupStagger = (group: Element) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>(":scope > [data-reveal-item]"));
    const key = (group as HTMLElement).dataset.revealStagger as keyof typeof staggerTokens | undefined;
    const gap = staggerTokens[key ?? "base"] ?? staggerTokens.base;
    items.slice(0, 14).forEach((item, i) => {
      // Guarded so re-running this for a group that gained new items (see
      // the MutationObserver below) never resets the delay an
      // already-revealed item was given the first time it was seen.
      if (!item.style.transitionDelay) {
        item.style.transitionDelay = `${(i * gap).toFixed(3)}s`;
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  // Elements discovered after the initial scan don't share the batch
  // failsafe below, so each gets its own — a late element added far down
  // an already-scrolled-past page still resolves within 3s instead of
  // depending on the user scrolling it into view.
  const registerLateTarget = (el: Element) => {
    observer.observe(el);
    window.setTimeout(() => reveal(el), FAILSAFE_MS);
  };

  root.querySelectorAll<Element>("[data-reveal-group]").forEach(applyGroupStagger);

  const targets = Array.from(root.querySelectorAll(REVEAL_SELECTOR));
  targets.forEach((el) => observer.observe(el));

  // Failsafe: a layout shift from a late image, or an element that never
  // crosses the threshold (very short viewport), must not stay invisible.
  const failsafe = window.setTimeout(() => {
    targets.forEach((el) => reveal(el));
  }, FAILSAFE_MS);

  const mutationObserver = new MutationObserver((records) => {
    const groupsToRestagger = new Set<Element>();
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        const group = node.closest("[data-reveal-group]");
        if (group) groupsToRestagger.add(group);
        if (node.matches(REVEAL_SELECTOR)) registerLateTarget(node);
        node.querySelectorAll<Element>(REVEAL_SELECTOR).forEach(registerLateTarget);
      });
    }
    groupsToRestagger.forEach(applyGroupStagger);
  });
  mutationObserver.observe(root as Node, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
    window.clearTimeout(failsafe);
  };
}
