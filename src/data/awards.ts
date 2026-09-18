export interface AwardItem {
  id: string;
  year: number | string;
  title: string;
  conferredBy: string;
  eventOrPlace: string;
  description: string;
}

export const awardsData: AwardItem[] = [
  {
    id: "iaat-award",
    year: 2011,
    title: "Antony Mukkath - Prof. K.S. Manilal Award",
    conferredBy: "Indian Association for Angiosperm Taxonomy (IAAT)",
    eventOrPlace: "IMMT, Bhubaneswar, Odisha (December 2011)",
    description: "Conferred for Best Scientific Paper Presentation at the XXI Annual Conference of IAAT for pioneering research on the rediscovery of lost plant taxa from Andaman & Nicobar Islands."
  },
  {
    id: "expert-eptri",
    year: "Ongoing",
    title: "Subject Expert & Advisory Panel Member",
    conferredBy: "Environment Protection Training & Research Institute (EPTRI)",
    eventOrPlace: "Hyderabad, Telangana",
    description: "Honored as Senior Subject Expert in Plant Taxonomy, PBR preparation, and Capacity Building training under National Biodiversity Authority and MoEF&CC programs."
  },
  {
    id: "expert-fcri",
    year: "Ongoing",
    title: "Subject Expert & Laboratory Advisor",
    conferredBy: "Forest College and Research Institute (FCRI), Mulugu-Siddipet",
    eventOrPlace: "Government of Telangana",
    description: "Served as botanical subject expert for the establishment of advanced botanical laboratories, field excursions, and floristic research at FCRI."
  },
  {
    id: "expert-biodiversity-board",
    year: "Ongoing",
    title: "State Biodiversity Expert & Reviewer",
    conferredBy: "Telangana State Biodiversity Board & Forest Department",
    eventOrPlace: "Hyderabad, Telangana",
    description: "Appointed expert reviewer for People's Biodiversity Registers, Miyawaki urban forest models, and state-wide environmental impact evaluations."
  }
];
