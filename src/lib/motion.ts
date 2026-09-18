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

/** True only when the reduced-motion gate class is present (see layout.tsx). */
export function hasMotion(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("has-motion");
}

const noopSubscribe = () => () => {};

/**
 * Hook form of `hasMotion()`, for components that switch their entire
 * rendered subtree on it (HeroFlight's static/animated split, Sketchbook's
 * carousel/book split) rather than just reading it once inline.
 *
 * `useSyncExternalStore`, not `useState` + `useEffect`: the class is set
 * once by the pre-hydration script and never changes again, so there's
 * nothing to "subscribe" to — but critically, its `getServerSnapshot`
 * argument is exactly React's documented mechanism for "this value legitimately
 * differs between server and client, and the client value should apply
 * immediately once hydrated" (see react.dev/reference/react/useSyncExternalStore
 * #adding-support-for-server-rendering). React re-checks this snapshot as
 * part of its own commit cycle, not via a separately scheduled effect —
 * which matters on hosts that inject extra markup into <head> (observed on
 * Netlify's default output): that injection creates a hydration mismatch
 * at the document root, and past that point a plain `useEffect`-driven
 * state flip was found to never fire at all, leaving the component stuck
 * on its static fallback forever. This hook was verified to keep working
 * under that exact failure mode where the effect-based version did not.
 */
export function useHasMotion(): boolean {
  return useSyncExternalStore(noopSubscribe, hasMotion, () => false);
}
