"use client";

import React, { useEffect, useMemo, useState } from "react";
import { allPlantEntries, getPlantFamilyOptions, PlantSource } from "@/lib/plantGallery";
import {
  getConservationCategoryOptions,
  getGrowthHabitOptions,
  getRegionOptions
} from "@/lib/species";
import { speciesDiscoveries } from "@/data/species";
import { landscapeCollections } from "@/data/landscapeCollections";
import { landscapeFlora } from "@/data/landscapeFlora";
import { PlantCard } from "./PlantCard";
import { BackLink } from "./BackLink";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Leaf } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Field";

const PAGE_SIZE = 48;

const SOURCE_LABEL: Record<PlantSource, string> = {
  discovery: "New species discoveries",
  "grove-flora": "Sacred grove survey",
  "landscape-flora": "Landscape & urban species"
};

function toggleInSet(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

interface FacetGroupProps {
  label: string;
  options: string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
}

const FacetGroup: React.FC<FacetGroupProps> = ({ label, options, selected, onToggle }) => (
  <fieldset>
    <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-herbarium">{label}</legend>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const isActive = selected.has(opt);
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={isActive}
            onClick={() => onToggle(opt)}
            className={cn(
              "focus-ring rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              isActive
                ? "border-herbarium bg-herbarium text-paper-raised"
                : "border-line-strong bg-paper text-ink-secondary hover:border-herbarium/60 hover:text-herbarium-deep"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </fieldset>
);

export const GalleryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [familyFilter, setFamilyFilter] = useState("");
  const [selectedSources, setSelectedSources] = useState<Set<string>>(new Set());
  const [selectedHabits, setSelectedHabits] = useState<Set<string>>(new Set());
  const [selectedRegions, setSelectedRegions] = useState<Set<string>>(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(new Set());
  const [selectedCollections, setSelectedCollections] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Family has ~100 options once the 392 grove-flora families are folded
  // in (vs. 7 for the discoveries alone) — a dropdown, not a chip cloud.
  const familyOptions = useMemo(getPlantFamilyOptions, []);
  const sourceOptions = useMemo(
    () => [SOURCE_LABEL.discovery, SOURCE_LABEL["grove-flora"], SOURCE_LABEL["landscape-flora"]],
    []
  );
  // These three only ever apply to the 8 discoveries — the 392 grove-flora
  // records don't carry growth habit, region or conservation status, so
  // picking one of these naturally narrows the grid to discoveries only.
  const habitOptions = useMemo(getGrowthHabitOptions, []);
  const regionOptions = useMemo(getRegionOptions, []);
  const statusOptions = useMemo(getConservationCategoryOptions, []);
  // Collection only exists on the landscape-flora entries.
  const collectionOptions = useMemo(() => landscapeCollections.map((c) => c.title), []);

  const activeFilterCount =
    (familyFilter ? 1 : 0) +
    selectedSources.size +
    selectedHabits.size +
    selectedRegions.size +
    selectedStatuses.size +
    selectedCollections.size;

  // Region only exists on the 8 discoveries (speciesDiscoveries), so it's
  // applied as a lookup rather than a field carried on the unified entry.
  const regionByDiscoveryId = useMemo(() => new Map(speciesDiscoveries.map((sp) => [sp.id, sp.region])), []);
  // Collection ids only exist on the landscape-flora records; the unified
  // entry only carries the display label, so filtering needs the raw ids.
  const collectionTitlesById = useMemo(() => {
    const titleById = new Map(landscapeCollections.map((c) => [c.id, c.title]));
    return new Map(landscapeFlora.map((r) => [r.id, r.collections.map((id) => titleById.get(id) ?? id)]));
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allPlantEntries.filter((entry) => {
      const matchesSearch =
        q === "" ||
        entry.scientificName.toLowerCase().includes(q) ||
        (entry.localName?.toLowerCase().includes(q) ?? false) ||
        entry.family.toLowerCase().includes(q);

      const matchesFamily = familyFilter === "" || entry.family === familyFilter;
      const matchesSource = selectedSources.size === 0 || selectedSources.has(SOURCE_LABEL[entry.source]);
      const matchesHabit = selectedHabits.size === 0 || (entry.growthHabit ? selectedHabits.has(entry.growthHabit) : false);
      const matchesStatus =
        selectedStatuses.size === 0 || (entry.conservationCategory ? selectedStatuses.has(entry.conservationCategory) : false);
      const region = regionByDiscoveryId.get(entry.id);
      const matchesRegion = selectedRegions.size === 0 || (region ? selectedRegions.has(region) : false);
      const entryCollections = collectionTitlesById.get(entry.id) ?? [];
      const matchesCollection =
        selectedCollections.size === 0 || entryCollections.some((title) => selectedCollections.has(title));

      return matchesSearch && matchesFamily && matchesSource && matchesHabit && matchesStatus && matchesRegion && matchesCollection;
    });
  }, [
    searchQuery,
    familyFilter,
    selectedSources,
    selectedHabits,
    selectedRegions,
    selectedStatuses,
    selectedCollections,
    regionByDiscoveryId,
    collectionTitlesById
  ]);

  const visible = filtered.slice(0, visibleCount);

  // Reset pagination whenever any search/filter changes.
  useEffect(
    () => setVisibleCount(PAGE_SIZE),
    [searchQuery, familyFilter, selectedSources, selectedHabits, selectedRegions, selectedStatuses, selectedCollections]
  );

  const clearAll = () => {
    setSearchQuery("");
    setFamilyFilter("");
    setSelectedSources(new Set());
    setSelectedHabits(new Set());
    setSelectedRegions(new Set());
    setSelectedStatuses(new Set());
    setSelectedCollections(new Set());
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <BackLink href="/" label="Back to home" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">{allPlantEntries.length} plants documented</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Plant gallery</h1>
        <p className="mt-2 text-base text-ink-secondary">
          Every plant on the site in one place: the {speciesDiscoveries.length} new species discovered and described
          by Dr. M. Venkat Ramana, alongside the plants recorded during the Telangana sacred-groves field survey and
          the landscape and urban-forestry species catalog.
        </p>
      </div>

      <div className="mb-6 rounded border border-line bg-paper-raised p-4 sm:p-5">
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-herbarium" aria-hidden />
            <input
              type="text"
              placeholder="Search by scientific name, local name, or family…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search plants"
              className="focus-ring w-full rounded-full border border-line-strong bg-paper py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-herbarium"
            />
          </div>

          <button
            type="button"
            onClick={() => setAdvancedOpen((v) => !v)}
            aria-expanded={advancedOpen}
            aria-controls="advanced-search"
            className="focus-ring touch-target relative flex items-center justify-center gap-2 rounded-full border border-line-strong px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-herbarium hover:text-herbarium-deep"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
            <span>Advanced search{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}</span>
            {advancedOpen ? <ChevronUp className="h-3.5 w-3.5" aria-hidden /> : <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
          </button>
        </div>

        {advancedOpen && (
          <div id="advanced-search" className="mt-5 grid grid-cols-1 gap-5 border-t border-line pt-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-herbarium">Family</span>
              <Select value={familyFilter} onChange={(e) => setFamilyFilter(e.target.value)} aria-label="Filter by family">
                <option value="">All families ({familyOptions.length})</option>
                {familyOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </Select>
            </label>
            <FacetGroup label="Source" options={sourceOptions} selected={selectedSources} onToggle={(v) => setSelectedSources((s) => toggleInSet(s, v))} />
            <FacetGroup label="Growth habit" options={habitOptions} selected={selectedHabits} onToggle={(v) => setSelectedHabits((s) => toggleInSet(s, v))} />
            <FacetGroup label="Region" options={regionOptions} selected={selectedRegions} onToggle={(v) => setSelectedRegions((s) => toggleInSet(s, v))} />
            <FacetGroup label="Conservation status" options={statusOptions} selected={selectedStatuses} onToggle={(v) => setSelectedStatuses((s) => toggleInSet(s, v))} />
            <FacetGroup
              label="Landscape collection"
              options={collectionOptions}
              selected={selectedCollections}
              onToggle={(v) => setSelectedCollections((s) => toggleInSet(s, v))}
            />
            <p className="text-xs text-ink-muted sm:col-span-2">
              Growth habit, region and conservation status are only recorded for the {speciesDiscoveries.length} new
              species discoveries — picking one of these narrows the grid to those. Landscape collection only applies
              to the ornamental, windbreak, polythene-replacement and tradable/economic species catalog.
            </p>
          </div>
        )}
      </div>

      <p className="mb-4 text-xs text-ink-muted" role="status">
        Showing <span className="font-semibold text-herbarium-deep">{filtered.length}</span> of {allPlantEntries.length} plants
      </p>

      {filtered.length > 0 ? (
        <>
          <div data-reveal-group className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {visible.map((entry) => (
              <div key={`${entry.source}-${entry.id}`} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "12px" }}>
                <PlantCard entry={entry} />
              </div>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-6 flex justify-center">
              <Button variant="secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                Load more ({filtered.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="py-16 text-center text-ink-muted">
          <Leaf className="mx-auto mb-3 h-12 w-12 text-herbarium/40" aria-hidden />
          <p>No plants found matching your search.</p>
          <Button variant="link" onClick={clearAll} className="mt-3">
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};
