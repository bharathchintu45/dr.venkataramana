"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { hasMotion } from "@/lib/motion";

export type TurnDirection = "next" | "prev";
export type PageSide = "left" | "right";

export interface TurnState {
  dir: TurnDirection;
  /** Index into the leaf array of the one leaf currently in motion, or
   *  null for a single-page-mode pan across to the facing page. */
  leafIndex: number | null;
}

export interface BookPosition {
  spread: number;
  /** Which page of the spread is centred. Only single-page mode uses it. */
  side: PageSide;
}

interface UseLeafTurnOptions {
  /** Number of resting spreads = number of leaves + 1. */
  spreadCount: number;
  /**
   * Single-page mode, for narrow screens: one page is centred at a time.
   * Stepping forward pans from a left page to its facing right page, or
   * turns the leaf under a right page while panning so it lands centred.
   */
  single: boolean;
}

interface Spring {
  v: number;
  target: number;
  k: number;
  c: number;
  onDone?: () => void;
}

// Reimplemented from the geometry in github.com/MengTo/sketchbook (see the
// comment in globals.css) — a full turn is a drag across 62% of the page
// area's width, it commits past 42% progress or a fast enough flick, and
// the two spring constants are its "committing" vs "cancelling" feel.
const DRAG_SPAN = 0.62;
const COMMIT_T = 0.42;
const COMMIT_VELOCITY = 1.1;
const TAP_THRESHOLD = 6;
const COMMIT_SPRING = { k: 170, c: 26 };
const CANCEL_SPRING = { k: 150, c: 24 };
// Scroll-scrubbed cover: a softer, still critically-damped spring that
// chases the scroll position, so wheel/trackpad steps read as one glide.
const SCRUB_SPRING = { k: 110, c: 21 };

const START: BookPosition = { spread: 0, side: "right" };

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

/** The move one step `dir` from `pos` makes, or null at either end. */
function stepFrom(
  pos: BookPosition,
  dir: TurnDirection,
  single: boolean,
  maxSpread: number
): { turn: TurnState; to: BookPosition } | null {
  const { spread, side } = pos;
  if (dir === "next") {
    if (spread >= maxSpread) return null;
    if (single && side === "left") return { turn: { dir, leafIndex: null }, to: { spread, side: "right" } };
    return { turn: { dir, leafIndex: spread }, to: { spread: spread + 1, side: single ? "left" : side } };
  }
  if (spread <= 0) return null;
  if (single && side === "right") return { turn: { dir, leafIndex: null }, to: { spread, side: "left" } };
  return { turn: { dir, leafIndex: spread - 1 }, to: { spread: spread - 1, side: single ? "right" : side } };
}

interface StageVars {
  facing: number;
  shade: number;
  /** 0..1 — how shut the book is on its front / back cover. */
  closedFront: number;
  closedBack: number;
  /** -1 centres the right-hand page, +1 the left; 0 centres the spread. */
  focus: number;
}

/**
 * Drives one flat-hinge page turn (or, in single-page mode, one pan
 * between facing pages). `position` and `turn` are React state — they
 * change only at step boundaries, a handful of times per visit.
 * Everything that changes every frame (the step's progress, and the CSS
 * custom properties it drives) lives in refs and is written straight to
 * the DOM from a rAF loop, never through React state — that's the
 * difference between 60fps and 60 renders/sec.
 */
