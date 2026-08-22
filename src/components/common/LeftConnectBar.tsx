"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";

export const LeftConnectBar: React.FC = () => {
  return (
    <aside
      aria-label="Academic and Contact Links"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden min-[1440px]:flex flex-col items-center gap-4"
    >
      {/* Rotated text label */}
      <div className="rotate-[-90deg] origin-center text-[10px] uppercase font-sans tracking-[0.25em] text-[#EFE8D8]/50 mb-6 whitespace-nowrap">
        Follow & Connect
      </div>

      <div className="w-px h-8 bg-gradient-to-b from-[#89C35C]/60 to-[#89C35C]/10" />

      {/* ResearchGate Button */}
      <a
        href={profileData.researchGate}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ResearchGate Profile"
        className="group relative w-9 h-9 rounded-full bg-[#0A1C12]/80 backdrop-blur-md border border-[#89C35C]/30 hover:border-[#9FE870] flex items-center justify-center text-xs font-bold text-[#89C35C] hover:text-white hover:bg-[#1E4D34] hover:shadow-botanical-glow transition-all"
      >
        <span>RG</span>
        <span className="absolute left-12 px-2.5 py-1 rounded bg-[#06120A] border border-[#89C35C]/40 text-xs text-[#9FE870] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg whitespace-nowrap">
          ResearchGate Profile
        </span>
      </a>

      {/* ORCID Button */}
      <a
        href={profileData.orcidUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ORCID Profile"
        className="group relative w-9 h-9 rounded-full bg-[#0A1C12]/80 backdrop-blur-md border border-[#A6CE39]/30 hover:border-[#A6CE39] flex items-center justify-center text-xs font-bold text-[#A6CE39] hover:text-white hover:bg-[#1E4D34] hover:shadow-botanical-glow transition-all"
      >
        <span>iD</span>
        <span className="absolute left-12 px-2.5 py-1 rounded bg-[#06120A] border border-[#A6CE39]/40 text-xs text-[#A6CE39] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg whitespace-nowrap">
          ORCID: {profileData.orcid}
        </span>
      </a>

      {/* VIDWAN Button */}
      <a
        href={profileData.vidwanUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VIDWAN Profile"
        className="group relative w-9 h-9 rounded-full bg-[#0A1C12]/80 backdrop-blur-md border border-[#C5A868]/30 hover:border-[#E2C98F] flex items-center justify-center text-xs font-bold text-[#C5A868] hover:text-white hover:bg-[#1E4D34] hover:shadow-gold-glow transition-all"
      >
        <span>V</span>
        <span className="absolute left-12 px-2.5 py-1 rounded bg-[#06120A] border border-[#C5A868]/40 text-xs text-[#E2C98F] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg whitespace-nowrap">
          VIDWAN ID: {profileData.vidwanId}
        </span>
      </a>

      {/* Email Link */}
      <a
        href={`mailto:${profileData.emails[0]}`}
        aria-label="Send Email"
        className="group relative w-9 h-9 rounded-full bg-[#0A1C12]/80 backdrop-blur-md border border-[#89C35C]/30 hover:border-[#9FE870] flex items-center justify-center text-[#EFE8D8]/70 hover:text-white hover:bg-[#1E4D34] hover:shadow-botanical-glow transition-all"
      >
        <Mail className="w-4 h-4" />
        <span className="absolute left-12 px-2.5 py-1 rounded bg-[#06120A] border border-[#89C35C]/40 text-xs text-[#9FE870] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-lg whitespace-nowrap">
          {profileData.emails[0]}
        </span>
      </a>

      <div className="w-px h-8 bg-gradient-to-t from-[#89C35C]/60 to-[#89C35C]/10" />
    </aside>
  );
};
