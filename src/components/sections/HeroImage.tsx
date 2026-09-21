import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";

/**
 * A plain static-image alternative to the scroll-scrubbed HeroFlight
 * (HeroFlight.tsx) — swapped in via app/page.tsx. HeroFlight itself is
 * untouched and still fully working; switching back is just swapping which
 * of the two components page.tsx renders, nothing was deleted.
 *
 * Same overlay treatment (scrim + name/tagline) and the same 70svh height
 * as HeroFlight's own no-motion fallback (StaticFlight in HeroFlight.tsx),
 * so the rest of the homepage's spacing doesn't shift either way.
 */
export const HeroImage: React.FC = () => (
  <section className="hero-flight relative w-full overflow-hidden bg-plate text-plate-ink" style={{ height: "70svh", minHeight: 420 }}>
    <Image
      src="/images/hero/tranquil-forested-coastal-cove.webp"
      alt="A tranquil forested coastal cove"
      fill
      sizes="100vw"
      priority
      className="object-cover"
    />
    <div className="hero-flight__scrim" aria-hidden />
    <div className="hero-flight__overlay">
      <p className="font-display text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05]">{profileData.name}</p>
      <p className="mt-3 text-sm font-medium tracking-[0.08em] text-plate-ink-muted sm:text-base">{profileData.tagline}</p>
    </div>
  </section>
);
