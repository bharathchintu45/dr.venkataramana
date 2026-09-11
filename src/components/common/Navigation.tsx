"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { Menu, X, Volume2, VolumeX, Leaf } from "lucide-react";
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
    { name: "Species Gallery", href: "/plant-gallery" },
    { name: "Projects", href: "#projects" },
    { name: "Books", href: "#books" },
    { name: "Gallery", href: "#fieldwork" },
    { name: "Contact", href: "#contact" }
  ];

  const identityBadges = [
    { label: "RG", title: "ResearchGate Profile", href: profileData.researchGate },
    { label: "iD", title: `ORCID: ${profileData.orcid}`, href: profileData.orcidUrl },
    { label: "V", title: `VIDWAN ID: ${profileData.vidwanId}`, href: profileData.vidwanUrl }
  ];

  // Hash links only make sense when rendered on the homepage itself. Off
  // the homepage they need to navigate back to "/" and land on the hash
  // (e.g. "/#research") rather than trying to scroll an element that
  // doesn't exist on the current page.
  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#040D07]/70 backdrop-blur-2xl border-white/10 shadow-lg py-3"
          : "bg-[#040D07]/30 backdrop-blur-xl border-white/[0.06] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <Leaf className="w-5 h-5 text-[#89C35C]" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-serif-title font-semibold text-base tracking-wide group-hover:text-[#9FE870] transition-colors">
              Dr. M. Venkat Ramana
            </div>
            <div className="text-[11px] text-[#EFE8D8]/55 font-sans tracking-wider">
              Botanist · Researcher · Educator
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-white/5 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith("#");
            const isActive = isHashLink
              ? isHome && activeSection === link.href.replace("#", "")
              : pathname?.startsWith(link.href);
            const linkClassName = `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
              isActive
                ? "bg-[#1E4D34]/80 text-[#9FE870] font-semibold"
                : "text-[#EFE8D8]/70 hover:text-white hover:bg-white/10"
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
        <div className="hidden lg:flex items-center gap-2">
          {identityBadges.map((badge) => (
            <a
              key={badge.label}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-bold bg-white/5 border border-white/10 text-[#EFE8D8]/80 hover:text-[#9FE870] hover:bg-white/10 hover:border-white/20 transition-all"
              title={badge.title}
            >
              {badge.label}
            </a>
          ))}

          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-2.5 rounded-full border transition-all ${
              !isMuted
                ? "bg-[#1E4D34]/60 border-[#89C35C]/50 text-[#9FE870]"
                : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20"
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
            className={`p-2.5 rounded-full border transition-all ${
              !isMuted
                ? "bg-[#1E4D34]/60 border-[#89C35C]/50 text-[#9FE870]"
                : "bg-white/5 border-white/10 text-white/50"
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
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#EFE8D8] hover:text-[#9FE870] hover:bg-white/10 transition-all"
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
        <div className="lg:hidden bg-[#040D07]/80 backdrop-blur-2xl border-t border-white/10 px-6 py-5">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              const linkClassName =
                "px-4 py-2.5 rounded-xl text-sm text-[#EFE8D8]/85 hover:text-white hover:bg-white/10 font-medium transition-colors";

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
          <div className="flex items-center gap-2.5 pt-4 mt-3 border-t border-white/10">
            {identityBadges.map((badge) => (
              <a
                key={badge.label}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold bg-white/5 border border-white/10 text-[#EFE8D8]/80 hover:text-[#9FE870] hover:bg-white/10"
                title={badge.title}
              >
                {badge.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
