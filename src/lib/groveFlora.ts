import { groveFlora, GroveFloraRecord } from "@/data/groveFlora";
import { groveFloraDetails, GroveFloraDetail } from "@/data/groveFloraDetails";
import { sacredGroves } from "@/data/sacredGroves";

export function getFloraById(id: string): GroveFloraRecord | undefined {
  return groveFlora.find((r) => r.id === id);
}

export function getAllFloraIds(): string[] {
  return groveFlora.map((r) => r.id);
}

export function getFloraDetails(id: string): GroveFloraDetail | undefined {
  return groveFloraDetails[id];
}

export function floraHasDetails(id: string): boolean {
  const detail = groveFloraDetails[id];
  return Boolean(detail && Object.keys(detail).length > 0);
}

const GROVE_NAME = new Map(sacredGroves.map((g) => [g.id, g.name]));

export function groveNames(ids: string[]): { id: string; name: string }[] {
  return ids.map((id) => ({ id, name: GROVE_NAME.get(id) ?? id }));
}

/** "Neeladishwaraswamy Sacred Grove" / "X and Y" / "N groves" depending on
 *  how many groves a flora record was recorded in. */
export function groveLabel(ids: string[]): string {
  if (ids.length === 1) return GROVE_NAME.get(ids[0]) ?? ids[0];
  if (ids.length === 2) return ids.map((id) => GROVE_NAME.get(id) ?? id).join(" and ");
  return `${ids.length} groves`;
}

/** Previous/next record alphabetically by scientific name — used for the
 *  detail page's browse links. Wraps around at either end. */
export function getFloraNeighbours(id: string): { prev: GroveFloraRecord; next: GroveFloraRecord } {
  const sorted = [...groveFlora].sort((a, b) => a.scientificName.localeCompare(b.scientificName));
  const index = sorted.findIndex((r) => r.id === id);
  const prevIndex = (index - 1 + sorted.length) % sorted.length;
  const nextIndex = (index + 1) % sorted.length;
  return { prev: sorted[prevIndex], next: sorted[nextIndex] };
}
