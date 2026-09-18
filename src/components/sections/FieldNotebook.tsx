import React from "react";
import { speciesDiscoveries } from "@/data/species";
import { SectionShell } from "@/components/ui/SectionShell";
import { Sketchbook } from "@/components/sketchbook/Sketchbook";

export const FieldNotebook: React.FC = () => (
  <SectionShell
    id="notebook"
    label="Field notebook"
    title="Turn the pages: eight species new to science"
    lede="A specimen sheet for each plant first described by Dr. Ramana, bound as a field notebook. Open the cover, then drag, swipe, or use the arrow keys to turn the pages."
    width="wide"
  >
    <Sketchbook species={speciesDiscoveries} />
  </SectionShell>
);
