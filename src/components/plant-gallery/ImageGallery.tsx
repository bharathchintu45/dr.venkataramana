"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/common/Lightbox";
import { Lens } from "@/components/ui/Lens";
import { cn } from "@/lib/cn";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasMultiple = images.length > 1;

  return (
    <div className="w-full">
      {/* Lens replaces the old darken+zoom-icon hover scrim: hovering now
          magnifies the spot under the cursor (a hand lens being the
          botanist's own tool), and the click still opens the full
          lightbox — one progression instead of two competing hover cues.
          `className="absolute inset-0"` (not Lens's default `relative`)
          because it wraps a `next/image fill` child, which needs a sized
          positioned ancestor. */}
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`View larger: ${alt}`}
        className="focus-ring relative block h-72 w-full overflow-hidden rounded border border-line bg-paper-raised sm:h-96"
      >
        <Lens zoomFactor={1.8} lensSize={180} lensColor="rgb(var(--herbarium))" className="absolute inset-0">
          <Image src={images[activeIndex]} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </Lens>
      </button>

      {hasMultiple && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Photo ${i + 1} of ${images.length}`}
              aria-current={i === activeIndex}
              className={cn(
                "focus-ring relative h-16 w-16 shrink-0 overflow-hidden rounded border-2 transition-opacity",
                i === activeIndex ? "border-herbarium" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image src={img} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={images.map((src, i) => ({ src, alt: images.length > 1 ? `${alt}, photo ${i + 1}` : alt, title: alt }))}
        open={lightboxOpen}
        index={activeIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
};
