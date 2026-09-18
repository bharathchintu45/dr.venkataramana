"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initScrollReveal } from "@/lib/reveal";

/**
 * Mounted once in the root layout. Re-scans the document for
 * `[data-reveal]` elements on every route change (App Router swaps
 * `children` without remounting the layout, so this can't rely on an
 * empty-dependency effect alone).
 */
export const ScrollReveal: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    // Defer one frame so the new route's DOM (and any intrinsic image
    // sizes) has committed before elements are measured for intersection.
    const raf = requestAnimationFrame(() => {
      cleanup = initScrollReveal();
    });
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  return null;
};
