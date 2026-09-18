export interface Milestone {
  year: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  keyTaxa?: string;
}

export const botanicalJourney: Milestone[] = [
  {
    year: "2005",
    title: "Teaching Foundation & Academic Genesis",
    role: "Lecturer in Botany (PTL & Contract)",
    institution: "Department of Botany, Osmania University Campus",
    location: "Hyderabad, India",
    description: "Sparked a lifelong passion for botanical research and higher education, teaching undergraduate and postgraduate botany students in plant anatomy, physiology, and systematics.",
    highlights: [
      "Lectured on Angiosperm taxonomy and plant diversity",
      "Conducted extensive floristic excursions across Telangana and Andhra Pradesh",
      "Laid groundwork for specialized research in Indian Gymnosperms and Cycads"
    ]
  },
  {
    year: "2010",
    title: "Island Floristics & Species Exploration",
    role: "Research Associate",
    institution: "ANRC, Botanical Survey of India (BSI)",
    location: "Andaman and Nicobar Islands, India",
    description: "Conducted intensive botanical explorations across rugged tropical rainforests and isolated peaks of Andaman and Nicobar Islands, resulting in multiple new species discoveries and botanical rediscoveries.",
    highlights: [
      "Discovered & described 6 new plant species from Saddle Peak National Park & North Andaman",
      "Rediscovered Polyalthia crassa after decades of obscurity",
      "Documented medicinal and aromatic Zingiberaceae and island endemic flora",
      "Received the prestigious Antony Mukkath - Prof. K.S. Manilal Award (IAAT, 2011)"
    ],
    keyTaxa: "Artabotrys manoranjanii, Centotheca ganeshaiahiana, Murdannia saddlepeakensis, Syzygium spp."
  },
  {
    year: "2013",
    title: "Higher Education & Faculty Leadership",
    role: "Assistant Professor",
    institution: "Department of Botany, Nizam College, Osmania University",
    location: "Hyderabad, India",
    description: "Appointed as regular Assistant Professor at the historic Nizam College, establishing specialized research programs in plant systematics, ethnobotany, and urban biodiversity.",
    highlights: [
      "Described new endemic bulbous geophyte Ledebouria hyderabadensis",
      "Authored major publications in Blumea, Kew Bulletin, and Nordic Journal of Botany",
      "Led university field expeditions and initiated doctoral research mentoring"
    ]
  },
  {
    year: "2017",
    title: "Research Leadership & Department Stewardship",
    role: "Assistant Professor & Head (I/C), Dept. of Botany",
    institution: "University College of Science, Saifabad, Osmania University",
    location: "Hyderabad, India",
    description: "Current professorial tenure directing advanced research in Indian Cycads conservation, biodiversity registers, botanical garden development, and mentoring doctoral candidates.",
    highlights: [
      "Principal Investigator for DST SERB Core Research Grant on Genus Cycas L. in India",
      "Principal Investigator for HMDA Botanical Garden Upgradation Project (₹95.15 Lakhs)",
      "Vice Principal (Hostels & Mess: 2024–2026) & Head of Department (2024–2026)",
      "Supervised 6 Awarded Ph.D. scholars in floristics, cycads, sacred groves & ethnobotany"
    ]
  },
  {
    year: "Present",
    title: "Conserving the Diversity of Forests",
    role: "Senior Botanist, Explorer & Conservation Advocate",
    institution: "Osmania University & State Conservation Boards",
    location: "Telangana & Eastern Ghats, India",
    description: "Continuing the sacred mission of exploring India's floristic wealth, protecting endangered cycad populations, developing urban biodiversity, and inspiring the next generation of plant scientists.",
    highlights: [
      "Subject Expert for Telangana State Biodiversity Board & EPTRI",
      "Active conservation assessment of CITES-listed Cycas beddomei and narrow endemics",
      "Promoting green campus infrastructure, public science outreach, and nature education"
    ]
  }
];
