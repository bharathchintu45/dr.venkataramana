export interface Book {
  id: string;
  title: string;
  subtitle: string;
  role: 'Author' | 'Editor' | 'Contributor';
  publishedBy: string;
  year: number;
  releaseDetails: string;
  imageCover: string;
  /** Back cover photo, when available — shown alongside the front in the lightbox */
  imageBack?: string;
  description: string;
  chaptersCount?: number;
  tags: string[];
}

export const booksData: Book[] = [
  {
    id: "trees-of-hyderabad",
    title: "Trees of Hyderabad",
    subtitle: "A Pictorial Guide to Urban Arboreal Diversity",
    role: "Author",
    publishedBy: "Botanical Survey of India (BSI), Government of India",
    year: 2012,
    releaseDetails: "Released by Shri N. Kiran Kumar Reddy, Hon. Chief Minister of Andhra Pradesh, at the prestigious XI Conference of Parties (COP XI), Convention on Biological Diversity (CBD), Hyderabad, October 2012.",
    imageCover: "/images/books/trees-of-hyderabad-front.webp",
    imageBack: "/images/books/trees-of-hyderabad-back.webp",
    description: "An authoritative pictorial compendium documenting the diverse avenue, native, and exotic tree species inhabiting the urban landscape of Greater Hyderabad, with full-color botanical photography, taxonomic keys, and ecological values.",
    tags: ["Botanical Survey of India", "COP XI CBD", "Urban Biodiversity", "Trees"]
  },
  {
    id: "hyderabad-biodiversity-index",
    title: "Hyderabad City Biodiversity Index",
    subtitle: "Prepared for the XI Conference of Parties, CBD",
    role: "Contributor",
    publishedBy: "Convention on Biological Diversity / Government of India",
    year: 2012,
    releaseDetails: "Prepared for the XI Conference of Parties, Convention on Biological Diversity (COP XI), Hyderabad, October 2012.",
    imageCover: "/images/books/biodiversity-greater-hyderabad-front.webp",
    imageBack: "/images/books/biodiversity-greater-hyderabad-back.webp",
    description: "A scientific benchmark assessment of native biodiversity, ecosystem services, and governance frameworks in Hyderabad, contributing to global urban biodiversity metrics under the Singapore Index framework.",
    tags: ["CBD COP XI", "Biodiversity Index", "Urban Ecology"]
  },
  {
    id: "ap-biodiversity-field-guide",
    title: "Andhra Pradesh Biodiversity Field Guide",
    subtitle: "Identification Handbook for Field Parataxonomists",
    role: "Contributor",
    publishedBy: "National Biodiversity Authority of India (NBA), Chennai",
    year: 2016,
    releaseDetails: "Published and officially released on International Day for Biological Diversity, May 22, 2016.",
    imageCover: "/images/books/ap-biodiversity-field-guide-front.webp",
    imageBack: "/images/books/ap-biodiversity-field-guide-back.webp",
    description: "A practical field handbook designed for forestry personnel, field researchers, and biodiversity management committees to recognize and monitor key plant and animal taxa across Andhra Pradesh.",
    tags: ["National Biodiversity Authority", "Field Guide", "Flora of AP"]
  },
  {
    id: "flora-yadadri-hills",
    title: "Flora of Yadadri Hills",
    subtitle: "A Pictorial Guide to Sacred Hill Vegetation",
    role: "Editor",
    publishedBy: "Forest College & Research Institute (FCRI), Telangana State Forest Department",
    year: 2018,
    releaseDetails: "Published in April 2018 by the Forest College and Research Institute, Mulugu-Siddipet, Government of Telangana.",
    imageCover: "/images/books/flora-yadadri-hills-front.webp",
    imageBack: "/images/books/flora-yadadri-hills-back.webp",
    description: "Comprehensive floristic documentation of the dry deciduous and rocky scrub ecosystem of the historic Yadagirigutta hills, detailing floristic composition, medicinal plants, and conservation recommendations.",
    tags: ["FCRI", "Telangana Forest Dept", "Sacred Hills", "Pictorial Guide"]
  },
  {
    id: "kbr-national-park",
    title: "The Flowering Plants of KBR National Park",
    subtitle: "A Field Guide to Urban Jungle Wilderness",
    role: "Author",
    publishedBy: "Telangana State Forest Department, Government of Telangana",
    year: 2018,
    releaseDetails: "Released on June 1, 2018, by Sri K.T. Rama Rao (Hon. Minister for IT & Urban Development) and Mr. Erik Solheim (United Nations Executive Director & Minister of Climate and Environment of Norway).",
    imageCover: "/images/books/kbr-national-park-front.webp",
    imageBack: "/images/books/kbr-national-park-back.webp",
    description: "A seminal field guide covering the rich angiospermic flora preserved inside Kasu Brahmananda Reddy (KBR) National Park in the heart of Hyderabad, cataloging 300+ plant species with detailed diagnostic notes.",
    tags: ["UNEP", "Telangana Forest Dept", "KBR National Park", "Field Guide"]
  },
  {
    id: "mahavir-harina-vanasthali",
    title: "The Flowering Plants of Mahavir Harina Vanasthali National Park",
    subtitle: "A Comprehensive Botanical Field Guide",
    role: "Author",
    publishedBy: "Forest College & Research Institute (FCRI), Telangana Forest Department",
    year: 2019,
    releaseDetails: "Published in 2019 by FCRI, Telangana State Forest Department, Government of Telangana.",
    imageCover: "/images/books/mahavir-harina-vanasthali-front.webp",
    imageBack: "/images/books/mahavir-harina-vanasthali-back.webp",
    description: "A comprehensive photographic and taxonomic field inventory of the dry scrub and grassland flora of Mahavir Harina Vanasthali National Park, highlighting crucial forage plants and deer habitat flora.",
    tags: ["National Park", "FCRI", "Grassland Flora", "Field Guide"]
  }
];
