"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, photoSrc, photoThumb } from "@/data/photoGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Lightbox, type LightboxImage } from "@/components/common/Lightbox";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface FlatPhoto {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  categoryId: string;
  categoryTitle: string;
}

const photosByCategory: FlatPhoto[][] = galleryCategories.map((cat) =>
  cat.photos.map((p, i) => ({
    src: photoSrc(cat.id, p.file),
    thumb: photoThumb(cat.id, p.file),
    width: p.width,
    height: p.height,
    alt: p.alt ?? `${cat.title}, photo ${i + 1}`,
    categoryId: cat.id,
    categoryTitle: cat.title
  }))
);

// Interleave categories for the "All Photos" view so consecutive near-duplicate
// shots from the same event don't cluster together.
const allPhotos: FlatPhoto[] = [];
for (let i = 0; i < Math.max(...photosByCategory.map((c) => c.length)); i++) {
  for (const cat of photosByCategory) {
    if (i < cat.length) allPhotos.push(cat[i]);
  }
}

const PAGE_SIZE = 48;

export const PhotoGalleryView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const photos = useMemo(
    () => (activeCategory === "all" ? allPhotos : allPhotos.filter((p) => p.categoryId === activeCategory)),
    [activeCategory]
  );
  const activeMeta = galleryCategories.find((c) => c.id === activeCategory);
  const visiblePhotos = photos.slice(0, visibleCount);

  // Reset pagination whenever the category changes.
  useEffect(() => setVisibleCount(PAGE_SIZE), [activeCategory]);

  const lightboxImages = useMemo<LightboxImage[]>(
    () =>
      visiblePhotos.map((p) => ({
        src: p.src,
        thumb: p.thumb,
        width: p.width,
        height: p.height,
        alt: p.alt,
        title: p.categoryTitle,
        description: p.alt.startsWith(p.categoryTitle) ? undefined : p.alt
      })),
    [visiblePhotos]
  );

  const chips = [
    { id: "all", title: "All photos", count: allPhotos.length },
    ...galleryCategories.map((c) => ({ id: c.id, title: c.title, count: c.photos.length }))
  ];

  return (
    <div className="mx-auto w-full max-w-6xl">
      <BackLink href="/" label="Back to home" />

      <div className="my-6 max-w-2xl">
        <p className="stamp text-herbarium">{allPhotos.length} photographs</p>
        <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">Photo gallery</h1>
        <p className="mt-2 text-base text-ink-secondary">
          {activeMeta ? activeMeta.description : "Explorations, research, teaching and conservation through the lens of Dr. M. Venkat Ramana."}
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-x-2 gap-y-2.5">
        {chips.map((chip) => {
          const isActive = chip.id === activeCategory;
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(chip.id)}
              className={cn(
                "focus-ring touch-target relative rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                isActive ? "border-herbarium bg-herbarium text-paper-raised" : "border-line-strong bg-paper-raised text-ink-secondary hover:border-herbarium/60 hover:text-herbarium-deep"
              )}
            >
              {chip.title}
              <span className={cn("ml-1.5", isActive ? "text-paper-raised/75" : "text-ink-muted")}>{chip.count}</span>
            </button>
          );
        })}
      </div>

      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {visiblePhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="focus-ring group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded border border-line bg-paper-raised transition-colors hover:border-herbarium/60 sm:mb-4"
            aria-label={`Open ${photo.alt}`}
          >
            <Image
              src={photo.thumb}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full transform transition-transform duration-slow group-hover:scale-105"
            />
            {activeCategory === "all" && (
              <span className="hover-reveal absolute bottom-2 left-2 rounded-full bg-plate/75 px-2.5 py-1 text-xs font-medium text-plate-ink transition-opacity">
                {photo.categoryTitle}
              </span>
            )}
          </button>
        ))}
      </div>

      {visibleCount < photos.length && (
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Load more ({photos.length - visibleCount} remaining)
          </Button>
        </div>
      )}

      <p className="mt-10 text-center text-xs text-ink-muted">All photographs © Dr. M. Venkat Ramana</p>

      <Lightbox images={lightboxImages} open={lightboxIndex !== null} index={lightboxIndex ?? 0} onClose={() => setLightboxIndex(null)} />
    </div>
  );
};
