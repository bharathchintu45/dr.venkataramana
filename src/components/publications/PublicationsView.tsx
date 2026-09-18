"use client";

import React, { useMemo, useState } from "react";
import { Search, ExternalLink, Sparkles } from "lucide-react";
import { publicationsData, Publication } from "@/data/publications";
import {
  CATEGORY_LABEL,
  filterPublications,
  findPaperUrl,
  getCategoryOptions,
  getYearOptions,
  groupByYear,
  publicationStats,
  sortPublications,
  type SortKey,
} from "@/lib/publications";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Metric } from "@/components/ui/Metric";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/Field";
import { cn } from "@/lib/cn";

interface PublicationsViewProps {
  stats: ReturnType<typeof publicationStats>;
}

export const PublicationsView: React.FC<PublicationsViewProps> = ({ stats }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Publication["category"] | "">("");
  const [year, setYear] = useState<number | "">("");
  const [highlightsOnly, setHighlightsOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("year-desc");

  const categoryOptions = useMemo(getCategoryOptions, []);
  const yearOptions = useMemo(getYearOptions, []);

  const filtered = useMemo(
    () =>
      sortPublications(
        filterPublications(publicationsData, {
          query,
          category: category || null,
          year: year || null,
          highlightsOnly,
        }),
        sortBy
      ),
    [query, category, year, highlightsOnly, sortBy]
  );

  const grouped = useMemo(() => (sortBy === "title" ? null : groupByYear(filtered)), [filtered, sortBy]);

  return (
    <div className="mx-auto w-full max-w-4xl">
      <BackLink href="/" label="Back to home" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">Bibliography</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Publications</h1>
        <p className="mt-2 text-base text-ink-secondary">
          Peer-reviewed research from {stats.firstYear} to {stats.lastYear} in plant systematics, biodiversity
          conservation, and ethnobotany.
        </p>
      </div>

      <div data-reveal-group className="mb-8 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
        <div data-reveal-item data-reveal>
          <Metric value={stats.total} label="Total publications" />
        </div>
        {categoryOptions.slice(0, 3).map((c) => (
          <div key={c} data-reveal-item data-reveal>
            <Metric value={stats.byCategory[c] ?? 0} label={CATEGORY_LABEL[c]} />
          </div>
        ))}
      </div>

      <div className="mb-6 space-y-4 rounded border border-line bg-paper-raised p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-herbarium" aria-hidden />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, journal, or keyword…"
            aria-label="Search publications"
            className="focus-ring w-full rounded-full border border-line-strong bg-paper py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-herbarium"
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-3.5">
          <button
            type="button"
            aria-pressed={category === ""}
            onClick={() => setCategory("")}
            className={cn(
              "focus-ring touch-target relative rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              category === "" ? "border-herbarium bg-herbarium text-paper-raised" : "border-line-strong text-ink-secondary hover:border-herbarium/60"
            )}
          >
            All categories
          </button>
          {categoryOptions.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory((prev) => (prev === c ? "" : c))}
              className={cn(
                "focus-ring touch-target relative rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                category === c ? "border-herbarium bg-herbarium text-paper-raised" : "border-line-strong text-ink-secondary hover:border-herbarium/60"
              )}
            >
              {CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-ink-secondary">
            Year
            <Select
              value={year}
              onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
              className="w-auto"
              aria-label="Filter by year"
            >
              <option value="">All years</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          </label>

          <label className="flex items-center gap-2 text-xs text-ink-secondary">
            Sort
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortKey)} className="w-auto" aria-label="Sort publications">
              <option value="year-desc">Newest first</option>
              <option value="year-asc">Oldest first</option>
              <option value="title">Title (A–Z)</option>
            </Select>
          </label>

          <label className="ml-auto flex items-center gap-2 text-xs text-ink-secondary">
            <input
              type="checkbox"
              checked={highlightsOnly}
              onChange={(e) => setHighlightsOnly(e.target.checked)}
              className="focus-ring h-4 w-4 rounded border-line-strong text-herbarium accent-[rgb(var(--herbarium))]"
            />
            Highlights only
          </label>
        </div>
      </div>

      <p className="mb-4 text-xs text-ink-muted" role="status">
        Showing <span className="font-semibold text-herbarium-deep">{filtered.length}</span> of {stats.total} publications
      </p>

      {grouped ? (
        <div className="space-y-8">
          {grouped.map((group) => (
            <div key={group.year}>
              <h2 className="font-display text-xl font-medium text-ink">{group.year}</h2>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {group.items.map((p) => (
                  <PublicationRow key={p.id} p={p} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="divide-y divide-line border-t border-line">
          {filtered.map((p) => (
            <PublicationRow key={p.id} p={p} />
          ))}
        </ul>
      )}

      {filtered.length === 0 && <p className="py-12 text-center text-ink-muted">No publications match these filters.</p>}
    </div>
  );
};

const PublicationRow: React.FC<{ p: Publication }> = ({ p }) => (
  <li className="py-4">
    <div className="flex flex-wrap items-start gap-2">
      {p.isHighlight && <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-annotation" aria-hidden />}
      <p className="max-w-[56ch] text-sm font-medium leading-snug text-ink">{p.title}</p>
    </div>
    <p className="mt-1.5 max-w-[56ch] text-xs text-ink-secondary">{p.authors}</p>
    <p className="mt-0.5 max-w-[56ch] text-xs text-ink-muted">
      {p.journal}
      {p.volume ? `, ${p.volume}` : ""}
      {p.pages ? `: ${p.pages}` : ""} · {p.year}
    </p>
    <div className="mt-2 flex flex-wrap items-center gap-1.5">
      <Badge tone="neutral">{CATEGORY_LABEL[p.category]}</Badge>
      {p.impactFactor && <Badge tone="outline">IF {p.impactFactor}</Badge>}
      <a
        href={findPaperUrl(p)}
        target="_blank"
        rel="noreferrer"
        className="focus-ring touch-target relative ml-1 inline-flex items-center gap-1 text-xs font-semibold text-herbarium hover:text-herbarium-deep"
      >
        {p.doiOrUrl ? "View paper" : "Find this paper"} <ExternalLink className="h-3 w-3" aria-hidden />
      </a>
    </div>
  </li>
);
