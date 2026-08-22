export interface FieldExpedition {
  id: string;
  title: string;
  category: string;
  location: string;
  durationOrDate: string;
  posterImage: string;
  videoUrl?: string;
  description: string;
  highlights: string[];
  findings: string[];
}

export const fieldworkVideos: FieldExpedition[] = [
  {
    id: "eastern-ghats",
    title: "Exploring Eastern Ghats & Papikonda",
    category: "Field Research",
    location: "Papikonda National Park & Eastern Ghats",
    durationOrDate: "Extensive Surveys",
    posterImage: "/assets/fieldwork/video-eastern-ghats.png",
    videoUrl: "https://www.youtube.com/watch?v=UDzsyEzbB14",
    description: "Deep jungle floristic expeditions traversing the rugged riverine ravines of Godavari basin and mist-shrouded peaks of Papikonda National Park, surveying unmapped angiospermic plant diversity.",
    highlights: [
      "Documented new plant records for Andhra Pradesh flora",
      "Surveyed rare orchids including Habenaria reniformis",
      "Assessed botanical micro-habitats and riparian vegetation along the Godavari River"
    ],
    findings: [
      "Three new distributional records to the flora of Andhra Pradesh",
      "Comprehensive floristic dataset incorporated into doctoral research by Y. Mahesh (Awarded 2023)"
    ]
  },
  {
    id: "botanical-expeditions",
    title: "Andaman & Nicobar Island Expeditions",
    category: "Botanical Exploration",
    location: "Saddle Peak National Park & North Andaman Islands",
    durationOrDate: "2010–2013 Exploration Tenure",
    posterImage: "/assets/fieldwork/video-expeditions.png",
    videoUrl: "https://www.youtube.com/watch?v=g99MQtD5QwM",
    description: "Trekking through dense primary wet evergreen rainforests, ascending Saddle Peak (732 m), and navigating mangrove creeks to discover previously unknown plant species.",
    highlights: [
      "Discovery of 6 new plant species described to international botanical science",
      "Rediscovery of Polyalthia crassa after decades without record",
      "Collection of type specimens deposited in Central National Herbarium (CAL) & ANRC (PBL)"
    ],
    findings: [
      "Artabotrys manoranjanii, Centotheca ganeshaiahiana, Murdannia saddlepeakensis, Syzygium spp.",
      "Identified critical micro-endemic plant conservation hotspots on serpentine ridges"
    ]
  },
  {
    id: "cycad-field-studies",
    title: "Indian Cycad Habitat Studies & Population Ecology",
    category: "Cycad Research",
    location: "Southern Eastern Ghats & Seshachalam Hills",
    durationOrDate: "DST SERB Grant Expedition (2018–2021)",
    posterImage: "/assets/fieldwork/video-cycads.png",
    videoUrl: "https://www.youtube.com/watch?v=UDzsyEzbB14",
    description: "Mapping the fragmented wild populations of CITES Appendix-I listed Cycas beddomei and investigating reproductive ecology, seed germination constraints, and anthropogenic pressures.",
    highlights: [
      "Located relic populations of Cycas beddomei across rocky cliff edges",
      "Conducted seed morphology, viability, and in-situ germination monitoring",
      "Established ex-situ conservation nursery at Osmania University Botanical Garden"
    ],
    findings: [
      "Clarified taxonomic misidentifications in Indian cycads",
      "Published seed germination breakthroughs in Nelumbo (2020) and review in Nelumbo (2022)"
    ]
  },
  {
    id: "local-communities",
    title: "Community Biodiversity Registers & Sacred Groves",
    category: "Academic Field Activities",
    location: "Telangana Sacred Groves & Gram Panchayats",
    durationOrDate: "UNEP-GEF ABS Project",
    posterImage: "/assets/fieldwork/video-communities.png",
    videoUrl: "https://www.youtube.com/watch?v=g99MQtD5QwM",
    description: "Engaging directly with indigenous tribal communities, traditional vaidyas, and rural elders to record ethnobotanical lore, medicinal remedies, and conserve ancient sacred forest groves.",
    highlights: [
      "Prepared 10 People's Biodiversity Registers (PBRs) for Telangana State Biodiversity Board",
      "Explored sacred grove floras at Pandavula Gutta and Nagoba Temple",
      "Trained Biodiversity Management Committees on the Biological Diversity Act 2002"
    ],
    findings: [
      "Documented 100+ native medicinal plant species and their traditional therapeutic applications",
      "Supervised Ph.D. studies on sacred grove conservation and intraspecific variants"
    ]
  }
];

export const mediaFeatures = [
  {
    channel: "ETV Telangana",
    title: "Live Programme: Coronavirus Precautions with Herbal Plants",
    date: "16 March 2020",
    url: "https://youtu.be/UDzsyEzbB14"
  },
  {
    channel: "ETV Telangana",
    title: "Live Programme: 'Conocarpus' Tree Plantations in Urban Areas & Negative Impacts",
    date: "12 January 2023",
    url: "https://youtu.be/g99MQtD5QwM"
  },
  {
    channel: "T News Telugu",
    title: "Special Report on Green Campus & Botanical Garden, UCS Saifabad, OU",
    date: "13 August 2020",
    url: "https://www.youtube.com"
  },
  {
    channel: "Mana TV (Govt. of Telangana)",
    title: "Live Lecture: 'Biodiversity and Its Importance for Human Survival'",
    date: "16 July 2016",
    url: "https://www.youtube.com"
  }
];
