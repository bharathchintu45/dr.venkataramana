"use client";

import React from "react";
import Image from "next/image";
import { SpeciesDiscovery } from "@/data/species";
import { X, MapPin, Calendar, Award, ShieldAlert, Sparkles, BookOpen } from "lucide-react";

interface SpeciesModalProps {
  species: SpeciesDiscovery | null;
  onClose: () => void;
}

export const SpeciesModal: React.FC<SpeciesModalProps> = ({ species, onClose }) => {
  if (!species) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#08170E] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Botanical Specimen Image & Herbarium Header */}
        <div className="w-full md:w-5/12 bg-[#F4EEDF] p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#C5A868]/40 relative shrink-0">
          <div className="w-full text-center border-b border-[#C5A868]/30 pb-2 mb-3">
            <span className="text-[10px] tracking-[0.2em] uppercase font-serif font-bold text-[#6B532F]">
              Herbarium Specimen Record
            </span>
          </div>

          <div className="relative w-48 h-64 my-auto flex items-center justify-center">
            <Image
              src={species.imageCard}
              alt={species.scientificName}
              width={220}
              height={320}
              className="object-contain drop-shadow-md"
            />
          </div>

          <div className="w-full text-center border-t border-[#C5A868]/30 pt-2 mt-3">
            <div className="text-xs font-serif font-bold text-[#3B2A15] italic">
              {species.scientificName}
            </div>
            <div className="text-[10px] text-[#6B532F]">
              Fam. {species.family} · IPNI: M.V.Ramana
            </div>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="w-full md:w-7/12 flex-1 min-h-0 p-6 sm:p-8 flex flex-col justify-between text-[#EFE8D8] space-y-4 overflow-y-auto" data-lenis-prevent>
          <div>
            {/* Top Bar with Close Button */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#1E4D34] text-[#9FE870] border border-[#89C35C]/40 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> New Species Discovery
                </span>
                <h2 className="text-2xl font-serif-title font-bold text-white mt-2 italic">
                  {species.scientificName}
                </h2>
                <p className="text-xs text-[#C5A868] font-sans font-medium mt-0.5">
                  {species.authority}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metadata Badges */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-[#EFE8D8]/80">
                <Calendar className="w-4 h-4 text-[#89C35C]" />
                <span>Described: <strong>{species.year}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[#EFE8D8]/80">
                <MapPin className="w-4 h-4 text-[#89C35C]" />
                <span className="truncate">{species.geography}</span>
              </div>
              <div className="col-span-2 flex items-center gap-2 text-[#E2C98F]">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                <span>Status: <strong>{species.conservationStatus}</strong></span>
              </div>
            </div>

            {/* Diagnostic Botanical Features */}
            <div className="mt-4 space-y-2">
              <h4 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold">
                Diagnostic Characteristics
              </h4>
              <ul className="space-y-1.5 text-xs text-[#EFE8D8]/85 leading-relaxed">
                {species.diagnosticFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#89C35C] font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Etymology & Type Locality */}
            <div className="mt-4 space-y-2 text-xs">
              <div>
                <span className="text-[#C5A868] font-semibold">Type Locality: </span>
                <span className="text-[#EFE8D8]/80">{species.typeLocality}</span>
              </div>
              <div>
                <span className="text-[#C5A868] font-semibold">Etymology: </span>
                <span className="text-[#EFE8D8]/80">{species.etymology}</span>
              </div>
            </div>
          </div>

          {/* Publication Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#9FE870]">
              <BookOpen className="w-4 h-4" />
              <span className="italic">{species.publishedIn}</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#2A6B48] text-white hover:bg-[#388E5E] font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
