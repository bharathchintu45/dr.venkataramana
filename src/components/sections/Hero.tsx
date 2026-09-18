"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Metric } from "@/components/ui/Metric";
import { Highlighter } from "@/components/ui/Highlighter";
import { scrollToSection } from "@/lib/smoothScroll";

const CREDENTIALS = [
  { label: "ORCID", value: profileData.orcid, href: profileData.orcidUrl },
  { label: "ResearchGate", value: "Profile", href: profileData.researchGate },
  { label: "Vidwan", value: profileData.vidwanId, href: profileData.vidwanUrl },
  { label: "IPNI author", value: profileData.ipniAuthorForm, href: "https://www.ipni.org/a/" + profileData.ipniAuthorForm.replace(/\s+/g, "") },
];

const METRICS = [
  { countTo: profileData.stats.articles, suffix: "+", label: "Research articles" },
  { countTo: profileData.stats.books, label: "Books authored" },
  { countTo: profileData.stats.newSpecies, label: "Species new to science" },
  { countTo: profileData.citations, label: "Citations" },
  { countTo: profileData.stats.yearsExperience, suffix: "+", label: "Years in the field" },
];

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-paper pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-16">
        <div data-reveal style={{ ["--reveal-y" as string]: "16px" }}>
          {/* A full job title reads worse tracked and uppercase than the short
              herbarium-tag labels `.stamp` is built for, so this one line
              intentionally breaks from that pattern. */}
          <p className="text-sm font-medium tracking-wide text-herbarium">{profileData.designation}</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium leading-[1.08] text-ink">
            {profileData.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-secondary">
            Plant taxonomist describing new species across peninsular India and the Andaman &amp; Nicobar
            Islands, with a research focus on{" "}
            <Highlighter action="underline">Indian cycad conservation</Highlighter> and biodiversity
            documentation.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3.5">
            {CREDENTIALS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring touch-target relative rounded-sm border border-line-strong bg-paper-raised px-3 py-1.5 text-xs text-ink-secondary transition-colors hover:border-herbarium hover:text-herbarium-deep"
              >
                <span className="font-semibold text-ink">{c.label}</span>
                <span className="mx-1.5 text-line-strong">·</span>
                {c.value}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-4 w-4" />}
              onClick={() => scrollToSection("#contact")}
            >
              Get in touch
            </Button>
            <Button href="/cv" variant="secondary" size="lg" iconLeft={<Download className="h-4 w-4" />}>
              Download CV
            </Button>
          </div>

          <div
            data-reveal-group
            data-reveal-stagger="tight"
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-5"
          >
            {METRICS.map((m) => (
              <div key={m.label} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "10px" }}>
                <Metric countTo={m.countTo} suffix={m.suffix} label={m.label} />
              </div>
            ))}
          </div>
        </div>

        <div data-reveal style={{ ["--reveal-y" as string]: "20px" }} className="mx-auto w-full max-w-[280px] lg:max-w-none">
          <div className="overflow-hidden rounded border border-line bg-paper-raised shadow-raised">
            <div className="relative aspect-[4/5] w-full bg-plate">
              <Image
                src="/images/expeditions/img-e7992.webp"
                alt={`Portrait of ${profileData.name} in the field`}
                fill
                sizes="(max-width: 1024px) 280px, 360px"
                priority
                className="object-cover"
              />
            </div>
            <div className="border-t border-line px-4 py-3">
              <p className="stamp text-herbarium">Field portrait</p>
              <p className="mt-1 text-xs text-ink-muted">{profileData.college}, {profileData.university}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
