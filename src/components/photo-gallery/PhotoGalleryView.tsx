"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, photoSrc, photoThumb } from "@/data/photoGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Lightbox, type LightboxImage } from "@/components/common/Lightbox";
import { Button } from "@/components/ui/Button";
import { handleSpotlightMove } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface FlatPhoto {
  file: string;
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
    file: p.file,
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

// The "books" category stores each cover as a "<slug>-front" / "<slug>-back"
// pair. The grid should only show the front as the cover thumbnail; clicking
// it opens a 2-slide lightbox with the matching back cover, mirroring the
// front/back viewer already used for books on the homepage.
const bookSide = (file: string): "front" | "back" | null =>
  file.endsWith("-front") ? "front" : file.endsWith("-back") ? "back" : null;
const bookSlug = (file: string) => file.replace(/-front$|-back$/, "");
const booksPhotos: FlatPhoto[] = allPhotos.filter((p) => p.categoryId === "books");

function toLightboxImage(p: FlatPhoto, description?: string): LightboxImage {
  return { src: p.src, thumb: p.thumb, width: p.width, height: p.height, alt: p.alt, title: p.categoryTitle, description };
}

function getBookCoverPair(front: FlatPhoto): LightboxImage[] {
  const slug = bookSlug(front.file);
  const back = booksPhotos.find((p) => p !== front && bookSlug(p.file) === slug && bookSide(p.file) === "back");
  const images = [toLightboxImage(front, "Front cover")];
  if (back) images.push(toLightboxImage(back, "Back cover"));
  return images;
}

const PAGE_SIZE = 48;

export const PhotoGalleryView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [bookLightboxImages, setBookLightboxImages] = useState<LightboxImage[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const isBooksCategory = activeCategory === "books";

  const photos = useMemo(
    () => (activeCategory === "all" ? allPhotos : allPhotos.filter((p) => p.categoryId === activeCategory)),
    [activeCategory]
  );
  const activeMeta = galleryCategories.find((c) => c.id === activeCategory);
  const visiblePhotos = photos.slice(0, visibleCount);
  // Books show only the front cover as the grid thumbnail — the back cover
  // is reached by clicking through, via getBookCoverPair below.
  const gridPhotos = isBooksCategory ? visiblePhotos.filter((p) => bookSide(p.file) === "front") : visiblePhotos;

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

      <div data-reveal-group className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {gridPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            data-reveal-item
            data-reveal
            style={{ ["--reveal-y" as string]: "10px" }}
            onClick={() => (isBooksCategory ? setBookLightboxImages(getBookCoverPair(photo)) : setLightboxIndex(i))}
            onPointerMove={handleSpotlightMove}
            className="card-spotlight focus-ring group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded border border-line bg-paper-raised shadow-card transition-all duration-base hover:-translate-y-1 hover:border-herbarium/60 hover:shadow-raised hover:ring-1 hover:ring-herbarium/25 active:scale-[0.98] sm:mb-4"
            aria-label={`Open ${photo.alt}`}
          >
            <Image
              src={photo.thumb}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full transform transition-transform duration-slow ease-enter group-hover:scale-105"
            />
            {activeCategory === "all" && (
              <span className="hover-reveal absolute bottom-2 left-2 z-[2] rounded-full bg-plate/75 px-2.5 py-1 text-xs font-medium text-plate-ink transition-opacity">
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

      <Lightbox
        images={bookLightboxImages ?? lightboxImages}
        open={bookLightboxImages !== null || lightboxIndex !== null}
        index={bookLightboxImages ? 0 : lightboxIndex ?? 0}
        onClose={() => {
          setBookLightboxImages(null);
          setLightboxIndex(null);
        }}
      />
    </div>
  );
};
