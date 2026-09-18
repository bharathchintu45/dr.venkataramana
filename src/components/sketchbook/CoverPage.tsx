import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, Leaf } from "lucide-react";
import { profileData } from "@/data/profile";

/** Facts about the notebook's contents, derived from the species data so
 *  the covers never state a count or date range the data doesn't back. */
export interface NotebookMeta {
  count: number;
  firstYear: number;
  lastYear: number;
  regions: string[];
}

const FRONT_COVER = {
  src: "/images/expeditions/2b7d80ea-0332-41c5-ba62-bfb7377c21fc.webp",
  alt: "A botanist surveying a forested hillside through binoculars",
  // Keeps the botanist's head and binoculars in the upper half, clear of
  // the title label pasted on the lower half of the board.
  position: "38% 52%",
};

const BACK_COVER = {
  src: "/images/landscapes/dsc-8774.webp",
  alt: "Forested hills running down to the sea",
  position: "50% 45%",
};

const COVER_SIZES = "(min-width: 900px) 480px, 82vw";

const COUNT_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

function countWord(n: number): string {
  return n < COUNT_WORDS.length ? COUNT_WORDS[n] : String(n);
}

function yearSpan({ firstYear, lastYear }: NotebookMeta): string {
  return firstYear === lastYear ? String(firstYear) : `${firstYear}–${lastYear}`;
}

/** Leaf 0's front face — the closed book. A full-bleed field photograph
 *  bound as a hardcover: hinge groove at the spine, a blind-stamped frame,
 *  and a pasted-on paper title label. */
export const CoverFront: React.FC<{ meta: NotebookMeta }> = ({ meta }) => (
  <div className="notebook-cover">
    <Image
      src={FRONT_COVER.src}
      alt={FRONT_COVER.alt}
      fill
      sizes={COVER_SIZES}
      className="object-cover"
      style={{ objectPosition: FRONT_COVER.position }}
    />
    <span className="notebook-cover__scrim" aria-hidden />
    <span className="notebook-cover__frame" aria-hidden />
    <span className="notebook-cover__hinge notebook-cover__hinge--left" aria-hidden />

    <div className="notebook-cover__body">
      <p className="stamp flex items-center gap-2 text-plate-ink">
        <Leaf className="h-3.5 w-3.5" aria-hidden />
        Field notebook
      </p>

      <div className="notebook-cover__label">
        <p className="stamp text-herbarium">Herbarium record</p>
        <p className="notebook-cover__title">Species new to science</p>
        <span className="notebook-cover__rule" aria-hidden />
        <p className="text-sm font-medium text-ink">{profileData.name}</p>
        <p className="mt-0.5 text-xs text-ink-muted">
          {meta.count} species described · {yearSpan(meta)}
        </p>
      </div>
    </div>
  </div>
);

/** Deterministic, purely decorative "accession barcode" built from the
 *  ORCID digits, so it's stable between renders and reads as a real label. */
function barsFrom(id: string): number[] {
  return id
    .replace(/\D/g, "")
    .split("")
    .flatMap((d) => [1 + (Number(d) % 3), 1 + ((Number(d) + 1) % 2)]);
}

