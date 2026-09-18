"use client";

import React, { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type { SpeciesDiscovery } from "@/data/species";
import { cn } from "@/lib/cn";
import { hasMotion } from "@/lib/motion";
import { useLeafTurn, type TurnDirection } from "./useLeafTurn";
import { SketchbookLeaf } from "./SketchbookLeaf";
import { SpeciesPhotoPage } from "./SpeciesPhotoPage";
import { SpeciesNotesPage } from "./SpeciesNotesPage";
import {
  CoverFront,
  CoverBack,
  EndpaperFront,
  EndpaperBack,
  TitlePage,
  Colophon,
  type NotebookMeta,
} from "./CoverPage";

type LeafFace =
  | { kind: "cover-front" }
  | { kind: "endpaper-front" }
  | { kind: "title" }
  | { kind: "photo"; species: SpeciesDiscovery }
  | { kind: "notes"; species: SpeciesDiscovery }
  | { kind: "colophon" }
  | { kind: "endpaper-back" }
  | { kind: "cover-back" };

interface Leaf {
  front: LeafFace;
  back: LeafFace;
}

/**
 * `n` species are bound between two hard covers as `n + 3` leaves:
 *
 *   leaf 0          front cover          / front endpaper
 *   leaf 1          title page           / photo, species[0]
 *   leaf k (2..n)   notes, species[k-2]  / photo, species[k-1]
 *   leaf n+1        notes, species[n-1]  / colophon
 *   leaf n+2        back endpaper        / back cover
 *
 * A species' photo and its notes sit on different leaves (offset by one)
 * so they face each other across one spread. Resting spreads run from 0
 * (closed on the front cover) to n+3 (closed on the back cover); spread s
 * shows leaves[s-1].back on the left and leaves[s].front on the right, and
 * species[i] is on spread i+2.
 */
function buildLeaves(species: SpeciesDiscovery[]): Leaf[] {
  const n = species.length;
  const inner: Leaf[] = Array.from({ length: n + 1 }, (_, i) => ({
    front: i === 0 ? { kind: "title" as const } : { kind: "notes" as const, species: species[i - 1] },
    back: i < n ? { kind: "photo" as const, species: species[i] } : { kind: "colophon" as const },
  }));
  return [
    { front: { kind: "cover-front" }, back: { kind: "endpaper-front" } },
    ...inner,
    { front: { kind: "endpaper-back" }, back: { kind: "cover-back" } },
  ];
}

const FIRST_SPECIES_SPREAD = 2;

function leftFace(leaves: Leaf[], spread: number): LeafFace | null {
  return spread >= 1 ? leaves[spread - 1].back : null;
}

function rightFace(leaves: Leaf[], spread: number): LeafFace | null {
  return spread < leaves.length ? leaves[spread].front : null;
}

interface RenderOpts {
  speciesIndex: Map<string, number>;
  meta: NotebookMeta;
  interactive?: boolean;
}

function renderFace(face: LeafFace, opts: RenderOpts): React.ReactNode {
  switch (face.kind) {
    case "cover-front":
      return <CoverFront meta={opts.meta} />;
    case "cover-back":
      return <CoverBack meta={opts.meta} />;
    case "endpaper-front":
      return <EndpaperFront />;
    case "endpaper-back":
      return <EndpaperBack />;
    case "title":
      return <TitlePage meta={opts.meta} />;
    case "colophon":
      return <Colophon interactive={opts.interactive} />;
    case "photo":
      return (
        <SpeciesPhotoPage species={face.species} sheetNumber={(opts.speciesIndex.get(face.species.id) ?? 0) + 1} />
      );
    case "notes":
      return <SpeciesNotesPage species={face.species} interactive={opts.interactive} />;
  }
}

/** Fraction of the scroll runway over which the cover opens; the rest is
 *  a short hold on the open title spread before the scene scrolls away. */
const OPEN_PORTION = 0.72;

interface SketchbookProps {
  species: SpeciesDiscovery[];
}

export const Sketchbook: React.FC<SketchbookProps> = ({ species }) => {
  const leaves = useMemo(() => buildLeaves(species), [species]);
  const speciesIndex = useMemo(() => new Map(species.map((s, i) => [s.id, i])), [species]);
  const meta = useMemo<NotebookMeta>(() => {
    const years = species.map((s) => s.year);
    return {
      count: species.length,
      firstYear: Math.min(...years),
      lastYear: Math.max(...years),
      regions: Array.from(new Set(species.map((s) => s.region))),
    };
  }, [species]);

  // SSR (and the pre-hydration client render) always renders the
  // carousel — the honest, fully-readable baseline. Only after mount do we
  // swap to the 3D book: a two-page spread on wide screens, one page at a
  // time on narrow ones. No JS at all means the snapshot below never
  // resolves and the carousel stays: every species remains in the HTML
  // for a crawler or a no-JS visitor.
  //
  // useSyncExternalStore, not useState+useEffect: on hosts that inject
  // extra markup into <head> (observed on Netlify's default output), the
  // resulting hydration mismatch at the document root was found to
  // permanently stop a useEffect-driven setLayout call from ever firing —
  // stuck showing the carousel to every visitor, motion or not. This
  // hook's snapshot is instead re-checked as part of React's own commit
  // cycle and was verified to keep working under that exact failure mode.
  const layout = useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(min-width: 900px)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => (window.matchMedia("(min-width: 900px)").matches ? "spread" : "single"),
    () => null as "spread" | "single" | null
  );

  if (!layout) {
    return <NotebookCarousel species={species} speciesIndex={speciesIndex} meta={meta} />;
  }

  // Keyed on the layout: crossing the breakpoint remounts the book shut
  // rather than trying to map a position between the two page models.
  return (
    <NotebookBook
      key={layout}
      single={layout === "single"}
      leaves={leaves}
      species={species}
      speciesIndex={speciesIndex}
      meta={meta}
    />
  );
};

