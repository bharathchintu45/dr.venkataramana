import { SpeciesDiscovery } from "@/data/species";
import { getConservationCategory, getSpeciesThumb } from "@/lib/species";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PlantCardProps {
  species: SpeciesDiscovery;
}

export const PlantCard: React.FC<PlantCardProps> = ({ species }) => {
  return (
    <Card
      href={`/plant-gallery/${species.id}`}
      media={{ src: getSpeciesThumb(species.imageCard), alt: `Habitat of ${species.scientificName}`, sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw", aspect: "3/4" }}
    >
      <div className="p-3">
        <h2 className="font-display text-sm italic leading-tight text-ink">{species.scientificName}</h2>
        <div className="mt-1 font-mono text-xs font-semibold text-ink-muted">{species.year}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge tone="neutral">{species.growthHabit}</Badge>
          <Badge tone="annotation">{getConservationCategory(species.conservationStatus)}</Badge>
        </div>
      </div>
    </Card>
  );
};
