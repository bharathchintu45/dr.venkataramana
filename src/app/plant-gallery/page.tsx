import { Metadata } from "next";
import { GalleryView } from "@/components/plant-gallery/GalleryView";

export const metadata: Metadata = {
  title: "Plant Gallery | Dr. M. Venkat Ramana",
  description:
    "Every plant on the site: the new species discovered and described by Dr. M. Venkat Ramana, plus every plant recorded during the Telangana sacred-groves field survey — searchable and filterable by family, source, growth habit, region, and conservation status."
};

export default function PlantGalleryPage() {
  return <GalleryView />;
}
