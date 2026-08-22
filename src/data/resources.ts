export interface BotanicalResource {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: 'BookOpen' | 'Database' | 'Image' | 'GraduationCap' | 'Compass';
  items: { name: string; type: string; desc: string; link?: string }[];
}

export const researchResourcesData: BotanicalResource[] = [
  {
    id: "research-papers",
    title: "Research Papers",
    category: "Publications Archive",
    description: "Access 42+ peer-reviewed scientific articles published in international and national botanical journals.",
    iconName: "BookOpen",
    items: [
      { name: "Ledebouria hyderabadensis (Kew Bulletin)", type: "PDF Reprint", desc: "Original holotype description of new species from Hyderabad granitic rocks" },
      { name: "Syzygium new species from Saddle Peak (Blumea)", type: "PDF Reprint", desc: "Taxonomy of Syzygium hookeri and Syzygium sanjappanum" },
      { name: "Name Confusions in Indian Cycads (Current Science)", type: "PDF Reprint", desc: "Nomenclatural analysis of Cycas species in Peninsular India" },
      { name: "Anticancer Active Homoisoflavone (Pharmacognosy Res)", type: "PDF Reprint", desc: "Chemical extraction and cytotoxic evaluation of Ledebouria bulbs" }
    ]
  },
  {
    id: "plant-database",
    title: "Plant Database",
    category: "Taxonomic Repository",
    description: "Curated taxonomic databases and floral indices for Peninsular India, Eastern Ghats, and Andaman Islands.",
    iconName: "Database",
    items: [
      { name: "Flora of Telangana Database", type: "Digital Index", desc: "Comprehensive checklist of wild and cultivated angiosperms of Telangana" },
      { name: "Indian Cycads Geodatabase", type: "Distribution Map", desc: "Geographic coordinate records and population status of genus Cycas L." },
      { name: "People's Biodiversity Registers (PBR) Archive", type: "Community Database", desc: "Documentation of local biodiversity across 10 rural Gram Panchayats" },
      { name: "IPNI Author Standard: M.V.Ramana", type: "International Index", desc: "International Plant Names Index botanical author record" }
    ]
  },
  {
    id: "herbarium-images",
    title: "Herbarium Images",
    category: "Specimen Archive",
    description: "High-resolution digital herbarium specimen sheets, holotype scans, and microscopic anatomical sections.",
    iconName: "Image",
    items: [
      { name: "Holotype Sheets of Andaman Discoveries", type: "High-Res Scan", desc: "Central National Herbarium (CAL) & BSI Andaman (PBL) accession scans" },
      { name: "Microscopic Floral Dissections", type: "Micrograph Gallery", desc: "High-magnification SEM and optical microscopy of pollen, spores & trichomes" },
      { name: "Cycad Megasporophyll Morphology", type: "Diagnostic Sheets", desc: "Comparative morphology of Cycas beddomei and allied Indian cycads" },
      { name: "Sacred Grove Flora Photographic Herbarium", type: "Field Photo Archive", desc: "Living specimens from ancient sacred groves of Telangana" }
    ]
  },
  {
    id: "study-materials",
    title: "Study Materials",
    category: "Educational Compendiums",
    description: "Lecture notes, taxonomic identification keys, and laboratory field manuals for Botany scholars.",
    iconName: "GraduationCap",
    items: [
      { name: "Green Skill Development Parataxonomy Manual", type: "MoEF&CC Textbook", desc: "Certified training modules on plant identification and PBR preparation" },
      { name: "Angiosperm Family Taxonomic Identification Keys", type: "Classroom Manual", desc: "Dichotomous identification keys for Post Graduate Botany practicals" },
      { name: "Herbarium Preparation & Preservation Techniques", type: "Laboratory Protocol", desc: "Standard operating procedures for botanical specimen collection" },
      { name: "Miyawaki Urban Forestry Field Methodology", type: "Urban Ecology Guide", desc: "Biodiversity assessment techniques for high-density native plantations" }
    ]
  }
];
