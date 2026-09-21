import React from "react";
import { ArrowRight } from "lucide-react";
import { speciesDiscoveries } from "@/data/species";
import { getConservationCategory, getSpeciesThumb } from "@/lib/species";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card, CardBody, CardTitle, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

export const Species: React.FC = () => {
  return (
    <SectionShell
      id="species"
      label="New species"
      title="Every discovery, at a glance"
      lede="The same eight specimen sheets from the field notebook above, laid out for quick scanning. The plant gallery has these alongside every other plant documented on the site, filterable by family, source, habit, region or conservation status."
      cta={
        <Button href="/plant-gallery" variant="secondary" iconRight={<ArrowRight className="h-4 w-4" />}>
          Browse the full plant gallery
        </Button>
      }
    >
      {/* A quiet, continuously scrolling run of the full binomial set — a
          herbarium label strip, not a carousel. `[--duration]`/`[--gap]`
          tune Marquee's own CSS vars (see globals.css / tailwind.config.js
          for the v3-safe keyframes); the mask fades both edges instead of
          hard-cropping mid-name. */}
      <div className="mb-8 border-y border-line py-3 [mask-image:linear-gradient(to_right,transparent,black_6rem,black_calc(100%-6rem),transparent)] sm:mb-10">
        <Marquee pauseOnHover className="[--duration:70s] [--gap:2.5rem]">
          {speciesDiscoveries.map((sp) => (
            <span key={sp.id} className="flex shrink-0 items-baseline gap-2">
              <span className="font-display text-sm italic text-ink">{sp.scientificName}</span>
              <span className="text-line-strong">·</span>
              <span className="text-xs text-ink-muted">{sp.authority}</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div data-reveal-group className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {speciesDiscoveries.map((sp) => (
          <Card
            key={sp.id}
            data-reveal-item
            data-reveal
            style={{ ["--reveal-y" as string]: "12px" }}
            href={`/plant-gallery/${sp.id}`}
            media={{
              src: getSpeciesThumb(sp.imageCard),
              alt: `Habitat of ${sp.scientificName}`,
              sizes: "(max-width: 640px) 50vw, 25vw",
              aspect: "4/5",
              label: (
                <Badge tone="neutral" mono size="sm" className="border-0 bg-transparent p-0">
                  {sp.year}
                </Badge>
              )
            }}
          >
            <CardBody className="p-3">
              <CardTitle italic>{sp.scientificName}</CardTitle>
              <CardFooter className="pt-2">
                <Badge tone="annotation">{getConservationCategory(sp.conservationStatus)}</Badge>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
};
