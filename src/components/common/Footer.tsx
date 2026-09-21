"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { profileData } from "@/data/profile";
import { scrollToSection } from "@/lib/smoothScroll";
import { Pointer } from "@/components/ui/Pointer";
import { CV_DOWNLOAD_URL, CV_DOWNLOAD_FILENAME } from "@/lib/cv";

const QUICK_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Species", href: "/plant-gallery" },
  { label: "Publications", href: "/publications" },
  { label: "Photo Gallery", href: "/photo-gallery" },
  { label: "Sacred Groves", href: "/sacred-groves" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const IDENTIFIERS = [
  { label: "ResearchGate", href: profileData.researchGate },
  { label: `ORCID ${profileData.orcid}`, href: profileData.orcidUrl },
  { label: `Vidwan ${profileData.vidwanId}`, href: profileData.vidwanUrl },
];

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer id="footer" className="relative w-full bg-plate px-5 py-14 text-plate-ink sm:px-8 print:hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-12">
        <div className="space-y-3 sm:col-span-5">
          <h2 className="font-display text-xl font-medium text-plate-ink">{profileData.name}</h2>
          <p className="text-sm text-plate-ink-muted">{profileData.tagline}</p>
          <p className="max-w-sm text-sm leading-relaxed text-plate-ink-muted">
            Documenting plant diversity across peninsular India and the Andaman &amp; Nicobar Islands:
            taxonomy, biodiversity conservation, and 7 species new to science.
          </p>
          <ul className="pt-1 text-sm text-plate-ink-muted sm:space-y-1.5">
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <a href={`mailto:${profileData.emails[0]}`} className="focus-ring inline-flex min-h-11 items-center rounded hover:text-plate-ink sm:min-h-0">
                {profileData.emails[0]}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <a href={`tel:${profileData.contactPhone.replace(/\s+/g, "")}`} className="focus-ring inline-flex min-h-11 items-center rounded hover:text-plate-ink sm:min-h-0">
                {profileData.contactPhone}
              </a>
            </li>
            <li className="flex items-start gap-2 pt-2.5 sm:pt-0">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>
                {profileData.college}, {profileData.university}
              </span>
            </li>
          </ul>
        </div>

        <nav className="space-y-3 sm:col-span-3" aria-label="Footer">
          <h3 className="text-sm font-semibold text-plate-ink">Quick links</h3>
          <ul className="grid grid-cols-2 text-sm text-plate-ink-muted sm:block sm:space-y-2">
            {QUICK_LINKS.map((link) => {
              const isHash = link.href.startsWith("#");
              if (isHash && isHome) {
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="focus-ring inline-flex min-h-11 items-center rounded transition-colors hover:text-plate-ink sm:min-h-0"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={link.label}>
                  <Link href={isHash ? `/${link.href}` : link.href} className="focus-ring inline-flex min-h-11 items-center rounded transition-colors hover:text-plate-ink sm:min-h-0">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 sm:col-span-4">
          <h3 className="text-sm font-semibold text-plate-ink">Academic identifiers</h3>
          <ul className="text-sm text-plate-ink-muted sm:space-y-2">
            {IDENTIFIERS.map((id) => (
              <li key={id.label}>
                <a
                  href={id.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center rounded transition-colors hover:text-plate-ink sm:min-h-0"
                >
                  {id.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={CV_DOWNLOAD_URL}
            download={CV_DOWNLOAD_FILENAME}
            className="focus-ring touch-target relative inline-block rounded border border-plate-ink/25 px-3.5 py-2 text-xs font-semibold text-plate-ink transition-colors hover:border-plate-ink/50"
          >
            Download CV
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-2 border-t border-plate-ink/15 pt-6 text-xs text-plate-ink-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
        <span>Department of Botany, {profileData.university}</span>
      </div>

      {/* A separate line, not a third item in the row above — that row is
          already justify-between with two spans and would get cramped.
          The wrapping div is what <Pointer> hijacks (it hides the cursor
          on its own parentElement), so it must span only this sentence,
          not the whole footer. Must stay a <div>: Pointer renders a probe
          <div> + a motion.div, which is invalid inside a <p>. */}
      <div className="mx-auto mt-4 flex w-full max-w-6xl justify-center text-xs text-plate-ink-muted">
        <div className="relative w-fit">
          Designed and developed by{" "}
          <a
            href="https://instagram.com/aravind_maharaj6"
            target="_blank"
            rel="noreferrer"
            className="focus-ring font-medium text-plate-ink underline decoration-plate-ink/30 underline-offset-4 transition-colors duration-fast hover:decoration-plate-ink"
          >
            @aravind_maharaj6
          </a>
          <Pointer>
            <Heart className="h-6 w-6 fill-heart text-heart" aria-hidden />
          </Pointer>
        </div>
      </div>
    </footer>
  );
};
