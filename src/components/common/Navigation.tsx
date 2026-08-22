"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { Menu, X, Volume2, VolumeX, ExternalLink, Leaf } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";

interface NavProps {
  activeSection: string;
  isMuted: boolean;
  toggleAudio: () => void;
}

export const Navigation: React.FC<NavProps> = ({
  activeSection,
  isMuted,
  toggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#journey" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Species Gallery", href: "/plant-gallery" },
    { name: "Projects", href: "#projects" },
    { name: "Books", href: "#books" },
    { name: "Gallery", href: "#fieldwork" },
    { name: "Contact", href: "#contact" }
  ];

  // Hash links only make sense when rendered on the homepage itself. Off
  // the homepage they need to navigate back to "/" and land on the hash
  // (e.g. "/#publications") rather than trying to scroll an element that
  // doesn't exist on the current page.
  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#06120A]/90 backdrop-blur-md py-3 border-b border-[#89C35C]/20 shadow-2xl"
            : "bg-gradient-to-b from-[#040D07]/90 via-[#040D07]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#89C35C]/40 bg-[#0A1C12] flex items-center justify-center p-1.5 shadow-botanical-glow transition-transform group-hover:scale-105">
              <Leaf className="w-5 h-5 text-[#89C35C]" />
            </div>
            <div>
              <div className="text-white font-serif-title font-semibold text-base sm:text-lg tracking-wide group-hover:text-[#9FE870] transition-colors">
                Dr. M. Venkat Ramana
              </div>
              <div className="text-xs text-[#EFE8D8]/60 font-sans tracking-wider">
                Botanist · Researcher · Educator
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A1C12]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#89C35C]/25 shadow-inner">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              const isActive = isHashLink
                ? isHome && activeSection === link.href.replace("#", "")
                : pathname?.startsWith(link.href);
              const linkClassName = `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                isActive
                  ? "bg-[#1E4D34] text-[#9FE870] shadow-sm font-semibold border border-[#89C35C]/40"
                  : "text-[#EFE8D8]/80 hover:text-white hover:bg-white/5"
              }`;

              if (isHashLink && isHome) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={linkClassName}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link key={link.name} href={resolveHref(link.href)} className={linkClassName}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* ResearchGate Badge */}
            <a
              href={profileData.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-[#0A1C12]/80 border border-[#89C35C]/30 text-[#EFE8D8] hover:text-[#9FE870] hover:border-[#9FE870] transition-all"
              title="ResearchGate Profile"
            >
              <span className="font-bold text-[#89C35C]">RG</span>
              <span className="hidden md:inline text-[11px]">ResearchGate</span>
            </a>

            {/* ORCID Badge */}
            <a
              href={profileData.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-[#0A1C12]/80 border border-[#A6CE39]/30 text-[#EFE8D8] hover:text-[#A6CE39] hover:border-[#A6CE39] transition-all"
              title={`ORCID: ${profileData.orcid}`}
            >
              <span className="font-bold text-[#A6CE39]">iD</span>
              <span className="hidden md:inline text-[11px]">ORCID</span>
            </a>

            {/* Vidwan Badge */}
            <a
              href={profileData.vidwanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-[#0A1C12]/80 border border-[#C5A868]/30 text-[#EFE8D8] hover:text-[#E2C98F] hover:border-[#E2C98F] transition-all"
              title={`VIDWAN ID: ${profileData.vidwanId}`}
            >
              <span className="font-bold text-[#C5A868]">V</span>
              <span className="hidden md:inline text-[11px]">Vidwan</span>
            </a>

            {/* Ambient Sound Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2.5 rounded-full border transition-all ${
                !isMuted
                  ? "bg-[#1E4D34] border-[#89C35C] text-[#9FE870] shadow-botanical-glow"
                  : "bg-[#0A1C12]/80 border-white/10 text-white/50 hover:text-white hover:border-white/30"
              }`}
              title={isMuted ? "Unmute Forest Atmosphere" : "Mute Forest Atmosphere"}
              aria-label="Toggle Forest Audio"
            >
              {!isMuted ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleAudio}
              className={`p-2.5 rounded-full border ${
                !isMuted
                  ? "bg-[#1E4D34] border-[#89C35C] text-[#9FE870]"
                  : "bg-[#0A1C12] border-white/10 text-white/50"
              }`}
              aria-label="Toggle Audio"
            >
              {!isMuted ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#0A1C12] border border-[#89C35C]/30 text-[#EFE8D8] hover:text-[#9FE870]"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#06120A]/95 backdrop-blur-xl border-b border-[#89C35C]/20 px-6 py-5 transition-all">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isHashLink = link.href.startsWith("#");
                const linkClassName =
                  "px-4 py-2.5 rounded-lg text-sm text-[#EFE8D8] hover:text-[#9FE870] hover:bg-[#1E4D34]/40 font-medium";

                if (isHashLink && isHome) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        scrollToSection(link.href);
                      }}
                      className={linkClassName}
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={resolveHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={linkClassName}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10">
              <a
                href={profileData.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-xs bg-[#0A1C12] border border-[#89C35C]/30 text-[#89C35C]"
              >
                ResearchGate
              </a>
              <a
                href={profileData.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-xs bg-[#0A1C12] border border-[#A6CE39]/30 text-[#A6CE39]"
              >
                ORCID
              </a>
              <a
                href={profileData.vidwanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-xs bg-[#0A1C12] border border-[#C5A868]/30 text-[#C5A868]"
              >
                Vidwan
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
