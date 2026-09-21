import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Leaf, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { floraSrc } from "@/data/groveFlora";
import { getAllFloraIds, getFloraById, getFloraDetails, floraHasDetails, groveNames, getFloraNeighbours } from "@/lib/groveFlora";
import { ImageGallery } from "@/components/plant-gallery/ImageGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return getAllFloraIds().map((id) => ({ id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const record = getFloraById(params.id);
  if (!record) {
    return { title: "Plant Not Found | Dr. M. Venkat Ramana" };
  }
  const detail = getFloraDetails(params.id);
  const hasDetails = floraHasDetails(params.id);
  const description =
    detail?.description ??
    `${record.scientificName} (${record.family}), recorded during the field survey of Telangana's sacred groves.`;

  return {
    title: `${record.scientificName} | Sacred Groves Flora | Dr. M. Venkat Ramana`,
    description,
    // A record with no write-up yet still gets a page (photos + name +
    // family), but it's kept out of search results until it has content —
    // see groveFloraDetails.ts.
    robots: hasDetails ? undefined : { index: false, follow: true },
    openGraph: {
      title: record.scientificName,
      description,
      images: [floraSrc(record.id, record.photos[0].file)]
    }
  };
}

export default function GroveFloraDetailPage({ params }: PageProps) {
  const record = getFloraById(params.id);
  if (!record) {
    notFound();
  }

  const detail = getFloraDetails(params.id);
  const hasDetails = floraHasDetails(params.id);
  const groves = groveNames(record.groves);
  const { prev, next } = getFloraNeighbours(params.id);
  const images = record.photos.map((p) => floraSrc(record.id, p.file));

  return (
    <div className="mx-auto w-full max-w-5xl">
      <BackLink href="/sacred-groves/flora" label="Back to flora index" />

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ImageGallery images={images} alt={`${record.scientificName} in the Telangana sacred groves`} />
        </div>

        <div>
          <Badge tone="accent" icon={<Sparkles className="h-3 w-3" aria-hidden />}>
            Sacred grove flora record
          </Badge>

          <h1 className="mt-3 font-display text-2xl font-medium italic text-ink sm:text-3xl">{record.scientificName}</h1>
          {(detail?.localName || detail?.teluguName) && (
            <p className="mt-1 text-sm text-ink-secondary">
              {detail?.localName && (
                <>
                  Local name: <span className="font-medium text-ink">{detail.localName}</span>
                </>
              )}
              {detail?.localName && detail?.teluguName && " · "}
              {detail?.teluguName && (
                <>
                  Telugu: <span className="font-medium text-ink">{detail.teluguName}</span>
                </>
              )}
            </p>
          )}

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-4 text-xs">
            <div className="text-ink-secondary">
              <dt className="inline">Family</dt>: <dd className="inline font-semibold text-ink">{record.family || "Unconfirmed"}</dd>
            </div>
            {detail?.habit && (
              <div className="text-ink-secondary">
                <dt className="inline">Habit</dt>: <dd className="inline font-semibold text-ink">{detail.habit}</dd>
              </div>
            )}
            {detail?.conservationStatus && (
              <div className="col-span-2 flex items-center gap-2 text-annotation">
                <Leaf className="h-4 w-4 shrink-0" aria-hidden />
                <dt className="inline">Status</dt>: <dd className="inline font-semibold">{detail.conservationStatus}</dd>
              </div>
            )}
          </dl>

          {detail?.description ? (
            <p className="mt-5 text-sm leading-relaxed text-ink-secondary">{detail.description}</p>
          ) : (
            <p className="mt-5 rounded border border-line bg-paper-raised px-4 py-3 text-sm text-ink-muted">
              A full write-up for this species hasn&apos;t been added yet — check back soon.
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-start gap-2 border-t border-line pt-4 text-xs text-herbarium-deep">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              Recorded in{" "}
              {groves.map((g, i) => (
                <span key={g.id}>
                  <Link href={`/sacred-groves/flora?grove=${g.id}`} className="focus-ring underline decoration-herbarium/40 hover:text-herbarium">
                    {g.name}
                  </Link>
                  {i < groves.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {hasDetails && (detail?.ethnobotanicalUses || detail?.culturalSignificance || detail?.distribution || detail?.floweringFruiting || detail?.notes) && (
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-2">
          <div className="space-y-4 text-sm">
            {detail?.floweringFruiting && (
              <div>
                <h2 className="stamp text-herbarium">Flowering &amp; fruiting</h2>
                <p className="mt-1 text-ink-secondary">{detail.floweringFruiting}</p>
              </div>
            )}
            {detail?.distribution && (
              <div>
                <h2 className="stamp text-herbarium">Distribution</h2>
                <p className="mt-1 text-ink-secondary">{detail.distribution}</p>
              </div>
            )}
            {detail?.ethnobotanicalUses && (
              <div>
                <h2 className="stamp text-herbarium">Ethnobotanical uses</h2>
                <p className="mt-1 text-ink-secondary">{detail.ethnobotanicalUses}</p>
              </div>
            )}
          </div>

          <div className="space-y-4 text-sm">
            {detail?.culturalSignificance && (
              <div>
                <h2 className="stamp text-herbarium">Cultural significance</h2>
                <p className="mt-1 text-ink-secondary">{detail.culturalSignificance}</p>
              </div>
            )}
            {detail?.notes && (
              <div>
                <h2 className="stamp text-herbarium">Notes</h2>
                <p className="mt-1 text-ink-secondary">{detail.notes}</p>
              </div>
            )}
            {detail?.references && detail.references.length > 0 && (
              <div>
                <h2 className="flex items-center gap-1.5 stamp text-herbarium">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden /> References
                </h2>
                <ul className="mt-1 space-y-1">
                  {detail.references.map((ref) => (
                    <li key={ref} className="text-ink-secondary">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <p className="mt-10 text-center text-xs text-ink-muted">
        Field-recorded identification from the sacred-groves survey; verification is in progress, so this name may
        still be corrected. Photograph © Dr. M. Venkat Ramana / Dr. T. Narender.
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-6 text-sm">
        <Link
          href={`/sacred-groves/flora/${prev.id}`}
          className="focus-ring group inline-flex items-center gap-1.5 text-ink-secondary hover:text-herbarium-deep"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          <span className="italic">{prev.scientificName}</span>
        </Link>
        <Link
          href={`/sacred-groves/flora/${next.id}`}
          className="focus-ring group inline-flex items-center gap-1.5 text-right text-ink-secondary hover:text-herbarium-deep"
        >
          <span className="italic">{next.scientificName}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
