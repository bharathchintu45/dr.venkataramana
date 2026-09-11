"use client";

import React, { useState } from "react";
import Image from "next/image";
import { booksData, Book } from "@/data/books";
import { BooksModal } from "@/components/modals/BooksModal";
import { ArrowRight } from "lucide-react";

export const BooksAuthored: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleOpenBook = (book: Book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  return (
    <section
      id="books"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/books-table.jpg"
          alt="Rustic wooden research table in sunlit forest clearing"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              06
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Books & Publications
            </span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto my-3 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Books Authored
          </h2>
          <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            Books that contribute to botanical knowledge
          </p>
        </div>

        {/* 5 Standing Hardcover Books on Table */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto my-auto w-full">
          {booksData.slice(0, 5).map((book) => (
            <div
              key={book.id}
              onClick={() => handleOpenBook(book)}
              className="group flex flex-col items-center cursor-pointer transform hover:-translate-y-3 transition-all duration-500"
            >
              {/* Hardcover Book Spine & Front Cover */}
              <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)] border-2 border-[#C5A868]/50 group-hover:border-[#A4E06A] transition-all">
                <Image
                  src={book.imageCover}
                  alt={book.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 flex flex-col justify-end p-3 text-center">
                  <h3 className="text-xs sm:text-sm font-serif-title font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
                    {book.title}
                  </h3>
                </div>
              </div>

              <div className="mt-2 text-center px-1">
                <span className="text-[11px] text-[#E2C98F] font-sans font-medium leading-snug line-clamp-2">
                  {book.publishedBy.split(",")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setSelectedBook(null);
              setModalOpen(true);
            }}
            className="px-7 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-botanical-glow group transition-all"
          >
            <span>View All Books</span>
            <ArrowRight className="w-4 h-4 text-[#A4E06A] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <BooksModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedBook={selectedBook}
      />
    </section>
  );
};
