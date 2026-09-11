"use client";

import React, { useState } from "react";
import { researchResourcesData, BotanicalResource } from "@/data/resources";
import { X, BookOpen, Database, Image as ImageIcon, GraduationCap, Download, ExternalLink, Sparkles } from "lucide-react";

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({
  isOpen,
  onClose,
  initialCategory
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialCategory || researchResourcesData[0].id
  );

  React.useEffect(() => {
    if (initialCategory) setActiveTab(initialCategory);
  }, [initialCategory]);

  if (!isOpen) return null;

  const currentResource = researchResourcesData.find((r) => r.id === activeTab) || researchResourcesData[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "research-papers":
        return <BookOpen className="w-4 h-4" />;
      case "plant-database":
        return <Database className="w-4 h-4" />;
      case "herbarium-images":
        return <ImageIcon className="w-4 h-4" />;
      case "study-materials":
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#07150C] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modal-pop">
        {/* Header */}
        <div className="p-6 border-b border-[#89C35C]/20 bg-gradient-to-r from-[#0A1C12] via-[#0D2417] to-[#0A1C12] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E4D34] border border-[#89C35C]/50 flex items-center justify-center text-[#9FE870]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-white">
                Botanical Research Resources & Archives
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/70">
                Scientific compendiums, digital databases, herbarium records, and educational tools
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

        {/* Tab Navigation */}
        <div className="p-3 bg-[#0A1C12] border-b border-[#89C35C]/20 flex flex-wrap gap-2">
          {researchResourcesData.map((res) => (
            <button
              key={res.id}
              onClick={() => setActiveTab(res.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === res.id
                  ? "bg-[#2A6B48] text-white border border-[#89C35C] shadow-botanical-glow"
                  : "bg-[#06120A] text-[#EFE8D8]/70 hover:text-white hover:bg-[#143523] border border-white/5"
              }`}
            >
              {getIcon(res.id)}
              <span>{res.title}</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" data-lenis-prevent>
          <div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#89C35C] font-semibold">
              {currentResource.category}
            </span>
            <h3 className="text-xl font-serif-title font-bold text-white mt-1">
              {currentResource.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#EFE8D8]/80 mt-1">
              {currentResource.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentResource.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0A1C12]/90 border border-[#89C35C]/20 hover:border-[#89C35C]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1E4D34] text-[#9FE870] border border-[#89C35C]/30">
                      {item.type}
                    </span>
                    <Download className="w-3.5 h-3.5 text-[#89C35C]" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#EFE8D8]/70 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Accessing resource: ${item.name}`)}
                  className="w-full py-1.5 rounded-lg bg-[#143523] hover:bg-[#1E4D34] border border-[#89C35C]/30 text-xs font-medium text-[#9FE870] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Access Resource</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050E08] border-t border-[#89C35C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs text-[#EFE8D8]/60">
          <div>Materials provided for scholarly and academic research reference.</div>
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
