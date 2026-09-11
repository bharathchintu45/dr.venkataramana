"use client";

import React from "react";
import { researchProjectsData, ResearchProject } from "@/data/projects";
import { X, Award, DollarSign, Calendar, Building, CheckCircle2, ShieldCheck } from "lucide-react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject?: ResearchProject | null;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  selectedProject
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#07150C] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modal-pop">
        {/* Header */}
        <div className="p-6 border-b border-[#89C35C]/20 bg-[#0A1C12] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E4D34] border border-[#89C35C]/50 flex items-center justify-center text-[#9FE870]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-white">
                Funded Research Projects & Grants
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/70">
                Total Research Grants: ₹1,23,76,000 INR · DST SERB, UNEP-GEF & HMDA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Projects List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" data-lenis-prevent>
          {researchProjectsData.map((project) => (
            <div
              key={project.id}
              className={`p-6 rounded-xl border transition-all ${
                selectedProject?.id === project.id
                  ? "bg-[#0E291B] border-[#9FE870] shadow-botanical-glow"
                  : "bg-[#0A1C12]/90 border-[#89C35C]/25 hover:border-[#89C35C]/60"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1E4D34] text-[#9FE870] border border-[#89C35C]/40">
                    Project {project.number}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      project.status === "Ongoing"
                        ? "bg-[#D4AF37]/20 text-[#E2C98F] border border-[#D4AF37]/40 animate-pulse"
                        : "bg-[#2A6B48]/30 text-[#89C35C] border border-[#89C35C]/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="text-sm font-mono font-bold text-[#E2C98F]">
                  Grant: {project.budgetFormatted}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-serif-title font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/75 mb-4 italic">
                {project.subtitle}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#050E08]/70 p-3.5 rounded-lg border border-white/5 mb-4">
                <div>
                  <span className="text-[#89C35C] font-semibold">Funding Agency: </span>
                  <span className="text-[#EFE8D8]/90">{project.fundingAgency}</span>
                </div>
                <div>
                  <span className="text-[#89C35C] font-semibold">Scheme / Ref: </span>
                  <span className="text-[#EFE8D8]/90">{project.scheme} ({project.refNo})</span>
                </div>
                <div>
                  <span className="text-[#89C35C] font-semibold">Principal Investigator: </span>
                  <span className="text-[#EFE8D8]/90">{project.principalInvestigator}</span>
                </div>
                <div>
                  <span className="text-[#89C35C] font-semibold">Duration: </span>
                  <span className="text-[#EFE8D8]/90">{project.duration}</span>
                </div>
              </div>

              {/* Objectives */}
              <div className="space-y-2 mb-3">
                <h4 className="text-xs uppercase font-serif tracking-wider text-[#C5A868] font-bold">
                  Core Objectives & Scope
                </h4>
                <ul className="space-y-1 text-xs text-[#EFE8D8]/80">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#89C35C] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="space-y-1 text-xs bg-[#143523]/30 p-3 rounded-lg border border-[#89C35C]/20">
                <span className="font-semibold text-[#9FE870]">Impact & Deliverables: </span>
                <span className="text-[#EFE8D8]/85">
                  {project.keyOutcomes.join(" · ")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050E08] border-t border-[#89C35C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs text-[#EFE8D8]/60">
          <div>Verified data strictly from official academic curriculum vitae.</div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#2A6B48] text-white hover:bg-[#388E5E] font-medium transition-colors self-end sm:self-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
