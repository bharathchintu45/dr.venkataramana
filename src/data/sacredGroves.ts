// Field photography from the doctoral survey of sacred groves across Telangana
// (see doctoralScholars in teaching.ts, "Dr. T. Narender" — thesis "Studies on
// Plant Diversity and Conservation Practices in Sacred Groves of Telangana
// State", supervised by Dr. Ramana, awarded 2025). Full-size images live in
// /public/images/sacred-groves/<id>/<file>.webp, thumbnails in
// /public/images/sacred-groves/<id>/thumbs/<file>.webp. All photographs ©
// Dr. M. Venkat Ramana / Dr. T. Narender.
//
// Species-level identifications from the original field archive are not yet
// verified and are deliberately omitted here — only site, habitat and
// temple/shrine photography is included.

export interface GrovePhoto {
  file: string;
  width: number;
  height: number;
  alt: string;
}

export interface SacredGrove {
  id: string;
  name: string;
  place: string;
  description: string;
  photos: GrovePhoto[];
}

export const groveSrc = (id: string, file: string) => `/images/sacred-groves/${id}/${file}.webp`;
export const groveThumb = (id: string, file: string) => `/images/sacred-groves/${id}/thumbs/${file}.webp`;

export const sacredGroves: SacredGrove[] = [
  {
    id: "agasthappayya-swamy-maripeda",
    name: "Agasthappayya Swamy Sacred Grove",
    place: "Maripeda",
    description: "A hilltop shrine and rock outcrop grove overlooking farmland on the edge of Maripeda.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Water tank and gazebo at the Agasthappayya Swamy grove, Maripeda" },
      { file: "2", width: 2000, height: 1200, alt: "Pathway through the grove past dry-season trees, Maripeda" },
      { file: "3", width: 2000, height: 1200, alt: "Farmland valley seen from the grove hilltop, Maripeda" },
      { file: "4", width: 2000, height: 1200, alt: "Forested hillside within the grove, Maripeda" },
    ],
  },
  {
    id: "bheemuni-padam-gudur",
    name: "Bheemuni Padam Waterfall Sacred Grove",
    place: "Line Thanda, Gudur",
    description: "A forested gorge and seasonal waterfall grove at Line Thanda, near Gudur.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Bheemuni Padam waterfall inside the sacred grove, Line Thanda" },
      { file: "2", width: 2000, height: 1200, alt: "Forest trail through the grove, Line Thanda" },
      { file: "3", width: 2000, height: 1200, alt: "Forested hill above the grove, Line Thanda" },
      { file: "4", width: 2000, height: 1200, alt: "Entrance archway to the Bheemuni Padam grove, Line Thanda" },
    ],
  },
  {
    id: "devuni-gutta-mulugu",
    name: "Devuni Gutta Sacred Grove",
    place: "Kotturu, Mulugu",
    description: "A hilltop grove at Kotturu dedicated to Sri Lakshmi Narasimha Swamy, with a small stone temple among the trees.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Roadside signboard for the Sri Lakshmi Narasimha Swamy temple at Devuni Gutta, Kotturu" },
      { file: "2", width: 2000, height: 1200, alt: "Ancient stone temple structure within the Devuni Gutta grove, Mulugu" },
      { file: "3", width: 2000, height: 1200, alt: "Carved stone relief on the temple at Devuni Gutta, Mulugu" },
      { file: "4", width: 2000, height: 1200, alt: "Forest interior of the Devuni Gutta sacred grove, Mulugu" },
    ],
  },
  {
    id: "durgamma-rukma-thanda",
    name: "Durgamma Sacred Grove",
    place: "Rukma Thanda, Takulapally",
    description: "A shaded evergreen grove at Rukma Thanda with a small painted shrine to the goddess Durgamma.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Painted Durgamma shrine at the grove entrance, Rukma Thanda" },
      { file: "2", width: 2000, height: 1200, alt: "Backlit canopy foliage inside the Durgamma grove, Rukma Thanda" },
      { file: "3", width: 2000, height: 1200, alt: "Understorey foliage in the Durgamma grove, Rukma Thanda" },
      { file: "4", width: 2000, height: 1200, alt: "Glossy-leaved canopy detail, Durgamma grove, Rukma Thanda" },
    ],
  },
  {
    id: "gandi-chinna-muthyalamma",
    name: "Gandi Chinna Muthyalamma Sacred Grove",
    place: "Telangana",
    description: "A ridge-top grove where a living tree is marked for worship, with sweeping views over the surrounding forest.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Sacred tree marked with vermilion and turmeric bands at the grove" },
      { file: "2", width: 2000, height: 1200, alt: "Small shrine platform built around a tree base in the grove" },
      { file: "3", width: 2000, height: 1200, alt: "Conical forested hill seen from the grove ridge" },
      { file: "4", width: 2000, height: 1200, alt: "Forested peak above the Gandi Chinna Muthyalamma grove" },
    ],
  },
  {
    id: "geesu-konda",
    name: "Geesu Konda Sacred Grove",
    place: "Telangana",
    description: "A rocky hilltop grove with a small Shiva lingam shrine and a wide river-valley panorama.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "River valley panorama from the Geesu Konda hilltop" },
      { file: "2", width: 2000, height: 1200, alt: "Shiva lingam shrine within the Geesu Konda grove" },
      { file: "3", width: 2000, height: 1200, alt: "Railed pathway across the rock face at Geesu Konda" },
      { file: "4", width: 2000, height: 1200, alt: "Forested rocky peak at Geesu Konda" },
    ],
  },
  {
    id: "kota-maisamma-yellandu",
    name: "Kota Maisamma Thalli Temple Sacred Grove",
    place: "Nizampet, Yellandu",
    description: "A roadside grove and shrine to Kota Maisamma Thalli at Nizampet, still an active site of local worship.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Pillared mandapam within the Kota Maisamma grove, Nizampet" },
      { file: "2", width: 2000, height: 1200, alt: "Roadside signboard for the Kota Maisamma Thalli temple, Nizampet" },
      { file: "3", width: 2000, height: 1200, alt: "Decorated shrine at the Kota Maisamma grove, Nizampet" },
      { file: "4", width: 2000, height: 1200, alt: "Worshippers at the Kota Maisamma shrine, Nizampet" },
    ],
  },
  {
    id: "mallela-theertham",
    name: "Mallela Theertham Sacred Grove",
    place: "Telangana",
    description: "A forested ravine grove built around a perennial spring, its name referring to the sacred stream itself.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Spring water source structure within Mallela Theertham grove" },
      { file: "2", width: 2000, height: 1200, alt: "Forest stream crossing at Mallela Theertham" },
      { file: "3", width: 2000, height: 1200, alt: "Forested valley view from Mallela Theertham" },
      { file: "4", width: 2000, height: 1200, alt: "Canopy over rocky ground at Mallela Theertham" },
    ],
  },
  {
    id: "saleshwaram",
    name: "Saleshwaram Sacred Grove",
    place: "Telangana",
    description: "A cave-and-waterfall pilgrimage site set in a steep forested gorge, one of the more dramatic groves surveyed.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Roots hanging into the Saleshwaram cave entrance" },
      { file: "2", width: 2000, height: 1200, alt: "Waterfall inside the Saleshwaram cave" },
      { file: "3", width: 2000, height: 1200, alt: "Ritual offerings left at the Saleshwaram shrine" },
      { file: "4", width: 2000, height: 1200, alt: "The forested gorge at Saleshwaram" },
    ],
  },
  {
    id: "sammakka-sarakka-bojjaigudem",
    name: "Sammakka Sarakka Sacred Grove",
    place: "Bojjaigudem, Yellandu",
    description: "A maintained tribal-goddess shrine to Sammakka and Sarakka at Bojjaigudem, set beneath old grove trees.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Painted gateway to the Sammakka Sarakka shrine, Bojjaigudem" },
      { file: "2", width: 2000, height: 1200, alt: "Shrine built around a tree base, Bojjaigudem" },
      { file: "3", width: 2000, height: 1200, alt: "Decorated Sammakka Sarakka deity idols, Bojjaigudem" },
      { file: "4", width: 2000, height: 1200, alt: "The Sammakka Sarakka shrine beneath grove trees, Bojjaigudem" },
    ],
  },
  {
    id: "sammakka-sarakka-jagannayakulagudem",
    name: "Sammakka Sarakka Sacred Grove",
    place: "Jagannayakulagudem, Gudur",
    description: "A second Sammakka Sarakka grove at Jagannayakulagudem, with a bamboo stand and a grove-fed pond.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Sammakka Sarakka temple building, Jagannayakulagudem" },
      { file: "2", width: 2000, height: 1200, alt: "Bamboo grove pathway at Jagannayakulagudem" },
      { file: "3", width: 2000, height: 1200, alt: "Bamboo-fenced ritual enclosure, Jagannayakulagudem" },
      { file: "4", width: 2000, height: 1200, alt: "Pond within the grove at Jagannayakulagudem" },
    ],
  },
  {
    id: "buddavanam-nagarjuna-sagar",
    name: "Buddhavanam",
    place: "Nagarjuna Sagar",
    description: "A Buddhist heritage park adjoining Nagarjuna Sagar, developed around a memorial stupa and museum.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Golden memorial stupa at Buddhavanam, Nagarjuna Sagar" },
      { file: "2", width: 2000, height: 1200, alt: "Dome-roofed museum building at Buddhavanam" },
      { file: "3", width: 2000, height: 1200, alt: "Carved stone relief panel at Buddhavanam" },
      { file: "4", width: 2000, height: 1200, alt: "Entrance signage for Buddhavanam, Nagarjuna Sagar" },
    ],
  },
  {
    id: "chilaka-gandi-muthyalamma",
    name: "Chilaka Gandi Muthyalamma Sacred Grove",
    place: "Telangana",
    description: "A grove temple to Muthyalamma with mature old-growth trees around its courtyard.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Temple pavilion decorated for worship, Chilaka Gandi Muthyalamma grove" },
      { file: "2", width: 2000, height: 1200, alt: "Shrine interior at the Chilaka Gandi Muthyalamma temple" },
      { file: "3", width: 2000, height: 1200, alt: "Tree canopy over the temple courtyard" },
      { file: "4", width: 2000, height: 1200, alt: "Old-growth tree trunk in the Chilaka Gandi Muthyalamma grove" },
    ],
  },
  {
    id: "gandi-muthyalamma",
    name: "Gandi Muthyalamma Sacred Grove",
    place: "Telangana",
    description: "A smaller roadside grove and shrine to Muthyalamma set within dense forest.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Forest road leading into the Gandi Muthyalamma grove" },
      { file: "2", width: 2000, height: 1200, alt: "Dense forest canopy at the Gandi Muthyalamma grove" },
      { file: "3", width: 2000, height: 1200, alt: "Roadside temple building at the Gandi Muthyalamma grove" },
    ],
  },
  {
    id: "gunjedu-musalamma-narsampet",
    name: "Gunjedu Musalamma Sacred Grove",
    place: "Narsampet",
    description: "An active temple grove to Musalamma at Narsampet that draws local worshippers on festival days.",
    photos: [
      { file: "1", width: 2000, height: 1333, alt: "Ornate temple facade at the Gunjedu Musalamma grove, Narsampet" },
      { file: "2", width: 2000, height: 1333, alt: "Visitors at the Gunjedu Musalamma temple, Narsampet" },
      { file: "3", width: 2000, height: 1333, alt: "Worshippers gathered at the Gunjedu Musalamma temple, Narsampet" },
      { file: "4", width: 2000, height: 1333, alt: "Entrance gate to the Gunjedu Musalamma temple grounds, Narsampet" },
    ],
  },
  {
    id: "krishnaswami-naikalgudem-yellandu",
    name: "Krishnaswami Temple Sacred Grove",
    place: "Naikalgudem, Yellandu",
    description: "A grove temple at Naikalgudem built beside a massive old banyan-type tree.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Krishnaswami temple facade, Naikalgudem" },
      { file: "2", width: 2000, height: 1200, alt: "Small shrine at the base of a massive grove tree, Naikalgudem" },
      { file: "3", width: 2000, height: 1200, alt: "Temple and grove tree together, Naikalgudem" },
      { file: "4", width: 1522, height: 2000, alt: "Trunk of the large grove tree at Naikalgudem" },
    ],
  },
  {
    id: "neeladishwaraswamy",
    name: "Neeladishwaraswamy Sacred Grove",
    place: "Telangana",
    description: "A rock-perched temple grove reached through dense forest, with wide views over the surrounding hills.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Fern canopy within the Neeladishwaraswamy grove" },
      { file: "2", width: 2000, height: 1200, alt: "Sunlit forest interior, Neeladishwaraswamy grove" },
      { file: "3", width: 2000, height: 1200, alt: "Neeladishwaraswamy temple set among rocks and trees" },
      { file: "4", width: 2000, height: 1200, alt: "Valley view from the Neeladishwaraswamy grove" },
    ],
  },
  {
    id: "venkateshwara-swamy-anantharam",
    name: "Venkateshwara Swamy Sacred Grove",
    place: "Anantharam, MHBD",
    description: "A grove beside a reservoir at Anantharam, with a deity statue set on a small island pavilion.",
    photos: [
      { file: "1", width: 2000, height: 1200, alt: "Deity statue on a pavilion in the reservoir at Anantharam" },
      { file: "2", width: 2000, height: 1200, alt: "Venkateshwara Swamy temple building, Anantharam" },
      { file: "3", width: 2000, height: 1200, alt: "Grassy reservoir shore beside the Anantharam grove" },
      { file: "4", width: 2000, height: 1200, alt: "Forest canopy in the Venkateshwara Swamy grove, Anantharam" },
    ],
  },
];
