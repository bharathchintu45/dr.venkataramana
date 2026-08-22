"use client";

import React, { useState } from "react";
import Image from "next/image";
import { researchAreas, ResearchArea } from "@/data/research";
import { ArrowRight, Leaf, X, CheckCircle2 } from "lucide-react";

export const ResearchAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<ResearchArea | null>(null);

  return (
    <section
      id="research"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/research-clearing.jpg"
          alt="Lush green botanical clearing background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column matching reference */}
          <div className="lg:col-span-4 space-y-5 text-left">
            {/* Tree Logo & Name Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#89C35C]/40 bg-[#0A1C12] flex items-center justify-center text-[#89C35C] shadow-botanical-glow">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-serif-title font-bold text-base tracking-wide">
                  Dr. M. Venkat Ramana
                </div>
                <div className="text-[11px] text-[#89C35C] font-sans">
                  Botanist · Researcher · Educator
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                03
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-white tracking-wider uppercase mt-1">
                Research Areas
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans leading-relaxed">
              Diverse areas of research focused on understanding plants and their role in nature.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveArea(researchAreas[0])}
                className="px-6 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide shadow-botanical-glow transition-all"
              >
                Explore All Areas
              </button>
            </div>
          </div>

          {/* Right Column: 4 Vintage Parchment Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                onClick={() => setActiveArea(area)}
                className="bg-[#F0E8D5] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-[#261D12] shadow-2xl border border-[#C5A868]/60 group cursor-pointer hover:-translate-y-2 transition-all duration-500 relative"
              >
                {/* Botanical Illustration */}
                <div className="relative w-full h-56 mb-3 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={area.imagePath}
                    alt={area.title}
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Information */}
                <div>
                  <h3 className="text-base sm:text-lg font-serif-title font-bold text-[#261D12] group-hover:text-[#1E4D34] transition-colors leading-snug mb-1.5 text-center">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#5A4526] leading-relaxed text-center font-sans mb-3">
                    {area.shortDesc}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-2 border-t border-[#C5A868]/30 flex items-center justify-center gap-1.5 text-xs font-serif font-bold text-[#261D12] group-hover:text-[#1E4D34]">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Area Deep-Dive Modal */}
      {activeArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#08170E] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-5/12 shrink-0 bg-[#F4EEDF] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#C5A868]/40">
              <div className="relative w-48 h-64">
                <Image
                  src={activeArea.imagePath}
                  alt={activeArea.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-serif font-bold text-[#3A2E1E] mt-3 text-center">
                {activeArea.title}
              </div>
            </div>

            <div className="w-full md:w-7/12 flex-1 min-h-0 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between text-[#EFE8D8] space-y-4" data-lenis-prevent>
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#1E4D34] text-[#9FE870] border border-[#89C35C]/40">
                      Area {activeArea.number}
                    </span>
                    <h3 className="text-2xl font-serif-title font-bold text-white mt-1">
                      {activeArea.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveArea(null)}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#EFE8D8]/85 mt-3 leading-relaxed">
                  {activeArea.fullDesc}
                </p>

                <div className="mt-4 space-y-2">
                  <h4 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold">
                    Core Specializations
                  </h4>
                  <ul className="space-y-1 text-xs text-[#EFE8D8]/80">
                    {activeArea.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#89C35C] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-3 bg-[#143523]/40 rounded-lg border border-[#89C35C]/30 text-xs">
                  <span className="font-semibold text-[#9FE870]">Impact: </span>
                  <span className="text-[#EFE8D8]/90">{activeArea.impactSummary}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveArea(null)}
                  className="px-4 py-2 rounded-lg bg-[#2A6B48] text-white hover:bg-[#388E5E] font-medium text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
