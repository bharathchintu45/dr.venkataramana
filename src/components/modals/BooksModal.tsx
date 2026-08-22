"use client";

import React from "react";
import Image from "next/image";
import { booksData, Book } from "@/data/books";
import { X, BookOpen, UserCheck, Calendar, Award, ExternalLink } from "lucide-react";

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook?: Book | null;
}

export const BooksModal: React.FC<BooksModalProps> = ({
  isOpen,
  onClose,
  selectedBook
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#07150C] border border-[#C5A868]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#C5A868]/30 bg-gradient-to-r from-[#0A1C12] via-[#21160C] to-[#0A1C12] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D2914] border border-[#C5A868]/60 flex items-center justify-center text-[#E2C98F]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-white">
                Botanical Books & Field Guides
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/70">
                6 Published Volumes · Botanical Survey of India & State Forest Departments
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Books List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" data-lenis-prevent>
          {booksData.map((book) => (
            <div
              key={book.id}
              className={`p-6 rounded-xl border flex flex-col sm:flex-row gap-6 transition-all ${
                selectedBook?.id === book.id
                  ? "bg-[#181109] border-[#E2C98F] shadow-gold-glow"
                  : "bg-[#0A1C12]/90 border-[#C5A868]/25 hover:border-[#C5A868]/60"
              }`}
            >
              {/* Book Cover Image */}
              <div className="w-32 sm:w-40 shrink-0 mx-auto sm:mx-0">
                <div className="rounded-lg overflow-hidden border border-[#C5A868]/40 shadow-parchment-deep">
                  <Image
                    src={book.imageCover}
                    alt={book.title}
                    width={180}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#3D2914] text-[#E2C98F] border border-[#C5A868]/50">
                      {book.role} · {book.year}
                    </span>
                    <span className="text-xs text-[#89C35C] font-semibold">
                      {book.publishedBy}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-title font-bold text-white mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[#EFE8D8]/75 mb-3 italic">
                    {book.subtitle}
                  </p>

                  <p className="text-xs text-[#EFE8D8]/80 leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                {/* Release Details Badge */}
                <div className="text-xs text-[#E2C98F] bg-[#050E08]/80 p-3 rounded-lg border border-[#C5A868]/30">
                  <span className="font-semibold text-white">Official Release: </span>
                  {book.releaseDetails}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#050E08] border-t border-[#C5A868]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs text-[#EFE8D8]/60">
          <div>Authentic botanical works published in service of nature conservation.</div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#3D2914] border border-[#C5A868]/50 text-[#E2C98F] hover:bg-[#52381C] font-medium transition-colors self-end sm:self-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
