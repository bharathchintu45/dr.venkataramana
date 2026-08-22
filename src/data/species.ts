export type GrowthHabit = "Tree" | "Shrub" | "Herb" | "Climber" | "Grass";

export interface SpeciesDiscovery {
  id: string;
  scientificName: string;
  localName?: string;
  authority: string;
  family: string;
  growthHabit: GrowthHabit;
  year: number;
  publishedIn: string;
  typeLocality: string;
  geography: string;
  region: string;
  imageCard: string;
  additionalImages?: string[];
  conservationStatus: string;
  diagnosticFeatures: string[];
  etymology: string;
  ecologicalNotes: string;
  description: string;
}

export const speciesDiscoveries: SpeciesDiscovery[] = [
  {
    id: "artabotrys-manoranjanii",
    scientificName: "Artabotrys manoranjanii",
    authority: "M.V.Ramana, J. Swamy & K.C.Mohan",
    family: "Annonaceae",
    growthHabit: "Climber",
    year: 2016,
    publishedIn: "Nordic Journal of Botany 34: 413–415",
    typeLocality: "North Andaman, Andaman & Nicobar Islands",
    geography: "Andaman Islands, India (Endemic)",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-artabotrys.png",
    conservationStatus: "Critically Endangered (Narrow Endemic)",
    diagnosticFeatures: [
      "Woody climbing liana with hooked peduncles for tree canopy attachment",
      "Yellowish-green scented flowers with thick triquetrous inner petals",
      "Monocarps distinctly beaked and sub-sessile on persistent torus"
    ],
    etymology: "Named in honor of Dr. Manoranjan, esteemed botanist and mentor in Indian plant systematics.",
    ecologicalNotes: "Grows in dense tropical wet evergreen rainforests at mid-altitudes in North Andaman Island.",
    description: "Artabotrys manoranjanii is a climbing liana in the family Annonaceae, known only from North Andaman Island. It grows in dense tropical wet evergreen rainforest at mid-altitudes, climbing into the canopy using hooked peduncles, and is currently assessed as Critically Endangered due to its extremely narrow range."
  },
  {
    id: "centotheca-ganeshaiahiana",
    scientificName: "Centotheca ganeshaiahiana",
    authority: "M.V.Ramana",
    family: "Poaceae",
    growthHabit: "Grass",
    year: 2014,
    publishedIn: "Nordic Journal of Botany 32(5): 559–562",
    typeLocality: "Saddle Peak National Park, North Andaman",
    geography: "Andaman Islands, India (Strictly Endemic)",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-centotheca.png",
    conservationStatus: "Critically Endangered",
    diagnosticFeatures: [
      "Perennial broad-leaved forest grass with open panicle inflorescence",
      "Spikelets with reflexed tubercle-based bristles aiding zoochorous seed dispersal",
      "Adapted strictly to scrub-forest ridges on serpentine and ultrabasic soils"
    ],
    etymology: "Named in honor of Prof. K.N. Ganeshaiah, renowned evolutionary biologist and author.",
    ecologicalNotes: "Restricted to the higher ridges of Saddle Peak National Park, thriving on wind-swept stunted vegetation zones.",
    description: "Centotheca ganeshaiahiana is a perennial forest grass in the family Poaceae, strictly endemic to the higher ridges of Saddle Peak National Park in North Andaman. It thrives on wind-swept, stunted scrub-forest vegetation over serpentine and ultrabasic soils, and is currently assessed as Critically Endangered."
  },
  {
    id: "murdannia-saddlepeakensis",
    scientificName: "Murdannia saddlepeakensis",
    authority: "M.V. Ramana & Nandikar",
    family: "Commelinaceae",
    growthHabit: "Herb",
    year: 2013,
    publishedIn: "PhytoKeys 20: 9–15",
    typeLocality: "Saddle Peak National Park, North Andaman",
    geography: "Andaman Islands, India (Endemic)",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-murdannia.png",
    conservationStatus: "Endangered",
    diagnosticFeatures: [
      "Slender erect herb known as the Saddle Peak Dewflower",
      "Bright lilac-blue flowers with 3 fertile stamens and 3 bearded staminodes",
      "Distinctive tuberculate-reticulate seeds unique within section Murdannia"
    ],
    etymology: "Named after its unique locus classicus: Saddle Peak, the highest peak in the Andaman & Nicobar archipelago (732 m).",
    ecologicalNotes: "Inhabits moist mossy rock crevices and stream banks along Saddle Peak summit.",
    description: "Murdannia saddlepeakensis, known as the Saddle Peak Dewflower, is a slender erect herb in the family Commelinaceae, endemic to the summit of Saddle Peak in North Andaman. It inhabits moist mossy rock crevices and stream banks near the archipelago's highest point, and is currently assessed as Endangered."
  },
  {
    id: "syzygium-sanjappanum",
    scientificName: "Syzygium sanjappanum",
    authority: "M.V.Ramana",
    family: "Myrtaceae",
    growthHabit: "Tree",
    year: 2014,
    publishedIn: "Blumea 59: 42–48",
    typeLocality: "Saddle Peak National Park, North Andaman",
    geography: "Andaman Islands, India",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-syzygium-sanjappanum.png",
    conservationStatus: "Vulnerable (Narrow Range)",
    diagnosticFeatures: [
      "Evergreen tree with coriaceous elliptic leaves and prominent intramarginal veins",
      "Terminal and axillary few-flowered cymes with calyptrate calyx lobes",
      "Globose deep purple berries with a single large cotyledon"
    ],
    etymology: "Named in honor of Dr. M. Sanjappa, former Director of the Botanical Survey of India (BSI).",
    ecologicalNotes: "Occurs in littoral to sub-montane tropical evergreen forests across the Andaman archipelago.",
    description: "Syzygium sanjappanum is an evergreen tree in the family Myrtaceae, found across the Andaman Islands. It occurs in littoral to sub-montane tropical evergreen forest, bearing globose deep purple berries, and is currently assessed as Vulnerable due to its narrow range."
  },
  {
    id: "syzygium-hookeri",
    scientificName: "Syzygium hookeri",
    authority: "M.V.Ramana",
    family: "Myrtaceae",
    growthHabit: "Tree",
    year: 2014,
    publishedIn: "Blumea 59: 42–48",
    typeLocality: "Saddle Peak National Park, North Andaman",
    geography: "Andaman Islands, India",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-syzygium-hookeri.png",
    conservationStatus: "Endangered",
    diagnosticFeatures: [
      "Stout branched tree distinguished by densely clustered inflorescences",
      "Prominently gland-dotted chartaceous leaves with distinct scalariform venation",
      "Fleshy edible berries utilized by island fruit-eating avian fauna"
    ],
    etymology: "Dedicated to Sir Joseph Dalton Hooker, pioneer of Indian botanical exploration and author of Flora of British India.",
    ecologicalNotes: "Grows along mountain streams and sheltered ravines in Saddle Peak National Park.",
    description: "Syzygium hookeri is a stout branched tree in the family Myrtaceae, found in Saddle Peak National Park in the Andaman Islands. It grows along mountain streams and sheltered ravines, producing fleshy edible berries relied upon by island fruit-eating birds, and is currently assessed as Endangered."
  },
  {
    id: "staurogyne-andamanica",
    scientificName: "Staurogyne andamanica",
    authority: "M.V.Ramana, Sanjappa, Venu & Chorghe",
    family: "Acanthaceae",
    growthHabit: "Herb",
    year: 2014,
    publishedIn: "Kew Bulletin 69(2): 9506 (1–5)",
    typeLocality: "Saddle Peak National Park, North Andaman",
    geography: "Andaman Islands, India (Strictly Endemic)",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/specimens/card-staurogyne.png",
    conservationStatus: "Critically Endangered",
    diagnosticFeatures: [
      "Small procumbent herb with glandular-pubescent stems and leaves",
      "White flowers with pale pink throat markings arranged in dense terminal spikes",
      "Oblong capsules containing numerous tiny foveolate seeds"
    ],
    etymology: "Named after the Andaman Islands, celebrating the hyper-endemic biodiversity of the archipelago.",
    ecologicalNotes: "Endemic to riparian boulders and moist shaded micro-habitats in primary evergreen forest.",
    description: "Staurogyne andamanica is a small procumbent herb in the family Acanthaceae, strictly endemic to Saddle Peak National Park in North Andaman. It grows on riparian boulders and moist shaded micro-habitats within primary evergreen forest, and is currently assessed as Critically Endangered."
  },
  {
    id: "ledebouria-hyderabadensis",
    scientificName: "Ledebouria hyderabadensis",
    authority: "M.V.Ramana, Prasanna & Venu",
    family: "Hyacinthaceae (Asparagaceae)",
    growthHabit: "Herb",
    year: 2012,
    publishedIn: "Kew Bulletin 67(3): 1–4",
    typeLocality: "Granitic rocky hillocks, Hyderabad, Telangana",
    geography: "Peninsular India (Hyderabad Endemic)",
    region: "Peninsular India (Telangana)",
    imageCard: "/assets/specimens/card-artabotrys.png",
    conservationStatus: "Endangered (Urban Pressure)",
    diagnosticFeatures: [
      "Bulbous geophytic herb adapted to shallow soils over Deccan granitic rocks",
      "Fleshy green leaves with distinct dark purple-brown blotches",
      "Racemose inflorescence with greenish-purple nodding flowers",
      "Underground bulbs contain bioactive homoisoflavones with documented anticancer activity"
    ],
    etymology: "Named after the historic city of Hyderabad, where it was discovered surviving in granitic rock crevices.",
    ecologicalNotes: "Sprouts during the monsoon on ancient precambrian rock formations of the Hyderabad plateau.",
    description: "Ledebouria hyderabadensis is a bulbous geophytic herb in the family Hyacinthaceae (Asparagaceae), endemic to the granitic hillocks of Hyderabad, Telangana. It sprouts during the monsoon on ancient precambrian rock formations under increasing urban pressure, and is currently assessed as Endangered."
  },
  {
    id: "cycas-andamanica",
    scientificName: "Cycas andamanica",
    authority: "K. Prasad, M.V.Ramana, B. Ravi Prasad Rao & M. Sanjappa",
    family: "Cycadaceae",
    growthHabit: "Tree",
    year: 2015,
    publishedIn: "Int. J. Inno. Sci. Res. 4(9): 473–476",
    typeLocality: "Andaman & Nicobar Islands",
    geography: "Andaman & Nicobar Islands, India",
    region: "Andaman & Nicobar Islands",
    imageCard: "/assets/research/card-cycads.png",
    conservationStatus: "Endangered (CITES Appendix II)",
    diagnosticFeatures: [
      "Arborescent ancient gymnosperm with solitary pachycaul trunk",
      "Large pinnate fronds with stiff pungent leaflets",
      "Megasporophylls with prominent lateral spines and tomentose ovules"
    ],
    etymology: "Named after the Andaman archipelago, documenting the island's unique cycad evolution.",
    ecologicalNotes: "Inhabits coastal littoral and hill slopes across the Andaman group of islands.",
    description: "Cycas andamanica is an arborescent cycad in the family Cycadaceae, found across the Andaman & Nicobar Islands. It inhabits coastal littoral zones and hill slopes across the archipelago, and is currently assessed as Endangered and listed under CITES Appendix II."
  }
];
