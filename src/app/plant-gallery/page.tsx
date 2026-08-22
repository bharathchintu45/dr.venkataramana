import { Metadata } from "next";
import { GalleryView } from "@/components/plant-gallery/GalleryView";

export const metadata: Metadata = {
  title: "Plant Gallery | Dr. M. Venkat Ramana",
  description:
    "Browse every new plant species discovered and described by Dr. M. Venkat Ramana, searchable and filterable by family, growth habit, region, and conservation status."
};

export default function PlantGalleryPage() {
  return <GalleryView />;
}
