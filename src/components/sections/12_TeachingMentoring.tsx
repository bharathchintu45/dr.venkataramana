"use client";

import React, { useState } from "react";
import Image from "next/image";
import { doctoralScholars } from "@/data/teaching";
import { X, Users, BookOpen, ClipboardList } from "lucide-react";

export const TeachingMentoring: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const teachingItems = [
    { number: "6", label: "PhD Students Awarded", icon: Users },
    { number: "20+", label: "M.Sc. Students Guided", icon: BookOpen },
    { number: "45+", label: "Guest & Extension Lectures Delivered", icon: ClipboardList }
  ];

  return (
    <section
      id="teaching"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/teaching-study.jpg"
          alt="Botanical study table with seedling sprout in water jar and antique books"
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
              11
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Teaching & Mentoring
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Teaching & Mentoring
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Guiding minds, nurturing the future
          </p>
        </div>

        {/* Left Card with 3 Metrics */}
        <div className="max-w-md my-auto">
          <div className="bg-[#07190E]/85 backdrop-blur-md rounded-2xl border border-[#89C35C]/35 p-6 sm:p-8 space-y-6 shadow-2xl">
            {teachingItems.map((item, idx) => {
              const Icon = item.icon;
              return (
              <div
                key={idx}
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#123120] flex items-center justify-center text-[#9FE870] shadow-[0_0_10px_rgba(137,195,92,0.3)] shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#A4E06A] transition-colors">
                    {item.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[#EFE8D8]/80 font-sans">
                    {item.label}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div />
      </div>

      {/* Teaching Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#0A1F13] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-[#EFE8D8] animate-modal-pop">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif-title font-bold text-white">
                  Supervised Doctoral Scholars (6 Awarded + 2 Working)
                </h3>
                <p className="text-xs text-[#EFE8D8]/70">
                  Doctoral research completed under Dr. M. Venkat Ramana at Osmania University
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3" data-lenis-prevent>
              {doctoralScholars.map((sch) => (
                <div
                  key={sch.id}
                  className="p-3.5 rounded-xl bg-[#07160D] border border-[#89C35C]/20"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-white text-sm">
                      {sch.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1B4B2E] text-[#A4E06A] font-bold text-[10px]">
                      Awarded {sch.yearAwarded}
                    </span>
                  </div>
                  <p className="text-xs text-[#EFE8D8]/80 italic mb-1.5">
                    &ldquo;{sch.thesisTitle}&rdquo;
                  </p>
                  <div className="text-[10px] text-[#C5A868]">
                    Specialization: {sch.area}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#050E08] border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
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
