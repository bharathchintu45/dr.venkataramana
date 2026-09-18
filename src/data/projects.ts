export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  scheme: string;
  refNo: string;
  fundingAgency: string;
  principalInvestigator: string;
  duration: string;
  budgetFormatted: string;
  budgetExact: string;
  status: 'Completed' | 'Ongoing';
  objectives: string[];
  keyOutcomes: string[];
  iconType: 'leaf' | 'cycad' | 'garden';
}

export const researchProjectsData: ResearchProject[] = [
  {
    id: "eastern-ghats-papikonda",
    number: "01",
    title: "Floristic Studies of Eastern Ghats & Papikonda National Park",
    subtitle: "Doctoral floristic survey documenting new distributional records for Andhra Pradesh",
    scheme: "Doctoral Research Programme, Dept. of Botany",
    refNo: "Ph.D., Y. Mahesh (Awarded 2023)",
    fundingAgency: "Osmania University, Departmental Research Initiative",
    principalInvestigator: "Dr. M. Venkat Ramana (Supervisor)",
    duration: "2018–2023 (Completed)",
    budgetFormatted: "Departmental Support",
    budgetExact: "Supervised doctoral field research, no external grant budget",
    status: "Completed",
    objectives: [
      "Conduct extensive floristic surveys of Papikonda National Park and the wider Eastern Ghats along the Godavari basin",
      "Document unmapped angiospermic plant diversity across riverine ravines and mist-shrouded peaks",
      "Record new distributional records and rare taxa, including orchids such as Habenaria reniformis",
      "Assess botanical micro-habitats and riparian vegetation for conservation planning"
    ],
    keyOutcomes: [
      "Y. Mahesh awarded Ph.D. in 2023 on floristic studies of Papikonda National Park",
      "Three new distributional records published for the flora of Andhra Pradesh (Indian Forester, 2022)",
      "New records including Salomonia cantoniensis (Nelumbo 2021) and Fimbristylis hookeriana (Nelumbo 2023)"
    ],
    iconType: "leaf"
  },
  {
    id: "pbr-project",
    number: "02",
    title: "Preparation of People's Biodiversity Registers (10 PBRs)",
    subtitle: "Documentation of local biological resources and traditional knowledge",
    scheme: "UNEP-GEF - MoEFCC - ABS Project",
    refNo: "Ref.No.92/TSBDB/UNEP-GEF/PBRs/2015",
    fundingAgency: "Telangana State Biodiversity Board (TSBDB)",
    principalInvestigator: "Dr. M. Venkat Ramana",
    duration: "1 Year (Completed)",
    budgetFormatted: "₹10,00,000",
    budgetExact: "₹10,00,000=00 (Ten Lakhs INR)",
    status: "Completed",
    objectives: [
      "Document comprehensive People's Biodiversity Registers (PBRs) across 10 Gram Panchayats",
      "Record local flora, fauna, medicinal plants, crop landraces, and traditional healing lore",
      "Empower local Biodiversity Management Committees (BMCs) under Biological Diversity Act 2002",
      "Establish equitable Access and Benefit Sharing (ABS) mechanisms for rural communities"
    ],
    keyOutcomes: [
      "Completed 10 comprehensive verified PBR registers validated by state authorities",
      "Trained rural youth and parataxonomists in plant identification and biodiversity mapping",
      "Recognized by NBA and TSBDB as a benchmark implementation in Telangana"
    ],
    iconType: "leaf"
  },
  {
    id: "cycas-serb-project",
    number: "03",
    title: "Systematics and Conservation of the genus Cycas L. (Cycadaceae) in India",
    subtitle: "Comprehensive national taxonomic revision, population ecology, and ex-situ conservation",
    scheme: "DST SERB Core Research Grant",
    refNo: "EMR/2016/005688",
    fundingAgency: "Science and Engineering Research Board (SERB), Department of Science & Technology, Govt. of India",
    principalInvestigator: "Dr. M. Venkat Ramana",
    duration: "3 Years (2018–2021)",
    budgetFormatted: "₹18,61,119",
    budgetExact: "₹18,61,119=00 (Eighteen Lakhs Sixty-One Thousand One Hundred Nineteen INR)",
    status: "Completed",
    objectives: [
      "Conduct country-wide field explorations to map wild populations of genus Cycas L. in India",
      "Resolve critical nomenclatural and taxonomic confusions across Indian cycad species",
      "Investigate seed biology and develop germination protocols for CITES-listed Cycas beddomei",
      "Assess anthropogenic threats, habitat degradation, and formulate long-term conservation action plans"
    ],
    keyOutcomes: [
      "Published definitive papers in Current Science and Nelumbo on Indian cycad taxonomy",
      "Standardized ex-situ seed germination techniques for critically endangered Cycas beddomei",
      "Supervised Ph.D. dissertation on Cycas systematics awarded in 2023"
    ],
    iconType: "cycad"
  },
  {
    id: "botanical-garden-hmda",
    number: "04",
    title: "Improvement and Up-gradation of Facilities & Infrastructure in the Botanical Garden",
    subtitle: "Developing a world-class educational and ex-situ conservation botanical repository",
    scheme: "Urban Forestry & Biodiversity Development Grant",
    refNo: "F.NO. 794/UF/HMDA/2024",
    fundingAgency: "Hyderabad Metropolitan Development Authority (HMDA), Govt. of Telangana",
    principalInvestigator: "Dr. M. Venkat Ramana",
    duration: "5 Years (2024–ongoing)",
    budgetFormatted: "₹95,15,137",
    budgetExact: "₹95,15,137=00 (Ninety-Five Lakhs Fifteen Thousand One Hundred Thirty-Seven INR)",
    status: "Ongoing",
    objectives: [
      "Upgrade infrastructure and living plant collections at University College of Science Botanical Garden, Saifabad",
      "Establish specialized ex-situ conservation sections: Cycadarium, Medicinal Plant Conservatory, and Fernery",
      "Construct modern greenhouse, nursery, taxonomic display beds, and student research facilities",
      "Develop educational interpretive signage and digital herbarium repository for students and researchers"
    ],
    keyOutcomes: [
      "Ongoing transformation of Saifabad campus into a premier urban botanical research center",
      "Introduction of rare, endangered, and threatened (RET) plant species of Peninsular India",
      "Creation of an experiential learning center for university botany and forestry scholars"
    ],
    iconType: "garden"
  }
];
