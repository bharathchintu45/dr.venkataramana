export interface ProfileData {
  name: string;
  degrees: string;
  designation: string;
  employeeId: string;
  tagline: string;
  department: string;
  college: string;
  university: string;
  location: string;
  emails: string[];
  contactPhone: string;
  researchGate: string;
  orcid: string;
  orcidUrl: string;
  vidwanId: string;
  vidwanUrl: string;
  ipniAuthorForm: string;
  ipniLifespan: string;
  researchInterestScore: number;
  citations: number;
  hIndex: number;
  stats: {
    articles: number;
    books: number;
    bookChapters: number;
    newSpecies: number;
    phdStudentsAwarded: number;
    phdStudentsWorking: number;
    yearsExperience: number;
    totalGrantsINR: string;
  };
}

export const profileData: ProfileData = {
  name: "Dr. M. Venkat Ramana",
  degrees: "M.Sc., Ph.D.",
  designation: "Assistant Professor, Dept. of Botany",
  employeeId: "31058",
  tagline: "Botanist · Researcher · Educator",
  department: "Department of Botany",
  college: "University College of Science, Saifabad",
  university: "Osmania University",
  location: "Hyderabad - 500 004, Telangana State, India",
  emails: [
    "venkatramanamunigela@osmania.ac.in",
    "cycas.mvr@gmail.com"
  ],
  contactPhone: "+91 970 48 46 490",
  researchGate: "https://www.researchgate.net/profile/Munigela-Venkat-Ramana",
  orcid: "0000-0003-4769-1657",
  orcidUrl: "https://orcid.org/0000-0003-4769-1657",
  vidwanId: "610155",
  vidwanUrl: "https://vidwan.inflibnet.ac.in/profile/610155",
  ipniAuthorForm: "M.V.Ramana",
  ipniLifespan: "Munigela Venkat Ramana (1978–)",
  researchInterestScore: 394.0,
  citations: 111,
  hIndex: 5,
  stats: {
    articles: 42,
    books: 6,
    bookChapters: 1,
    newSpecies: 7,
    phdStudentsAwarded: 6,
    phdStudentsWorking: 2,
    yearsExperience: 20,
    totalGrantsINR: "₹1,23,76,000"
  }
};
