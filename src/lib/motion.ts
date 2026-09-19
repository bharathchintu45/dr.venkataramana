import { useSyncExternalStore } from "react";

/**
 * Shared motion tokens. Mirrors the CSS custom properties in globals.css
 * (--dur-*, --ease-*) so GSAP timelines and CSS transitions never drift
 * out of sync with each other.
 */
export const duration = {
  instant: 0.12,
  fast: 0.18,
  base: 0.28,
  slow: 0.42,
  plate: 0.7,
} as const;

export const ease = {
  enter: "cubic-bezier(0.16, 1, 0.3, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
  standard: "cubic-bezier(0.2, 0, 0, 1)",
} as const;

export const stagger = {
  tight: 0.045,
  base: 0.07,
  loose: 0.12,
} as const;

export const distance = {
  sm: 12,
  md: 18,
  lg: 32,
} as const;

const REDUCE = "(prefers-reduced-motion: reduce)";

/**
 * True when animation is allowed: JS is running (tautological here — this
 * only ever runs client-side) and the visitor hasn't asked for reduced
 * motion.
 *
 * Reads the media query directly rather than the `has-motion` class the
 * pre-hydration script sets. The class remains the source of truth for
 * the CSS-only gating in globals.css, but it is NOT safe to read from JS:
 * a hydration mismatch at the document root makes React re-render the
 * entire root (error #423), which rewrites <html>'s className from the
 * JSX in layout.tsx — wiping `has-motion` right back off. That is exactly
 * what was happening on the deployed site, where the host injects markup
 * into <head>. The media query can't be clobbered that way.
 */
export function hasMotion(): boolean {
  if (typeof window === "undefined") return false;
  return !window.matchMedia(REDUCE).matches;
}

const subscribeToReducedMotion = (onChange: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/**
 * Hook form of `hasMotion()`, for components that switch their entire
 * rendered subtree on it (HeroFlight's static/animated split, Sketchbook's
 * carousel/book split) rather than just reading it once inline.
 *
 * `useSyncExternalStore`, not `useState` + `useEffect`: its
 * `getServerSnapshot` argument is React's documented mechanism for "this
 * value legitimately differs between server and client, and the client
 * value should apply as soon as it's hydrated" (see
 * react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering).
 * React re-checks the snapshot as part of its own commit cycle rather
 * than through a separately scheduled effect — which matters on hosts
 * that inject markup into <head> (observed on Netlify's default output):
 * that injection forces a hydration mismatch at the document root, and
 * past that point a `useEffect`-driven state flip was measured to never
 * fire at all, leaving the component stuck on its static fallback.
 *
 * Subscribing also means an OS-level reduced-motion change now takes
 * effect live, which the old class-reading version could never do.
 */
export function useHasMotion(): boolean {
  return useSyncExternalStore(subscribeToReducedMotion, hasMotion, () => false);
}
