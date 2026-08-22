"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Leaf, Mail, Flower2, Heart } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";

export const ForestFooter: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#journey" },
    { label: "Research Areas", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "Books", href: "#books" },
    { label: "Gallery", href: "#fieldwork" },
    { label: "Contact", href: "#contact" }
  ];

  const researchLinks = [
    { label: "Plant Systematics", href: "#research" },
    { label: "Biodiversity & Conservation", href: "#research" },
    { label: "Medicinal Botany", href: "#research" },
    { label: "Indian Cycads Conservation", href: "#research" }
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#05130A] border-t border-[#89C35C]/30 text-[#EFE8D8] pt-14 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              16
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Footer
            </span>
          </div>
        </div>

        {/* 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative">
          {/* Column 1: Profile & Socials */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#0A1F13] flex items-center justify-center text-[#A4E06A] shadow-botanical-glow">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white tracking-wide">
                  {profileData.name}
                </h3>
                <p className="text-xs text-[#89C35C] font-sans">
                  {profileData.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#EFE8D8]/80 leading-relaxed font-sans max-w-sm">
              Dedicated to the study of plants, conservation of biodiversity and building a sustainable future.
            </p>

            {/* Real Academic Profile Badges — matches Navigation & LeftConnectBar */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={profileData.researchGate}
                target="_blank"
                rel="noreferrer"
                aria-label="ResearchGate Profile"
                title="ResearchGate Profile"
                className="w-11 h-11 rounded-full border border-[#89C35C]/50 bg-[#0F2618] flex items-center justify-center text-[#89C35C] hover:text-white hover:bg-[#1E4D34] hover:border-[#9FE870] hover:scale-110 transition-all text-xs font-serif font-bold"
              >
                RG
              </a>
              <a
                href={profileData.orcidUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="ORCID Profile"
                title={`ORCID: ${profileData.orcid}`}
                className="w-11 h-11 rounded-full border border-[#A6CE39]/50 bg-[#0F2618] flex items-center justify-center text-[#A6CE39] hover:text-white hover:bg-[#1E4D34] hover:border-[#A6CE39] hover:scale-110 transition-all text-xs font-serif font-bold"
              >
                iD
              </a>
              <a
                href={profileData.vidwanUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Vidwan Profile"
                title={`VIDWAN ID: ${profileData.vidwanId}`}
                className="w-11 h-11 rounded-full border border-[#C5A868]/50 bg-[#0F2618] flex items-center justify-center text-[#C5A868] hover:text-white hover:bg-[#1E4D34] hover:border-[#E2C98F] hover:scale-110 transition-all text-xs font-serif font-bold"
              >
                V
              </a>
              <a
                href={`mailto:${profileData.emails[0]}`}
                aria-label="Send Email"
                title={profileData.emails[0]}
                className="w-11 h-11 rounded-full border border-[#89C35C]/50 bg-[#0F2618] flex items-center justify-center text-[#A4E06A] hover:text-white hover:bg-[#1E4D34] hover:scale-110 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-base font-serif font-bold text-[#A4E06A] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE8D8]/80 font-sans">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Research Areas & Botanical Flower Branch Illustration */}
          <div className="md:col-span-4 space-y-3 text-left relative">
            <h4 className="text-base font-serif font-bold text-[#A4E06A] tracking-wide">
              Research Areas
            </h4>
            <ul className="space-y-2 text-sm text-[#EFE8D8]/80 font-sans">
              {researchLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Botanical Flourish — placeholder outline until final artwork is supplied */}
            <div className="hidden lg:flex absolute right-0 -bottom-6 w-36 h-36 opacity-25 pointer-events-none items-center justify-center text-[#89C35C]">
              <Flower2 className="w-24 h-24" strokeWidth={0.75} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE8D8]/60 font-sans gap-3">
          <div>
            © 2026 Dr. M. Venkat Ramana. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#EFE8D8]/80">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#89C35C] fill-[#89C35C]" />
            <span>for Nature</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
