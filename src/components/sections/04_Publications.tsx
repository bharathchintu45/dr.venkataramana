"use client";

import React from "react";
import Image from "next/image";
import { Leaf, ArrowRight } from "lucide-react";
import { featuredPublicationPages } from "@/data/publications";

interface PublicationsProps {
  onOpenCatalog: () => void;
}

const ruledLinesBg =
  "repeating-linear-gradient(to bottom, transparent 0px, transparent 26px, rgba(107,83,47,0.14) 26px, rgba(107,83,47,0.14) 27px)";

export const Publications: React.FC<PublicationsProps> = ({ onOpenCatalog }) => {
  return (
    <section
      id="publications"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Environment with Notebook Desk */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/publications-notebook.jpg"
          alt="Open botanical research notebook on desk with compass and pen"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#89C35C]/50 bg-[#0F2618] flex items-center justify-center text-[#A4E06A] shadow-md">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-xs text-[#EFE8D8]/80 font-sans tracking-wide">
                Botanical · Research · Education
              </span>
            </div>

            <div className="pt-1">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                04
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-white tracking-wider uppercase mt-1">
                Publications
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans leading-relaxed">
              Research articles published in national and international journals.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCatalog}
                className="px-6 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide flex items-center gap-2.5 shadow-botanical-glow transition-all"
              >
                <Leaf className="w-4 h-4 text-[#A4E06A]" strokeWidth={2} />
                <span>View All Publications</span>
              </button>
            </div>
          </div>

          {/* Right Column: Featured Publications List */}
          <div className="lg:col-span-8">
            <div
              className="bg-[#EFE8D8] rounded-2xl p-6 sm:p-8 text-[#261D12] shadow-2xl border-2 border-[#C5A868]/60 space-y-4"
              style={{ backgroundImage: ruledLinesBg }}
            >
              {featuredPublicationPages.flat().map((pub, idx) => (
                <div
                  key={pub.id}
                  className={
                    idx > 0
                      ? "flex items-start gap-3 pt-3 border-t border-[#C5A868]/30"
                      : "flex items-start gap-3"
                  }
                >
                  <span className="px-2.5 py-1 rounded bg-[#DFD3B8] text-[#3B2A15] font-serif font-bold text-xs shrink-0">
                    {pub.year}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif-title font-bold text-[#261D12] leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-[#6B532F] italic mt-0.5">{pub.journal}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-[#C5A868]/40 flex justify-end">
                <button
                  onClick={onOpenCatalog}
                  className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#261D12] hover:text-[#1E4D34] group"
                >
                  <span>View All Publications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
