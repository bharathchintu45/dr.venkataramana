import { speciesDiscoveries, SpeciesDiscovery } from "@/data/species";
import { thumbPath } from "./thumbs";

export function getSpeciesBySlug(slug: string): SpeciesDiscovery | undefined {
  return speciesDiscoveries.find((s) => s.id === slug);
}

export function getAllSpeciesSlugs(): string[] {
  return speciesDiscoveries.map((s) => s.id);
}

export function getSpeciesImages(species: SpeciesDiscovery): string[] {
  return species.additionalImages?.length ? species.additionalImages : [species.imageCard];
}

export function getConservationCategory(status: string): string {
  return status.split(" (")[0].trim();
}

/** The 640px copy of a species' `imageCard` (see `thumbPath`). */
export function getSpeciesThumb(imagePath: string): string {
  return thumbPath(imagePath);
}

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function getFamilyOptions(): string[] {
  return uniqueSorted(speciesDiscoveries.map((s) => s.family));
}

export function getGrowthHabitOptions(): string[] {
  return uniqueSorted(speciesDiscoveries.map((s) => s.growthHabit));
}

export function getRegionOptions(): string[] {
  return uniqueSorted(speciesDiscoveries.map((s) => s.region));
}

export function getConservationCategoryOptions(): string[] {
  return uniqueSorted(speciesDiscoveries.map((s) => getConservationCategory(s.conservationStatus)));
}
