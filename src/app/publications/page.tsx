import { Metadata } from "next";
import { PublicationsView } from "@/components/publications/PublicationsView";
import { publicationStats } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications | Dr. M. Venkat Ramana",
  description:
    "Peer-reviewed research by Dr. M. Venkat Ramana: 42 publications across Scopus-indexed and UGC-CARE listed journals in plant systematics, biodiversity, and conservation."
};

export default function PublicationsPage() {
  const stats = publicationStats();
  return <PublicationsView stats={stats} />;
}
