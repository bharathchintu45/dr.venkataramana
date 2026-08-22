export interface MilestoneStat {
  id: string;
  metric: string;
  label: string;
  subLabel: string;
  iconName: string;
  description: string;
}

export const achievementStats: MilestoneStat[] = [
  {
    id: "articles",
    metric: "42+",
    label: "Research Articles",
    subLabel: "Published in International & National Journals",
    iconName: "FileText",
    description: "Published in high-impact Scopus indexed and UGC-CARE listed journals including Kew Bulletin, Blumea, Rheedea, Taiwania, Nordic Journal of Botany, Phytotaxa, and Current Science."
  },
  {
    id: "books",
    metric: "6",
    label: "Books Published",
    subLabel: "Authored, Edited & Contributed",
    iconName: "BookOpen",
    description: "Authored authoritative field guides published by Botanical Survey of India, National Biodiversity Authority, and Telangana State Forest Department, officially released by State Ministers and UN Executives."
  },
  {
    id: "phd",
    metric: "6",
    label: "PhD Students Awarded",
    subLabel: "+ 2 Currently Enrolled Scholars",
    iconName: "GraduationCap",
    description: "Successfully mentored 6 doctoral candidates in plant systematics, sacred grove conservation, medicinal flora, and Indian cycads, with all scholars completing high-impact theses."
  },
  {
    id: "species",
    metric: "7",
    label: "New Species Described",
    subLabel: "To International Botanical Science",
    iconName: "Sparkles",
    description: "Described 6 new plant species from the Andaman & Nicobar archipelago and 1 endemic medicinal species from Hyderabad, indexed in IPNI under standard form 'M.V.Ramana'."
  },
  {
    id: "experience",
    metric: "20+",
    label: "Years of Experience",
    subLabel: "Teaching, Research & Administration",
    iconName: "Award",
    description: "Over two decades of dedication across Osmania University Campus, Nizam College, University College of Science Saifabad, and Botanical Survey of India."
  }
];

export const editorialReviewerJournals = [
  { name: "Journal of Asia Pacific Biodiversity", country: "Korea", indexed: "Scopus Indexed" },
  { name: "Nordic Journal of Botany", country: "Sweden", indexed: "Scopus Indexed" },
  { name: "Current Science", country: "India", indexed: "Scopus Indexed / UGC-CARE" },
  { name: "Rheedea", country: "India", indexed: "Scopus Indexed / UGC-CARE" },
  { name: "Journal of Threatened Taxa", country: "India", indexed: "Scopus Indexed / UGC-CARE" },
  { name: "Tropical Plant Research", country: "India", indexed: "UGC-CARE Listed" }
];
