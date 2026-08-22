"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight, Leaf, FileText, BookOpen, BookMarked, Flower2, GraduationCap, Clock } from "lucide-react";

interface ForestEntranceProps {
  onEnterForest: () => void;
  onDiscoverMore: () => void;
}

export const ForestEntrance: React.FC<ForestEntranceProps> = ({
  onEnterForest,
  onDiscoverMore
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-8"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/hero-entrance.jpg"
          alt="Ancient botanical forest entrance canopy"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040D07] via-transparent to-[#040D07]/40 pointer-events-none" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Hero Title & Description */}
        <div className="max-w-xl text-left space-y-5">
          {/* Section Indicator Badge */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#10271A] border border-[#89C35C]/50 text-[#9FE870] font-bold text-xs">
              01
            </span>
            <span className="text-xs uppercase font-serif tracking-[0.2em] text-[#EFE8D8]/80 font-bold">
              WELCOME
            </span>
          </div>

          {/* Cinematic Title */}
          <h1 className="text-4xl sm:text-6xl font-serif-title font-bold text-white tracking-tight leading-[1.12]">
            Exploring <br />
            Plant Diversity, <br />
            <span className="text-[#A4E06A] drop-shadow-[0_0_15px_rgba(164,224,106,0.35)]">
              Preserving Life
            </span>
          </h1>

          {/* Botanical Divider with Leaf */}
          <div className="flex items-center gap-2 py-0.5">
            <div className="w-10 h-px bg-[#89C35C]/50" />
            <Leaf className="w-3.5 h-3.5 text-[#89C35C]" strokeWidth={1.75} />
            <div className="w-16 h-px bg-[#89C35C]/50" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#EFE8D8]/90 font-sans leading-relaxed">
            Dedicated to the study of plants, conservation of biodiversity and understanding nature for a sustainable future.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onEnterForest}
              className="px-6 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold flex items-center gap-2.5 shadow-[0_4px_20px_rgba(10,28,18,0.7)] group transition-all"
            >
              <Leaf className="w-4 h-4 text-[#A4E06A] group-hover:scale-110 transition-transform" strokeWidth={2} />
              <span>Enter the Forest</span>
            </button>

            <button
              onClick={onDiscoverMore}
              className="px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-white/20 hover:border-[#89C35C]/60 text-sm font-medium text-white flex items-center gap-2 transition-all group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 text-[#89C35C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Wooden Conservation Signboard */}
        <div className="hidden lg:block relative w-80 h-72">
          <div className="wooden-signboard absolute right-0 top-8 rounded-lg p-5 text-center rotate-1 hover:rotate-0 transition-transform duration-500 max-w-[270px]">
            <div className="border border-[#C5A868]/40 p-4 rounded bg-black/15">
              <p className="font-serif-title italic text-2xl leading-snug">
                Conservation <br />
                <span className="text-lg">is our</span> <br />
                Responsibility
              </p>
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest font-serif opacity-80">
              Osmania University · Saifabad
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hero Stats Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full mt-10">
        <div className="bg-[#0A1F13]/90 backdrop-blur-md rounded-2xl border border-[#89C35C]/30 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 shadow-2xl">
          {/* Stat 1: Articles */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <FileText className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                {profileData.stats.articles}+
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                Articles Published
              </div>
            </div>
          </div>

          {/* Stat 2: Books */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <BookOpen className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                {profileData.stats.books}
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                Books Authored
              </div>
            </div>
          </div>

          {/* Stat 3: Book Chapter */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <BookMarked className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                {profileData.stats.bookChapters}
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                Book Chapter
              </div>
            </div>
          </div>

          {/* Stat 4: New Species */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <Flower2 className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                0{profileData.stats.newSpecies}
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                New Species
              </div>
            </div>
          </div>

          {/* Stat 5: PhD Awarded */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <GraduationCap className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                0{profileData.stats.phdStudentsAwarded}
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                Ph.D. Awarded
              </div>
            </div>
          </div>

          {/* Stat 6: Teaching Exp */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0F291B]/50 border border-[#89C35C]/20">
            <div className="w-9 h-9 rounded-full border border-[#89C35C]/40 bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0">
              <Clock className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white font-serif">
                {profileData.stats.yearsExperience}+
              </div>
              <div className="text-[11px] text-[#EFE8D8]/70 leading-tight font-sans">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
