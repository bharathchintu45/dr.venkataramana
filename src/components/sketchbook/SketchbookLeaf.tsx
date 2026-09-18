"use client";

import React, { forwardRef } from "react";
import type { TurnDirection } from "./useLeafTurn";

interface SketchbookLeafProps {
  dir: TurnDirection;
  front: React.ReactNode;
  back: React.ReactNode;
}

/**
 * The one leaf currently in motion. Purely presentational and
 * content-agnostic — `useLeafTurn` writes `--angle` onto this node every
 * frame via the forwarded ref, so this component itself never re-renders
 * during a turn.
 *
 * The initial inline `--angle` matters: for a "prev" turn the leaf must
 * *start* already rotated -180deg (its current, at-rest, back-facing
 * appearance) or it would flash front-facing for one frame before the
 * ref-driven rAF loop catches up.
 *
 * Marked `aria-hidden` — it's a transient, decorative mid-flight state;
 * the meaningful before/after content lives in the static left/right
 * pages, which is where real interactive elements (and focus) stay.
 */
export const SketchbookLeaf = forwardRef<HTMLDivElement, SketchbookLeafProps>(
  ({ dir, front, back }, ref) => (
    <div
      ref={ref}
      className="notebook__leaf"
      aria-hidden="true"
      style={{ ["--angle" as string]: dir === "next" ? "0deg" : "-180deg" }}
    >
      <div className="notebook__face notebook__face--front">
        <div className="notebook__face-content">{front}</div>
        <span className="notebook__shade" />
        <span className="notebook__sheen" />
      </div>
      <div className="notebook__face notebook__face--back">
        <div className="notebook__face-content">{back}</div>
        <span className="notebook__shade" />
        <span className="notebook__sheen" />
      </div>
    </div>
  )
);
SketchbookLeaf.displayName = "SketchbookLeaf";
