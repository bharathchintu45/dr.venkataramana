"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasMultiple = images.length > 1;

  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-full">
      <button
        onClick={() => setLightboxOpen(true)}
        className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-[#C5A868]/40 bg-[#F4EEDF] group block"
      >
        <Image
          src={images[activeIndex]}
          alt={alt}
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-90 transition-opacity" />
        </div>
      </button>

      {hasMultiple && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex ? "border-[#9FE870]" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${alt} thumbnail ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="relative w-full max-w-3xl h-[70vh]">
            <Image src={images[activeIndex]} alt={alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};
