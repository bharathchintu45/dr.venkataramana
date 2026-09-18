"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Tracks a media query via `useSyncExternalStore` rather than the more
 * obvious `useState` + `useEffect(() => matchMedia(...).addEventListener...)`
 * pattern. That distinction matters here, not just stylistically: on hosts
 * that inject extra markup into <head> (observed on Netlify's default
 * output), the resulting hydration mismatch at the document root was found
 * to permanently stop a `useEffect`-driven state update from ever firing —
 * `useSyncExternalStore`'s snapshot is instead re-checked as part of
 * React's own commit cycle, and was verified to keep working under that
 * exact failure mode. See useHasMotion in src/lib/motion.ts, which the
 * same investigation produced.
 *
 * Returns `fallback` (default false) until mounted client-side — this
 * only ever gets called from components that are already client-only past
 * that point (e.g. Sketchbook's book, which mounts after its own
 * client-only gate), so the SSR/hydration value is never actually shown.
 */
export function useMediaQuery(query: string, fallback = false): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query]
  );
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return fallback;
    return window.matchMedia(query).matches;
  }, [query, fallback]);

  return useSyncExternalStore(subscribe, getSnapshot, () => fallback);
}
