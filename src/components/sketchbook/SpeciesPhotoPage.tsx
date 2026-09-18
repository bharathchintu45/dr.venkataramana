import React from "react";
import Image from "next/image";
import type { SpeciesDiscovery } from "@/data/species";
import { getSpeciesThumb } from "@/lib/species";

interface SpeciesPhotoPageProps {
  species: SpeciesDiscovery;
  sheetNumber: number;
  priority?: boolean;
}

/** The left-hand page of a species spread — a habitat photo bled to the
 *  edge with a herbarium determination slip overlaid. */
export const SpeciesPhotoPage: React.FC<SpeciesPhotoPageProps> = ({ species, sheetNumber, priority }) => (
  <div className="relative h-full w-full bg-plate">
    <Image
      src={getSpeciesThumb(species.imageCard)}
      alt={`Habitat of ${species.scientificName}`}
      fill
      sizes="(max-width: 900px) 90vw, 480px"
      priority={priority}
      className="object-cover"
    />
    <div className="absolute inset-x-3 bottom-3 rounded-sm border border-line bg-paper-raised px-3 py-2 sm:inset-x-4 sm:bottom-4">
      <p className="stamp text-herbarium">Herbarium sheet · No. {String(sheetNumber).padStart(3, "0")}</p>
      <p className="mt-0.5 text-xs text-ink-muted">
        {species.family} · {species.year}
      </p>
    </div>
  </div>
);
