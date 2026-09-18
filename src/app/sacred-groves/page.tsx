import { Metadata } from "next";
import { SacredGrovesView } from "@/components/sacred-groves/SacredGrovesView";

export const metadata: Metadata = {
  title: "Sacred Groves of Telangana | Dr. M. Venkat Ramana",
  description:
    "Field photography from the doctoral survey of plant diversity and conservation practices in the sacred groves of Telangana State, supervised by Dr. M. Venkat Ramana."
};

export default function SacredGrovesPage() {
  return <SacredGrovesView />;
}
