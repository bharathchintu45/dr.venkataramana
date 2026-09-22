"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { scrollToSection, lockScroll, unlockScroll } from "@/lib/smoothScroll";
import { cn } from "@/lib/cn";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useHasMotion } from "@/lib/motion";
import { HOME_SECTION_IDS } from "@/config/nav";
import { CV_DOWNLOAD_URL, CV_DOWNLOAD_FILENAME } from "@/lib/cv";

const NAV_LINKS = [
  { name: "Research", href: "#research" },
  { name: "Species", href: "/plant-gallery" },
  { name: "Publications", href: "/publications" },
  { name: "Photos", href: "/photo-gallery" },
  { name: "Sacred Groves", href: "/sacred-groves" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
];

// +1 for the "Download CV" link the mobile panel appends after NAV_LINKS.
const MENU_ITEM_COUNT = NAV_LINKS.length + 1;
const MENU_ITEM_IN_DELAY_BASE = 50;
const MENU_ITEM_IN_STAGGER = 40;
const MENU_ITEM_OUT_STAGGER = 30;
const MENU_ITEM_OUT_DURATION = 180;
const MENU_PANEL_OUT_DURATION = 180;
// The panel doesn't start collapsing until every item has finished fading
// out (reverse stagger tail + its own duration) — must match the delay
// baked into the "menu-panel-out" animation string in tailwind.config.js.
const MENU_PANEL_OUT_DELAY = (MENU_ITEM_COUNT - 1) * MENU_ITEM_OUT_STAGGER + MENU_ITEM_OUT_DURATION;
// Unmount once the whole close sequence has actually finished on screen —
// items fading out, then the panel itself collapsing.
const MENU_CLOSE_TOTAL_MS = MENU_PANEL_OUT_DELAY + MENU_PANEL_OUT_DURATION;

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // Presence machine (same shape as Dialog's): `menuOpen` is the intent,
  // this is what's actually mounted — so the panel can finish its exit
  // animation instead of disappearing the instant the flag flips.
  const [menuPresence, setMenuPresence] = useState<"closed" | "open" | "closing">("closed");
  const [activeSection, setActiveSection] = useState("");
  // Hidden for the length of the homepage's drone-flight intro (HeroFlight,
  // above Hero) — the header competes with the footage, so it stays off
  // until that section has fully scrolled past. `.hero-flight` matches both
  // its static (reduced-motion) and animated variants, so this adapts to
  // whichever one is mounted. See globals.css / HeroFlight.tsx.
  const [hideForFlight, setHideForFlight] = useState(false);
  const hasMotion = useHasMotion();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // `inert` is a real DOM property in every browser this site targets, but
  // @types/react's HTMLAttributes and React 18's own attribute whitelist
  // disagree on it (JSX `inert={bool}` either fails to typecheck or warns
  // at runtime depending on which one you satisfy) — setting the DOM
  // property directly sidesteps both.
  useEffect(() => {
    if (headerRef.current) headerRef.current.inert = hideForFlight;
  }, [hideForFlight]);

  // Tracks which homepage section is most visible, for the two hash-based
  // nav links (#research, #contact). Self-contained so Navigation can live
  // once in the root layout rather than being wired per-page.
  useEffect(() => {
    if (!isHome) return;
    const ratios = new Map<string, number>();
    let current = "";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestId = current;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestRatio > 0 && bestId !== current) {
          current = bestId;
          setActiveSection(bestId);
        }
      },
      { threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1] }
    );

    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      const flight = isHome ? document.querySelector<HTMLElement>(".hero-flight") : null;
      setHideForFlight(!!flight && window.scrollY < flight.offsetHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close the mobile menu on route change and on resize past the mobile breakpoint.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuPresence("open");
      lockScroll();
      return () => unlockScroll();
    }
    setMenuPresence((p) => (p === "open" ? "closing" : "closed"));
  }, [menuOpen]);

  // Unmount once the whole close sequence — items staggering out, then the
  // panel collapsing — has actually finished on screen. Under reduced
  // motion the CSS collapses to ~0s (globals.css), but this timer doesn't
  // know that on its own — without the `hasMotion` check it would keep the
  // (now invisible, `forwards`-held) panel mounted and its links focusable
  // for the full 570ms anyway.
  useEffect(() => {
    if (menuPresence !== "closing") return;
    const t = window.setTimeout(() => setMenuPresence("closed"), hasMotion ? MENU_CLOSE_TOTAL_MS : 0);
    return () => window.clearTimeout(t);
  }, [menuPresence, hasMotion]);

  useFocusTrap(menuPresence !== "closed", menuRef);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isMenuClosing = menuPresence === "closing";

  // Opening cascades top-to-bottom; closing reverses it — the item closest
  // to the trigger (the last one, "Download CV") leaves first, so the exit
  // visually undoes the entrance instead of just replaying it.
  const menuItemDelay = (i: number) =>
    isMenuClosing
      ? (MENU_ITEM_COUNT - 1 - i) * MENU_ITEM_OUT_STAGGER
      : MENU_ITEM_IN_DELAY_BASE + i * MENU_ITEM_IN_STAGGER;

  const resolveHref = (href: string) => (href.startsWith("#") ? (isHome ? href : `/${href}`) : href);

  const isLinkActive = (href: string) =>
    href.startsWith("#") ? isHome && activeSection === href.slice(1) : pathname?.startsWith(href);

  // `style` carries the mobile menu's per-item stagger delay. It's passed
  // to the link itself rather than a wrapper so the panel's `border-b` /
  // `last:border-b-0` dividers keep matching real siblings.
  const renderLink = (
    href: string,
    name: string,
    onNavigate: () => void,
    className: string,
    style?: React.CSSProperties
  ) => {
    const isHashLink = href.startsWith("#");
    if (isHashLink && isHome) {
      return (
        <a
          key={name}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(href);
            onNavigate();
          }}
          className={className}
          style={style}
        >
          {name}
        </a>
      );
    }
    return (
      <Link key={name} href={resolveHref(href)} onClick={onNavigate} className={className} style={style}>
        {name}
      </Link>
    );
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 border-b transition-all duration-base print:hidden",
        isScrolled ? "border-line bg-paper/95 backdrop-blur-md shadow-card" : "border-transparent bg-paper/80 backdrop-blur-sm",
        hideForFlight && "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="focus-ring group flex shrink-0 flex-col leading-tight"
          aria-label="Dr. M. Venkat Ramana, home"
        >
          <span className="font-display text-base font-medium text-ink group-hover:text-herbarium-deep sm:text-lg">
            {profileData.name}
          </span>
          <span className="hidden text-xs tracking-wide text-ink-muted sm:block">{profileData.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            renderLink(
              link.href,
              link.name,
              () => {},
              cn(
                "focus-ring rounded px-3 py-2 text-sm font-medium transition-colors",
                isLinkActive(link.href) ? "text-herbarium-deep" : "text-ink-secondary hover:text-herbarium-deep"
              )
            )
          )}
          <Link
            href="/cv"
            className="focus-ring ml-2 rounded border border-line-strong px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-herbarium hover:text-herbarium-deep"
          >
            CV
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="focus-ring rounded p-2 text-ink transition-colors hover:text-herbarium-deep lg:hidden"
        >
          <span className="nav-burger" data-open={menuOpen} aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Scroll progress — a slim, always-visible substitute for the old
          rails, which disappeared entirely below 1440px. Scaled via
          transform, not animated width, so the browser composites it
          instead of recomputing layout on every scroll frame. */}
      <div className="h-px w-full bg-line" aria-hidden>
        <div
          className="h-px w-full origin-left bg-herbarium transition-transform duration-fast ease-standard"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {menuPresence !== "closed" && (
        <>
          {/* Scrim. Anchored at `top-full` so it dims the page without ever
              covering the header bar — the trigger stays visible and
              tappable, which a full-viewport overlay would prevent. */}
          <div
            className={cn(
              "absolute left-0 right-0 top-full h-screen bg-plate/30 backdrop-blur-[2px] transition-opacity lg:hidden",
              isMenuClosing ? "opacity-0 ease-exit" : "opacity-100 duration-base ease-enter"
            )}
            // On close the scrim fades with the panel itself (at the end of
            // the sequence), not the instant the items start staggering out
            // — otherwise the page would look "undimmed" while the menu is
            // still visibly closing above it.
            style={
              isMenuClosing
                ? { transitionDuration: `${MENU_PANEL_OUT_DURATION}ms`, transitionDelay: `${MENU_PANEL_OUT_DELAY}ms` }
                : undefined
            }
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            data-lenis-prevent
            className={cn(
              "absolute left-0 right-0 top-full max-h-[calc(100vh-4rem)] origin-top overflow-y-auto border-b border-line bg-paper shadow-raised lg:hidden",
              isMenuClosing ? "animate-menu-panel-out" : "animate-menu-panel-in"
            )}
          >
            <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
              {NAV_LINKS.map((link, i) =>
                renderLink(
                  link.href,
                  link.name,
                  () => setMenuOpen(false),
                  cn(
                    "focus-ring rounded px-2 py-3 text-base font-medium border-b border-line last:border-b-0 transition-colors",
                    isLinkActive(link.href) ? "text-herbarium-deep" : "text-ink-secondary",
                    isMenuClosing ? "animate-menu-item-out" : "animate-menu-item-in"
                  ),
                  { animationDelay: `${menuItemDelay(i)}ms` }
                )
              )}
              <Link
                href={CV_DOWNLOAD_URL}
                download={CV_DOWNLOAD_FILENAME}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "focus-ring mt-3 rounded border border-line-strong px-4 py-2.5 text-center text-sm font-semibold text-ink",
                  isMenuClosing ? "animate-menu-item-out" : "animate-menu-item-in"
                )}
                style={{ animationDelay: `${menuItemDelay(NAV_LINKS.length)}ms` }}
              >
                Download CV
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
