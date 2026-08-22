export interface DoctoralScholar {
  id: string;
  name: string;
  yearAwarded: number | string;
  status: 'Awarded' | 'Working';
  thesisTitle: string;
  area: string;
}

export const doctoralScholars: DoctoralScholar[] = [
  {
    id: "phd-1",
    name: "Dr. Y. Mahesh",
    yearAwarded: 2023,
    status: "Awarded",
    thesisTitle: "Floristic Studies of Papikonda National Park, Andhra Pradesh",
    area: "Plant Floristics & Orchidology"
  },
  {
    id: "phd-2",
    name: "Dr. K. Nethaji",
    yearAwarded: 2023,
    status: "Awarded",
    thesisTitle: "Systematics and Conservation of the Genus Cycas L. (Cycadaceae) in India",
    area: "Gymnosperm Systematics & Cycad Conservation"
  },
  {
    id: "phd-3",
    name: "Dr. T. Narender",
    yearAwarded: 2025,
    status: "Awarded",
    thesisTitle: "Studies on Plant Diversity and Conservation Practices in Sacred Groves of Telangana State",
    area: "Sacred Grove Ecology & Conservation"
  },
  {
    id: "phd-4",
    name: "Dr. D. Ashok",
    yearAwarded: 2025,
    status: "Awarded",
    thesisTitle: "Investigation of Intraspecific Variations Among Wild Angiosperms in Telangana State",
    area: "Angiosperm Intraspecific Diversity"
  },
  {
    id: "phd-5",
    name: "Dr. B. Tharasingh",
    yearAwarded: 2025,
    status: "Awarded",
    thesisTitle: "Exploration of Medicinal Plant Wealth of Telangana State",
    area: "Medicinal Plants & Conservation Biology"
  },
  {
    id: "phd-6",
    name: "Dr. A. Sandhya",
    yearAwarded: 2025,
    status: "Awarded",
    thesisTitle: "Comparative Phytochemical, Antimicrobial Studies on Some Important Medicinal Plants Vitex negundo L., and Aegle marmelos (L.) Correa and Its Intraspecific Variants",
    area: "Phytochemistry & Pharmacognosy"
  }
];

export const externalEvaluations = [
  {
    university: "Sardar Patel University, Gujarat",
    department: "Department of Biosciences",
    role: "External Examiner / Doctoral Thesis Referee",
    year: 2025
  },
  {
    university: "Shivaji University, Kolhapur, Maharashtra",
    department: "Department of Botany",
    role: "External Examiner / Doctoral Thesis Referee",
    year: 2025
  }
];

export const studentVisits = [
  {
    place: "Amrabad Tiger Reserve",
    audience: "Post Graduate M.Sc. Students, Dept. of Botany, UCS Saifabad",
    academicYear: "2018–2019 & 2020",
    objective: "Field taxonomy, tiger reserve ecology, and plant-animal interactions"
  },
  {
    place: "CSIR-CIMAP (Central Institute of Medicinal & Aromatic Plants)",
    audience: "Post Graduate M.Sc. Botany Students",
    academicYear: "29 January 2024",
    objective: "Industrial distillation, extraction technologies, and aromatic plant taxonomy"
  },
  {
    place: "CFRD (Central Facilities for Research and Development), OU",
    audience: "Post Graduate Students, Dept. of Botany",
    academicYear: "19 June 2025",
    objective: "Advanced analytical instrumentation, HPLC, NMR, and spectroscopic techniques"
  },
  {
    place: "ICRISAT (International Crops Research Institute for Semi-Arid Tropics)",
    audience: "Post Graduate M.Sc. Students",
    academicYear: "17 April 2026",
    objective: "Genebank collections, global dryland germplasm, and herbarium preservation"
  }
];
