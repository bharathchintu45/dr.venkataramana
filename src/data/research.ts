export interface ResearchArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imagePath: string;
  keyTopics: string[];
  fieldLocations: string[];
  keyPublications: string[];
  impactSummary: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "systematics",
    number: "01",
    title: "Plant Systematics",
    shortDesc: "Studies on classification, taxonomy, morphology, and phylogenetic relationships of seed plants (Gymnosperms & Angiosperms).",
    fullDesc: "Comprehensive floristic exploration and taxonomic revision of critical plant families across Peninsular India and island ecosystems. Research focuses on resolving nomenclatural confusions, discovering undescribed taxa, and standardizing botanical nomenclature under IPNI author standard 'M.V.Ramana'.",
    imagePath: "/images/research-lab/img-20190106-wa0008.webp",
    keyTopics: [
      "Taxonomic Revisions & Floristic Surveys",
      "Morphological & Anatomical Characterization",
      "Gymnosperm & Angiosperm Systematics",
      "Herbarium Methodology & Nomenclature (ICN/IPNI)"
    ],
    fieldLocations: [
      "Andaman & Nicobar Islands (Saddle Peak NP, North Andaman)",
      "Eastern Ghats of Andhra Pradesh & Telangana",
      "Papikonda National Park & Granitic Hills of Deccan"
    ],
    keyPublications: [
      "Ledebouria hyderabadensis in Kew Bulletin (2012)",
      "New species of Syzygium in Blumea (2014)",
      "Staurogyne andamanica in Kew Bulletin (2014)"
    ],
    impactSummary: "Described 7+ new species to world science and established authoritative identification keys for regional flora."
  },
  {
    id: "biodiversity",
    number: "02",
    title: "Biodiversity & Conservation",
    shortDesc: "Documenting biodiversity, preparing People's Biodiversity Registers, and developing actionable strategies for conservation of threatened flora.",
    fullDesc: "Translating taxonomic discovery into frontline conservation policy. Spearheading the documentation of indigenous floras, sacred groves, national parks, and urban green corridors under UNEP-GEF, National Biodiversity Authority, and State Biodiversity Boards.",
    imagePath: "/images/expeditions/dsc-8578.webp",
    keyTopics: [
      "People's Biodiversity Registers (PBRs) Documentation",
      "IUCN Red List Threatened Species Assessments",
      "Sacred Groves Conservation Dynamics",
      "National Park & Protected Area Biodiversity Indices"
    ],
    fieldLocations: [
      "KBR National Park & Mahavir Harina Vanasthali NP",
      "Yadadri Natural Model Forest & Sacred Groves of Telangana",
      "Amrabad Tiger Reserve & Papikonda Hills"
    ],
    keyPublications: [
      "Trees of Hyderabad (BSI, COP XI CBD)",
      "Flowering Plants of KBR National Park (2018)",
      "Hyderabad City Biodiversity Index (2012)"
    ],
    impactSummary: "Directed ₹10 Lakhs UNEP-GEF PBR projects and authored benchmark urban biodiversity field guides adopted by state governments."
  },
  {
    id: "medicinal",
    number: "03",
    title: "Medicinal Botany & Ethnobotany",
    shortDesc: "Research on indigenous medicinal plants, traditional healthcare knowledge systems, phytochemical screening, and botanical adulteration detection.",
    fullDesc: "Bridging indigenous tribal knowledge with contemporary phytochemistry and pharmacognosy. Investigating intraspecific chemical and morphological variations in potent medicinal trees like Aegle marmelos and Vitex negundo, evaluating antimicrobial activities, and identifying commercial adulterations.",
    imagePath: "/images/conservation/img-5907.webp",
    keyTopics: [
      "Ethnobotanical Documentation of Tribal Practices",
      "Comparative Phytochemical & Molecular Docking Studies",
      "Antimicrobial & Bioactivity Assays of Native Plants",
      "Medicinal Plant Adulteration & Substitution Analysis"
    ],
    fieldLocations: [
      "Pandavula Gutta & Nagoba Sacred Groves",
      "Tribal Tracts of Adilabad & Eastern Telangana",
      "Andaman Indigenous Plant Ecosystems"
    ],
    keyPublications: [
      "Anticancer Homoisoflavone from Ledebouria (Pharmacognosy Res. 2014)",
      "Phytochemical Studies on Vitex negundo & Aegle marmelos (2024)",
      "Medicinal Plant Adulterations in Telangana (IJAR 2024)"
    ],
    impactSummary: "Uncovered novel anticancer homoisoflavones and validated traditional tribal remedies through rigorous laboratory assays."
  },
  {
    id: "cycads",
    number: "04",
    title: "Indian Cycads Conservation",
    shortDesc: "Specialized systematic, ecological, and conservation biology studies on the ancient gymnosperm genus Cycas L. in India.",
    fullDesc: "Pioneering Indian cycad research focused on resolving nomenclatural confusions, mapping habitat distributions, assessing reproductive bottlenecks, and developing ex-situ seed germination protocols for CITES Appendix-I and IUCN Red Listed taxa like Cycas beddomei and Cycas andamanica.",
    imagePath: "/images/expeditions/dsc-0080.webp",
    keyTopics: [
      "Systematics and Phylogeny of Genus Cycas L. in India",
      "CITES Appendix-I Listed Cycas beddomei Conservation",
      "Seed Germination & Propagation Protocols",
      "Habitat Fragmentation & In-Situ Protection Frameworks"
    ],
    fieldLocations: [
      "Seshachalam Hills & Southern Eastern Ghats",
      "Andaman & Nicobar Cycad Habitats",
      "University College of Science Botanical Garden Ex-situ Cycadarium"
    ],
    keyPublications: [
      "Name Confusions in Indian Cycads (Current Science 2018)",
      "Seed Germination in CITES Listed Cycas beddomei (Nelumbo 2020)",
      "Taxonomy and Allied Issues in Cycas beddomei (Nelumbo 2022)"
    ],
    impactSummary: "Principal Investigator for DST SERB Core Research Grant (2018–2021), clarifying taxonomic misidentifications and establishing germination protocols for endangered Indian cycads."
  }
];
