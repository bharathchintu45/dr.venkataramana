"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { doctoralScholars, thesisCoverSrc, thesisCoverThumb } from "@/data/teaching";
import { Badge } from "@/components/ui/Badge";
import { Lightbox, type LightboxImage } from "@/components/common/Lightbox";

/**
 * The doctoral-supervision list on /about, extracted into its own client
 * component only because the thesis-cover scans need Lightbox state — the
 * rest of the page stays a Server Component for its `metadata` export.
 * Scans live at thesisCoverSrc/thesisCoverThumb(id); a scholar without
 * `hasCoverScan` keeps the plain icon-only row instead.
 */
export const DoctoralScholarsList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const withScans = useMemo(() => doctoralScholars.filter((s) => s.hasCoverScan), []);
  const lightboxImages: LightboxImage[] = useMemo(
    () =>
      withScans.map((s) => ({
        src: thesisCoverSrc(s.id),
        thumb: thesisCoverThumb(s.id),
        alt: `Bound thesis cover, "${s.thesisTitle}" by ${s.name}`,
        title: s.name,
        description: s.thesisTitle
      })),
    [withScans]
  );
  const activeIndex = activeId ? withScans.findIndex((s) => s.id === activeId) : -1;

  return (
    <>
      <ul className="mt-6 space-y-5 divide-y divide-line border-t border-line">
        {doctoralScholars.map((s) => (
          <li key={s.id} className="flex items-start gap-4 pt-5 first:pt-0">
            {s.hasCoverScan ? (
              <button
                type="button"
                onClick={() => setActiveId(s.id)}
                aria-label={`View the bound thesis cover for ${s.name}, "${s.thesisTitle}"`}
                className="focus-ring group relative aspect-[3/4] w-14 shrink-0 overflow-hidden rounded border border-line bg-plate shadow-card transition-transform duration-base hover:-translate-y-0.5 sm:w-16"
              >
                <Image
                  src={thesisCoverThumb(s.id)}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-slow ease-enter group-hover:scale-[1.05]"
                />
              </button>
            ) : (
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-line bg-herbarium-tint sm:h-16 sm:w-16">
                <GraduationCap className="h-6 w-6 text-herbarium" aria-hidden />
              </span>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-ink">{s.name}</p>
                <Badge tone={s.status === "Awarded" ? "accent" : "outline"}>
                  {s.status} {s.yearAwarded}
                </Badge>
              </div>
              <p className="mt-1.5 text-sm text-ink-secondary">{s.thesisTitle}</p>
              <p className="mt-1 text-xs text-ink-muted">{s.area}</p>
            </div>
          </li>
        ))}
      </ul>

      <Lightbox images={lightboxImages} open={activeIndex >= 0} index={Math.max(activeIndex, 0)} onClose={() => setActiveId(null)} />
    </>
  );
};
