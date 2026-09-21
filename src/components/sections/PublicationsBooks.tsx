"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { publicationsData, Publication } from "@/data/publications";
import { booksData, Book } from "@/data/books";
import { CATEGORY_LABEL, findPaperUrl, publicationStats } from "@/lib/publications";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card, CardBody, CardTitle, CardMeta } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Metric } from "@/components/ui/Metric";
import { Dialog } from "@/components/ui/Dialog";
import { Lightbox, type LightboxImage } from "@/components/common/Lightbox";

const CATEGORY_BADGE_TONE: Record<Publication["category"], "accent" | "neutral" | "annotation"> = {
  SCOPUS: "accent",
  UGC_CARE: "accent",
  PEER_REVIEWED: "neutral",
  BOOK: "annotation",
  CHAPTER: "annotation",
};

export const PublicationsBooks: React.FC = () => {
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const stats = useMemo(publicationStats, []);
  const highlights = useMemo(() => publicationsData.filter((p) => p.isHighlight).slice(0, 5), []);
  const categoryBreakdown = useMemo(
    () => Object.entries(stats.byCategory) as [Publication["category"], number][],
    [stats]
  );

  const bookImages: LightboxImage[] = activeBook
    ? [
        { src: activeBook.imageCover, alt: `${activeBook.title}, front cover`, title: activeBook.title, description: "Front cover" },
        ...(activeBook.imageBack
          ? [{ src: activeBook.imageBack, alt: `${activeBook.title}, back cover`, title: activeBook.title, description: "Back cover" }]
          : []),
      ]
    : [];

  return (
    <SectionShell
      id="publications"
      label="Publications & books"
      title={`${stats.total} publications, ${booksData.length} books`}
      lede={`Peer-reviewed research from ${stats.firstYear} to ${stats.lastYear}, alongside field guides published with the Botanical Survey of India and the Telangana State Forest Department.`}
      cta={
        <Button href="/publications" variant="secondary" iconRight={<ArrowRight className="h-4 w-4" />}>
          View all {stats.total} publications
        </Button>
      }
    >
      <div
        data-reveal-group
        data-reveal-stagger="tight"
        className="mb-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-4 sm:mb-14"
      >
        {categoryBreakdown.map(([category, count]) => (
          <div key={category} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "10px" }}>
            <Metric value={count} label={CATEGORY_LABEL[category]} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="stamp text-herbarium">Selected papers</p>
          <ul data-reveal-group className="mt-4 divide-y divide-line border-t border-line">
            {highlights.map((p, i) => (
              <li key={p.id} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "10px" }}>
                <a
                  href={findPaperUrl(p)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group -mx-3 flex items-start gap-3 rounded px-3 py-4 transition-colors hover:bg-paper-raised"
                >
                  <span className="stamp mt-0.5 shrink-0 text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={CATEGORY_BADGE_TONE[p.category]}>{CATEGORY_LABEL[p.category]}</Badge>
                      <span className="text-xs tabular-nums text-ink-muted">{p.year}</span>
                    </div>
                    <p className="mt-2 text-sm leading-snug text-ink transition-colors group-hover:text-herbarium-deep">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-xs text-ink-muted">
                      {p.journal}
                      {p.volume ? `, ${p.volume}` : ""}
                    </p>
                  </div>
                  <ExternalLink
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-muted transition-colors group-hover:text-herbarium-deep"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="stamp text-herbarium">Books &amp; field guides</p>
          <div data-reveal-group className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {booksData.map((book) => (
              <Card
                key={book.id}
                data-reveal-item
                data-reveal
                style={{ ["--reveal-y" as string]: "10px" }}
                onSelect={() => setActiveBook(book)}
                media={{ src: book.imageCover, alt: `${book.title}, cover`, sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px", aspect: "3/4" }}
              >
                <CardBody className="p-3">
                  <CardTitle className="min-h-[2rem] font-sans text-xs font-medium">{book.title}</CardTitle>
                  <CardMeta>
                    {book.role} · {book.year}
                  </CardMeta>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={activeBook !== null}
        onClose={() => setActiveBook(null)}
        title={activeBook?.title ?? ""}
        description={activeBook ? `${activeBook.role} · ${activeBook.year} · ${activeBook.publishedBy}` : undefined}
        size="lg"
      >
        {activeBook && (
          <div className="space-y-5">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="focus-ring relative block aspect-[3/4] w-32 overflow-hidden rounded border border-line shadow-card sm:w-40"
              aria-label={`View covers of ${activeBook.title}`}
            >
              <Image src={activeBook.imageCover} alt="" fill sizes="160px" className="object-cover" />
            </button>
            <p className="text-sm leading-relaxed text-ink-secondary">{activeBook.description}</p>
            <div className="rounded border border-line bg-paper px-4 py-3 text-xs text-ink-secondary">
              <span className="font-semibold text-ink">Release: </span>
              {activeBook.releaseDetails}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeBook.tags.map((t) => (
                <Badge key={t} tone="neutral">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Dialog>

      <Lightbox images={bookImages} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </SectionShell>
  );
};
