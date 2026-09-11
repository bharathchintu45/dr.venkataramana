"use client";

import React, { useState } from "react";
import Image from "next/image";
import { botanicalJourney, Milestone } from "@/data/journey";
import { CheckCircle2, X, Leaf } from "lucide-react";

export const BotanicalJourney: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const milestonesDisplay = [
    {
      year: "2005",
      title: "Sparked my passion for botany",
      role: "Lecturer in Botany",
      institution: "Osmania University Campus / Kakatiya Degree College",
      location: "Telangana",
      position: { top: "25%", left: "15%" },
      dataIndex: 0
    },
    {
      year: "2010",
      title: "Research Associate, Botanical Survey of India",
      role: "Research Associate (ANRC)",
      institution: "Botanical Survey of India",
      location: "Andaman & Nicobar Islands",
      position: { top: "58%", left: "24%" },
      dataIndex: 1
    },
    {
      year: "2013",
      title: "Assistant Professor, Nizam College",
      role: "Assistant Professor",
      institution: "Nizam College, Osmania University",
      location: "Hyderabad",
      position: { top: "45%", left: "48%" },
      dataIndex: 2
    },
    {
      year: "2017",
      title: "Assistant Professor & Head (I/C), Osmania University",
      role: "Assistant Professor & Head (I/C)",
      institution: "UCS Saifabad, Osmania University",
      location: "Hyderabad",
      position: { top: "28%", left: "70%" },
      dataIndex: 3
    },
    {
      year: "Present",
      title: "Continuing the journey of research & teaching",
      role: "Senior Botanist & Mentor",
      institution: "Department of Botany, Osmania University",
      location: "Hyderabad",
      position: { top: "62%", left: "80%" },
      dataIndex: 4
    }
  ];

  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/botanical-journey.jpg"
          alt="Botanical stone path journey through lush forest canopy"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              02
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              My Botanical Journey
            </span>
          </div>
        </div>

        {/* Center Section Header */}
        <div className="text-center max-w-2xl mx-auto my-4 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            My Botanical Journey
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans italic drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            A path of learning, discovery and dedication
          </p>
        </div>

        {/* Interactive Stone Path with Step Pins */}
        <div className="relative w-full h-[520px] hidden md:block">
          {milestonesDisplay.map((m, idx) => (
            <div
              key={idx}
              style={{ top: m.position.top, left: m.position.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
              onClick={() => setSelectedMilestone(botanicalJourney[m.dataIndex])}
            >
              {/* Pin Icon & Year */}
              <div className="flex items-center gap-3 bg-[#07170E]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#89C35C]/50 hover:border-[#A4E06A] shadow-2xl group-hover:scale-105 transition-all">
                <div className="w-9 h-9 rounded-full border-2 border-[#89C35C] bg-[#143823] flex items-center justify-center text-[#A4E06A] shrink-0 shadow-[0_0_12px_rgba(137,195,92,0.5)]">
                  <Leaf className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="text-base font-serif font-bold text-white">
                    {m.year}
                  </div>
                  <div className="text-xs text-[#EFE8D8]/80 font-sans max-w-[150px] leading-tight">
                    {m.title}
                  </div>
                </div>
              </div>

              {/* Vertical Dashed Line pointing to stone step */}
              <div className="w-px h-10 border-l-2 border-dashed border-[#89C35C]/70 my-1" />
              <div className="w-3 h-3 rounded-full bg-[#89C35C] shadow-[0_0_8px_#89C35C]" />
            </div>
          ))}
        </div>

        {/* Mobile View: Vertical Timeline Card Stack */}
        <div className="md:hidden space-y-3 my-6">
          {botanicalJourney.map((item) => (
            <div
              key={item.year}
              onClick={() => setSelectedMilestone(item)}
              className="p-4 rounded-xl bg-[#081C10]/85 border border-[#89C35C]/30 flex items-start gap-3 text-left"
            >
              <div className="w-10 h-10 rounded-full border border-[#89C35C] bg-[#143823] flex items-center justify-center text-[#A4E06A] font-bold text-xs shrink-0">
                {item.year}
              </div>
              <div>
                <div className="text-xs text-[#89C35C] font-semibold">{item.role}</div>
                <div className="text-sm font-serif font-bold text-white">{item.title}</div>
                <div className="text-xs text-[#EFE8D8]/70 mt-0.5">{item.institution}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Milestone Details Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0A1F13] border border-[#89C35C]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#EFE8D8] space-y-4 animate-modal-pop" data-lenis-prevent>
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#1B4B2E] text-[#A4E06A] text-xs font-mono font-bold">
                  {selectedMilestone.year}
                </span>
                <h3 className="text-2xl font-serif-title font-bold text-white mt-1">
                  {selectedMilestone.title}
                </h3>
                <div className="text-xs text-[#C5A868] mt-0.5">
                  {selectedMilestone.role} · {selectedMilestone.institution}, {selectedMilestone.location}
                </div>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE8D8]/85 leading-relaxed">
              {selectedMilestone.description}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-1.5">
              <h4 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-bold">
                Key Highlights
              </h4>
              <ul className="space-y-1 text-xs text-[#EFE8D8]/80">
                {selectedMilestone.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#89C35C] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="px-4 py-2 rounded-lg bg-[#234B30] text-white hover:bg-[#2D603E] text-xs font-semibold"
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
