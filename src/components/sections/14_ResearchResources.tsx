"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ResourcesModal } from "@/components/modals/ResourcesModal";
import { ArrowRight, BookOpen, Leaf, Images, ScrollText } from "lucide-react";

export const ResearchResources: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState<string>("research-papers");

  const resourceCards = [
    { id: "research-papers", title: "Research Papers", icon: BookOpen },
    { id: "plant-database", title: "Plant Database", icon: Leaf },
    { id: "herbarium-images", title: "Herbarium Images", icon: Images },
    { id: "study-materials", title: "Study Materials", icon: ScrollText }
  ];

  const handleOpenCategory = (catId: string) => {
    setSelectedCat(catId);
    setModalOpen(true);
  };

  return (
    <section
      id="resources"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/microscope-lab.jpg"
          alt="Botanical research desk with brass microscope and specimen slides background"
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
              13
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Research Resources
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Research Resources
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Useful resources for researchers and students
          </p>
        </div>

        {/* Left 4 Cards Grid & Button */}
        <div className="max-w-2xl text-left my-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {resourceCards.map((res) => {
              const Icon = res.icon;
              return (
              <div
                key={res.id}
                onClick={() => handleOpenCategory(res.id)}
                className="bg-[#07190E]/85 backdrop-blur-md rounded-2xl border border-[#89C35C]/40 p-5 flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-2xl min-h-[11rem]"
              >
                <div className="mb-3 text-[#9FE870] group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif-title font-bold text-sm sm:text-base text-white group-hover:text-[#A4E06A] transition-colors leading-snug">
                  {res.title}
                </h3>
              </div>
              );
            })}
          </div>

          <div>
            <button
              onClick={() => {
                setSelectedCat("research-papers");
                setModalOpen(true);
              }}
              className="px-7 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
            >
              <span>Explore Resources</span>
              <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div />
      </div>

      <ResourcesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={selectedCat}
      />
    </section>
  );
};
