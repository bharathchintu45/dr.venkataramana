"use client";

import React, { useState } from "react";
import { ArrowRight, Play, ExternalLink } from "lucide-react";
import { fieldworkVideos, FieldExpedition } from "@/data/fieldwork";
import { thumbPath } from "@/lib/thumbs";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card, CardTitle, CardMeta } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Prose } from "@/components/ui/Prose";

export const FieldPhotography: React.FC = () => {
  const [active, setActive] = useState<FieldExpedition | null>(null);

  return (
    <SectionShell
      id="field"
      tone="plate"
      label="Field & photography"
      title="Expeditions across two coastlines"
      lede="Field surveys spanning the Eastern Ghats, the Andaman & Nicobar Islands, and the sacred groves of Telangana, documented in over 250 photographs."
      background={{ src: "/images/expeditions/dsc-8456.webp", priority: false }}
      cta={
        <Button href="/photo-gallery" variant="secondary" iconRight={<ArrowRight className="h-4 w-4" />} className="border-plate-ink/30 text-plate-ink hover:border-plate-ink hover:text-plate-ink">
          Browse the photo gallery
        </Button>
      }
    >
      <div data-reveal-group className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fieldworkVideos.map((video) => (
          <Card
            key={video.id}
            as="div"
            data-reveal-item
            data-reveal
            style={{ ["--reveal-y" as string]: "12px" }}
            tone="plain"
            interactive
            onSelect={() => setActive(video)}
            // Solid, not translucent: contrast here can't depend on how bright
            // the poster photo underneath happens to be. A verification pass
            // measured a translucent card's worst-case contrast swinging with
            // the photo behind it (as low as 1.3:1) even after raising the
            // opacity — the fix is to stop depending on the photo at all.
            className="border border-plate-ink/15 bg-plate-raised text-plate-ink"
            media={{ src: thumbPath(video.posterImage), alt: video.title, sizes: "(max-width: 640px) 100vw, 50vw", aspect: "16/9" }}
          >
            <div className="flex items-start gap-3 p-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-plate-ink/30">
                <Play className="h-3.5 w-3.5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <CardTitle as="h3" className="min-h-[2.5rem] font-sans text-sm font-medium text-plate-ink group-hover:text-plate-ink">
                  {video.title}
                </CardTitle>
                <CardMeta className="line-clamp-2 text-plate-ink-muted">{video.location}</CardMeta>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={active !== null} onClose={() => setActive(null)} title={active?.title ?? ""} description={active?.location} size="md">
        {active && (
          <div className="space-y-4">
            <Prose size="sm">{active.description}</Prose>
            <ul className="space-y-1.5">
              {active.highlights.map((h) => (
                <li key={h} className="text-sm text-ink-secondary">
                  • {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {active.videoUrl && (
                <Button href={active.videoUrl} target="_blank" rel="noreferrer" variant="primary" iconRight={<ExternalLink className="h-4 w-4" />}>
                  Watch on YouTube
                </Button>
              )}
              {active.galleryHref && (
                <Button href={active.galleryHref} variant="secondary">
                  View the sacred groves gallery
                </Button>
              )}
            </div>
          </div>
        )}
      </Dialog>
    </SectionShell>
  );
};
