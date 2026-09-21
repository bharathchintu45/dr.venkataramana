"use client";

import React, { useState } from "react";
import { MapPin, BookMarked, Sparkles } from "lucide-react";
import { researchAreas, ResearchArea } from "@/data/research";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card, CardBody, CardTitle, CardText } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { Prose } from "@/components/ui/Prose";

export const Research: React.FC = () => {
  const [active, setActive] = useState<ResearchArea | null>(null);

  return (
    <SectionShell
      id="research"
      label="Research"
      title="Four research programmes"
      lede="From field taxonomy to conservation policy: the threads that connect two decades of botanical fieldwork."
    >
      <div data-reveal-group className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {researchAreas.map((area) => (
          <Card
            key={area.id}
            data-reveal-item
            data-reveal
            style={{ ["--reveal-y" as string]: "14px" }}
            onSelect={() => setActive(area)}
            media={{ src: area.imagePath, alt: area.title, sizes: "(max-width: 640px) 100vw, 50vw", aspect: "16/9" }}
          >
            <CardBody>
              <CardTitle as="h3" className="min-h-[3.25rem] text-lg">
                {area.title}
              </CardTitle>
              <CardText className="line-clamp-4 flex-1 text-sm leading-relaxed">{area.shortDesc}</CardText>
              <span className="mt-3 inline-block text-xs font-semibold text-herbarium">Read more →</span>
            </CardBody>
          </Card>
        ))}
      </div>

      <Dialog
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        description={active?.impactSummary}
        size="lg"
      >
        {active && (
          <div className="space-y-6">
            <Prose>{active.fullDesc}</Prose>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Sparkles className="h-4 w-4 text-herbarium" aria-hidden /> Key topics
              </h4>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {active.keyTopics.map((t) => (
                  <li key={t} className="text-sm text-ink-secondary">
                    • {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <MapPin className="h-4 w-4 text-herbarium" aria-hidden /> Field locations
              </h4>
              <ul className="mt-2 space-y-1">
                {active.fieldLocations.map((l) => (
                  <li key={l} className="text-sm text-ink-secondary">
                    • {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <BookMarked className="h-4 w-4 text-herbarium" aria-hidden /> Key publications
              </h4>
              <ul className="mt-2 space-y-1">
                {active.keyPublications.map((p) => (
                  <li key={p} className="text-sm italic text-ink-secondary">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Dialog>
    </SectionShell>
  );
};
