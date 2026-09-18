import { publicationsData, Publication } from "@/data/publications";

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function getYearOptions(): number[] {
  return Array.from(new Set(publicationsData.map((p) => p.year))).sort((a, b) => b - a);
}

export function getCategoryOptions(): Publication["category"][] {
  const order: Publication["category"][] = ["SCOPUS", "UGC_CARE", "PEER_REVIEWED", "BOOK", "CHAPTER"];
  const present = new Set(publicationsData.map((p) => p.category));
  return order.filter((c) => present.has(c));
}

export function getTagOptions(): string[] {
  return uniqueSorted(publicationsData.flatMap((p) => p.tags));
}

export const CATEGORY_LABEL: Record<Publication["category"], string> = {
  SCOPUS: "Scopus indexed",
  UGC_CARE: "UGC-CARE listed",
  PEER_REVIEWED: "Peer reviewed",
  BOOK: "Book",
  CHAPTER: "Book chapter",
};

interface PublicationFilters {
  query?: string;
  category?: Publication["category"] | null;
  year?: number | null;
  highlightsOnly?: boolean;
}

export function filterPublications(list: Publication[], filters: PublicationFilters): Publication[] {
  const q = filters.query?.trim().toLowerCase() ?? "";
  return list.filter((p) => {
    const matchesQuery =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.journal.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const matchesCategory = !filters.category || p.category === filters.category;
    const matchesYear = !filters.year || p.year === filters.year;
    const matchesHighlight = !filters.highlightsOnly || Boolean(p.isHighlight);
    return matchesQuery && matchesCategory && matchesYear && matchesHighlight;
  });
}

export type SortKey = "year-desc" | "year-asc" | "title";

export function sortPublications(list: Publication[], by: SortKey): Publication[] {
  const copy = [...list];
  switch (by) {
    case "year-asc":
      return copy.sort((a, b) => a.year - b.year);
    case "title":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "year-desc":
    default:
      return copy.sort((a, b) => b.year - a.year);
  }
}

export function groupByYear(list: Publication[]): { year: number; items: Publication[] }[] {
  const sorted = sortPublications(list, "year-desc");
  const groups = new Map<number, Publication[]>();
  sorted.forEach((p) => {
    if (!groups.has(p.year)) groups.set(p.year, []);
    groups.get(p.year)!.push(p);
  });
  return Array.from(groups.entries()).map(([year, items]) => ({ year, items }));
}

/** A publication's own DOI/URL when present; otherwise a Google Scholar
 * search for its exact title — only 1 of 42 entries currently carries a
 * DOI, so every publication still needs a usable "find this paper" action. */
export function findPaperUrl(p: Publication): string {
  if (p.doiOrUrl) return p.doiOrUrl.startsWith("http") ? p.doiOrUrl : `https://doi.org/${p.doiOrUrl}`;
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(p.title)}`;
}

export function formatCitation(p: Publication): string {
  const vol = p.volume ? ` ${p.volume}` : "";
  const pages = p.pages ? `: ${p.pages}` : "";
  return `${p.authors} (${p.year}). ${p.title}. ${p.journal}${vol}${pages}.`;
}

export function publicationStats() {
  const byCategory = getCategoryOptions().reduce<Record<string, number>>((acc, c) => {
    acc[c] = publicationsData.filter((p) => p.category === c).length;
    return acc;
  }, {});
  const years = getYearOptions();
  return {
    total: publicationsData.length,
    byCategory,
    firstYear: years[years.length - 1],
    lastYear: years[0],
  };
}
