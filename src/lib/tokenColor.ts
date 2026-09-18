/**
 * Resolve a design token (a `:root` custom property holding a space-
 * separated "R G B" triplet, e.g. `--annotation`) into a real CSS color
 * string. Needed wherever a library wants an actual color value rather
 * than a Tailwind class — rough-notation's `color` option, an inline
 * `style`, or a canvas fill — so those integrations still read from the
 * token system instead of hardcoding a hex value.
 *
 * Client-only: returns "transparent" during SSR, since there is no
 * document to read the computed style from.
 */
export function tokenColor(name: string, alpha = 1): string {
  if (typeof document === "undefined") return "transparent";
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!raw) return "transparent";
  return alpha === 1 ? `rgb(${raw})` : `rgb(${raw} / ${alpha})`;
}
