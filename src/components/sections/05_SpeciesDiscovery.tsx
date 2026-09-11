"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { speciesDiscoveries, SpeciesDiscovery } from "@/data/species";
import { SpeciesModal } from "@/components/modals/SpeciesModal";
import { ArrowRight } from "lucide-react";

export const SpeciesDiscoveries: React.FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesDiscovery | null>(null);

  return (
    <section
      id="species"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/species-forest.jpg"
          alt="Ancient mossy forest floor background for new species discoveries"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              04
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              New Species Discoveries
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-4 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            New Species Discovered & Described
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Contributions to the plant diversity of India
          </p>
        </div>

        {/* 6 Specimen Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 my-auto">
          {speciesDiscoveries.slice(0, 6).map((sp) => (
            <div
              key={sp.id}
              onClick={() => setSelectedSpecies(sp)}
              className="bg-[#F0E8D5] rounded-xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-2xl border border-[#C5A868]/60"
            >
              {/* Herbarium Drawing Thumbnail */}
              <div className="relative w-full h-44 sm:h-48 mb-2 rounded overflow-hidden flex items-center justify-center">
                <Image
                  src={sp.imageCard}
                  alt={sp.scientificName}
                  fill
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Scientific Name & Year */}
              <div className="w-full pt-2 border-t border-[#C5A868]/30">
                <h3 className="font-serif italic font-bold text-xs sm:text-sm text-[#261D12] group-hover:text-[#1E4D34] transition-colors leading-tight">
                  {sp.scientificName}
                </h3>
                <div className="text-[11px] font-mono text-[#6B532F] font-bold mt-1">
                  {sp.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-6">
          <Link
            href="/plant-gallery"
            className="px-7 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
          >
            <span>Explore All Species</span>
            <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <SpeciesModal
        species={selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
      />
    </section>
  );
};
