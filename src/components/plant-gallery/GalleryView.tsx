"use client";

import React, { useMemo, useState } from "react";
import { speciesDiscoveries } from "@/data/species";
import {
  getConservationCategory,
  getConservationCategoryOptions,
  getFamilyOptions,
  getGrowthHabitOptions,
  getRegionOptions
} from "@/lib/species";
import { PlantCard } from "./PlantCard";
import { BackLink } from "./BackLink";
import { Search, SlidersHorizontal, ChevronDown, ChevronUp, Leaf } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

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
  const [selectedFamilies, setSelectedFamilies] = useState<Set<string>>(new Set());
  const [selectedHabits, setSelectedHabits] = useState<Set<string>>(new Set());
  const [selectedRegions, setSelectedRegions] = useState<Set<string>>(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(new Set());

  const familyOptions = useMemo(getFamilyOptions, []);
  const habitOptions = useMemo(getGrowthHabitOptions, []);
  const regionOptions = useMemo(getRegionOptions, []);
  const statusOptions = useMemo(getConservationCategoryOptions, []);

  const activeFilterCount =
    selectedFamilies.size + selectedHabits.size + selectedRegions.size + selectedStatuses.size;

  const filteredSpecies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return speciesDiscoveries.filter((sp) => {
      const matchesSearch =
        q === "" ||
        sp.scientificName.toLowerCase().includes(q) ||
        (sp.localName?.toLowerCase().includes(q) ?? false) ||
        sp.family.toLowerCase().includes(q);

      const matchesFamily = selectedFamilies.size === 0 || selectedFamilies.has(sp.family);
      const matchesHabit = selectedHabits.size === 0 || selectedHabits.has(sp.growthHabit);
      const matchesRegion = selectedRegions.size === 0 || selectedRegions.has(sp.region);
      const matchesStatus =
        selectedStatuses.size === 0 ||
        selectedStatuses.has(getConservationCategory(sp.conservationStatus));

      return matchesSearch && matchesFamily && matchesHabit && matchesRegion && matchesStatus;
    });
  }, [searchQuery, selectedFamilies, selectedHabits, selectedRegions, selectedStatuses]);

  const clearAll = () => {
    setSearchQuery("");
    setSelectedFamilies(new Set());
    setSelectedHabits(new Set());
    setSelectedRegions(new Set());
    setSelectedStatuses(new Set());
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <BackLink href="/" label="Back to home" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">{speciesDiscoveries.length} type specimens</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Plant gallery</h1>
        <p className="mt-2 text-base text-ink-secondary">
          Every species discovered and described by Dr. M. Venkat Ramana.
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
              aria-label="Search species"
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
            <FacetGroup label="Family" options={familyOptions} selected={selectedFamilies} onToggle={(v) => setSelectedFamilies((s) => toggleInSet(s, v))} />
            <FacetGroup label="Growth habit" options={habitOptions} selected={selectedHabits} onToggle={(v) => setSelectedHabits((s) => toggleInSet(s, v))} />
            <FacetGroup label="Region" options={regionOptions} selected={selectedRegions} onToggle={(v) => setSelectedRegions((s) => toggleInSet(s, v))} />
            <FacetGroup label="Conservation status" options={statusOptions} selected={selectedStatuses} onToggle={(v) => setSelectedStatuses((s) => toggleInSet(s, v))} />
          </div>
        )}
      </div>

      <p className="mb-4 text-xs text-ink-muted" role="status">
        Showing <span className="font-semibold text-herbarium-deep">{filteredSpecies.length}</span> of {speciesDiscoveries.length} species
      </p>

      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {filteredSpecies.map((sp) => (
            <PlantCard key={sp.id} species={sp} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-ink-muted">
          <Leaf className="mx-auto mb-3 h-12 w-12 text-herbarium/40" aria-hidden />
          <p>No species found matching your search.</p>
          <Button variant="link" onClick={clearAll} className="mt-3">
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};
