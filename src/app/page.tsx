"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/common/Navigation";
import { LeftConnectBar } from "@/components/common/LeftConnectBar";
import { JourneyTrail } from "@/components/common/JourneyTrail";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { ScrollAnimations } from "@/components/common/ScrollAnimations";
import { ForestEntrance } from "@/components/sections/01_ForestEntrance";
import { BotanicalJourney } from "@/components/sections/02_BotanicalJourney";
import { ResearchAreas } from "@/components/sections/03_ResearchAreas";
import { SpeciesDiscoveries } from "@/components/sections/05_SpeciesDiscovery";
import { ResearchProjects } from "@/components/sections/06_ResearchProjects";
import { BooksAuthored } from "@/components/sections/07_BooksAuthored";
import { FieldWorkVideos } from "@/components/sections/08_FieldWorkVideos";
import { AchievementsMilestones } from "@/components/sections/09_AchievementsMilestones";
import { ConferencesTalks } from "@/components/sections/10_ConferencesTalks";
import { AwardsRecognition } from "@/components/sections/11_AwardsRecognition";
import { TeachingMentoring } from "@/components/sections/12_TeachingMentoring";
import { ProfessionalMemberships } from "@/components/sections/13_ProfessionalMemberships";
import { ResearchResources } from "@/components/sections/14_ResearchResources";
import { ContactClearing } from "@/components/sections/15_ContactClearing";
import { ForestFooter } from "@/components/sections/16_ForestFooter";
import { forestAudio } from "@/lib/audio";
import { scrollToSection } from "@/lib/smoothScroll";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const activeSectionRef = useRef<string>("hero");
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Active section observer on scroll
  useEffect(() => {
    const sections = [
      "hero",
      "journey",
      "research",
      "publications",
      "species",
      "projects",
      "books",
      "fieldwork",
      "achievements",
      "conferences",
      "awards",
      "teaching",
      "memberships",
      "resources",
      "contact"
    ];

    // Track intersection ratios for every section and always activate
    // whichever one is most visible right now — a single "last one wins"
    // pass on isIntersecting alone falls over on fast jumps (nav clicks,
    // Page Down, scrollbar drags) where several sections briefly overlap.
    const ratios = new Map<string, number>();

    const pickActive = () => {
      let bestId = activeSectionRef.current;
      let bestRatio = 0;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestRatio > 0 && bestId !== activeSectionRef.current) {
        activeSectionRef.current = bestId;
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        pickActive();
      },
      { threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleAudio = () => {
    if (isMuted) {
      forestAudio.play();
      setIsMuted(false);
    } else {
      forestAudio.stop();
      setIsMuted(true);
    }
  };

  const handleEnterForest = () => {
    scrollToSection("#journey");
    // Optionally start peaceful forest audio on user interaction
    if (isMuted) {
      forestAudio.play();
      setIsMuted(false);
    }
  };

  const handleDiscoverMore = () => {
    scrollToSection("#research");
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#040D07] text-[#EFE8D8] selection:bg-[#2A6B48] selection:text-white">
      {/* Buttery smooth scroll + forest-walk scroll animations */}
      <SmoothScroll />
      <ScrollAnimations />

      {/* Top Header Navigation */}
      <Navigation
        activeSection={activeSection}
        isMuted={isMuted}
        toggleAudio={toggleAudio}
      />

      {/* Floating Left Connect Bar */}
      <LeftConnectBar />

      {/* Right-edge journey progress trail */}
      <JourneyTrail activeSection={activeSection} />

      {/* 16 Sequential Botanical Expedition Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 01 Forest Entrance (Hero) */}
        <ForestEntrance
          onEnterForest={handleEnterForest}
          onDiscoverMore={handleDiscoverMore}
        />

        {/* 02 Botanical Journey (Timeline) */}
        <BotanicalJourney />

        {/* 03 Research Areas (Parchment Cards) */}
        <ResearchAreas />

        {/* 04 Publications (Open Notebook) */}
        <Publications onOpenCatalog={() => setPubModalOpen(true)} />

        {/* 05 Species Discoveries (Herbarium Cards) */}
        <SpeciesDiscoveries />

        {/* 06 Research Projects (Clipboard Camp) */}
        <ResearchProjects />

        {/* 07 Books Authored (Table Display) */}
        <BooksAuthored />

        {/* 08 Field Work & Videos (Gallery) */}
        <FieldWorkVideos />

        {/* 09 Achievements & Milestones (Waterfall Stats) */}
        <AchievementsMilestones />

        {/* 10 Conferences & Talks (Podium Lecture Hall) */}
        <ConferencesTalks />

        {/* 11 Awards & Recognitions (Golden Laurels) */}
        <AwardsRecognition />

        {/* 12 Teaching & Mentoring (Study Desk Seedling) */}
        <TeachingMentoring />

        {/* 13 Professional Memberships (Emblem Badges) */}
        <ProfessionalMemberships />

        {/* 14 Research Resources (Microscope Lab) */}
        <ResearchResources />

        {/* 15 Get in Touch / Contact (Sunlit Clearing & Signpost) */}
        <ContactClearing />
      </main>

      {/* 16 Forest Footer */}
      <ForestFooter />

      {/* Global Searchable Publications Modal */}
      <PublicationsModal
        isOpen={pubModalOpen}
        onClose={() => setPubModalOpen(false)}
      />
    </div>
  );
}