export function useLeafTurn({ spreadCount, single }: UseLeafTurnOptions) {
  const maxSpread = spreadCount - 1;
  const lastLeaf = spreadCount - 2;

  const [position, setPosition] = useState<BookPosition>(START);
  const [turn, setTurn] = useState<TurnState | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);

  const posRef = useRef<BookPosition>(START);
  const targetRef = useRef<BookPosition>(START);
  const turnRef = useRef<TurnState | null>(null);
  const tRef = useRef(0);
  const springRef = useRef<Spring | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);
  /** True while the active turn is the cover being opened/closed by scroll. */
  const scrubRef = useRef(false);
  const lastOpenRef = useRef(0);
  const dragRef = useRef<{
    pointerId: number;
    x0: number;
    y0: number;
    /** Left edge and width of the page area actually on screen. */
    left: number;
    width: number;
    dir: TurnDirection;
    /** A horizontal drag that has claimed the gesture and started a step. */
    active: boolean;
    /** A vertical gesture — left to the browser to scroll the page. */
    ignored: boolean;
    velocity: number;
    tPrev: number;
  } | null>(null);

  const restVars = useCallback(
    (pos: BookPosition): StageVars => {
      const closedFront = pos.spread === 0 ? 1 : 0;
      const closedBack = pos.spread === maxSpread ? 1 : 0;
      return {
        facing: 1,
        shade: 0,
        closedFront,
        closedBack,
        focus: single ? (pos.side === "left" ? 1 : -1) : closedBack - closedFront,
      };
    },
    [maxSpread, single]
  );

  const writeVars = useCallback((stage: HTMLElement, v: StageVars) => {
    stage.style.setProperty("--facing", v.facing.toFixed(3));
    stage.style.setProperty("--shade", v.shade.toFixed(3));
    stage.style.setProperty("--closed-front", v.closedFront.toFixed(3));
    stage.style.setProperty("--closed-back", v.closedBack.toFixed(3));
    stage.style.setProperty("--focus", v.focus.toFixed(4));
  }, []);

  const applyFrame = useCallback(
    (raw: number) => {
      const t = clamp01(raw);
      tRef.current = t;
      const active = turnRef.current;
      const stage = stageRef.current;
      if (!active || !stage) return;

      if (active.leafIndex === null) {
        // A pan between facing pages: next goes left page → right page.
        const focus = active.dir === "next" ? 1 - 2 * t : -1 + 2 * t;
        writeVars(stage, { facing: 1, shade: 0, closedFront: 0, closedBack: 0, focus });
        return;
      }

      const angle = active.dir === "next" ? -180 * t : -180 * (1 - t);
      // Progress toward the leaf lying on the left, whichever way it's going.
      const forward = active.dir === "next" ? t : 1 - t;
      const closedFront = active.leafIndex === 0 ? 1 - forward : 0;
      const closedBack = active.leafIndex === lastLeaf ? forward : 0;
      writeVars(stage, {
        facing: Math.abs(Math.cos((angle * Math.PI) / 180)),
        shade: Math.sin(Math.PI * t),
        closedFront,
        closedBack,
        // Single-page mode pans with the leaf so the page it lands as ends up centred.
        focus: single ? -1 + 2 * forward : closedBack - closedFront,
      });
      leafRef.current?.style.setProperty("--angle", `${angle.toFixed(2)}deg`);
    },
    [lastLeaf, single, writeVars]
  );

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const tick = useCallback(
    (now: number) => {
      rafRef.current = null;
      const dt = Math.min(0.032, (now - lastFrameRef.current) / 1000 || 0.016);
      lastFrameRef.current = now;
      const s = springRef.current;
      if (!s) return;
      const x = tRef.current - s.target;
      s.v += (-s.k * x - s.c * s.v) * dt;
      const next = tRef.current + s.v * dt;
      if (Math.abs(next - s.target) < 0.002 && Math.abs(s.v) < 0.02) {
        applyFrame(s.target);
        springRef.current = null;
        s.onDone?.();
      } else {
        applyFrame(next);
        rafRef.current = requestAnimationFrame(tick);
      }
    },
    [applyFrame]
  );

  const kick = useCallback(() => {
    if (rafRef.current === null) {
      lastFrameRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const animateTo = useCallback(
    (target: number, k: number, c: number, onDone?: () => void) => {
      springRef.current = { v: 0, target, k, c, onDone };
      kick();
    },
    [kick]
  );

  const settleAt = useCallback(
    (pos: BookPosition) => {
      stopLoop();
      springRef.current = null;
      tRef.current = 0;
      turnRef.current = null;
      scrubRef.current = false;
      posRef.current = pos;
      targetRef.current = pos;
      if (stageRef.current) writeVars(stageRef.current, restVars(pos));
      setTurn(null);
      setPosition(pos);
    },
    [restVars, stopLoop, writeVars]
  );

  // If a step is still mid-flight (e.g. the visitor starts a new drag
  // before the last one finished settling), finish it instantly first —
  // mirrors the source technique's "settle anything still in flight
  // before starting the next" rule, and keeps `position` from ever
  // desyncing from what's on screen.
  const forceSettleActive = useCallback(() => {
    if (turnRef.current) settleAt(targetRef.current);
  }, [settleAt]);

  const beginStep = useCallback(
    (dir: TurnDirection): boolean => {
      const step = stepFrom(posRef.current, dir, single, maxSpread);
      if (!step) return false;
      turnRef.current = step.turn;
      targetRef.current = step.to;
      tRef.current = 0;
      setTurn(step.turn);
      return true;
    },
    [maxSpread, single]
  );

  const commit = useCallback(() => {
    if (!turnRef.current) return;
    const to = targetRef.current;
    if (!hasMotion()) {
      settleAt(to);
      return;
    }
    animateTo(1, COMMIT_SPRING.k, COMMIT_SPRING.c, () => settleAt(to));
  }, [animateTo, settleAt]);

  const cancelTurn = useCallback(() => {
    if (!turnRef.current) return;
    const from = posRef.current;
    if (!hasMotion()) {
      settleAt(from);
      return;
    }
    animateTo(0, CANCEL_SPRING.k, CANCEL_SPRING.c, () => settleAt(from));
  }, [animateTo, settleAt]);

  const step = useCallback(
    (dir: TurnDirection) => {
      forceSettleActive();
      if (beginStep(dir)) commit();
    },
    [beginStep, commit, forceSettleActive]
  );

  const turnNext = useCallback(() => step("next"), [step]);
  const turnPrev = useCallback(() => step("prev"), [step]);

  /**
   * Drives the front cover from scroll. `open` is 0 (shut) .. 1 (open).
   * Scroll only ever moves the cover in the direction the page is
   * scrolling, and only between the closed book and the first inside
   * page — so a visitor who shut the cover by hand, or who has already
   * read further in, isn't overridden just because the page moved.
   */
  const scrubCover = useCallback(
    (open: number) => {
      const prev = lastOpenRef.current;
      lastOpenRef.current = open;
      if (open === prev || dragRef.current?.active) return;
      if (turnRef.current && !scrubRef.current) return;

      if (!turnRef.current) {
        const { spread, side } = posRef.current;
        const opening = open > prev;
        const onFirstInsidePage = spread === 1 && (!single || side === "left");
        if (opening && spread === 0) beginStep("next");
        else if (!opening && onFirstInsidePage) beginStep("prev");
        if (!turnRef.current) return;
        scrubRef.current = true;
      }

      const active = turnRef.current;
      const from = posRef.current;
      const to = targetRef.current;
      const target = active.dir === "next" ? open : 1 - open;
      const land = () => {
        if (tRef.current >= 0.999) settleAt(to);
        else if (tRef.current <= 0.001) settleAt(from);
        // Otherwise the cover rests part-open until the next scroll.
      };

      if (!hasMotion()) {
        applyFrame(target);
        land();
        return;
      }
      springRef.current = {
        v: springRef.current?.v ?? 0,
        target,
        k: SCRUB_SPRING.k,
        c: SCRUB_SPRING.c,
        onDone: land,
      };
      kick();
    },
    [applyFrame, beginStep, kick, settleAt, single]
  );

  // Nothing happens on pointerdown itself: on a touch screen most touches
  // on the book are the start of a page scroll, not a page turn. A step
  // starts only once the gesture is clearly horizontal (a drag) or ends
  // without moving (a tap).
  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // Let real links/buttons inside a page (e.g. "Full record") work
      // normally instead of being swallowed as a page-turn gesture.
      if ((e.target as HTMLElement).closest("a,button")) return;
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      // In single-page mode only the middle half of the stage — the
      // centred page — is on screen.
      dragRef.current = {
        pointerId: e.pointerId,
        x0: e.clientX,
        y0: e.clientY,
        left: single ? rect.left + rect.width / 4 : rect.left,
        width: single ? rect.width / 2 : rect.width,
        dir: "next",
        active: false,
        ignored: false,
        velocity: 0,
        tPrev: performance.now(),
      };
    },
    [single]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== e.pointerId || drag.ignored) return;
      const dx = e.clientX - drag.x0;
      const dy = e.clientY - drag.y0;

      if (!drag.active) {
        if (Math.abs(dx) < TAP_THRESHOLD && Math.abs(dy) < TAP_THRESHOLD) return;
        if (Math.abs(dy) > Math.abs(dx)) {
          drag.ignored = true;
          return;
        }
        // Pull the page the way it should travel: leftward turns forward.
        const dir: TurnDirection = dx < 0 ? "next" : "prev";
        forceSettleActive();
        if (!beginStep(dir)) {
          drag.ignored = true;
          return;
        }
        drag.active = true;
        drag.dir = dir;
        drag.tPrev = performance.now();
        stageRef.current?.setPointerCapture(e.pointerId);
      }

      const raw = (drag.dir === "next" ? -dx : dx) / (drag.width * DRAG_SPAN);
      const t = clamp01(raw);
      const now = performance.now();
      const dt = Math.max(0.001, (now - drag.tPrev) / 1000);
      drag.velocity = (t - tRef.current) / dt;
      drag.tPrev = now;
      applyFrame(t);
    },
    [applyFrame, beginStep, forceSettleActive]
  );

  const endDrag = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== e.pointerId) return;
      dragRef.current = null;

      if (drag.active) {
        releaseCaptureSafely(stageRef.current, e.pointerId);
        if (!turnRef.current) return;
        // The browser took the gesture over (e.g. started scrolling) — never
        // let that count as a deliberate turn.
        if (e.type === "pointercancel") {
          cancelTurn();
          return;
        }
        const shouldCommit = tRef.current > COMMIT_T || drag.velocity > COMMIT_VELOCITY;
        if (shouldCommit) commit();
        else cancelTurn();
        return;
      }

      if (drag.ignored || e.type === "pointercancel") return;
      // A tap. A closed book only opens one way, wherever it's tapped.
      // Otherwise it steps toward the tapped side — any half of the spread
      // on a wide screen, but only the outer edges of a single page, so
      // tapping to read a page on a phone doesn't flip it away.
      const { spread } = posRef.current;
      const x = (e.clientX - drag.left) / drag.width;
      let dir: TurnDirection | null;
      if (spread === 0) dir = "next";
      else if (spread === maxSpread) dir = "prev";
      else if (!single) dir = x > 0.5 ? "next" : "prev";
      else dir = x > 0.7 ? "next" : x < 0.3 ? "prev" : null;
      if (dir) step(dir);
    },
    [cancelTurn, commit, maxSpread, single, step]
  );

  useEffect(() => stopLoop, [stopLoop]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        turnNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        turnPrev();
      }
    },
    [turnNext, turnPrev]
  );

  // Resting values for the first paint; every later change is written by
  // settleAt/applyFrame directly, and React only rewrites these when
  // `position` changes — which is exactly when settleAt already has.
  const rest = restVars(position);
  const stageStyle = {
    ["--closed-front" as string]: rest.closedFront,
    ["--closed-back" as string]: rest.closedBack,
    ["--focus" as string]: rest.focus,
  } as React.CSSProperties;

  return {
    position,
    turn,
    stageRef,
    leafRef,
    stageStyle,
    canNext: stepFrom(position, "next", single, maxSpread) !== null,
    canPrev: stepFrom(position, "prev", single, maxSpread) !== null,
    turnNext,
    turnPrev,
    scrubCover,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onKeyDown,
    },
  };
}

function releaseCaptureSafely(stage: HTMLDivElement | null, pointerId: number) {
  try {
    stage?.releasePointerCapture(pointerId);
  } catch {
    // Capture may already have been released (e.g. pointercancel) — fine to ignore.
  }
}
