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
