"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { groveFlora, floraThumb } from "@/data/groveFlora";
import { sacredGroves } from "@/data/sacredGroves";
import { groveLabel } from "@/lib/groveFlora";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Card, CardBody, CardTitle, CardMeta } from "@/components/ui/Card";
import { Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const PAGE_SIZE = 48;

const GROVE_NAME = new Map(sacredGroves.map((g) => [g.id, g.name]));

export const GroveFloraView: React.FC = () => {
  const searchParams = useSearchParams();
  const groveFromUrl = searchParams.get("grove") ?? "";
  const [query, setQuery] = useState("");
  const [groveFilter, setGroveFilter] = useState(groveFromUrl);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groveFlora.filter((r) => {
      const matchesQuery = q === "" || r.scientificName.toLowerCase().includes(q) || r.family.toLowerCase().includes(q);
      const matchesGrove = groveFilter === "" || r.groves.includes(groveFilter);
      return matchesQuery && matchesGrove;
    });
  }, [query, groveFilter]);
  const visible = filtered.slice(0, visibleCount);

  // Reset pagination whenever the search or grove filter changes.
  useEffect(() => setVisibleCount(PAGE_SIZE), [query, groveFilter]);

  const activeGroveName = groveFilter ? GROVE_NAME.get(groveFilter) : null;

  return (
    <div className="mx-auto w-full max-w-6xl">
      <BackLink href="/sacred-groves" label="Back to sacred groves" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">{groveFlora.length} species recorded</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Flora of the sacred groves</h1>
        <p className="mt-2 text-base text-ink-secondary">
          A photographic checklist from the field survey behind Dr. T. Narender&apos;s doctoral study of
          Telangana&apos;s sacred groves, supervised by Dr. Ramana.
        </p>
        <p className="mt-2 text-xs text-ink-muted">
          Field-recorded identifications from the 2023 grove survey; verification is in progress, so names here may
          still be corrected or removed.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded border border-line bg-paper-raised p-4 sm:flex-row sm:items-center sm:p-5">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-herbarium" aria-hidden />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by scientific name or family…"
            aria-label="Search sacred grove flora"
            className="focus-ring w-full rounded-full border border-line-strong bg-paper py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-herbarium"
          />
        </div>

        <label className="flex min-w-0 items-center gap-2 text-xs text-ink-secondary">
          Grove
          <Select
            value={groveFilter}
            onChange={(e) => setGroveFilter(e.target.value)}
            className="min-w-0 flex-1 sm:w-auto sm:max-w-xs sm:flex-none"
            aria-label="Filter by grove"
          >
            <option value="">All groves</option>
            {sacredGroves.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </Select>
        </label>
      </div>

      <p className="mb-4 text-xs text-ink-muted" role="status">
        Showing <span className="font-semibold text-herbarium-deep">{filtered.length}</span> of {groveFlora.length}{" "}
        species
        {activeGroveName && <> recorded at {activeGroveName}</>}
      </p>

      {filtered.length === 0 ? (
        <p className="rounded border border-line bg-paper-raised p-6 text-center text-sm text-ink-secondary">
          No species match that search.
        </p>
      ) : (
        <div data-reveal-group className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((r) => (
            <div key={r.id} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "12px" }}>
              <Card
                href={`/sacred-groves/flora/${r.id}`}
                media={{
                  src: floraThumb(r.id, r.photos[0].file),
                  alt: r.photos[0].alt,
                  sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                  aspect: "4/3",
                  label: r.family || "Unconfirmed"
                }}
              >
                <CardBody className="p-3">
                  <CardTitle italic>{r.scientificName}</CardTitle>
                  <CardMeta className="line-clamp-2">Recorded in {groveLabel(r.groves)}</CardMeta>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      )}

      {visibleCount < filtered.length && (
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Load more ({filtered.length - visibleCount} remaining)
          </Button>
        </div>
      )}

      <p className="mt-10 text-center text-xs text-ink-muted">
        Field photographs © Dr. M. Venkat Ramana / Dr. T. Narender
      </p>
    </div>
  );
};
