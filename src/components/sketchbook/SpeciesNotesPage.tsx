import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ShieldAlert, ArrowRight } from "lucide-react";
import type { SpeciesDiscovery } from "@/data/species";
import { getConservationCategory } from "@/lib/species";
import { Badge } from "@/components/ui/Badge";

interface SpeciesNotesPageProps {
  species: SpeciesDiscovery;
  /** false inside the flying leaf, where content is transient and must
   *  not be tabbable — see SketchbookLeaf. */
  interactive?: boolean;
}

/** The right-hand page of a species spread — the specimen-sheet vocabulary
 *  from `plant-gallery/[slug]/page.tsx`, condensed to fit a book page. */
export const SpeciesNotesPage: React.FC<SpeciesNotesPageProps> = ({ species, interactive = true }) => (
  <div className="flex h-full flex-col gap-2 bg-paper-raised px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-5">
    <Badge tone="annotation">{getConservationCategory(species.conservationStatus)}</Badge>

    <div>
      <h3 className="font-display text-lg italic leading-snug text-ink sm:text-xl">{species.scientificName}</h3>
      <p className="mt-1 text-xs font-medium text-annotation">{species.authority}</p>
    </div>

    <dl className="grid grid-cols-2 gap-x-3 gap-y-2 border-t border-line pt-3 text-xs">
      <div className="flex items-center gap-1.5 text-ink-secondary">
        <Calendar className="h-3.5 w-3.5 shrink-0 text-herbarium" aria-hidden />
        <span>
          <dt className="inline">Described</dt> <dd className="inline font-semibold text-ink">{species.year}</dd>
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-ink-secondary">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-herbarium" aria-hidden />
        <dd className="truncate">{species.region}</dd>
      </div>
      <div className="col-span-2 text-ink-secondary">
        <dt className="inline">Family</dt>: <dd className="inline font-semibold text-ink">{species.family}</dd>
        <span className="mx-1.5 text-line-strong">·</span>
        <dt className="inline">Habit</dt>: <dd className="inline font-semibold text-ink">{species.growthHabit}</dd>
      </div>
    </dl>

    {/* Takes whatever height the page has left, so on a short phone page
        the diagnostic notes drop out (and a long description fades)
        instead of pushing the footer off the page. See globals.css. */}
    <div className="notebook-notes__more">
      <p className="text-[13px] leading-relaxed text-ink-secondary">{species.description}</p>

      <div>
        <h4 className="stamp text-herbarium">Diagnostic notes</h4>
        <ul className="mt-1.5 space-y-1 text-[12px] leading-snug text-ink-secondary">
          {species.diagnosticFeatures.slice(0, 2).map((feature, i) => (
            <li key={i} className="flex gap-1.5">
              <span className="font-bold text-herbarium">·</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="flex items-center justify-between gap-2 border-t border-line pt-3">
      <div className="flex min-w-0 items-center gap-1.5 text-xs text-ink-muted">
        <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-annotation" aria-hidden />
        <span className="truncate">{species.conservationStatus}</span>
      </div>
      {interactive ? (
        <Link
          href={`/plant-gallery/${species.id}`}
          className="focus-ring inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-herbarium hover:text-herbarium-deep"
        >
          Full record
          <ArrowRight className="h-3 w-3" aria-hidden />
        </Link>
      ) : (
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-ink-muted">
          Full record
          <ArrowRight className="h-3 w-3" aria-hidden />
        </span>
      )}
    </div>
  </div>
);
