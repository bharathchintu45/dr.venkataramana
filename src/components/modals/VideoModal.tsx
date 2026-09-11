"use client";

import React from "react";
import Image from "next/image";
import { fieldworkVideos, FieldExpedition, mediaFeatures } from "@/data/fieldwork";
import { X, Play, MapPin, Calendar, Film, Tv, CheckCircle2, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExpedition?: FieldExpedition | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  selectedExpedition
}) => {
  const [activeItem, setActiveItem] = React.useState<FieldExpedition | null>(
    selectedExpedition || fieldworkVideos[0]
  );

  React.useEffect(() => {
    if (selectedExpedition) setActiveItem(selectedExpedition);
  }, [selectedExpedition]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#07150C] border border-[#89C35C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-modal-pop">
        {/* Header */}
        <div className="p-6 border-b border-[#89C35C]/20 bg-gradient-to-r from-[#0A1C12] via-[#0D2417] to-[#0A1C12] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E4D34] border border-[#89C35C]/50 flex items-center justify-center text-[#9FE870]">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-white">
                Field Work Expeditions & Media Archive
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/70">
                Botanical exploration footage, island surveys, and television broadcast features
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-6" data-lenis-prevent>
          {/* Main Feature / Video Screen */}
          <div className="flex-1 flex flex-col">
            {activeItem && (
              <div className="space-y-4">
                {/* Visual Screen Box */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-[#89C35C]/40 bg-black group shadow-2xl">
                  <Image
                    src={activeItem.posterImage}
                    alt={activeItem.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                    <a
                      href={activeItem.videoUrl || "https://www.youtube.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-[#1E4D34]/90 border border-[#89C35C] flex items-center justify-center text-white shadow-botanical-glow hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Play Video"
                    >
                      <Play className="w-7 h-7 text-[#9FE870] fill-[#9FE870] ml-1" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                    <span className="font-semibold">{activeItem.category}</span>
                    <span>{activeItem.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl font-serif-title font-bold text-white mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EFE8D8]/80 leading-relaxed mb-4">
                    {activeItem.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold">
                      Expedition Highlights
                    </h4>
                    <ul className="space-y-1 text-xs text-[#EFE8D8]/80">
                      {activeItem.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#89C35C] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#143523]/30 p-3 rounded-lg border border-[#89C35C]/30 text-xs">
                    <span className="font-semibold text-[#9FE870]">Key Discoveries: </span>
                    <span className="text-[#EFE8D8]/85">{activeItem.findings.join(" · ")}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Other Expeditions & TV Broadcasts */}
          <div className="w-full lg:w-80 space-y-5">
            <div>
              <h4 className="text-xs uppercase font-serif tracking-wider text-[#C5A868] font-bold mb-3 flex items-center gap-1.5">
                <Film className="w-4 h-4" /> Expedition Archives
              </h4>
              <div className="space-y-2">
                {fieldworkVideos.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveItem(exp)}
                    className={`w-full text-left p-2.5 rounded-lg border flex items-center gap-3 transition-all ${
                      activeItem?.id === exp.id
                        ? "bg-[#1E4D34] border-[#89C35C] text-white"
                        : "bg-[#0A1C12]/80 border-white/5 text-[#EFE8D8]/70 hover:bg-[#143523] hover:text-white"
                    }`}
                  >
                    <div className="relative w-14 h-10 rounded overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={exp.posterImage}
                        alt={exp.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate">{exp.title}</div>
                      <div className="text-[10px] text-[#89C35C] truncate">{exp.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Media & TV Features */}
            <div>
              <h4 className="text-xs uppercase font-serif tracking-wider text-[#C5A868] font-bold mb-3 flex items-center gap-1.5">
                <Tv className="w-4 h-4" /> Television & Media
              </h4>
              <div className="space-y-2">
                {mediaFeatures.map((m, idx) => (
                  <a
                    key={idx}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 rounded-lg bg-[#0A1C12] border border-white/10 hover:border-[#89C35C] transition-all group"
                  >
                    <div className="flex items-center justify-between text-[10px] text-[#89C35C] font-semibold mb-1">
                      <span>{m.channel}</span>
                      <span>{m.date}</span>
                    </div>
                    <div className="text-xs text-white group-hover:text-[#9FE870] transition-colors leading-snug line-clamp-2">
                      {m.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050E08] border-t border-[#89C35C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs text-[#EFE8D8]/60">
          <div>Authentic field expeditions and science outreach footage.</div>
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
