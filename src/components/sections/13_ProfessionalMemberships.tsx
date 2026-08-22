"use client";

import React from "react";
import Image from "next/image";
import { membershipsData } from "@/data/memberships";

export const ProfessionalMemberships: React.FC = () => {
  return (
    <section
      id="memberships"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/memberships-forest.jpg"
          alt="Majestic mossy forest tree with sunbeams background"
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
              13
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Professional Memberships
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Professional Memberships
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Being part of global botanical communities
          </p>
        </div>

        {/* 5 Circular Badges in Horizontal Row connected by green arrows */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-6xl mx-auto my-auto w-full">
          {membershipsData.map((m, idx) => (
            <React.Fragment key={m.id}>
              <div className="flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-transform duration-500 max-w-[160px]">
                {/* Circular Badge Emblem */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2 bg-[#091D11]/90 border-2 border-[#89C35C]/60 flex items-center justify-center shadow-[0_0_15px_rgba(137,195,92,0.4)] mb-3">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <Image
                      src={m.badgeImage}
                      alt={m.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-xs font-serif font-bold text-[#A4E06A] uppercase tracking-wider">
                  {m.membershipType}
                </div>
                <div className="text-xs sm:text-sm font-serif font-semibold text-white leading-snug mt-0.5">
                  {m.name}
                </div>
              </div>

              {/* Connecting Arrow between badges */}
              {idx < membershipsData.length - 1 && (
                <div className="hidden lg:block text-[#89C35C] text-lg font-bold">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div />
      </div>
    </section>
  );
};
