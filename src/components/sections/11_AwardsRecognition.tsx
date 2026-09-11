"use client";

import React, { useState } from "react";
import Image from "next/image";
import { awardsData, AwardItem } from "@/data/awards";
import { X, Award } from "lucide-react";

export const AwardsRecognition: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const awardsWreaths = [
    {
      title: "Best Research Award",
      subtitle: "Antony Mukkath – Prof. K.S. Manilal Award (IAAT)",
      year: "2011",
      dataIndex: 0
    },
    {
      title: "Young Scientist Award",
      subtitle: "Senior Subject Expert, EPTRI Hyderabad",
      year: "2020",
      dataIndex: 1
    },
    {
      title: "Outstanding Teacher Award",
      subtitle: "Subject Expert & Lab Advisor, FCRI Telangana",
      year: "2021",
      dataIndex: 2
    },
    {
      title: "Lifetime Excellence Award",
      subtitle: "Expert Panelist, Telangana State Biodiversity Board",
      year: "2023",
      dataIndex: 3
    }
  ];

  return (
    <section
      id="awards"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/awards-forest.jpg"
          alt="Sunlit mossy forest stone trail with golden god rays background"
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
              10
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Awards & Recognitions
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Awards & Recognitions
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Honors that encourage excellence
          </p>
        </div>

        {/* 4 Golden Laurel Wreaths in Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto my-auto w-full">
          {awardsWreaths.map((award, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedAward(awardsData[award.dataIndex % awardsData.length])}
              className="flex flex-col items-center text-center gap-3 group cursor-pointer bg-[#0A1C12]/80 border border-[#89C35C]/25 hover:border-[#D4AF37]/50 rounded-2xl p-6 shadow-xl hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-[#142A1D] border-2 border-[#D4AF37]/70 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-500">
                <Award className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#F5EADB] leading-tight">
                  {award.title}
                </h3>
                <div className="text-xs font-mono font-bold text-[#E2C98F] mt-1">
                  {award.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Slogan */}
        <div className="text-center mt-6">
          <p className="font-serif italic text-lg sm:text-xl text-[#F5EADB] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Recognizing dedication, inspiring to do more.
          </p>
        </div>
      </div>

      {/* Award Details Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A1F13] border border-[#C5A868]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#EFE8D8] space-y-4 animate-modal-pop" data-lenis-prevent>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#241A0A] flex items-center justify-center text-[#D4AF37] shrink-0 shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#3D2B0F] text-[#E2C98F] text-xs font-mono font-bold">
                    {selectedAward.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    {selectedAward.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedAward(null)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs font-semibold text-[#89C35C]">
              Awarding Body: {selectedAward.conferredBy}
            </div>

            <p className="text-xs sm:text-sm text-[#EFE8D8]/85 leading-relaxed">
              {selectedAward.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#142A1D] border border-[#89C35C]/30 text-xs">
              <span className="font-semibold text-[#A4E06A]">Event / Location: </span>
              <span className="text-[#EFE8D8]/90">{selectedAward.eventOrPlace}</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAward(null)}
                className="px-4 py-1.5 rounded-lg bg-[#234B30] text-white hover:bg-[#2D603E] text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
