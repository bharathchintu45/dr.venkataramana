// Metadata for the 4 use-based species collections documented in
// "content and images/{ORNAMENTAL & AVENUS,POLYTHENE REPLACEMENT TREE
// SPECIES,TRADABLE OR ECONOMICALLY IMPORTANT PLANT SPECIES,WIND BREAKS}".
// The photo/species records these ids key into live in landscapeFlora.ts.

export interface LandscapeCollection {
  id: string;
  title: string;
  description: string;
}

export const landscapeCollections: LandscapeCollection[] = [
  {
    id: "ornamental-avenue",
    title: "Ornamental & Avenue Trees",
    description: "Trees and flowering species planted for ornamental value and along avenues and roadsides."
  },
  {
    id: "polythene-replacement",
    title: "Polythene Replacement Species",
    description: "Broad-leaved species whose natural leaves serve as a biodegradable alternative to plastic plates and packaging."
  },
  {
    id: "tradable-economic",
    title: "Tradable & Economically Important Species",
    description: "Plants valued for fruit, timber or other economically tradable produce."
  },
  {
    id: "wind-breaks",
    title: "Windbreak Species",
    description: "Trees planted in rows to reduce wind speed and shield farmland and settlements, documented here by leaf form since that shapes their wind-breaking effect."
  }
];

const COLLECTION_TITLE = new Map(landscapeCollections.map((c) => [c.id, c.title]));

/** "Ornamental & Avenue Trees" / "X and Y" / "N collections" depending on how
 *  many collections a species was documented for. */
export function collectionLabel(ids: string[]): string {
  const titles = ids.map((id) => COLLECTION_TITLE.get(id) ?? id);
  if (titles.length === 1) return titles[0];
  if (titles.length === 2) return titles.join(" and ");
  return `${titles.length} collections`;
}

export function collectionNames(ids: string[]): { id: string; title: string }[] {
  return ids.map((id) => ({ id, title: COLLECTION_TITLE.get(id) ?? id }));
}
