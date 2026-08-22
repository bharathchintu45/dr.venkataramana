"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/common/Navigation";
import { LeftConnectBar } from "@/components/common/LeftConnectBar";
import { forestAudio } from "@/lib/audio";

export default function PlantGalleryLayout({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const toggleAudio = () => {
    if (isMuted) {
      forestAudio.play();
      setIsMuted(false);
    } else {
      forestAudio.stop();
      setIsMuted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040D07] text-[#EFE8D8] selection:bg-[#2A6B48] selection:text-white">
      <Navigation activeSection="" isMuted={isMuted} toggleAudio={toggleAudio} />
      <LeftConnectBar />

      <main className="relative z-10 w-full pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