/** The last leaf's back face — the book closed on its back. */
export const CoverBack: React.FC<{ meta: NotebookMeta }> = ({ meta }) => {
  const bars = barsFrom(profileData.orcid);
  return (
    <div className="notebook-cover">
      <Image
        src={BACK_COVER.src}
        alt={BACK_COVER.alt}
        fill
        sizes={COVER_SIZES}
        className="object-cover"
        style={{ objectPosition: BACK_COVER.position }}
      />
      <span className="notebook-cover__scrim" aria-hidden />
      <span className="notebook-cover__frame" aria-hidden />
      <span className="notebook-cover__hinge notebook-cover__hinge--right" aria-hidden />

      <div className="notebook-cover__body">
        <div className="max-w-[30ch]">
          <p className="stamp text-plate-ink-muted">Collected across</p>
          {meta.regions.map((region) => (
            <p key={region} className="notebook-cover__region">
              {region}
            </p>
          ))}
        </div>

        <div className="notebook-cover__label notebook-cover__label--compact">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{profileData.name}</p>
              <p className="mt-0.5 text-xs text-ink-muted">
                {profileData.department}, {profileData.university}
              </p>
              <p className="mt-0.5 text-xs text-ink-muted">
                IPNI author · <span className="font-semibold text-annotation">{profileData.ipniAuthorForm}</span>
              </p>
            </div>
            <div className="shrink-0 text-right" aria-hidden>
              <div className="flex h-7 items-stretch justify-end gap-[1.5px]">
                {bars.map((w, i) => (
                  <span key={i} className={i % 2 === 0 ? "bg-ink" : "bg-transparent"} style={{ width: `${w}px` }} />
                ))}
              </div>
              <p className="mt-1 font-mono text-[8px] tracking-wider text-ink-muted">{profileData.orcid}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** A tiling botanical sprig, drawn in the current text color. Each
 *  instance needs its own pattern id — the same endpaper can be on screen
 *  twice at once (static page + the copy on the turning leaf). */
const SprigPattern: React.FC = () => {
  const id = useId().replace(/:/g, "");
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
          <g fill="currentColor">
            <path d="M14 40c0-8 .4-15 1.6-22" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M14.4 31c-5.2-1.4-7.9-5.4-7.2-9.4 4.4.8 7.2 4.4 7.2 9.4z" />
            <path d="M15 24c4.2-1.8 6.6-5.6 6.4-9.6-3.8 .6-6.4 4.4-6.4 9.6z" />
            <path d="M42 50c0-6 .3-11 1.2-16" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M42.3 43c-3.9-1-5.9-4-5.4-7 3.3.6 5.4 3.3 5.4 7z" />
            <circle cx="43.4" cy="32.6" r="1.4" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

/** Inside the front cover — patterned endpaper with an ex-libris bookplate. */
export const EndpaperFront: React.FC = () => (
  <div className="notebook-endpaper">
    <SprigPattern />
    <div className="notebook-bookplate">
      <p className="stamp text-herbarium">Ex libris</p>
      <p className="mt-2 font-display text-xl italic leading-snug text-ink">{profileData.name}</p>
      <span className="notebook-cover__rule" aria-hidden />
      <p className="text-xs leading-relaxed text-ink-muted">
        {profileData.department}
        <br />
        {profileData.college}
        <br />
        {profileData.university}
      </p>
    </div>
  </div>
);

/** Inside the back cover — the same endpaper, with a round department stamp. */
export const EndpaperBack: React.FC = () => {
  const id = useId().replace(/:/g, "");
  const ringText = `${profileData.department} · ${profileData.university} · `;
  return (
    <div className="notebook-endpaper">
      <SprigPattern />
      <svg viewBox="0 0 160 160" className="notebook-stamp" aria-hidden>
        <defs>
          <path id={id} d="M80 80m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" />
        </defs>
        <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="80" cy="80" r="44" fill="none" stroke="currentColor" strokeWidth="1" />
        <text fontSize="10.5" letterSpacing="1.6" fill="currentColor" style={{ textTransform: "uppercase" }}>
          <textPath href={`#${id}`} textLength="360">
            {ringText}
          </textPath>
        </text>
        <g transform="translate(68 66)" fill="currentColor">
          <path d="M12 26c0-7 .3-13 1.4-19" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M12.4 18c-4.6-1.2-7-4.8-6.4-8.4 3.9.7 6.4 3.9 6.4 8.4z" />
          <path d="M13 12c3.7-1.6 5.8-5 5.6-8.5-3.3.5-5.6 3.9-5.6 8.5z" />
        </g>
      </svg>
    </div>
  );
};

/** Spread 1's right-hand page — the title page the cover opens onto. */
export const TitlePage: React.FC<{ meta: NotebookMeta }> = ({ meta }) => {
  const count = countWord(meta.count);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-paper-raised px-6 text-center">
      <span className="stamp text-herbarium">Field notebook</span>
      <h3 className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">Species new to science</h3>
      <p className="max-w-[26ch] text-xs leading-relaxed text-ink-secondary">
        {count.charAt(0).toUpperCase() + count.slice(1)} plants first described by {profileData.name}, drawn from
        field collections across peninsular India and the Andaman &amp; Nicobar Islands.
      </p>
      <p className="text-xs text-ink-muted">{yearSpan(meta)}</p>
      <BookOpen className="mt-2 h-5 w-5 text-herbarium" aria-hidden />
    </div>
  );
};

interface ColophonProps {
  interactive?: boolean;
}

/** The closing note and a way out to the full gallery — the last page before the back endpaper. */
export const Colophon: React.FC<ColophonProps> = ({ interactive = true }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-paper-raised px-6 text-center">
    <span className="stamp text-herbarium">End of record</span>
    <p className="max-w-[24ch] text-xs leading-relaxed text-ink-secondary">
      Full specimen data, additional habitat photography and citations for every species live in the plant gallery.
    </p>
    {interactive ? (
      <Link
        href="/plant-gallery"
        className="focus-ring mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-herbarium hover:text-herbarium-deep"
      >
        Browse the plant gallery
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    ) : (
      <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
        Browse the plant gallery
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    )}
  </div>
);
