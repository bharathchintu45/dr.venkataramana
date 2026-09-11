"use client";

import React, { useState } from "react";
import Image from "next/image";
import { researchProjectsData, ResearchProject } from "@/data/projects";
import { ProjectsModal } from "@/components/modals/ProjectsModal";
import { ArrowRight, Compass, ClipboardList, Sprout, Trees } from "lucide-react";

const projectIcons: Record<string, React.ElementType> = {
  "eastern-ghats-papikonda": Compass,
  "pbr-project": ClipboardList,
  "cycas-serb-project": Sprout,
  "botanical-garden-hmda": Trees
};

export const ResearchProjects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  const featured = researchProjectsData[0];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/projects-camp.jpg"
          alt="Field research camp foliage background"
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
              05
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Major Research Projects
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Major Research Projects
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Exploring, understanding and conserving plant diversity
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto my-auto w-full">
          {/* Left: Field Log Card (typographic — no illustration until real artwork is supplied) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl bg-[#E8DEC7] p-6 shadow-2xl border-4 border-[#3D2914] flex flex-col justify-between text-[#261D12]">
              <div className="text-center">
                <span className="text-[10px] uppercase font-serif tracking-[0.2em] text-[#6B532F] font-bold">
                  Field Research Log
                </span>
                <h3 className="text-xl font-serif-title font-bold text-[#261D12] mt-1 leading-snug">
                  {featured.title}
                </h3>
              </div>

              <div className="my-auto flex flex-col items-center justify-center gap-3 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#3D2914]/50 flex items-center justify-center text-[#3D2914]">
                  <Compass className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-[#5A4526] leading-relaxed px-2">
                  {featured.subtitle}
                </p>
              </div>

              <div className="text-center text-xs text-[#6B532F] font-serif border-t border-[#C5A868]/40 pt-2">
                {featured.fundingAgency}
              </div>
            </div>
          </div>

          {/* Right: Project Rows — mapped directly from real project data */}
          <div className="lg:col-span-7 space-y-4">
            {researchProjectsData.map((project) => {
              const Icon = projectIcons[project.id] ?? Compass;
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setModalOpen(true);
                  }}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#091D11]/85 backdrop-blur-md border border-[#89C35C]/30 hover:border-[#A4E06A] transition-all cursor-pointer group shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#123120] flex items-center justify-center text-[#9FE870] shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(137,195,92,0.3)]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-base sm:text-lg font-serif-title font-bold text-white group-hover:text-[#A4E06A] transition-colors leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#EFE8D8]/75 mt-0.5 leading-relaxed font-sans line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA Button */}
            <div className="pt-3 text-left">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setModalOpen(true);
                }}
                className="px-6 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProjectsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProject={selectedProject}
      />
    </section>
  );
};
