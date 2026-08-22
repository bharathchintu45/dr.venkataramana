"use client";

import React, { useState } from "react";
import Image from "next/image";
import { conferencesData } from "@/data/conferences";
import { ArrowRight, X, MapPin, Leaf, ScrollText, Landmark, Users } from "lucide-react";

export const ConferencesTalks: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const conferenceStats = [
    { number: "50+", label: "Conferences & Seminars Attended", icon: ScrollText },
    { number: "45+", label: "Invited & Extension Talks Delivered", icon: Landmark },
    { number: "15+", label: "Seminars, Conferences & Workshops Organized", icon: Users }
  ];

  return (
    <section
      id="conferences"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/conference-hall.jpg"
          alt="Academic conference lecture hall with podium and microphone background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              10
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Conferences & Talks
            </span>
          </div>
        </div>

        {/* Content Area: Left side text & stats */}
        <div className="max-w-xl text-left my-auto space-y-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight drop-shadow-lg">
              Conferences & <br />
              Invited Talks
            </h2>
            <div className="flex items-center gap-2 py-2">
              <div className="w-8 h-px bg-[#89C35C]/50" />
              <Leaf className="w-3.5 h-3.5 text-[#A4E06A]" strokeWidth={1.75} />
              <div className="w-12 h-px bg-[#89C35C]/50" />
            </div>
            <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans italic">
              Sharing knowledge, inspiring minds
            </p>
          </div>

          {/* 3 Metric Rows */}
          <div className="space-y-4">
            {conferenceStats.map((item, idx) => {
              const Icon = item.icon;
              return (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#0A1F13]/80 backdrop-blur-md flex items-center justify-center text-[#9FE870] shadow-md shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white">
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

          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div />
      </div>

      {/* Conference List Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#0A1F13] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-[#EFE8D8]">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif-title font-bold text-white">
                  Conferences & Invited Lectures
                </h3>
                <p className="text-xs text-[#EFE8D8]/70">
                  Key scientific presentations and conferences organized
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
              {conferencesData.map((conf) => (
                <div
                  key={conf.id}
                  className="p-3.5 rounded-xl bg-[#07160D] border border-[#89C35C]/20"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#1B4B2E] text-[#A4E06A] font-bold text-[10px]">
                      {conf.role} · {conf.year}
                    </span>
                    <span className="text-[#C5A868]">{conf.dates}</span>
                  </div>
                  <h4 className="text-sm font-serif-title font-bold text-white leading-snug">
                    {conf.title}
                  </h4>
                  <p className="text-xs text-[#A4E06A] mt-0.5">{conf.event}</p>
                  <div className="text-[11px] text-[#EFE8D8]/60 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#89C35C]" />
                    <span>{conf.location}</span>
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
