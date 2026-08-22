import Link from "next/link";
import Image from "next/image";
import { SpeciesDiscovery } from "@/data/species";
import { getConservationCategory } from "@/lib/species";

interface PlantCardProps {
  species: SpeciesDiscovery;
}

export const PlantCard: React.FC<PlantCardProps> = ({ species }) => {
  return (
    <Link
      href={`/plant-gallery/${species.id}`}
      className="bg-[#F0E8D5] rounded-xl p-3.5 sm:p-4 flex flex-col items-center justify-between text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-2xl border border-[#C5A868]/60"
    >
      <div className="relative w-full h-44 sm:h-48 mb-2 rounded overflow-hidden flex items-center justify-center">
        <Image
          src={species.imageCard}
          alt={species.scientificName}
          fill
          className="object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="w-full pt-2 border-t border-[#C5A868]/30">
        <h3 className="font-serif italic font-bold text-xs sm:text-sm text-[#261D12] group-hover:text-[#1E4D34] transition-colors leading-tight">
          {species.scientificName}
        </h3>
        <div className="text-[11px] font-mono text-[#6B532F] font-bold mt-1">
          {species.year}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 mt-2">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#1E4D34]/10 text-[#1E4D34] border border-[#1E4D34]/25">
            {species.growthHabit}
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#6B2E2E]/10 text-[#6B2E2E] border border-[#6B2E2E]/25">
            {getConservationCategory(species.conservationStatus)}
          </span>
        </div>
      </div>
    </Link>
  );
};
