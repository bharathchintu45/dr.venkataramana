"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sacredGroves, groveSrc, groveThumb } from "@/data/sacredGroves";
import { groveFlora } from "@/data/groveFlora";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardTitle, CardMeta, CardText, CardFooter } from "@/components/ui/Card";
import { Lightbox, type LightboxImage } from "@/components/common/Lightbox";

export const SacredGrovesView: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const totalPhotos = useMemo(() => sacredGroves.reduce((n, g) => n + g.photos.length, 0), []);
  const activeGrove = activeIndex !== null ? sacredGroves[activeIndex] : null;

  const floraCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const record of groveFlora) {
      for (const groveId of record.groves) {
        counts.set(groveId, (counts.get(groveId) ?? 0) + 1);
      }
    }
    return counts;
  }, []);

  const lightboxImages: LightboxImage[] = useMemo(
    () =>
      activeGrove
        ? activeGrove.photos.map((p) => ({
            src: groveSrc(activeGrove.id, p.file),
            thumb: groveThumb(activeGrove.id, p.file),
            width: p.width,
            height: p.height,
            alt: p.alt,
            title: activeGrove.name,
            description: p.alt
          }))
        : [],
    [activeGrove]
  );

  return (
    <div className="mx-auto w-full max-w-6xl">
      <BackLink href="/" label="Back to home" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">{sacredGroves.length} sacred groves surveyed</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Sacred groves of Telangana</h1>
        <p className="mt-2 text-base text-ink-secondary">
          Field photography from Dr. T. Narender&apos;s doctoral survey of plant diversity and conservation practices
          in Telangana&apos;s sacred groves, supervised by Dr. Ramana.
        </p>
        <Button href="/sacred-groves/flora" variant="secondary" size="sm" iconRight={<ArrowRight className="h-3.5 w-3.5" />} className="mt-4">
          Browse the flora index
        </Button>
      </div>

      <div data-reveal-group className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sacredGroves.map((grove) => {
          const floraCount = floraCounts.get(grove.id) ?? 0;
          const groveIndex = sacredGroves.indexOf(grove);
          return (
            <Card
              key={grove.id}
              data-reveal-item
              data-reveal
              style={{ ["--reveal-y" as string]: "10px" }}
              mediaAction={{
                onSelect: () => setActiveIndex(groveIndex),
                label: `View ${grove.photos.length} photos of ${grove.name}`
              }}
              media={{
                src: groveThumb(grove.id, grove.photos[0].file),
                alt: grove.photos[0].alt,
                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                aspect: "4/3",
                label: `${grove.photos.length} photos`
              }}
            >
              <CardBody>
                <CardTitle as="h2" className="min-h-0 font-sans text-sm font-medium">
                  {grove.name}
                </CardTitle>
                <CardMeta>{grove.place}</CardMeta>
                <CardText>{grove.description}</CardText>
                {floraCount > 0 && (
                  <CardFooter>
                    <Link
                      href={`/sacred-groves/flora?grove=${grove.id}`}
                      className="focus-ring touch-target relative group/link inline-flex items-center gap-1 text-xs font-semibold text-herbarium hover:text-herbarium-deep"
                    >
                      {floraCount} plants recorded
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" aria-hidden />
                    </Link>
                  </CardFooter>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-ink-muted">
        {totalPhotos} photographs © Dr. M. Venkat Ramana / Dr. T. Narender
      </p>

      <Lightbox images={lightboxImages} open={activeIndex !== null} onClose={() => setActiveIndex(null)} />
    </div>
  );
};
