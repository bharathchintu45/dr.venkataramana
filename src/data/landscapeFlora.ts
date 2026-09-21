// Photographic catalog of landscaping/urban-forestry species, generated from
// the field archive in "content and images/{ORNAMENTAL & AVENUS,POLYTHENE
// REPLACEMENT TREE SPECIES,TRADABLE OR ECONOMICALLY IMPORTANT PLANT
// SPECIES,WIND BREAKS}". One record per species, photographed for one or
// more of the collections in landscapeCollections.ts. Images live in
// /public/images/plant-gallery-collections/<id>/1.webp, 2.webp, ...
// (thumbnails under thumbs/).
//
// IDENTIFICATIONS ARE FIELD RECORDS, NOT HERBARIUM DETERMINATIONS. They come
// from the names on the original photo files. A handful of source photos
// with no species name in their filename were excluded rather than guessed
// (see scripts/process-landscape-species.mjs SKIP_BASENAMES).
//
// To remove a species: delete its object here. To remove its photographs
// too, delete /public/images/plant-gallery-collections/<id>/.

import type { GrovePhoto } from "@/data/sacredGroves";

export type LeafType = "narrow" | "broad";

export interface LandscapeFloraRecord {
  id: string;
  scientificName: string;
  /** Local/Telugu common name, if known. */
  localName?: string;
  family: string;
  /** Ids of the collections in landscapeCollections.ts this was documented for. */
  collections: string[];
  /** Only set for Wind Breaks entries, from the source folder's leaf-shape split. */
  leafType?: LeafType;
  photos: GrovePhoto[];
}

export const landscapeFloraSrc = (id: string, file: string) => `/images/plant-gallery-collections/${id}/${file}.webp`;
export const landscapeFloraThumb = (id: string, file: string) => `/images/plant-gallery-collections/${id}/thumbs/${file}.webp`;

