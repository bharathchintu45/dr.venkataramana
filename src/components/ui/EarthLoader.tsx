import React from "react";
import { cn } from "@/lib/cn";

/**
 * "Earth" loader — from Uiverse.io by Novaxlo
 * (https://uiverse.io/Novaxlo/rotten-lionfish-4). The CSS/animation is
 * theirs; the continent artwork below is hand-drawn, not theirs — the
 * page's SVG markup isn't published in its readable source (only the CSS
 * is), so these are original blob shapes built to the same layout the
 * animation expects (two horizontally-scrolling landmass "bands", each
 * duplicated once at the top of the globe and once at the bottom). Swap
 * `<ContinentBandA>`/`<ContinentBandB>` for the originals if you get hold
 * of them.
 *
 * Pure CSS/SVG, no hooks — safe to render from a Server Component (see
 * `app/loading.tsx`). Sized in `em`, so a wrapper's `font-size` (a
 * Tailwind `text-*` class) scales the whole globe up or down. Respects
 * `prefers-reduced-motion` automatically via the sitewide override in
 * `globals.css` — no extra work needed here.
 */
interface EarthLoaderProps {
  className?: string;
  /** Accessible name for the status region. */
  label?: string;
}

/* viewBox is deliberately taller than wide-strip (300x200, not 300x100):
   `.earth-loader svg` is `width: 7em; height: auto`, and the `top:-3em`/
   `bottom:-2em` offsets in globals.css that pull each band to the edge of
   the circle were sized assuming a band tall enough to still reach a couple
   `em` into the 7.5em globe after that offset. A flatter/shorter viewBox
   leaves the whole band's overlap with the circle down to a sliver. */
const ContinentBandA: React.FC = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      fill="var(--landcolor)"
      d="M20,120 C0,90 30,50 70,55 C100,30 150,55 140,95 C175,105 165,155 120,150 C95,180 45,170 40,140 C15,150 5,135 20,120 Z"
    />
    <path
      fill="var(--landcolor)"
      d="M190,100 C180,65 220,40 255,55 C290,35 300,80 280,105 C300,125 280,165 240,155 C215,180 175,160 180,125 C160,115 175,95 190,100 Z"
    />
  </svg>
);

const ContinentBandB: React.FC = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      fill="var(--landcolor)"
      d="M35,130 C10,110 15,65 60,60 C80,25 140,30 145,65 C185,60 200,105 165,130 C160,165 100,175 80,150 C55,170 25,155 35,130 Z"
    />
    <path
      fill="var(--landcolor)"
      d="M210,70 C200,35 255,10 285,35 C300,60 290,100 255,105 C260,145 210,165 185,135 C165,150 170,105 195,95 C185,80 195,65 210,70 Z"
    />
  </svg>
);

export const EarthLoader: React.FC<EarthLoaderProps> = ({ className, label = "Loading" }) => (
  <div className={cn("earth-loader", className)} role="status" aria-label={label}>
    <ContinentBandA />
    <ContinentBandA />
    <ContinentBandB />
    <ContinentBandB />
  </div>
);
