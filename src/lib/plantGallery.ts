// Unifies the three plant catalogs on the site into one browsable list for
// /plant-gallery: the 8 species Dr. Ramana discovered and described (full
// taxonomic write-ups, their own /plant-gallery/<id> page), the 392 plants
// recorded during the Telangana sacred-groves field survey (photos + name +
// family only, their own /sacred-groves/flora/<id> page), and the landscape/
// urban-forestry species catalog — ornamental & avenue trees, polythene-
// replacement species, tradable/economic species and windbreak species
// (photos + name + family + collection tags, their own
// /plant-gallery/collections/<id> page). Kept as plain data here rather than
// merged into any source file — speciesDiscoveries, groveFlora and
// landscapeFlora all stay exactly as they are, generated/maintained the way
// they already are.

import { speciesDiscoveries } from "@/data/species";
import { groveFlora, floraThumb } from "@/data/groveFlora";
import { landscapeFlora, landscapeFloraThumb } from "@/data/landscapeFlora";
import { getSpeciesThumb, getConservationCategory } from "@/lib/species";
import { groveLabel } from "@/lib/groveFlora";
import { collectionLabel } from "@/data/landscapeCollections";

export type PlantSource = "discovery" | "grove-flora" | "landscape-flora";

export interface PlantGalleryEntry {
  id: string;
  source: PlantSource;
  scientificName: string;
  localName?: string;
  family: string;
  href: string;
  thumbSrc: string;
  thumbAlt: string;
  /** Discovery-only. */
  year?: number;
  growthHabit?: string;
  conservationCategory?: string;
  /** Grove-flora-only. */
  groveLabel?: string;
  /** Landscape-flora-only. */
  collectionLabel?: string;
  leafType?: "narrow" | "broad";
}

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

const discoveryEntries: PlantGalleryEntry[] = speciesDiscoveries.map((sp) => ({
  id: sp.id,
  source: "discovery",
  scientificName: sp.scientificName,
  localName: sp.localName,
  family: sp.family,
  href: `/plant-gallery/${sp.id}`,
  thumbSrc: getSpeciesThumb(sp.imageCard),
  thumbAlt: `Habitat of ${sp.scientificName}`,
  year: sp.year,
  growthHabit: sp.growthHabit,
  conservationCategory: getConservationCategory(sp.conservationStatus)
}));

const groveFloraEntries: PlantGalleryEntry[] = groveFlora.map((r) => ({
  id: r.id,
  source: "grove-flora",
  scientificName: r.scientificName,
  family: r.family || "Unconfirmed",
  href: `/sacred-groves/flora/${r.id}`,
  thumbSrc: floraThumb(r.id, r.photos[0].file),
  thumbAlt: r.photos[0].alt,
  groveLabel: groveLabel(r.groves)
}));

const landscapeFloraEntries: PlantGalleryEntry[] = landscapeFlora.map((r) => ({
  id: r.id,
  source: "landscape-flora",
  scientificName: r.scientificName,
  localName: r.localName,
  family: r.family,
  href: `/plant-gallery/collections/${r.id}`,
  thumbSrc: landscapeFloraThumb(r.id, r.photos[0].file),
  thumbAlt: r.photos[0].alt,
  collectionLabel: collectionLabel(r.collections),
  leafType: r.leafType
}));

/** The 8 new-species discoveries first, so they lead the unsorted/default
 *  view — the filters below are what let a visitor narrow down from there. */
export const allPlantEntries: PlantGalleryEntry[] = [...discoveryEntries, ...groveFloraEntries, ...landscapeFloraEntries];

export function getPlantFamilyOptions(): string[] {
  return uniqueSorted(allPlantEntries.map((e) => e.family));
}
