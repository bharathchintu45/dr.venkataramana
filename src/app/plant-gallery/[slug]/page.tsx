import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSpeciesSlugs, getSpeciesBySlug, getSpeciesImages } from "@/lib/species";
import { ImageGallery } from "@/components/plant-gallery/ImageGallery";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { Calendar, MapPin, ShieldAlert, BookOpen, Sparkles } from "lucide-react";

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
    title: `${species.scientificName} (${species.authority}) — ${species.family} | Dr. M. Venkat Ramana`,
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
    <div className="max-w-5xl mx-auto w-full">
      <BackLink href="/plant-gallery" label="Back to Plant Gallery" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ImageGallery images={images} alt={species.scientificName} />
        </div>

        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#1E4D34] text-[#9FE870] border border-[#89C35C]/40 inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> New Species Discovery
          </span>

          <h1 className="text-2xl sm:text-3xl font-serif-title font-bold text-white mt-3 italic">
            {species.scientificName}
          </h1>
          {species.localName && (
            <p className="text-sm text-[#EFE8D8]/80 mt-1">
              Local name: <span className="font-medium">{species.localName}</span>
            </p>
          )}
          <p className="text-xs text-[#C5A868] font-sans font-medium mt-1">
            {species.authority}
          </p>

          <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2 text-[#EFE8D8]/80">
              <Calendar className="w-4 h-4 text-[#89C35C]" />
              <span>Described: <strong>{species.year}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#EFE8D8]/80">
              <MapPin className="w-4 h-4 text-[#89C35C]" />
              <span className="truncate">{species.geography}</span>
            </div>
            <div className="text-[#EFE8D8]/80">
              Family: <strong>{species.family}</strong>
            </div>
            <div className="text-[#EFE8D8]/80">
              Habit: <strong>{species.growthHabit}</strong>
            </div>
            <div className="col-span-2 flex items-center gap-2 text-[#E2C98F]">
              <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
              <span>Status: <strong>{species.conservationStatus}</strong></span>
            </div>
          </div>

          <p className="mt-5 text-sm text-[#EFE8D8]/85 leading-relaxed">
            {species.description}
          </p>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#9FE870]">
            <BookOpen className="w-4 h-4" />
            <span className="italic">{species.publishedIn}</span>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold mb-2">
            Diagnostic Characteristics
          </h2>
          <ul className="space-y-1.5 text-sm text-[#EFE8D8]/85 leading-relaxed">
            {species.diagnosticFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#89C35C] font-bold mt-0.5">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold mb-1">
              Type Locality
            </h2>
            <p className="text-[#EFE8D8]/80">{species.typeLocality}</p>
          </div>
          <div>
            <h2 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold mb-1">
              Etymology
            </h2>
            <p className="text-[#EFE8D8]/80">{species.etymology}</p>
          </div>
          <div>
            <h2 className="text-xs uppercase font-serif tracking-wider text-[#89C35C] font-semibold mb-1">
              Ecological Notes
            </h2>
            <p className="text-[#EFE8D8]/80">{species.ecologicalNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
