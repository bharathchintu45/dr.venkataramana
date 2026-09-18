import { Metadata } from "next";
import { PhotoGalleryView } from "@/components/photo-gallery/PhotoGalleryView";

export const metadata: Metadata = {
  title: "Photo Gallery | Dr. M. Venkat Ramana",
  description:
    "Photographs from Dr. M. Venkat Ramana's botanical explorations, research lab, teaching, conservation activities and the living-laboratory campus of UCS Saifabad."
};

export default function PhotoGalleryPage() {
  return <PhotoGalleryView />;
}
