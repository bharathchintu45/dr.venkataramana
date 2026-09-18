"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { profileData } from "@/data/profile";
import { useHasMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

const FRAME_COUNT = 35;
const DESKTOP_BREAKPOINT = "(min-width: 768px)"; // matches useParallax's split

const framePath = (variant: "desktop" | "mobile", i: number) =>
  `/images/hero-flight/${variant}/frame-${String(i + 1).padStart(3, "0")}.webp`;

/**
 * A scroll-scrubbed drone-flight intro, pinned above the Hero. The runway
 * is 1.5 viewports tall; scrolling through it maps 1:1 to the 35-frame
 * sequence, and the name lockup fades out as the flight climbs. Frames are
 * drawn to a <canvas> rather than shown as <Image> — the one deliberate
 * exception to next/image in this codebase, because the frame-by-frame
 * paint needs a raw pixel source, not a wrapped <img>. See globals.css
 * (.hero-flight__*) for the runway/scene geometry, modeled on
 * .notebook__runway/.notebook__scene in Sketchbook.tsx.
 */
export const HeroFlight: React.FC = () => {
  // useSyncExternalStore, not useState+useEffect: React specifically
  // renders the `getServerSnapshot` (false) value on the client's
  // hydration pass to avoid a mismatch there, then re-checks the real
  // snapshot as part of its own commit cycle — not a separately scheduled
  // effect. That distinction is load-bearing, not stylistic: an effect
  // (`useEffect(() => setAnimated(hasMotion()), [])`) was found to never
  // fire at all on hosts that inject extra markup into <head> (observed
  // on Netlify's default output), leaving this stuck on the static
  // fallback forever even though has-motion was present. See useHasMotion
  // in src/lib/motion.ts.
  const animated = useHasMotion();

  return animated ? <AnimatedFlight /> : <StaticFlight />;
};

/** No JS / reduced motion: a normal, non-pinned banner — no runway height,
 *  no scroll hijacking, name lockup fully visible from the start. */
const StaticFlight: React.FC = () => (
  <section className="hero-flight relative w-full overflow-hidden bg-plate text-plate-ink" style={{ height: "70svh", minHeight: 420 }}>
    <Image
      src={framePath("desktop", FRAME_COUNT - 1)}
      alt="Aerial view of a palm-lined coastline"
      fill
      sizes="100vw"
      priority
      className="object-cover"
    />
    <div className="hero-flight__scrim" aria-hidden />
    <div className="hero-flight__overlay">
      <p className="font-display text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05]">{profileData.name}</p>
      <p className="mt-3 text-sm font-medium tracking-[0.08em] text-plate-ink-muted sm:text-base">{profileData.tagline}</p>
    </div>
  </section>
);

const AnimatedFlight: React.FC = () => {
  const runwayRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  // AnimatedFlight only ever mounts client-side (see HeroFlight above), so
  // `window` is safe here — chosen once, like useParallax's desktop/mobile
  // matchMedia split, and reused for both the poster and the frame loader
  // below so they never disagree on which size is loading.
  const [variant] = useState<"desktop" | "mobile">(() => (window.matchMedia(DESKTOP_BREAKPOINT).matches ? "desktop" : "mobile"));
  // Flips once a frame has actually been painted to the canvas, so the
  // <Image priority> poster underneath — rendered unconditionally below,
  // so it's eligible as the page's LCP element regardless of when this
  // component's own JS finishes — can fade out in favour of the canvas.
  const [canvasReady, setCanvasReady] = useState(false);

  // Frame images for the active variant (chosen once, like useParallax's
  // desktop/mobile matchMedia split — this decorative sequence doesn't
  // need to re-fetch the other size on resize/rotate).
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnRef = useRef(-1);
  const dprRef = useRef(1);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = framesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

    const dpr = dprRef.current;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const canvasAspect = cw / ch;
    const imgAspect = img.naturalWidth / img.naturalHeight;

    // object-fit: cover math.
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (imgAspect > canvasAspect) {
      sw = img.naturalHeight * canvasAspect;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / canvasAspect;
      sy = (img.naturalHeight - sh) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    lastDrawnRef.current = index;
  };

  const drawNearest = (index: number) => {
    if (framesRef.current[index]?.complete) {
      drawFrame(index);
      return;
    }
    // Not loaded yet — hold whatever's already on screen if we have
    // nothing better; otherwise walk backward to the nearest loaded frame.
    for (let i = index - 1; i >= 0; i--) {
      if (framesRef.current[i]?.complete) {
        drawFrame(i);
        return;
      }
    }
  };

  const markDrawn = () => {
    if (lastDrawnRef.current >= 0) setCanvasReady(true);
  };

  // Load frames + size the canvas.
  useEffect(() => {
    let cancelled = false;

    const first = new window.Image();
    first.src = framePath(variant, 0);
    first.decoding = "async";
    first.onload = () => {
      if (cancelled) return;
      framesRef.current[0] = first;
      drawNearest(0);
      markDrawn();
    };

    // Load the rest sequentially in the background so a slow connection
    // still lands an early usable frame instead of racing all 35 at once.
    (async () => {
      for (let i = 1; i < FRAME_COUNT; i++) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const img = new window.Image();
          img.decoding = "async";
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = framePath(variant, i);
          framesRef.current[i] = img;
        });
      }
    })();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawNearest(Math.max(lastDrawnRef.current, 0));
      markDrawn();
    });
    ro.observe(canvas);

    return () => {
      cancelled = true;
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll -> progress -> frame index + scroll-cue fade. The name/tagline
  // overlay itself stays fully opaque for the whole flight (no fade) —
  // only the "start scrolling" cue responds to progress, and disappears
  // once scrolling begins. Same measure/schedule shape as Sketchbook's
  // scroll-scene effect (Sketchbook.tsx).
  useEffect(() => {
    const runway = runwayRef.current;
    const scene = sceneRef.current;
    if (!runway || !scene) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const travel = runway.offsetHeight - scene.offsetHeight;
      if (travel <= 0) return;
      const stickyTop = parseFloat(getComputedStyle(scene).top) || 0;
      const progress = Math.min(1, Math.max(0, (stickyTop - runway.getBoundingClientRect().top) / travel));

      const index = Math.round(progress * (FRAME_COUNT - 1));
      if (index !== lastDrawnRef.current) drawNearest(index);

      const cue = cueRef.current;
      if (cue) cue.style.opacity = String(Math.max(0, 1 - progress / 0.15));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={runwayRef} className="hero-flight hero-flight__runway">
      <div ref={sceneRef} className="hero-flight__scene">
        <Image
          src={framePath(variant, 0)}
          alt=""
          fill
          sizes="100vw"
          priority
          aria-hidden
          className={cn("object-cover transition-opacity duration-slow", canvasReady && "opacity-0")}
        />
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Aerial drone flight over a palm-lined coastline"
          className={cn("hero-flight__canvas", canvasReady && "hero-flight__canvas--ready")}
        />
        <div className="hero-flight__scrim" aria-hidden />
        <div className="hero-flight__overlay">
          <p className="font-display text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.05]">{profileData.name}</p>
          <p className="mt-3 text-sm font-medium tracking-[0.08em] text-plate-ink-muted sm:text-base">{profileData.tagline}</p>
        </div>
        <div ref={cueRef} className="hero-flight__cue-wrap">
          <ChevronDown className="hero-flight__cue h-5 w-5" aria-hidden />
        </div>
      </div>
    </div>
  );
};
