"use client";

import React from "react";
import { scrollToSection } from "@/lib/smoothScroll";

interface JourneyTrailProps {
  activeSection: string;
}

const TRAIL_STEPS: { id: string; label: string }[] = [
  { id: "hero", label: "Welcome" },
  { id: "journey", label: "My Journey" },
  { id: "research", label: "Research Areas" },
  { id: "publications", label: "Publications" },
  { id: "species", label: "New Species" },
  { id: "projects", label: "Research Projects" },
  { id: "books", label: "Books Authored" },
  { id: "fieldwork", label: "Field Work" },
  { id: "achievements", label: "Achievements" },
  { id: "conferences", label: "Conferences" },
  { id: "awards", label: "Awards" },
  { id: "teaching", label: "Teaching" },
  { id: "memberships", label: "Memberships" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" }
];

export const JourneyTrail: React.FC<JourneyTrailProps> = ({ activeSection }) => {
  const activeIndex = Math.max(
    0,
    TRAIL_STEPS.findIndex((s) => s.id === activeSection)
  );

  const handleJump = (id: string) => {
    scrollToSection(`#${id}`);
  };

  return (
    <aside
      aria-label="Journey progress trail"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden min-[1440px]:flex flex-col items-center"
    >
      <div className="relative flex flex-col items-center gap-0">
        {TRAIL_STEPS.map((step, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;
          return (
            <div key={step.id} className="relative flex flex-col items-center group">
              {idx > 0 && (
                <span
                  className={`w-px h-4 transition-colors duration-500 ${
                    isPassed || isActive
                      ? "bg-[#89C35C]/70"
                      : "bg-[#89C35C]/15"
                  }`}
                />
              )}
              <button
                onClick={() => handleJump(step.id)}
                aria-label={`Jump to ${step.label}`}
                aria-current={isActive ? "true" : undefined}
                className="relative flex items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-2.5 h-2.5 bg-[#A4E06A] shadow-[0_0_10px_3px_rgba(164,224,106,0.65)]"
                      : isPassed
                      ? "w-1.5 h-1.5 bg-[#89C35C]/80"
                      : "w-1.5 h-1.5 bg-[#89C35C]/25"
                  }`}
                />
                <span className="absolute right-6 px-2.5 py-1 rounded bg-[#06120A] border border-[#89C35C]/40 text-[11px] text-[#9FE870] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                  {step.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
