import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Leaf, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { landscapeFloraSrc } from "@/data/landscapeFlora";
import { getAllLandscapeFloraIds, getLandscapeFloraById, landscapeCollectionNames, getLandscapeFloraNeighbours } from "@/lib/landscapeFlora";
import { ImageGallery } from "@/components/plant-gallery/ImageGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return getAllLandscapeFloraIds().map((id) => ({ id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const record = getLandscapeFloraById(params.id);
  if (!record) {
    return { title: "Plant Not Found | Dr. M. Venkat Ramana" };
  }
  const description = `${record.scientificName} (${record.family}), documented in the landscape & urban-forestry species catalog.`;

  return {
    title: `${record.scientificName} | Plant Gallery | Dr. M. Venkat Ramana`,
    description,
    openGraph: {
      title: record.scientificName,
      description,
      images: [landscapeFloraSrc(record.id, record.photos[0].file)]
    }
  };
}

export default function LandscapeFloraDetailPage({ params }: PageProps) {
  const record = getLandscapeFloraById(params.id);
  if (!record) {
    notFound();
  }

  const collections = landscapeCollectionNames(record.collections);
  const { prev, next } = getLandscapeFloraNeighbours(params.id);
  const images = record.photos.map((p) => landscapeFloraSrc(record.id, p.file));

  return (
    <div className="mx-auto w-full max-w-5xl">
      <BackLink href="/plant-gallery" label="Back to plant gallery" />

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ImageGallery images={images} alt={`${record.scientificName} in the landscape & urban-forestry species catalog`} />
        </div>

        <div>
          <Badge tone="accent" icon={<Sparkles className="h-3 w-3" aria-hidden />}>
            Landscape & urban planting record
          </Badge>

          <h1 className="mt-3 font-display text-2xl font-medium italic text-ink sm:text-3xl">{record.scientificName}</h1>
          {record.localName && (
            <p className="mt-1 text-sm text-ink-secondary">
              Local name: <span className="font-medium text-ink">{record.localName}</span>
            </p>
          )}

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-4 text-xs">
            <div className="text-ink-secondary">
              <dt className="inline">Family</dt>: <dd className="inline font-semibold text-ink">{record.family || "Unconfirmed"}</dd>
            </div>
            {record.leafType && (
              <div className="text-ink-secondary">
                <dt className="inline">Leaf type</dt>:{" "}
                <dd className="inline font-semibold text-ink">{record.leafType === "narrow" ? "Narrow-leaved" : "Broad-leaved"}</dd>
              </div>
            )}
          </dl>

          <div className="mt-5 flex flex-wrap items-start gap-2 border-t border-line pt-4 text-xs text-herbarium-deep">
            <Leaf className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              Documented for{" "}
              {collections.map((c, i) => (
                <span key={c.id}>
                  {c.title}
                  {i < collections.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-ink-muted">
        Field-recorded identification from the landscape & urban-forestry species catalog. Photograph © Dr. M. Venkat
        Ramana.
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-6 text-sm">
        <Link
          href={`/plant-gallery/collections/${prev.id}`}
          className="focus-ring group inline-flex items-center gap-1.5 text-ink-secondary hover:text-herbarium-deep"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          <span className="italic">{prev.scientificName}</span>
        </Link>
        <Link
          href={`/plant-gallery/collections/${next.id}`}
          className="focus-ring group inline-flex items-center gap-1.5 text-right text-ink-secondary hover:text-herbarium-deep"
        >
          <span className="italic">{next.scientificName}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
