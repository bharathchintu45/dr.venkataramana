"use client";

import React from "react";
import Image from "next/image";
import { achievementStats } from "@/data/achievements";
import { FileText, BookOpen, GraduationCap, Flower2, TrendingUp, Leaf } from "lucide-react";

export const AchievementsMilestones: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "articles":
        return FileText;
      case "books":
        return BookOpen;
      case "phd":
        return GraduationCap;
      case "species":
        return Flower2;
      case "experience":
        return TrendingUp;
      default:
        return Leaf;
    }
  };

  return (
    <section
      id="achievements"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/waterfall-clearing.jpg"
          alt="Waterfall stream in sunlit forest clearing background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              09
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Achievements & Milestones
            </span>
          </div>
        </div>

        {/* Center Title & Leaf Ornament */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Achievements & Milestones
          </h2>
          <div className="flex items-center justify-center gap-2 py-1">
            <div className="w-12 h-px bg-[#89C35C]/50" />
            <Leaf className="w-4 h-4 text-[#A4E06A]" strokeWidth={1.75} />
            <div className="w-12 h-px bg-[#89C35C]/50" />
          </div>
        </div>

        {/* 5 Dark Glass Rounded Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto my-auto w-full">
          {achievementStats.map((stat) => {
            const Icon = getIcon(stat.id);
            return (
            <div
              key={stat.id}
              className="bg-[#07190E]/85 backdrop-blur-md rounded-2xl border border-[#89C35C]/35 p-5 flex flex-col items-center justify-between text-center group hover:-translate-y-2 transition-all duration-500 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#123120] flex items-center justify-center text-[#9FE870] shadow-[0_0_12px_rgba(137,195,92,0.4)] mb-3 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white group-hover:text-[#A4E06A] transition-colors">
                  {stat.metric}
                </div>
                <div className="text-xs sm:text-sm font-serif font-semibold text-white/90 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#EFE8D8]/70 mt-0.5 leading-snug font-sans">
                  {stat.subLabel}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Italic Quote Banner */}
        <div className="text-center mt-6">
          <p className="font-editorial italic text-xl sm:text-2xl text-[#FAF2DC] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            &ldquo;The study of plants is the study of life itself.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
