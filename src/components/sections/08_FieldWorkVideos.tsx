"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fieldworkVideos, FieldExpedition } from "@/data/fieldwork";
import { VideoModal } from "@/components/modals/VideoModal";
import { Play, ArrowRight } from "lucide-react";

export const FieldWorkVideos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExpedition, setSelectedExpedition] = useState<FieldExpedition | null>(null);

  const handleOpenVideo = (exp: FieldExpedition) => {
    setSelectedExpedition(exp);
    setModalOpen(true);
  };

  return (
    <section
      id="fieldwork"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/field-expedition.jpg"
          alt="Misty rainforest exploration environment background"
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
              07
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Field Work & Videos
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Field Work & Videos
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Moments from the field and research expeditions
          </p>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto my-auto w-full">
          {fieldworkVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenVideo(video)}
              className="group relative rounded-2xl overflow-hidden border-2 border-[#89C35C]/40 hover:border-[#A4E06A] transition-all duration-500 shadow-2xl cursor-pointer bg-black/60 aspect-[16/10] flex flex-col justify-between p-4"
            >
              {/* Poster Image */}
              <Image
                src={video.posterImage}
                alt={video.title}
                fill
                className="object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
              />

              <div />

              {/* Center Glowing Play Button */}
              <div className="relative z-10 my-auto mx-auto">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#1E4D34]/80 group-hover:border-[#A4E06A] transition-all shadow-xl">
                  <Play className="w-6 h-6 text-white fill-white ml-1 group-hover:text-[#A4E06A] group-hover:fill-[#A4E06A]" />
                </div>
              </div>

              {/* Bottom Caption Title */}
              <div className="relative z-10">
                <h3 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-[#A4E06A] transition-colors leading-snug drop-shadow-md">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setSelectedExpedition(fieldworkVideos[0]);
              setModalOpen(true);
            }}
            className="px-7 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
          >
            <span>Watch More Videos</span>
            <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedExpedition={selectedExpedition}
      />
    </section>
  );
};