export const landscapeFlora: LandscapeFloraRecord[] = [
  {
    id: "adina-cordifolia",
    scientificName: "Adina cordifolia",
    localName: undefined,
    family: "Rubiaceae",
    collections: ["wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Adina cordifolia, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Adina cordifolia, photo 2" }],
  },
  {
    id: "aegle-marmelos",
    scientificName: "Aegle marmelos",
    localName: "Maredu",
    family: "Rutaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Aegle marmelos (Maredu), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Aegle marmelos (Maredu), photo 2" }],
  },
  {
    id: "albizia-lebbeck",
    scientificName: "Albizia lebbeck",
    localName: undefined,
    family: "Fabaceae",
    collections: ["wind-breaks"],
    leafType: "narrow",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Albizia lebbeck, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Albizia lebbeck, photo 2" }],
  },
  {
    id: "anthocephalus-cadamba",
    scientificName: "Anthocephalus cadamba",
    localName: "Kadamba",
    family: "Rubiaceae",
    collections: ["ornamental-avenue", "wind-breaks"],
    leafType: "broad",
    photos: [
      { file: "1", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba), photo 1" },
      { file: "2", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba), photo 2" },
      { file: "3", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 3" },
      { file: "4", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 4" },
      { file: "5", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 5" },
      { file: "6", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 6" },
      { file: "7", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 7" },
      { file: "8", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 8" },
      { file: "9", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 9" },
      { file: "10", width: 1600, height: 1200, alt: "Anthocephalus cadamba (Kadamba) flower, photo 10" }
    ],
  },
  {
    id: "artocarpus-heterophyllus",
    scientificName: "Artocarpus heterophyllus",
    localName: undefined,
    family: "Moraceae",
    collections: ["wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Artocarpus heterophyllus, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Artocarpus heterophyllus, photo 2" }],
  },
  {
    id: "azadirachta-indica",
    scientificName: "Azadirachta indica",
    localName: "Neem",
    family: "Meliaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Azadirachta indica (Neem), photo 1" }],
  },
  {
    id: "bauhinia-vahlii",
    scientificName: "Bauhinia vahlii",
    localName: "Addaku",
    family: "Fabaceae",
    collections: ["polythene-replacement"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Bauhinia vahlii (Addaku), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Bauhinia vahlii (Addaku), photo 2" }],
  },
  {
    id: "borassus-flabellifer",
    scientificName: "Borassus flabellifer",
    localName: "Thati",
    family: "Arecaceae",
    collections: ["wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 2133, alt: "Borassus flabellifer (Thati), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Borassus flabellifer (Thati), photo 2" }, { file: "3", width: 1600, height: 1063, alt: "Borassus flabellifer (Thati), photo 3" }],
  },
  {
    id: "butea-monosperma",
    scientificName: "Butea monosperma",
    localName: "Moduga",
    family: "Fabaceae",
    collections: ["ornamental-avenue", "polythene-replacement", "wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 2133, alt: "Butea monosperma (Moduga), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Butea monosperma (Moduga), photo 2" }, { file: "3", width: 1600, height: 1200, alt: "Butea monosperma (Moduga), photo 3" }],
  },
  {
    id: "butea-superba",
    scientificName: "Butea superba",
    localName: "Teega Moduga",
    family: "Fabaceae",
    collections: ["polythene-replacement"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Butea superba (Teega Moduga), photo 1" }],
  },
  {
    id: "calophyllum-inophyllum",
    scientificName: "Calophyllum inophyllum",
    localName: "Ponna",
    family: "Calophyllaceae",
    collections: ["ornamental-avenue", "wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Calophyllum inophyllum (Ponna), photo 1" }, { file: "2", width: 1600, height: 1063, alt: "Calophyllum inophyllum (Ponna), photo 2" }, { file: "3", width: 1600, height: 1063, alt: "Calophyllum inophyllum (Ponna), photo 3" }],
  },
  {
    id: "cassia-auriculata",
    scientificName: "Cassia auriculata",
    localName: "Tangedu",
    family: "Fabaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Cassia auriculata (Tangedu), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Cassia auriculata (Tangedu), photo 2" }, { file: "3", width: 1600, height: 1200, alt: "Cassia auriculata (Tangedu), photo 3" }],
  },
  {
    id: "cassia-fistula",
    scientificName: "Cassia fistula",
    localName: "Rela Chettu",
    family: "Fabaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Cassia fistula (Rela Chettu), photo 1" }],
  },
  {
    id: "casuarina-equisetifolia",
    scientificName: "Casuarina equisetifolia",
    localName: "Sarugudu",
    family: "Casuarinaceae",
    collections: ["wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Casuarina equisetifolia (Sarugudu), photo 1" }],
  },
  {
    id: "cocos-nucifera",
    scientificName: "Cocos nucifera",
    localName: "Coconut",
    family: "Arecaceae",
    collections: ["wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Cocos nucifera (Coconut), photo 1" }],
  },
  {
    id: "eriolaena-hookeriana",
    scientificName: "Eriolaena hookeriana",
    localName: "Parsvapu Chettu",
    family: "Malvaceae",
    collections: ["polythene-replacement"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Eriolaena hookeriana (Parsvapu Chettu), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Eriolaena hookeriana (Parsvapu Chettu), photo 2" }],
  },
  {
    id: "erythrina-variegata",
    scientificName: "Erythrina variegata",
    localName: "Badidha",
    family: "Fabaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Erythrina variegata (Badidha), photo 1" }],
  },
  {
    id: "ficus-arnottiana",
    scientificName: "Ficus arnottiana",
    localName: undefined,
    family: "Moraceae",
    collections: ["wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Ficus arnottiana, photo 1" }, { file: "2", width: 1600, height: 1069, alt: "Ficus arnottiana, photo 2" }, { file: "3", width: 1600, height: 1069, alt: "Ficus arnottiana, photo 3" }],
  },
  {
    id: "ficus-benghalensis",
    scientificName: "Ficus benghalensis",
    localName: undefined,
    family: "Moraceae",
    collections: ["wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Ficus benghalensis, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Ficus benghalensis, photo 2" }],
  },
  {
    id: "ficus-religiosa",
    scientificName: "Ficus religiosa",
    localName: "Ravii",
    family: "Moraceae",
    collections: ["ornamental-avenue", "wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Ficus religiosa (Ravii), photo 1" }],
  },
  {
    id: "grevillea-robusta",
    scientificName: "Grevillea robusta",
    localName: "Silver Oak",
    family: "Proteaceae",
    collections: ["wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Grevillea robusta (Silver Oak), photo 1" }],
  },
  {
    id: "hibiscus-tiliaceus",
    scientificName: "Hibiscus tiliaceus",
    localName: "Sea Hibiscus",
    family: "Malvaceae",
    collections: ["ornamental-avenue", "wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Hibiscus tiliaceus (Sea Hibiscus), photo 1" }, { file: "2", width: 1600, height: 1063, alt: "Hibiscus tiliaceus (Sea Hibiscus), photo 2" }],
  },
  {
    id: "jacaranda-acutifolia",
    scientificName: "Jacaranda acutifolia",
    localName: undefined,
    family: "Bignoniaceae",
    collections: ["wind-breaks"],
    leafType: "narrow",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Jacaranda acutifolia, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Jacaranda acutifolia, photo 2" }, { file: "3", width: 1600, height: 1200, alt: "Jacaranda acutifolia, photo 3" }],
  },
  {
    id: "madhuca-longifolia",
    scientificName: "Madhuca longifolia",
    localName: "Ippa",
    family: "Sapotaceae",
    collections: ["ornamental-avenue", "polythene-replacement", "wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Madhuca longifolia (Ippa), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Madhuca longifolia (Ippa), photo 2" }, { file: "3", width: 1600, height: 1069, alt: "Madhuca longifolia (Ippa), photo 3" }],
  },
  {
    id: "millingtonia-hortensis",
    scientificName: "Millingtonia hortensis",
    localName: undefined,
    family: "Bignoniaceae",
    collections: ["wind-breaks"],
    leafType: "narrow",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Millingtonia hortensis, photo 1" }, { file: "2", width: 640, height: 480, alt: "Millingtonia hortensis, photo 2" }],
  },
  {
    id: "mimusops-elengi",
    scientificName: "Mimusops elengi",
    localName: "Pogada",
    family: "Sapotaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Mimusops elengi (Pogada), photo 1" }],
  },
  {
    id: "mitragyna-parvifolia",
    scientificName: "Mitragyna parvifolia",
    localName: undefined,
    family: "Rubiaceae",
    collections: ["wind-breaks"],
    leafType: "broad",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Mitragyna parvifolia, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Mitragyna parvifolia, photo 2" }],
  },
  // Photos 2-3 below had no species name in the source filename (bare
  // "DSC08507.JPG"/"DSC08526.JPG"); identified by leaf-texture comparison
  // against the confirmed photo 1 from the same folder, not from a filename
  // — slightly lower-confidence than the rest of this file. Worth a second
  // look if in doubt.
  {
    id: "peltophorum-pterocarpum",
    scientificName: "Peltophorum pterocarpum",
    localName: undefined,
    family: "Fabaceae",
    collections: ["wind-breaks"],
    leafType: "narrow",
    photos: [
      { file: "1", width: 1600, height: 1200, alt: "Peltophorum pterocarpum, photo 1" },
      { file: "2", width: 1600, height: 1200, alt: "Peltophorum pterocarpum foliage, photo 2" },
      { file: "3", width: 1600, height: 1200, alt: "Peltophorum pterocarpum foliage, photo 3" }
    ],
  },
  {
    id: "phyllanthus-emblica",
    scientificName: "Phyllanthus emblica",
    localName: "Amla",
    family: "Phyllanthaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Phyllanthus emblica (Amla), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Phyllanthus emblica (Amla), photo 2" }],
  },
  {
    id: "polyalthia-longifolia",
    scientificName: "Polyalthia longifolia",
    localName: "Naramamidi",
    family: "Annonaceae",
    collections: ["wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Polyalthia longifolia (Naramamidi), photo 1" }],
  },
  {
    id: "pongamia-pinnata",
    scientificName: "Pongamia pinnata",
    localName: "Kanuga",
    family: "Fabaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Pongamia pinnata (Kanuga), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Pongamia pinnata (Kanuga), photo 2" }],
  },
  {
    id: "samanea-saman",
    scientificName: "Samanea saman",
    localName: undefined,
    family: "Fabaceae",
    collections: ["wind-breaks"],
    leafType: "narrow",
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Samanea saman, photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Samanea saman, photo 2" }],
  },
  {
    id: "sapindus-trifoliatus",
    scientificName: "Sapindus trifoliatus",
    localName: "Kunkudu",
    family: "Sapindaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Sapindus trifoliatus (Kunkudu), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Sapindus trifoliatus (Kunkudu), photo 2" }],
  },
  {
    id: "simarouba-glauca",
    scientificName: "Simarouba glauca",
    localName: "Simarouba",
    family: "Simaroubaceae",
    collections: ["ornamental-avenue", "tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Simarouba glauca (Simarouba), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Simarouba glauca (Simarouba), photo 2" }],
  },
  {
    id: "terminalia-arjuna",
    scientificName: "Terminalia arjuna",
    localName: "Maddi",
    family: "Combretaceae",
    collections: ["ornamental-avenue", "wind-breaks"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Terminalia arjuna (Maddi), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Terminalia arjuna (Maddi), photo 2" }, { file: "3", width: 1600, height: 1200, alt: "Terminalia arjuna (Maddi), photo 3" }],
  },
  {
    id: "terminalia-bellirica",
    scientificName: "Terminalia bellirica",
    localName: "Tanikaya",
    family: "Combretaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 2133, alt: "Terminalia bellirica (Tanikaya), photo 1" }],
  },
  {
    id: "terminalia-catappa",
    scientificName: "Terminalia catappa",
    localName: "Badam",
    family: "Combretaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Terminalia catappa (Badam), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Terminalia catappa (Badam), photo 2" }, { file: "3", width: 1600, height: 2133, alt: "Terminalia catappa (Badam), photo 3" }, { file: "4", width: 1600, height: 1200, alt: "Terminalia catappa (Badam), photo 4" }],
  },
  {
    id: "terminalia-chebula",
    scientificName: "Terminalia chebula",
    localName: "Karakaya",
    family: "Combretaceae",
    collections: ["tradable-economic"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1063, alt: "Terminalia chebula (Karakaya), photo 1" }],
  },
  {
    id: "thespesia-populnea",
    scientificName: "Thespesia populnea",
    localName: "Ganga Ravii",
    family: "Malvaceae",
    collections: ["ornamental-avenue"],
    leafType: undefined,
    photos: [{ file: "1", width: 1600, height: 1200, alt: "Thespesia populnea (Ganga Ravii), photo 1" }, { file: "2", width: 1600, height: 1200, alt: "Thespesia populnea (Ganga Ravii), photo 2" }],
  },
];
