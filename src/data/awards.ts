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
  }
];
