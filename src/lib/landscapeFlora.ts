import { landscapeFlora, LandscapeFloraRecord } from "@/data/landscapeFlora";
import { collectionNames, collectionLabel } from "@/data/landscapeCollections";

export { collectionLabel };

export function getLandscapeFloraById(id: string): LandscapeFloraRecord | undefined {
  return landscapeFlora.find((r) => r.id === id);
}

export function getAllLandscapeFloraIds(): string[] {
  return landscapeFlora.map((r) => r.id);
}

export function landscapeCollectionNames(ids: string[]): { id: string; title: string }[] {
  return collectionNames(ids);
}

/** Previous/next record alphabetically by scientific name — used for the
 *  detail page's browse links. Wraps around at either end. */
export function getLandscapeFloraNeighbours(id: string): { prev: LandscapeFloraRecord; next: LandscapeFloraRecord } {
  const sorted = [...landscapeFlora].sort((a, b) => a.scientificName.localeCompare(b.scientificName));
  const index = sorted.findIndex((r) => r.id === id);
  const prevIndex = (index - 1 + sorted.length) % sorted.length;
  const nextIndex = (index + 1) % sorted.length;
  return { prev: sorted[prevIndex], next: sorted[nextIndex] };
}
