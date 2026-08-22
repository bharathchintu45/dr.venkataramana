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
  <div>
    <div className="text-[11px] uppercase tracking-wider text-[#89C35C] font-semibold mb-2">
      {label}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const isActive = selected.has(opt);
        return (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isActive
                ? "bg-[#2A6B48] text-white border border-[#89C35C] shadow-botanical-glow"
                : "bg-[#0A1C12] text-[#EFE8D8]/70 hover:text-white hover:bg-[#143523] border border-white/5"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
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
    <div className="max-w-7xl mx-auto w-full">
      <BackLink href="/" label="Back to Home" />

      <div className="text-center max-w-2xl mx-auto my-6 space-y-2">
        <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight">
          Plant Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans">
          Every species discovered and described by Dr. M. Venkat Ramana
        </p>
      </div>

      {/* Search & Advanced Filters */}
      <div className="bg-[#091C10]/70 border border-[#89C35C]/15 rounded-2xl p-4 sm:p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#89C35C]" />
            <input
              type="text"
              placeholder="Search by scientific name, local name, or family..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#050E08] border border-[#89C35C]/30 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#9FE870] focus:ring-1 focus:ring-[#9FE870]"
            />
          </div>

          <button
            onClick={() => setAdvancedOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#0A1C12] text-[#EFE8D8]/80 hover:text-white hover:bg-[#143523] border border-white/10 transition-all"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#89C35C]" />
            <span>Advanced Search{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}</span>
            {advancedOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {advancedOpen && (
          <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FacetGroup
              label="Family"
              options={familyOptions}
              selected={selectedFamilies}
              onToggle={(v) => setSelectedFamilies((s) => toggleInSet(s, v))}
            />
            <FacetGroup
              label="Growth Habit"
              options={habitOptions}
              selected={selectedHabits}
              onToggle={(v) => setSelectedHabits((s) => toggleInSet(s, v))}
            />
            <FacetGroup
              label="Region"
              options={regionOptions}
              selected={selectedRegions}
              onToggle={(v) => setSelectedRegions((s) => toggleInSet(s, v))}
            />
            <FacetGroup
              label="Conservation Status"
              options={statusOptions}
              selected={selectedStatuses}
              onToggle={(v) => setSelectedStatuses((s) => toggleInSet(s, v))}
            />
          </div>
        )}
      </div>

      {/* Result count */}
      <div className="text-xs text-[#EFE8D8]/60 mb-4">
        Showing <span className="text-[#9FE870] font-semibold">{filteredSpecies.length}</span> of{" "}
        {speciesDiscoveries.length} species
      </div>

      {/* Grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {filteredSpecies.map((sp) => (
            <PlantCard key={sp.id} species={sp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#EFE8D8]/50">
          <Leaf className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#89C35C]" />
          <p>No species found matching your search.</p>
          <button
            onClick={clearAll}
            className="mt-3 text-xs text-[#9FE870] hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
