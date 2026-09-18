export interface ConferenceItem {
  id: string;
  year: number | string;
  title: string;
  event: string;
  location: string;
  dates: string;
  role: 'Organiser' | 'Invited Speaker' | 'Paper Presentation' | 'Poster Presentation' | 'Delegate';
  coAuthors?: string;
  description?: string;
}

export const conferencesData: ConferenceItem[] = [
  {
    id: "conf-rist-2023",
    year: 2023,
    title: "International Conference on 'Recent Innovations in Science and Technology' (RIST-2023)",
    event: "RIST-2023 International Conference",
    location: "UCS Saifabad, Osmania University, Hyderabad",
    dates: "30 September 2023",
    role: "Organiser",
    description: "Served as Co-Convener organizing global scientific deliberations on emerging scientific frontiers, modern analytical tools, and biodiversity conservation."
  },
  {
    id: "conf-bsi-2024",
    year: 2024,
    title: "Taxonomy and Conservation Issues on Endemic Cycad Cycas circinalis L. (Cycadaceae)",
    event: "International Symposium on Plant Taxonomy and Ethnobotany and Botanical Gardens",
    location: "Botanical Survey of India (BSI), Kolkata",
    dates: "13–14 February 2024",
    role: "Poster Presentation",
    coAuthors: "K. Nethaji and M. Venkat Ramana"
  },
  {
    id: "conf-utkal-2016",
    year: 2016,
    title: "The Genus Cycas L. (Cycadaceae) in the Eastern Ghats: Need of Conservation",
    event: "National Conference on Conservation of Eastern Ghats",
    location: "Utkal University, Bhubaneswar, Odisha",
    dates: "16–17 April 2016",
    role: "Invited Speaker",
    coAuthors: "M. Venkat Ramana"
  },
  {
    id: "conf-iaat-2013",
    year: 2013,
    title: "Plant Discoveries from Andaman and Nicobar Islands, India",
    event: "XXIII Annual Conference of Indian Association for Angiosperm Taxonomy (IAAT)",
    location: "Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur",
    dates: "27–29 December 2013",
    role: "Paper Presentation",
    coAuthors: "Venkat Ramana, M. and Sanjappa, M."
  },
  {
    id: "conf-ou-2012",
    year: 2012,
    title: "Medicinal and Aromatic Zingers of Andaman and Nicobar Islands with Vegetation Overview",
    event: "Current Trends in Medicinal, Aromatic Plants and Plant Products (UGC-SAP-III)",
    location: "Department of Botany, Osmania University, Hyderabad",
    dates: "17–18 March 2012",
    role: "Paper Presentation",
    coAuthors: "M. Venkat Ramana"
  },
  {
    id: "conf-iaat-2011",
    year: 2011,
    title: "Rediscovery and New Distributional Records for India, Andaman and Nicobar Islands",
    event: "XXI Annual Conference of IAAT & National Seminar on Biodiversity Conservation (BCCC-11)",
    location: "IMMT, Bhubaneswar, Odisha",
    dates: "2–4 December 2011",
    role: "Paper Presentation",
    coAuthors: "M. Venkat Ramana and Johny Kumar Tagore",
    description: "Awarded the Prestigious Antony Mukkath - Prof. K.S. Manilal Award for Best Paper Presentation."
  }
];

export const academicStats = {
  conferencesAttended: "10+",
  invitedTalks: "45+",
  papersPresented: "7",
  conferencesOrganized: "1"
};
