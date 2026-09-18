import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSpeciesSlugs, getSpeciesBySlug, getSpeciesImages } from "@/lib/species";
import { ImageGallery } from "@/components/plant-gallery/ImageGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Calendar, MapPin, ShieldAlert, BookOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSpeciesSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const species = getSpeciesBySlug(params.slug);
  if (!species) {
    return { title: "Species Not Found | Dr. M. Venkat Ramana" };
  }

  return {
    title: `${species.scientificName} (${species.authority}), ${species.family} | Dr. M. Venkat Ramana`,
    description: species.description,
    openGraph: {
      title: species.scientificName,
      description: species.description,
      images: [species.imageCard]
    }
  };
}

export default function SpeciesDetailPage({ params }: PageProps) {
  const species = getSpeciesBySlug(params.slug);

  if (!species) {
    notFound();
  }

  const images = getSpeciesImages(species);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <BackLink href="/plant-gallery" label="Back to plant gallery" />

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ImageGallery images={images} alt={`Habitat of ${species.scientificName}`} />
        </div>

        <div>
          <Badge tone="accent" icon={<Sparkles className="h-3 w-3" aria-hidden />}>
            New species discovery
          </Badge>

          <h1 className="mt-3 font-display text-2xl font-medium italic text-ink sm:text-3xl">{species.scientificName}</h1>
          {species.localName && (
            <p className="mt-1 text-sm text-ink-secondary">
              Local name: <span className="font-medium text-ink">{species.localName}</span>
            </p>
          )}
          <p className="mt-1 text-xs font-medium text-annotation">{species.authority}</p>

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-4 text-xs">
            <div className="flex items-center gap-2 text-ink-secondary">
              <Calendar className="h-4 w-4 shrink-0 text-herbarium" aria-hidden />
              <span>
                <dt className="inline">Described</dt>: <dd className="inline font-semibold text-ink">{species.year}</dd>
              </span>
            </div>
            <div className="flex items-center gap-2 text-ink-secondary">
              <MapPin className="h-4 w-4 shrink-0 text-herbarium" aria-hidden />
              <dd className="truncate">{species.geography}</dd>
            </div>
            <div className="text-ink-secondary">
              <dt className="inline">Family</dt>: <dd className="inline font-semibold text-ink">{species.family}</dd>
            </div>
            <div className="text-ink-secondary">
              <dt className="inline">Habit</dt>: <dd className="inline font-semibold text-ink">{species.growthHabit}</dd>
            </div>
            <div className="col-span-2 flex items-center gap-2 text-annotation">
              <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden />
              <dt className="inline">Status</dt>: <dd className="inline font-semibold">{species.conservationStatus}</dd>
            </div>
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-ink-secondary">{species.description}</p>

          <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-herbarium-deep">
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
            <span className="italic">{species.publishedIn}</span>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-8 md:grid-cols-2">
        <div>
          <h2 className="stamp text-herbarium">Diagnostic characteristics</h2>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-secondary">
            {species.diagnosticFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-herbarium">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <h2 className="stamp text-herbarium">Type locality</h2>
            <p className="mt-1 text-ink-secondary">{species.typeLocality}</p>
          </div>
          <div>
            <h2 className="stamp text-herbarium">Etymology</h2>
            <p className="mt-1 text-ink-secondary">{species.etymology}</p>
          </div>
          <div>
            <h2 className="stamp text-herbarium">Ecological notes</h2>
            <p className="mt-1 text-ink-secondary">{species.ecologicalNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
