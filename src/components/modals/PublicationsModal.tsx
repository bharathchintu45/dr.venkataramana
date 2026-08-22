"use client";

import React, { useState, useMemo } from "react";
import { publicationsData, Publication } from "@/data/publications";
import { booksData } from "@/data/books";
import { X, Search, Filter, BookOpen, Copy, Check, ExternalLink, Award, FileText } from "lucide-react";

interface PublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicationsModal: React.FC<PublicationsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: "ALL", label: "All Publications" },
    { id: "SCOPUS", label: "Scopus Indexed" },
    { id: "UGC_CARE", label: "UGC-CARE Listed" },
    { id: "PEER_REVIEWED", label: "Peer Reviewed" },
    { id: "BOOKS", label: "Books & Chapters" }
  ];

  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesCategory =
        selectedCategory === "ALL" || pub.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.year.toString().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}${pub.volume ? `, ${pub.volume}` : ""}${pub.pages ? `: ${pub.pages}` : ""}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#07150C] border border-[#89C35C]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#89C35C]/20 bg-gradient-to-r from-[#0A1C12] via-[#0D2417] to-[#0A1C12] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E4D34] border border-[#89C35C]/50 flex items-center justify-center text-[#9FE870]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-semibold text-white">
                Complete Scientific Publications Catalog
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE8D8]/70">
                42 Research Articles · 6 Books · 1 Book Chapter · Scopus & UGC-CARE Indexed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search Controls */}
        <div className="p-4 sm:p-6 bg-[#091C10]/70 border-b border-[#89C35C]/15 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#89C35C]" />
            <input
              type="text"
              placeholder="Search by title, author, journal, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#050E08] border border-[#89C35C]/30 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#9FE870] focus:ring-1 focus:ring-[#9FE870]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#2A6B48] text-white border border-[#89C35C] shadow-botanical-glow"
                    : "bg-[#0A1C12] text-[#EFE8D8]/70 hover:text-white hover:bg-[#143523] border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 divide-y divide-white/5" data-lenis-prevent>
          {selectedCategory === "BOOKS" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {booksData.map((book) => (
                <div
                  key={book.id}
                  className="p-4 rounded-xl bg-[#0A1C12]/80 border border-[#89C35C]/20 hover:border-[#89C35C]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2A6B48]/50 text-[#9FE870] border border-[#89C35C]/40">
                        {book.role} · {book.year}
                      </span>
                      <span className="text-xs text-[#C5A868] font-medium">
                        {book.publishedBy}
                      </span>
                    </div>
                    <h3 className="text-base font-serif-title font-semibold text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#EFE8D8]/75 mb-3 italic">
                      {book.subtitle}
                    </p>
                    <p className="text-xs text-[#EFE8D8]/60 leading-relaxed mb-3">
                      {book.description}
                    </p>
                  </div>
                  <div className="text-[11px] text-[#C5A868]/90 bg-[#050E08]/70 p-2.5 rounded-lg border border-[#C5A868]/20">
                    <span className="font-semibold">Release:</span> {book.releaseDetails}
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPublications.length > 0 ? (
            filteredPublications.map((pub, idx) => (
              <div
                key={pub.id}
                className="pt-4 first:pt-0 group hover:bg-white/[0.02] p-3 rounded-lg transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-[#1E4D34] text-[#9FE870] font-bold text-xs">
                        {pub.year}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#0A1C12] text-[#C5A868] border border-[#C5A868]/30">
                        {pub.category === "SCOPUS"
                          ? "Scopus Indexed"
                          : pub.category === "UGC_CARE"
                          ? "UGC-CARE Listed"
                          : "Peer Reviewed"}
                      </span>
                      {pub.impactFactor && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#143523] text-[#89C35C] border border-[#89C35C]/30">
                          IF: {pub.impactFactor}
                        </span>
                      )}
                      {pub.isHighlight && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#D4AF37]/20 text-[#E2C98F] border border-[#D4AF37]/40 flex items-center gap-1">
                          <Award className="w-3 h-3" /> Key Discovery
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-white group-hover:text-[#9FE870] transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-xs text-[#EFE8D8]/75 mt-1 font-sans">
                      {pub.authors}
                    </p>

                    <p className="text-xs text-[#C5A868] mt-0.5 font-medium">
                      <span className="italic">{pub.journal}</span>
                      {pub.volume ? ` · Vol. ${pub.volume}` : ""}
                      {pub.pages ? ` · pp. ${pub.pages}` : ""}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {pub.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-[#EFE8D8]/50 border border-white/5"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleCopyCitation(pub)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0A1C12] border border-[#89C35C]/30 hover:border-[#9FE870] text-xs text-[#EFE8D8]/80 hover:text-white transition-all"
                      title="Copy APA Citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#9FE870]" />
                          <span className="text-[#9FE870]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#89C35C]" />
                          <span className="hidden sm:inline">Cite</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-[#EFE8D8]/50">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#89C35C]" />
              <p>No publications found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("ALL");
                }}
                className="mt-3 text-xs text-[#9FE870] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#050E08] border-t border-[#89C35C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-xs text-[#EFE8D8]/60">
          <div>
            Showing <span className="text-[#9FE870] font-semibold">{filteredPublications.length}</span> publications
          </div>
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <span className="hidden sm:inline">Author IPNI Standard: <strong className="text-white font-mono">M.V.Ramana</strong></span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#1E4D34] text-white hover:bg-[#2A6B48] font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
