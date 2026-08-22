export interface MembershipItem {
  id: string;
  name: string;
  category: string;
  membershipType: string;
  badgeImage: string;
  description: string;
}

export const membershipsData: MembershipItem[] = [
  {
    id: "ibs",
    name: "Indian Botanical Society",
    category: "Botanical Society",
    membershipType: "Life Member",
    badgeImage: "/assets/memberships/badge-indian-botanical-society.png",
    description: "Premier national society promoting botanical research, conferences, and advancement of plant science education across India."
  },
  {
    id: "isca",
    name: "Indian Science Congress Association",
    category: "Science Academy",
    membershipType: "Life Member",
    badgeImage: "/assets/memberships/badge-indian-science-congress.png",
    description: "Apex body of scientific research in India fostering interdisciplinary collaborations and national science policy."
  },
  {
    id: "iaat",
    name: "Indian Association for Angiosperm Taxonomy (IAAT)",
    category: "Systematics Association",
    membershipType: "Life Member",
    badgeImage: "/assets/memberships/badge-iaat.png",
    description: "Foremost taxonomic association in Asia dedicated to angiosperm classification, floristics, and conservation of flowering plants."
  },
  {
    id: "ethnopharmacology",
    name: "Society for Ethnopharmacology",
    category: "Ethnobotany & Pharmacology",
    membershipType: "Life Member",
    badgeImage: "/assets/memberships/badge-society-ethnopharmacology.png",
    description: "Global community researching traditional medicine systems, ethnobotany, drug discovery, and natural products standardization."
  },
  {
    id: "brisindia",
    name: "British Research Society, India (BRISINDIA)",
    category: "International Research",
    membershipType: "Life Member",
    badgeImage: "/assets/memberships/badge-brisindia.png",
    description: "International academic collective encouraging collaborative ecological investigations and global biodiversity research."
  }
];
