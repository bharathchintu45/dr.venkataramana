import { Sparkles } from "lucide-react";
import { PlantGalleryEntry } from "@/lib/plantGallery";
import { Card, CardBody, CardTitle, CardMeta, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PlantCardProps {
  entry: PlantGalleryEntry;
}

/** Renders any of the three plant catalogs the gallery merges — a new
 *  species discovery (year + habit + conservation badge), a sacred-grove
 *  flora record (family + which grove(s)), or a landscape/urban-forestry
 *  catalog record (family + which collection(s) + leaf type) — on one
 *  shared card shell so a mixed grid still reads as one consistent gallery.
 *  The "New species" eyebrow is what keeps the 8 discoveries from
 *  disappearing into the field/landscape records. */
export const PlantCard: React.FC<PlantCardProps> = ({ entry }) => {
  const isDiscovery = entry.source === "discovery";
  const isLandscape = entry.source === "landscape-flora";

  return (
    <Card
      href={entry.href}
      media={{
        src: entry.thumbSrc,
        alt: entry.thumbAlt,
        sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw",
        aspect: "4/3",
        label: isDiscovery ? (
          <Badge tone="accent" size="sm" icon={<Sparkles className="h-3 w-3" aria-hidden />} className="border-0 bg-transparent p-0">
            New species
          </Badge>
        ) : (
          entry.family
        )
      }}
    >
      <CardBody className="p-3">
        <CardTitle as="h2" italic>
          {entry.scientificName}
        </CardTitle>
        {isDiscovery ? (
          <>
            <CardMeta>{entry.growthHabit}</CardMeta>
            <CardFooter className="pt-2">
              <Badge tone="annotation">{entry.conservationCategory}</Badge>
            </CardFooter>
          </>
        ) : isLandscape ? (
          <>
            <CardMeta className="line-clamp-2">{entry.collectionLabel}</CardMeta>
            {entry.leafType && (
              <CardFooter className="pt-2">
                <Badge tone="annotation">{entry.leafType === "narrow" ? "Narrow-leaved" : "Broad-leaved"}</Badge>
              </CardFooter>
            )}
          </>
        ) : (
          <CardMeta className="line-clamp-2">Recorded in {entry.groveLabel}</CardMeta>
        )}
      </CardBody>
    </Card>
  );
};
