import { Metadata } from "next";
import { Suspense } from "react";
import { GroveFloraView } from "@/components/sacred-groves/GroveFloraView";

export const metadata: Metadata = {
  title: "Flora of the Sacred Groves | Dr. M. Venkat Ramana",
  description:
    "A photographic checklist of plant species recorded during the field survey of Telangana's sacred groves, supervised by Dr. M. Venkat Ramana."
};

export default function SacredGrovesFloraPage() {
  return (
    <Suspense fallback={null}>
      <GroveFloraView />
    </Suspense>
  );
}