function NotebookBook({
  single,
  leaves,
  species,
  speciesIndex,
  meta,
}: {
  single: boolean;
  leaves: Leaf[];
  species: SpeciesDiscovery[];
  speciesIndex: Map<string, number>;
  meta: NotebookMeta;
}) {
  const totalSpecies = species.length;
  const lastSpread = leaves.length;
  const {
    position,
    turn,
    stageRef,
    leafRef,
    stageStyle,
    canNext,
    canPrev,
    turnNext,
    turnPrev,
    scrubCover,
    pointerHandlers,
  } = useLeafTurn({ spreadCount: leaves.length + 1, single });
  const { spread, side } = position;

  // The book is only ever mounted client-side (see Sketchbook), so the
  // motion gate can be read during render. Reduced motion gets no pinned
  // scroll scene — the closed book simply opens on tap, click or →.
  const [scrollOpen] = useState(() => hasMotion());
  const runwayRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollOpen) return;
    const runway = runwayRef.current;
    const scene = sceneRef.current;
    if (!runway || !scene) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const travel = runway.offsetHeight - scene.offsetHeight;
      if (travel <= 0) return;
      const stickyTop = parseFloat(getComputedStyle(scene).top) || 0;
      const progress = (stickyTop - runway.getBoundingClientRect().top) / travel;
      scrubCover(Math.min(1, Math.max(0, progress / OPEN_PORTION)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [scrollOpen, scrubCover]);

  let staticLeft: LeafFace | null;
  let staticRight: LeafFace | null;
  let flyingLeaf: Leaf | null = null;
  let flyingDir: TurnDirection | null = null;

  // A single-page pan (leafIndex null) moves no leaf: the resting spread
  // just slides across.
  if (turn && turn.leafIndex !== null) {
    flyingLeaf = leaves[turn.leafIndex];
    flyingDir = turn.dir;
    if (turn.dir === "next") {
      staticLeft = leftFace(leaves, spread);
      staticRight = rightFace(leaves, spread + 1);
    } else {
      staticLeft = leftFace(leaves, spread - 1);
      staticRight = rightFace(leaves, spread);
    }
  } else {
    staticLeft = leftFace(leaves, spread);
    staticRight = rightFace(leaves, spread);
  }

  const speciesAt = spread - FIRST_SPECIES_SPREAD;
  const liveMessage =
    spread === 0
      ? "Field notebook, closed. Press the right arrow key to open it."
      : spread === 1
      ? "Title page: species new to science"
      : speciesAt >= 0 && speciesAt < totalSpecies
      ? `Spread ${speciesAt + 1} of ${totalSpecies}: ${species[speciesAt].scientificName}`
      : spread === lastSpread
      ? "Back cover. Press the left arrow key to reopen the notebook."
      : "Closing note: browse the full plant gallery";

  const hint =
    spread === 0
      ? scrollOpen
        ? "Scroll to open the notebook"
        : single
        ? "Tap the cover to open"
        : "Tap the cover or press → to open"
      : single
      ? "Swipe, or tap either edge of the page, to turn"
      : "Drag, swipe, or press ← → to turn the page";

  // The step back from the first inside page is the one that shuts the cover.
  const prevClosesCover = spread === 1 && (!single || side === "left");

  const renderOpts: RenderOpts = { speciesIndex, meta };
  // In single-page mode the resting page that's panned off-screen keeps
  // its links out of the tab order and out of the accessibility tree.
  const leftHidden = single && !turn && side !== "left";
  const rightHidden = single && !turn && side !== "right";

  return (
    <div ref={runwayRef} className={cn(scrollOpen && "notebook__runway")}>
      <div ref={sceneRef} className={cn(scrollOpen && "notebook__scene")}>
        <div className={cn(single && "notebook__clip")}>
          <div
            ref={stageRef}
            className={cn("notebook__stage", single && "notebook__stage--single")}
            role="group"
            aria-roledescription="notebook"
            aria-label="Field notebook of species new to science"
            tabIndex={0}
            style={stageStyle}
            {...pointerHandlers}
          >
            <div className="notebook__book">
              <div className="notebook__shadow" aria-hidden />
              {staticLeft && (
                <div className="notebook__page notebook__page--left" aria-hidden={leftHidden || undefined}>
                  <div className="notebook__face-content">
                    {renderFace(staticLeft, { ...renderOpts, interactive: !leftHidden })}
                  </div>
                </div>
              )}
              {staticRight && (
                <div className="notebook__page notebook__page--right" aria-hidden={rightHidden || undefined}>
                  <div className="notebook__face-content">
                    {renderFace(staticRight, { ...renderOpts, interactive: !rightHidden })}
                  </div>
                </div>
              )}
              <div className="notebook__spine" />
              {flyingLeaf && flyingDir && (
                <SketchbookLeaf
                  ref={leafRef}
                  dir={flyingDir}
                  front={renderFace(flyingLeaf.front, { ...renderOpts, interactive: false })}
                  back={renderFace(flyingLeaf.back, { ...renderOpts, interactive: false })}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={turnPrev}
            disabled={!canPrev}
            aria-label={prevClosesCover ? "Close the notebook" : "Previous page"}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-secondary transition-colors duration-fast hover:border-herbarium hover:text-herbarium-deep disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <div className="flex items-center gap-1.5" aria-hidden>
            {Array.from({ length: totalSpecies }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors duration-fast",
                  speciesAt === i ? "bg-herbarium" : "bg-line-strong"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={turnNext}
            disabled={!canNext}
            aria-label={spread === 0 ? "Open the notebook" : "Next page"}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-secondary transition-colors duration-fast hover:border-herbarium hover:text-herbarium-deep disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-xs text-ink-muted">
          {spread === 0 && scrollOpen && <ChevronDown className="notebook__cue h-3.5 w-3.5" aria-hidden />}
          {hint}
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {liveMessage}
      </p>
    </div>
  );
}

function NotebookCarousel({
  species,
  speciesIndex,
  meta,
}: {
  species: SpeciesDiscovery[];
  speciesIndex: Map<string, number>;
  meta: NotebookMeta;
}) {
  return (
    <div
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="group"
      aria-label="Field notebook of species new to science"
    >
      <article className="relative min-h-[26rem] w-[82%] shrink-0 snap-center overflow-hidden rounded-lg shadow-raised sm:w-[58%] lg:w-[40%]">
        <CoverFront meta={meta} />
      </article>
      {species.map((sp) => (
        <article
          key={sp.id}
          className="w-[82%] shrink-0 snap-center overflow-hidden rounded-lg border border-line bg-paper-raised shadow-card sm:w-[58%] lg:w-[40%]"
        >
          <div className="relative aspect-[4/3] w-full">
            <SpeciesPhotoPage species={sp} sheetNumber={(speciesIndex.get(sp.id) ?? 0) + 1} />
          </div>
          <SpeciesNotesPage species={sp} />
        </article>
      ))}
    </div>
  );
}
