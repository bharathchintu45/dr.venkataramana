// Photographic flora of the Telangana sacred groves, generated from the field
// archive in "content and images/SACRED GROVES OF TELANGANA STATE". One record per
// species, up to 3 photographs each, in
// /public/images/sacred-groves/flora/<id>/1.webp, 2.webp, 3.webp (thumbnails under thumbs/).
//
// IDENTIFICATIONS ARE FIELD RECORDS, NOT HERBARIUM DETERMINATIONS. They come from
// the names on the original photo files and are under review. Entries marked
// "// review" are species whose known range does not include Telangana, so the
// name is very likely a field mis-tagging: check the photograph and either correct
// the name or delete the whole entry. Comments never reach the browser.
//
// To remove a species: delete its object here. To remove its photograph too,
// delete /public/images/sacred-groves/flora/<id>/.

import type { GrovePhoto } from "@/data/sacredGroves";

export interface GroveFloraRecord {
  id: string;
  scientificName: string;
  /** APG IV family, derived from the genus. */
  family: string;
  /** Ids of the groves in sacredGroves.ts where this was recorded. */
  groves: string[];
  photos: GrovePhoto[];
}

export const floraSrc = (id: string, file: string) => `/images/sacred-groves/flora/${id}/${file}.webp`;
export const floraThumb = (id: string, file: string) => `/images/sacred-groves/flora/${id}/thumbs/${file}.webp`;

export const groveFlora: GroveFloraRecord[] = [
  // review
  {
    id: "acalypha-villosa",
    scientificName: "Acalypha villosa",
    family: "Euphorbiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Acalypha villosa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Acalypha villosa photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Acalypha villosa photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Acalypha villosa photographed in the Neeladishwaraswamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "acampe-pachyglossa",
    scientificName: "Acampe pachyglossa",
    family: "Orchidaceae",
    groves: ["gandi-muthyalamma", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Acampe pachyglossa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Acampe pachyglossa photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 1126, alt: "Acampe pachyglossa photographed in the Gandi Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "achyranthes-aspera",
    scientificName: "Achyranthes aspera",
    family: "Amaranthaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Achyranthes aspera photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "achyranthes-bidentata",
    scientificName: "Achyranthes bidentata",
    family: "Amaranthaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Achyranthes bidentata photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Achyranthes bidentata photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "adansonia-gregorii",
    scientificName: "Adansonia gregorii",
    family: "Malvaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Adansonia gregorii photographed in the Agasthappayya Swamy sacred grove" }],
  },
  {
    id: "aegle-marmelos",
    scientificName: "Aegle marmelos",
    family: "Rutaceae",
    groves: ["devuni-gutta-mulugu", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Aegle marmelos photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Aegle marmelos photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Aegle marmelos photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "afzelia-africana",
    scientificName: "Afzelia africana",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Afzelia africana photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Afzelia africana photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Afzelia africana photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Afzelia africana photographed in the Devuni Gutta sacred grove, photo 4" }],
  },
  // review
  {
    id: "afzelia-quanzensis",
    scientificName: "Afzelia quanzensis",
    family: "Fabaceae",
    groves: ["mallela-theertham", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Afzelia quanzensis photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Afzelia quanzensis photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Afzelia quanzensis photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Afzelia quanzensis photographed in the Neeladishwaraswamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Afzelia quanzensis photographed in the Neeladishwaraswamy sacred grove, photo 5" }],
  },
  {
    id: "aglaia-elaeagnoidea",
    scientificName: "Aglaia elaeagnoidea",
    family: "Meliaceae",
    groves: ["durgamma-rukma-thanda", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Aglaia elaeagnoidea photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Aglaia elaeagnoidea photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Aglaia elaeagnoidea photographed in the Durgamma sacred grove, photo 3" }],
  },
  {
    id: "alangium-salviifolium",
    scientificName: "Alangium salviifolium",
    family: "Cornaceae",
    groves: ["gunjedu-musalamma-narsampet", "kota-maisamma-yellandu", "saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Alangium salviifolium photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Alangium salviifolium photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Alangium salviifolium photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "albizia-amara",
    scientificName: "Albizia amara",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Albizia amara photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "albizia-forbesii",
    scientificName: "Albizia forbesii",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Albizia forbesii photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Albizia forbesii photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  // review
  {
    id: "albizia-harveyi",
    scientificName: "Albizia harveyi",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Albizia harveyi photographed in the Agasthappayya Swamy sacred grove" }],
  },
  {
    id: "albizia-odoratissima",
    scientificName: "Albizia odoratissima",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Albizia odoratissima photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Albizia odoratissima photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "albizia-procera",
    scientificName: "Albizia procera",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Albizia procera photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Albizia procera photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  // review
  {
    id: "alnus-japonica",
    scientificName: "Alnus japonica",
    family: "Betulaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Alnus japonica photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Alnus japonica photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  // review
  {
    id: "aloysia-macrostachya",
    scientificName: "Aloysia macrostachya",
    family: "Verbenaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Aloysia macrostachya photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Aloysia macrostachya photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Aloysia macrostachya photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "alphitonia-excelsa",
    scientificName: "Alphitonia excelsa",
    family: "Rhamnaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Alphitonia excelsa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Alphitonia excelsa photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "alstonia-angustiloba",
    scientificName: "Alstonia angustiloba",
    family: "Apocynaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Alstonia angustiloba photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  {
    id: "alstonia-scholaris",
    scientificName: "Alstonia scholaris",
    family: "Apocynaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Alstonia scholaris photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "alvaradoa-amorphoides",
    scientificName: "Alvaradoa amorphoides",
    family: "Picramniaceae",
    groves: ["chilaka-gandi-muthyalamma", "durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Alvaradoa amorphoides photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Alvaradoa amorphoides photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Alvaradoa amorphoides photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "amphilophium-paniculatum",
    scientificName: "Amphilophium paniculatum",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Amphilophium paniculatum photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Amphilophium paniculatum photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Amphilophium paniculatum photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  // review
  {
    id: "annona-senegalensis",
    scientificName: "Annona senegalensis",
    family: "Annonaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Annona senegalensis photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Annona senegalensis photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Annona senegalensis photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "anthocleista-grandiflora",
    scientificName: "Anthocleista grandiflora",
    family: "Gentianaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Anthocleista grandiflora photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "antiaris-toxicaria",
    scientificName: "Antiaris toxicaria",
    family: "Moraceae",
    groves: ["durgamma-rukma-thanda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Antiaris toxicaria photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Antiaris toxicaria photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Antiaris toxicaria photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Antiaris toxicaria photographed in the Durgamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Antiaris toxicaria photographed in the Durgamma sacred grove, photo 5" }],
  },
  // review
  {
    id: "antidesma-madagascariense",
    scientificName: "Antidesma madagascariense",
    family: "Phyllanthaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Antidesma madagascariense photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Antidesma madagascariense photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "apocynum-androsaemifolium",
    scientificName: "Apocynum androsaemifolium",
    family: "Apocynaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Apocynum androsaemifolium photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Apocynum androsaemifolium photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Apocynum androsaemifolium photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "aristolochia-acuminata",
    scientificName: "Aristolochia acuminata",
    family: "Aristolochiaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Aristolochia acuminata photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Aristolochia acuminata photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "aristolochia-tomentosa",
    scientificName: "Aristolochia tomentosa",
    family: "Aristolochiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Aristolochia tomentosa photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "aristotelia-chilensis",
    scientificName: "Aristotelia chilensis",
    family: "Elaeocarpaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Aristotelia chilensis photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Aristotelia chilensis photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Aristotelia chilensis photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Aristotelia chilensis photographed in the Kota Maisamma Thalli sacred grove, photo 4" }],
  },
  // review
  {
    id: "asparagus-schoberioides",
    scientificName: "Asparagus schoberioides",
    family: "Asparagaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Asparagus schoberioides photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Asparagus schoberioides photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  // review
  {
    id: "asplenium-scolopendrium",
    scientificName: "Asplenium scolopendrium",
    family: "Aspleniaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Asplenium scolopendrium photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Asplenium scolopendrium photographed in the Saleshwaram sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Asplenium scolopendrium photographed in the Saleshwaram sacred grove, photo 3" }],
  },
  // review
  {
    id: "austrobaileya-scandens",
    scientificName: "Austrobaileya scandens",
    family: "Austrobaileyaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Austrobaileya scandens photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Austrobaileya scandens photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "azadirachta-indica",
    scientificName: "Azadirachta indica",
    family: "Meliaceae",
    groves: ["gandi-muthyalamma", "geesu-konda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Azadirachta indica photographed in the Geesu Konda sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Azadirachta indica photographed in the Geesu Konda sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Azadirachta indica photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Azadirachta indica photographed in the Gandi Muthyalamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Azadirachta indica photographed in the Gandi Muthyalamma sacred grove, photo 5" }],
  },
  {
    id: "bacopa-monnieri",
    scientificName: "Bacopa monnieri",
    family: "Plantaginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bacopa monnieri photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bacopa monnieri photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Bacopa monnieri photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "balanites-maughamii",
    scientificName: "Balanites maughamii",
    family: "Zygophyllaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Balanites maughamii photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Balanites maughamii photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Balanites maughamii photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "bambusa-multiplex",
    scientificName: "Bambusa multiplex",
    family: "Poaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Bambusa multiplex photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Bambusa multiplex photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Bambusa multiplex photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "bambusa-vulgaris",
    scientificName: "Bambusa vulgaris",
    family: "Poaceae",
    groves: ["bheemuni-padam-gudur", "neeladishwaraswamy", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bambusa vulgaris photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bambusa vulgaris photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Bambusa vulgaris photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Bambusa vulgaris photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Bambusa vulgaris photographed in the Neeladishwaraswamy sacred grove, photo 5" }],
  },
  // review
  {
    id: "barleria-albostellata",
    scientificName: "Barleria albostellata",
    family: "Acanthaceae",
    groves: ["geesu-konda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Barleria albostellata photographed in the Geesu Konda sacred grove" }],
  },
  {
    id: "barleria-cristata",
    scientificName: "Barleria cristata",
    family: "Acanthaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Barleria cristata photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Barleria cristata photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Barleria cristata photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Barleria cristata photographed in the Neeladishwaraswamy sacred grove, photo 4" }],
  },
  {
    id: "barleria-prionitis",
    scientificName: "Barleria prionitis",
    family: "Acanthaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Barleria prionitis photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Barleria prionitis photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Barleria prionitis photographed in the Venkateshwara Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Barleria prionitis photographed in the Venkateshwara Swamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Barleria prionitis photographed in the Venkateshwara Swamy sacred grove, photo 5" }],
  },
  {
    id: "barringtonia-acutangula",
    scientificName: "Barringtonia acutangula",
    family: "Lecythidaceae",
    groves: ["devuni-gutta-mulugu", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Barringtonia acutangula photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Barringtonia acutangula photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Barringtonia acutangula photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Barringtonia acutangula photographed in the Kota Maisamma Thalli sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Barringtonia acutangula photographed in the Kota Maisamma Thalli sacred grove, photo 5" }],
  },
  {
    id: "bauhinia-acuminata",
    scientificName: "Bauhinia acuminata",
    family: "Fabaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bauhinia acuminata photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bauhinia acuminata photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Bauhinia acuminata photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "bauhinia-racemosa",
    scientificName: "Bauhinia racemosa",
    family: "Fabaceae",
    groves: ["mallela-theertham", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bauhinia racemosa photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bauhinia racemosa photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Bauhinia racemosa photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  // review
  {
    id: "begonia-involucrata",
    scientificName: "Begonia involucrata",
    family: "Begoniaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Begonia involucrata photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Begonia involucrata photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Begonia involucrata photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "bergera-koenigii",
    scientificName: "Bergera koenigii",
    family: "Rutaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Bergera koenigii photographed in the Buddhavanam sacred grove" }],
  },
  // review
  {
    id: "bertholletia-excelsa",
    scientificName: "Bertholletia excelsa",
    family: "Lecythidaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bertholletia excelsa photographed in the Kota Maisamma Thalli sacred grove" }],
  },
  // review
  {
    id: "bischofia-javanica",
    scientificName: "Bischofia javanica",
    family: "Phyllanthaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bischofia javanica photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bischofia javanica photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "bolusanthus-speciosus",
    scientificName: "Bolusanthus speciosus",
    family: "Fabaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Bolusanthus speciosus photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  {
    id: "bombax-ceiba",
    scientificName: "Bombax ceiba",
    family: "Malvaceae",
    groves: ["bheemuni-padam-gudur", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 933, height: 1400, alt: "Bombax ceiba photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Bombax ceiba photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 933, height: 1400, alt: "Bombax ceiba photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Bombax ceiba photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Bombax ceiba photographed in the Bheemuni Padam sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Bombax ceiba photographed in the Gunjedu Musalamma sacred grove, photo 6" }],
  },
  {
    id: "boswellia-serrata",
    scientificName: "Boswellia serrata",
    family: "Burseraceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Boswellia serrata photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Boswellia serrata photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Boswellia serrata photographed in the Devuni Gutta sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Boswellia serrata photographed in the Devuni Gutta sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Boswellia serrata photographed in the Devuni Gutta sacred grove, photo 5" }],
  },
  // review
  {
    id: "brachystegia-spiciformis",
    scientificName: "Brachystegia spiciformis",
    family: "Fabaceae",
    groves: ["buddavanam-nagarjuna-sagar", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Brachystegia spiciformis photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Brachystegia spiciformis photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Brachystegia spiciformis photographed in the Buddhavanam sacred grove, photo 3" }],
  },
  // review
  {
    id: "bravaisia-integerrima",
    scientificName: "Bravaisia integerrima",
    family: "Acanthaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bravaisia integerrima photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "breonadia-salicina",
    scientificName: "Breonadia salicina",
    family: "Rubiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Breonadia salicina photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Breonadia salicina photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Breonadia salicina photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  {
    id: "breynia-retusa",
    scientificName: "Breynia retusa",
    family: "Phyllanthaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Breynia retusa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Breynia retusa photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "bridelia-micrantha",
    scientificName: "Bridelia micrantha",
    family: "Phyllanthaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bridelia micrantha photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bridelia micrantha photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Bridelia micrantha photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  // review
  {
    id: "bridelia-mollis",
    scientificName: "Bridelia mollis",
    family: "Phyllanthaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bridelia mollis photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bridelia mollis photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  {
    id: "bridelia-tomentosa",
    scientificName: "Bridelia tomentosa",
    family: "Phyllanthaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Bridelia tomentosa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Bridelia tomentosa photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Bridelia tomentosa photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "brosimum-alicastrum",
    scientificName: "Brosimum alicastrum",
    family: "Moraceae",
    groves: ["bheemuni-padam-gudur", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Brosimum alicastrum photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Brosimum alicastrum photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Brosimum alicastrum photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Brosimum alicastrum photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Brosimum alicastrum photographed in the Mallela Theertham sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Brosimum alicastrum photographed in the Mallela Theertham sacred grove, photo 6" }, { file: "7", width: 1400, height: 933, alt: "Brosimum alicastrum photographed in the Mallela Theertham sacred grove, photo 7" }],
  },
  {
    id: "butea-monosperma",
    scientificName: "Butea monosperma",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Butea monosperma photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Butea monosperma photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "cajanus-scarabaeoides",
    scientificName: "Cajanus scarabaeoides",
    family: "Fabaceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cajanus scarabaeoides photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "calliandra-tergemina",
    scientificName: "Calliandra tergemina",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Calliandra tergemina photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "callicarpa-japonica",
    scientificName: "Callicarpa japonica",
    family: "Lamiaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Callicarpa japonica photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Callicarpa japonica photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "canthium-coromandelicum",
    scientificName: "Canthium coromandelicum",
    family: "Rubiaceae",
    groves: ["agasthappayya-swamy-maripeda", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Canthium coromandelicum photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Canthium coromandelicum photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  {
    id: "canthium-parviflorum",
    scientificName: "Canthium parviflorum",
    family: "Rubiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Canthium parviflorum photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Canthium parviflorum photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Canthium parviflorum photographed in the Agasthappayya Swamy sacred grove, photo 3" }],
  },
  {
    id: "capparis-decidua",
    scientificName: "Capparis decidua",
    family: "Capparaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Capparis decidua photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Capparis decidua photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }],
  },
  {
    id: "capparis-sepiaria",
    scientificName: "Capparis sepiaria",
    family: "Capparaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Capparis sepiaria photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Capparis sepiaria photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Capparis sepiaria photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  {
    id: "careya-arborea",
    scientificName: "Careya arborea",
    family: "Lecythidaceae",
    groves: ["bheemuni-padam-gudur", "gandi-muthyalamma", "gunjedu-musalamma-narsampet", "mallela-theertham", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Careya arborea photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Careya arborea photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Careya arborea photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "carissa-carandas",
    scientificName: "Carissa carandas",
    family: "Apocynaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Carissa carandas photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Carissa carandas photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "cassia-fistula",
    scientificName: "Cassia fistula",
    family: "Fabaceae",
    groves: ["buddavanam-nagarjuna-sagar", "durgamma-rukma-thanda", "gandi-muthyalamma", "mallela-theertham", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cassia fistula photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cassia fistula photographed in the Gandi Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Cassia fistula photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Cassia fistula photographed in the Durgamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Cassia fistula photographed in the Venkateshwara Swamy sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Cassia fistula photographed in the Venkateshwara Swamy sacred grove, photo 6" }],
  },
  {
    id: "casuarina-equisetifolia",
    scientificName: "Casuarina equisetifolia",
    family: "Casuarinaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Casuarina equisetifolia photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Casuarina equisetifolia photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Casuarina equisetifolia photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "catunaregam-spinosa",
    scientificName: "Catunaregam spinosa",
    family: "Rubiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Catunaregam spinosa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Catunaregam spinosa photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Catunaregam spinosa photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "cayratia-trifolia",
    scientificName: "Cayratia trifolia",
    family: "Vitaceae",
    groves: ["geesu-konda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cayratia trifolia photographed in the Geesu Konda sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cayratia trifolia photographed in the Geesu Konda sacred grove, photo 2" }],
  },
  // review
  {
    id: "celastrus-subspicatus",
    scientificName: "Celastrus subspicatus",
    family: "Celastraceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Celastrus subspicatus photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Celastrus subspicatus photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "celtis-iguanaea",
    scientificName: "Celtis iguanaea",
    family: "Cannabaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Celtis iguanaea photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Celtis iguanaea photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  {
    id: "cenchrus-pedicellatus",
    scientificName: "Cenchrus pedicellatus",
    family: "Poaceae",
    groves: ["geesu-konda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cenchrus pedicellatus photographed in the Geesu Konda sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cenchrus pedicellatus photographed in the Geesu Konda sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cenchrus pedicellatus photographed in the Geesu Konda sacred grove, photo 3" }],
  },
  // review
  {
    id: "centrosema-brasilianum",
    scientificName: "Centrosema brasilianum",
    family: "Fabaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Centrosema brasilianum photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Centrosema brasilianum photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "centrosema-pubescens",
    scientificName: "Centrosema pubescens",
    family: "Fabaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Centrosema pubescens photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Centrosema pubescens photographed in the Durgamma sacred grove, photo 2" }],
  },
  {
    id: "cestrum-nocturnum",
    scientificName: "Cestrum nocturnum",
    family: "Solanaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cestrum nocturnum photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cestrum nocturnum photographed in the Buddhavanam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Cestrum nocturnum photographed in the Buddhavanam sacred grove, photo 3" }],
  },
  // review
  {
    id: "chimonanthus-nitens",
    scientificName: "Chimonanthus nitens",
    family: "Calycanthaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Chimonanthus nitens photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Chimonanthus nitens photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Chimonanthus nitens photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  // review
  {
    id: "chloroleucon-mangense",
    scientificName: "Chloroleucon mangense",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Chloroleucon mangense photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Chloroleucon mangense photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "chloroxylon-swietenia",
    scientificName: "Chloroxylon swietenia",
    family: "Rutaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Chloroxylon swietenia photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Chloroxylon swietenia photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Chloroxylon swietenia photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "chomelia-spinosa",
    scientificName: "Chomelia spinosa",
    family: "Rubiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Chomelia spinosa photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Chomelia spinosa photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Chomelia spinosa photographed in the Durgamma sacred grove, photo 3" }],
  },
  {
    id: "chromolaena-odorata",
    scientificName: "Chromolaena odorata",
    family: "Asteraceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Chromolaena odorata photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Chromolaena odorata photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "cinchona-pubescens",
    scientificName: "Cinchona pubescens",
    family: "Rubiaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cinchona pubescens photographed in the Venkateshwara Swamy sacred grove" }],
  },
  {
    id: "cissus-repens",
    scientificName: "Cissus repens",
    family: "Vitaceae",
    groves: ["bheemuni-padam-gudur", "gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cissus repens photographed in the Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cissus repens photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cissus repens photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "cladrastis-kentukea",
    scientificName: "Cladrastis kentukea",
    family: "Fabaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cladrastis kentukea photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "clausena-lansium",
    scientificName: "Clausena lansium",
    family: "Rutaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Clausena lansium photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Clausena lansium photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Clausena lansium photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Clausena lansium photographed in the Gunjedu Musalamma sacred grove, photo 4" }],
  },
  {
    id: "cleistanthus-collinus",
    scientificName: "Cleistanthus collinus",
    family: "Phyllanthaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cleistanthus collinus photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cleistanthus collinus photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Cleistanthus collinus photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "clematis-dioica",
    scientificName: "Clematis dioica",
    family: "Ranunculaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Clematis dioica photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "clethra-mexicana",
    scientificName: "Clethra mexicana",
    family: "Clethraceae",
    groves: ["bheemuni-padam-gudur", "durgamma-rukma-thanda", "gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Clethra mexicana photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Clethra mexicana photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Clethra mexicana photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  {
    id: "coccinia-grandis",
    scientificName: "Coccinia grandis",
    family: "Cucurbitaceae",
    groves: ["geesu-konda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Coccinia grandis photographed in the Geesu Konda sacred grove" }],
  },
  // review
  {
    id: "coleus-habrophyllus",
    scientificName: "Coleus habrophyllus",
    family: "Lamiaceae",
    groves: ["geesu-konda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Coleus habrophyllus photographed in the Geesu Konda sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Coleus habrophyllus photographed in the Geesu Konda sacred grove, photo 2" }],
  },
  // review
  {
    id: "colubrina-arborescens",
    scientificName: "Colubrina arborescens",
    family: "Rhamnaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Colubrina arborescens photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Colubrina arborescens photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Colubrina arborescens photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "combretum-apiculatum",
    scientificName: "Combretum apiculatum",
    family: "Combretaceae",
    groves: ["mallela-theertham", "sammakka-sarakka-jagannayakulagudem", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Combretum apiculatum photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Combretum apiculatum photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Combretum apiculatum photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Combretum apiculatum photographed in the Venkateshwara Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "combretum-erythrophyllum",
    scientificName: "Combretum erythrophyllum",
    family: "Combretaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Combretum erythrophyllum photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Combretum erythrophyllum photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Combretum erythrophyllum photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  // review
  {
    id: "combretum-fruticosum",
    scientificName: "Combretum fruticosum",
    family: "Combretaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Combretum fruticosum photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  // review
  {
    id: "combretum-imberbe",
    scientificName: "Combretum imberbe",
    family: "Combretaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Combretum imberbe photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "combretum-molle",
    scientificName: "Combretum molle",
    family: "Combretaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Combretum molle photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Combretum molle photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Combretum molle photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  // review
  {
    id: "combretum-mossambicense",
    scientificName: "Combretum mossambicense",
    family: "Combretaceae",
    groves: ["devuni-gutta-mulugu", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Combretum mossambicense photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Combretum mossambicense photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Combretum mossambicense photographed in the Venkateshwara Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Combretum mossambicense photographed in the Devuni Gutta sacred grove, photo 4" }],
  },
  // review
  {
    id: "combretum-nigricans",
    scientificName: "Combretum nigricans",
    family: "Combretaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Combretum nigricans photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Combretum nigricans photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "combretum-zeyheri",
    scientificName: "Combretum zeyheri",
    family: "Combretaceae",
    groves: ["durgamma-rukma-thanda", "kota-maisamma-yellandu", "mallela-theertham", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Combretum zeyheri photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Combretum zeyheri photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Combretum zeyheri photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Combretum zeyheri photographed in the Durgamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Combretum zeyheri photographed in the Kota Maisamma Thalli sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Combretum zeyheri photographed in the Venkateshwara Swamy sacred grove, photo 6" }],
  },
  {
    id: "commelina-benghalensis",
    scientificName: "Commelina benghalensis",
    family: "Commelinaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Commelina benghalensis photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "commelina-caroliniana",
    scientificName: "Commelina caroliniana",
    family: "Commelinaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Commelina caroliniana photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Commelina caroliniana photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Commelina caroliniana photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "commersonia-bartramia",
    scientificName: "Commersonia bartramia",
    family: "Malvaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Commersonia bartramia photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Commersonia bartramia photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  {
    id: "commicarpus-plumbagineus",
    scientificName: "Commicarpus plumbagineus",
    family: "Nyctaginaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Commicarpus plumbagineus photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Commicarpus plumbagineus photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "copaifera-langsdorffii",
    scientificName: "Copaifera langsdorffii",
    family: "Fabaceae",
    groves: ["gunjedu-musalamma-narsampet", "mallela-theertham", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Copaifera langsdorffii photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Copaifera langsdorffii photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Copaifera langsdorffii photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Copaifera langsdorffii photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Copaifera langsdorffii photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 5" }],
  },
  // review
  {
    id: "cordia-alliodora",
    scientificName: "Cordia alliodora",
    family: "Boraginaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cordia alliodora photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "cordia-boissieri",
    scientificName: "Cordia boissieri",
    family: "Boraginaceae",
    groves: ["agasthappayya-swamy-maripeda", "bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cordia boissieri photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cordia boissieri photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cordia boissieri photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Cordia boissieri photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "cordia-caffra",
    scientificName: "Cordia caffra",
    family: "Boraginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cordia caffra photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "cordia-collococca",
    scientificName: "Cordia collococca",
    family: "Boraginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cordia collococca photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cordia collococca photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "cordia-dentata",
    scientificName: "Cordia dentata",
    family: "Boraginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cordia dentata photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cordia dentata photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cordia dentata photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Cordia dentata photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Cordia dentata photographed in the Bheemuni Padam sacred grove, photo 5" }],
  },
  {
    id: "cordia-dichotoma",
    scientificName: "Cordia dichotoma",
    family: "Boraginaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Cordia dichotoma photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Cordia dichotoma photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Cordia dichotoma photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "cordia-monoica",
    scientificName: "Cordia monoica",
    family: "Boraginaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cordia monoica photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cordia monoica photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Cordia monoica photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "cornutia-pyramidata",
    scientificName: "Cornutia pyramidata",
    family: "Lamiaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cornutia pyramidata photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cornutia pyramidata photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Cornutia pyramidata photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  // review
  {
    id: "corymbia-torelliana",
    scientificName: "Corymbia torelliana",
    family: "Myrtaceae",
    groves: ["devuni-gutta-mulugu", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Corymbia torelliana photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Corymbia torelliana photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Corymbia torelliana photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "couroupita-guianensis",
    scientificName: "Couroupita guianensis",
    family: "Lecythidaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Couroupita guianensis photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Couroupita guianensis photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Couroupita guianensis photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "crateva-tapia",
    scientificName: "Crateva tapia",
    family: "Capparaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Crateva tapia photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Crateva tapia photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "cratoxylum-cochinchinense",
    scientificName: "Cratoxylum cochinchinense",
    family: "Hypericaceae",
    groves: ["bheemuni-padam-gudur", "gandi-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cratoxylum cochinchinense photographed in the Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Cratoxylum cochinchinense photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cratoxylum cochinchinense photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "croton-incanus",
    scientificName: "Croton incanus",
    family: "Euphorbiaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Croton incanus photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "croton-insularis",
    scientificName: "Croton insularis",
    family: "Euphorbiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Croton insularis photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Croton insularis photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "croton-megalobotrys",
    scientificName: "Croton megalobotrys",
    family: "Euphorbiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Croton megalobotrys photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "croton-sylvaticus",
    scientificName: "Croton sylvaticus",
    family: "Euphorbiaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Croton sylvaticus photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Croton sylvaticus photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Croton sylvaticus photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "cryptocarya-alba",
    scientificName: "Cryptocarya alba",
    family: "Lauraceae",
    groves: ["bheemuni-padam-gudur", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cryptocarya alba photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cryptocarya alba photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Cryptocarya alba photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Cryptocarya alba photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  // review
  {
    id: "curatella-americana",
    scientificName: "Curatella americana",
    family: "Dilleniaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Curatella americana photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Curatella americana photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  // review
  {
    id: "cussonia-spicata",
    scientificName: "Cussonia spicata",
    family: "Araliaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Cussonia spicata photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "cyanotis-axillaris",
    scientificName: "Cyanotis axillaris",
    family: "Commelinaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cyanotis axillaris photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cyanotis axillaris photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  {
    id: "cycas-revoluta",
    scientificName: "Cycas revoluta",
    family: "Cycadaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cycas revoluta photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cycas revoluta photographed in the Buddhavanam sacred grove, photo 2" }],
  },
  {
    id: "cyperus-conglomeratus",
    scientificName: "Cyperus conglomeratus",
    family: "Cyperaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Cyperus conglomeratus photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Cyperus conglomeratus photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  {
    id: "dalbergia-latifolia",
    scientificName: "Dalbergia latifolia",
    family: "Fabaceae",
    groves: ["durgamma-rukma-thanda", "gandi-chinna-muthyalamma", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Dalbergia latifolia photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Dalbergia latifolia photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Dalbergia latifolia photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Dalbergia latifolia photographed in the Gandi Chinna Muthyalamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "daniellia-oliveri",
    scientificName: "Daniellia oliveri",
    family: "Fabaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Daniellia oliveri photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "debregeasia-longifolia",
    scientificName: "Debregeasia longifolia",
    family: "Urticaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Debregeasia longifolia photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Debregeasia longifolia photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Debregeasia longifolia photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "dendrolobium-umbellatum",
    scientificName: "Dendrolobium umbellatum",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Dendrolobium umbellatum photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Dendrolobium umbellatum photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Dendrolobium umbellatum photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  {
    id: "desmodium-gangeticum",
    scientificName: "Desmodium gangeticum",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Desmodium gangeticum photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Desmodium gangeticum photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "desmos-chinensis",
    scientificName: "Desmos chinensis",
    family: "Annonaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Desmos chinensis photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Desmos chinensis photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "dialium-guineense",
    scientificName: "Dialium guineense",
    family: "Fabaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Dialium guineense photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "dicliptera-chinensis",
    scientificName: "Dicliptera chinensis",
    family: "Acanthaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Dicliptera chinensis photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Dicliptera chinensis photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "dillenia-pentagyna",
    scientificName: "Dillenia pentagyna",
    family: "Dilleniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Dillenia pentagyna photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "dioscorea-bulbifera",
    scientificName: "Dioscorea bulbifera",
    family: "Dioscoreaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Dioscorea bulbifera photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Dioscorea bulbifera photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "dioscorea-polystachya",
    scientificName: "Dioscorea polystachya",
    family: "Dioscoreaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Dioscorea polystachya photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  {
    id: "diospyros-melanoxylon",
    scientificName: "Diospyros melanoxylon",
    family: "Ebenaceae",
    groves: ["durgamma-rukma-thanda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Diospyros melanoxylon photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Diospyros melanoxylon photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Diospyros melanoxylon photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Diospyros melanoxylon photographed in the Durgamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Diospyros melanoxylon photographed in the Durgamma sacred grove, photo 5" }],
  },
  // review
  {
    id: "diospyros-mespiliformis",
    scientificName: "Diospyros mespiliformis",
    family: "Ebenaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Diospyros mespiliformis photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "diospyros-montana",
    scientificName: "Diospyros montana",
    family: "Ebenaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Diospyros montana photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Diospyros montana photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Diospyros montana photographed in the Devuni Gutta sacred grove, photo 3" }],
  },
  {
    id: "diospyros-sylvatica",
    scientificName: "Diospyros sylvatica",
    family: "Ebenaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Diospyros sylvatica photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Diospyros sylvatica photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "diospyros-virginiana",
    scientificName: "Diospyros virginiana",
    family: "Ebenaceae",
    groves: ["durgamma-rukma-thanda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Diospyros virginiana photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Diospyros virginiana photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Diospyros virginiana photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  {
    id: "diplocyclos-palmatus",
    scientificName: "Diplocyclos palmatus",
    family: "Cucurbitaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Diplocyclos palmatus photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Diplocyclos palmatus photographed in the Gunjedu Musalamma sacred grove, photo 2" }],
  },
  {
    id: "dolichandrone-falcata",
    scientificName: "Dolichandrone falcata",
    family: "Bignoniaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Dolichandrone falcata photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Dolichandrone falcata photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "dryopteris-wallichiana",
    scientificName: "Dryopteris wallichiana",
    family: "Dryopteridaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Dryopteris wallichiana photographed in the Saleshwaram sacred grove" }],
  },
  // review
  {
    id: "ehretia-acuminata",
    scientificName: "Ehretia acuminata",
    family: "Boraginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ehretia acuminata photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ehretia acuminata photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "elaeocarpus-serratus",
    scientificName: "Elaeocarpus serratus",
    family: "Elaeocarpaceae",
    groves: ["chilaka-gandi-muthyalamma", "gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Elaeocarpus serratus photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Elaeocarpus serratus photographed in the Gandi Chinna Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Elaeocarpus serratus photographed in the Gandi Chinna Muthyalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "elaeodendron-xylocarpum",
    scientificName: "Elaeodendron xylocarpum",
    family: "Celastraceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Elaeodendron xylocarpum photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Elaeodendron xylocarpum photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  {
    id: "entada-rheedei",
    scientificName: "Entada rheedei",
    family: "Fabaceae",
    groves: ["kota-maisamma-yellandu", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Entada rheedei photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Entada rheedei photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Entada rheedei photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 3" }],
  },
  // review
  {
    id: "eriocaulon-aquaticum",
    scientificName: "Eriocaulon aquaticum",
    family: "Eriocaulaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Eriocaulon aquaticum photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Eriocaulon aquaticum photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Eriocaulon aquaticum photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Eriocaulon aquaticum photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "erythroxylum-coca",
    scientificName: "Erythroxylum coca",
    family: "Erythroxylaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Erythroxylum coca photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Erythroxylum coca photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Erythroxylum coca photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "eucalyptus-microcorys",
    scientificName: "Eucalyptus microcorys",
    family: "Myrtaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Eucalyptus microcorys photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Eucalyptus microcorys photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Eucalyptus microcorys photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Eucalyptus microcorys photographed in the Mallela Theertham sacred grove, photo 4" }],
  },
  // review
  {
    id: "euclea-crispa",
    scientificName: "Euclea crispa",
    family: "Ebenaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Euclea crispa photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "euonymus-occidentalis",
    scientificName: "Euonymus occidentalis",
    family: "Celastraceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Euonymus occidentalis photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  // review
  {
    id: "euphorbia-confinalis",
    scientificName: "Euphorbia confinalis",
    family: "Euphorbiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Euphorbia confinalis photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "euphorbia-cooperi",
    scientificName: "Euphorbia cooperi",
    family: "Euphorbiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Euphorbia cooperi photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Euphorbia cooperi photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  {
    id: "euphorbia-neriifolia",
    scientificName: "Euphorbia neriifolia",
    family: "Euphorbiaceae",
    groves: ["agasthappayya-swamy-maripeda", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Euphorbia neriifolia photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Euphorbia neriifolia photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Euphorbia neriifolia photographed in the Agasthappayya Swamy sacred grove, photo 3" }],
  },
  {
    id: "euphorbia-nivulia",
    scientificName: "Euphorbia nivulia",
    family: "Euphorbiaceae",
    groves: ["neeladishwaraswamy", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Euphorbia nivulia photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Euphorbia nivulia photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Euphorbia nivulia photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "euphorbia-sinclairiana",
    scientificName: "Euphorbia sinclairiana",
    family: "Euphorbiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Euphorbia sinclairiana photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Euphorbia sinclairiana photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "faurea-rochetiana",
    scientificName: "Faurea rochetiana",
    family: "Proteaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1280, height: 886, alt: "Faurea rochetiana photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "ficus-abutilifolia",
    scientificName: "Ficus abutilifolia",
    family: "Moraceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus abutilifolia photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus abutilifolia photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "ficus-aurea",
    scientificName: "Ficus aurea",
    family: "Moraceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Ficus aurea photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Ficus aurea photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Ficus aurea photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "ficus-benghalensis",
    scientificName: "Ficus benghalensis",
    family: "Moraceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus benghalensis photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus benghalensis photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  {
    id: "ficus-benjamina",
    scientificName: "Ficus benjamina",
    family: "Moraceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus benjamina photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus benjamina photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "ficus-elastica",
    scientificName: "Ficus elastica",
    family: "Moraceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus elastica photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus elastica photographed in the Saleshwaram sacred grove, photo 2" }],
  },
  {
    id: "ficus-hispida",
    scientificName: "Ficus hispida",
    family: "Moraceae",
    groves: ["gunjedu-musalamma-narsampet", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Ficus hispida photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Ficus hispida photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Ficus hispida photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ficus hispida photographed in the Neeladishwaraswamy sacred grove, photo 4" }],
  },
  {
    id: "ficus-lacor",
    scientificName: "Ficus lacor",
    family: "Moraceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ficus lacor photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Ficus lacor photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "ficus-lutea",
    scientificName: "Ficus lutea",
    family: "Moraceae",
    groves: ["sammakka-sarakka-bojjaigudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ficus lutea photographed in the Sammakka Sarakka, Bojjaigudem sacred grove" }],
  },
  // review
  {
    id: "ficus-petiolaris",
    scientificName: "Ficus petiolaris",
    family: "Moraceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus petiolaris photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus petiolaris photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ficus petiolaris photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  {
    id: "ficus-racemosa",
    scientificName: "Ficus racemosa",
    family: "Moraceae",
    groves: ["buddavanam-nagarjuna-sagar", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Ficus racemosa photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Ficus racemosa photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Ficus racemosa photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ficus racemosa photographed in the Buddhavanam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Ficus racemosa photographed in the Gunjedu Musalamma sacred grove, photo 5" }],
  },
  {
    id: "ficus-religiosa",
    scientificName: "Ficus religiosa",
    family: "Moraceae",
    groves: ["buddavanam-nagarjuna-sagar", "devuni-gutta-mulugu", "gandi-muthyalamma", "kota-maisamma-yellandu", "krishnaswami-naikalgudem-yellandu", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus religiosa photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus religiosa photographed in the Buddhavanam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ficus religiosa photographed in the Buddhavanam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ficus religiosa photographed in the Kota Maisamma Thalli sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Ficus religiosa photographed in the Buddhavanam sacred grove, photo 5" }],
  },
  // review
  {
    id: "ficus-stuhlmannii",
    scientificName: "Ficus stuhlmannii",
    family: "Moraceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus stuhlmannii photographed in the Venkateshwara Swamy sacred grove" }],
  },
  {
    id: "ficus-virens",
    scientificName: "Ficus virens",
    family: "Moraceae",
    groves: ["bheemuni-padam-gudur", "krishnaswami-naikalgudem-yellandu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ficus virens photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ficus virens photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ficus virens photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ficus virens photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Ficus virens photographed in the Krishnaswami Temple sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Ficus virens photographed in the Krishnaswami Temple sacred grove, photo 6" }],
  },
  {
    id: "flueggea-leucopyrus",
    scientificName: "Flueggea leucopyrus",
    family: "Phyllanthaceae",
    groves: ["agasthappayya-swamy-maripeda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Flueggea leucopyrus photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Flueggea leucopyrus photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Flueggea leucopyrus photographed in the Kota Maisamma Thalli sacred grove, photo 3" }],
  },
  // review
  {
    id: "fraxinus-griffithii",
    scientificName: "Fraxinus griffithii",
    family: "Oleaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Fraxinus griffithii photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "galium-virgatum",
    scientificName: "Galium virgatum",
    family: "Rubiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Galium virgatum photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "garcinia-griffithii",
    scientificName: "Garcinia griffithii",
    family: "Clusiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Garcinia griffithii photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Garcinia griffithii photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "gardenia-cornuta",
    scientificName: "Gardenia cornuta",
    family: "Rubiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Gardenia cornuta photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Gardenia cornuta photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "gardenia-taitensis",
    scientificName: "Gardenia taitensis",
    family: "Rubiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Gardenia taitensis photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Gardenia taitensis photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Gardenia taitensis photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Gardenia taitensis photographed in the Neeladishwaraswamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "genipa-americana",
    scientificName: "Genipa americana",
    family: "Rubiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Genipa americana photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Genipa americana photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Genipa americana photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Genipa americana photographed in the Neeladishwaraswamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Genipa americana photographed in the Neeladishwaraswamy sacred grove, photo 5" }],
  },
  // review
  {
    id: "geum-coccineum",
    scientificName: "Geum coccineum",
    family: "Rosaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Geum coccineum photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Geum coccineum photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "godmania-aesculifolia",
    scientificName: "Godmania aesculifolia",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Godmania aesculifolia photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "grewia-bicolor",
    scientificName: "Grewia bicolor",
    family: "Malvaceae",
    groves: ["mallela-theertham", "neeladishwaraswamy", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Grewia bicolor photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Grewia bicolor photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Grewia bicolor photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Grewia bicolor photographed in the Neeladishwaraswamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Grewia bicolor photographed in the Neeladishwaraswamy sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Grewia bicolor photographed in the Venkateshwara Swamy sacred grove, photo 6" }],
  },
  {
    id: "grewia-flavescens",
    scientificName: "Grewia flavescens",
    family: "Malvaceae",
    groves: ["agasthappayya-swamy-maripeda", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Grewia flavescens photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Grewia flavescens photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Grewia flavescens photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Grewia flavescens photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "grewia-monticola",
    scientificName: "Grewia monticola",
    family: "Malvaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Grewia monticola photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Grewia monticola photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "guadua-paniculata",
    scientificName: "Guadua paniculata",
    family: "Poaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Guadua paniculata photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  // review
  {
    id: "guaiacum-officinale",
    scientificName: "Guaiacum officinale",
    family: "Zygophyllaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Guaiacum officinale photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Guaiacum officinale photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "guettarda-scabra",
    scientificName: "Guettarda scabra",
    family: "Rubiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Guettarda scabra photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Guettarda scabra photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "gymnosporia-senegalensis",
    scientificName: "Gymnosporia senegalensis",
    family: "Celastraceae",
    groves: ["devuni-gutta-mulugu", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Gymnosporia senegalensis photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Gymnosporia senegalensis photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Gymnosporia senegalensis photographed in the Devuni Gutta sacred grove, photo 3" }],
  },
  {
    id: "gyrocarpus-americanus",
    scientificName: "Gyrocarpus americanus",
    family: "Hernandiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Gyrocarpus americanus photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Gyrocarpus americanus photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "handroanthus-heptaphyllus",
    scientificName: "Handroanthus heptaphyllus",
    family: "Bignoniaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Handroanthus heptaphyllus photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Handroanthus heptaphyllus photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "handroanthus-ochraceus",
    scientificName: "Handroanthus ochraceus",
    family: "Bignoniaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Handroanthus ochraceus photographed in the Venkateshwara Swamy sacred grove" }],
  },
  // review
  {
    id: "handroanthus-serratifolius",
    scientificName: "Handroanthus serratifolius",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Handroanthus serratifolius photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "harpullia-arborea",
    scientificName: "Harpullia arborea",
    family: "Sapindaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Harpullia arborea photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  // review
  {
    id: "hedeoma-nana",
    scientificName: "Hedeoma nana",
    family: "Lamiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Hedeoma nana photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Hedeoma nana photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "heptapleurum-actinophyllum",
    scientificName: "Heptapleurum actinophyllum",
    family: "Araliaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Heptapleurum actinophyllum photographed in the Buddhavanam sacred grove" }],
  },
  // review
  {
    id: "herissantia-crispa",
    scientificName: "Herissantia crispa",
    family: "Malvaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Herissantia crispa photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "heritiera-littoralis",
    scientificName: "Heritiera littoralis",
    family: "Malvaceae",
    groves: ["devuni-gutta-mulugu", "gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Heritiera littoralis photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Heritiera littoralis photographed in the Gandi Muthyalamma sacred grove, photo 2" }],
  },
  {
    id: "hibiscus-micranthus",
    scientificName: "Hibiscus micranthus",
    family: "Malvaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Hibiscus micranthus photographed in the Agasthappayya Swamy sacred grove, photo 6" }],
  },
  {
    id: "hibiscus-rosa-sinensis",
    scientificName: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Hibiscus rosa-sinensis photographed in the Neeladishwaraswamy sacred grove" }],
  },
  {
    id: "hibiscus-tiliaceus",
    scientificName: "Hibiscus tiliaceus",
    family: "Malvaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Hibiscus tiliaceus photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "hippomane-mancinella",
    scientificName: "Hippomane mancinella",
    family: "Euphorbiaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Hippomane mancinella photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Hippomane mancinella photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  {
    id: "hiptage-benghalensis",
    scientificName: "Hiptage benghalensis",
    family: "Malpighiaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Hiptage benghalensis photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Hiptage benghalensis photographed in the Gunjedu Musalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "holarrhena-floribunda",
    scientificName: "Holarrhena floribunda",
    family: "Apocynaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Holarrhena floribunda photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Holarrhena floribunda photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  {
    id: "holarrhena-pubescens",
    scientificName: "Holarrhena pubescens",
    family: "Apocynaceae",
    groves: ["durgamma-rukma-thanda", "kota-maisamma-yellandu", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Holarrhena pubescens photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Holarrhena pubescens photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Holarrhena pubescens photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Holarrhena pubescens photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Holarrhena pubescens photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 5" }],
  },
  {
    id: "ichnocarpus-frutescens",
    scientificName: "Ichnocarpus frutescens",
    family: "Apocynaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ichnocarpus frutescens photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ichnocarpus frutescens photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ichnocarpus frutescens photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ichnocarpus frutescens photographed in the Neeladishwaraswamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "inga-vera",
    scientificName: "Inga vera",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Inga vera photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Inga vera photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "ipomoea-aquatica",
    scientificName: "Ipomoea aquatica",
    family: "Convolvulaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ipomoea aquatica photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ipomoea aquatica photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ipomoea aquatica photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ipomoea aquatica photographed in the Neeladishwaraswamy sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Ipomoea aquatica photographed in the Neeladishwaraswamy sacred grove, photo 5" }],
  },
  {
    id: "ipomoea-carnea",
    scientificName: "Ipomoea carnea",
    family: "Convolvulaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ipomoea carnea photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ipomoea carnea photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ipomoea carnea photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "ipomoea-cristulata",
    scientificName: "Ipomoea cristulata",
    family: "Convolvulaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ipomoea cristulata photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "ipomoea-hederifolia",
    scientificName: "Ipomoea hederifolia",
    family: "Convolvulaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ipomoea hederifolia photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "juglans-mandshurica",
    scientificName: "Juglans mandshurica",
    family: "Juglandaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Juglans mandshurica photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Juglans mandshurica photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "justicia-carthaginensis",
    scientificName: "Justicia carthaginensis",
    family: "Acanthaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Justicia carthaginensis photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Justicia carthaginensis photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "koelreuteria-bipinnata",
    scientificName: "Koelreuteria bipinnata",
    family: "Sapindaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Koelreuteria bipinnata photographed in the Devuni Gutta sacred grove" }],
  },
  // review
  {
    id: "krugiodendron-ferreum",
    scientificName: "Krugiodendron ferreum",
    family: "Rhamnaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Krugiodendron ferreum photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Krugiodendron ferreum photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "lagerstroemia-parviflora",
    scientificName: "Lagerstroemia parviflora",
    family: "Lythraceae",
    groves: ["bheemuni-padam-gudur", "durgamma-rukma-thanda", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lagerstroemia parviflora photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Lagerstroemia parviflora photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Lagerstroemia parviflora photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Lagerstroemia parriflora photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  // review
  {
    id: "lannea-discolor",
    scientificName: "Lannea discolor",
    family: "Anacardiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lannea discolor photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Lannea discolor photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Lannea discolor photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Lannea discolor photographed in the Durgamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "lavandula-pinnata",
    scientificName: "Lavandula pinnata",
    family: "Lamiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Lavandula pinnata photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "lindera-communis",
    scientificName: "Lindera communis",
    family: "Lauraceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Lindera communis photographed in the Durgamma sacred grove" }],
  },
  // review
  {
    id: "lindernia-rotundifolia",
    scientificName: "Lindernia rotundifolia",
    family: "Linderniaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lindernia rotundifolia photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "lippia-origanoides",
    scientificName: "Lippia origanoides",
    family: "Verbenaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lippia origanoides photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "lonicera-flava",
    scientificName: "Lonicera flava",
    family: "Caprifoliaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lonicera flava photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Lonicera flava photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  {
    id: "ludwigia-decurrens",
    scientificName: "Ludwigia decurrens",
    family: "Onagraceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ludwigia decurrens photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ludwigia decurrens photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  {
    id: "ludwigia-hyssopifolia",
    scientificName: "Ludwigia hyssopifolia",
    family: "Onagraceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ludwigia hyssopifolia photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ludwigia hyssopifolia photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ludwigia hyssopifolia photographed in the Agasthappayya Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "ludwigia-longifolia",
    scientificName: "Ludwigia longifolia",
    family: "Onagraceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ludwigia longifolia photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ludwigia longifolia photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "luehea-divaricata",
    scientificName: "Luehea divaricata",
    family: "Malvaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Luehea divaricata photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Luehea divaricata photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "luma-chequen",
    scientificName: "Luma chequen",
    family: "Myrtaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Luma chequen photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Luma chequen photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Luma chequen photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "lysiphyllum-hookeri",
    scientificName: "Lysiphyllum hookeri",
    family: "Fabaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Lysiphyllum hookeri photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Lysiphyllum hookeri photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "maackia-amurensis",
    scientificName: "Maackia amurensis",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Maackia amurensis photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Maackia amurensis photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "macaranga-gigantea",
    scientificName: "Macaranga gigantea",
    family: "Euphorbiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Macaranga gigantea photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "madhuca-longifolia",
    scientificName: "Madhuca longifolia",
    family: "Sapotaceae",
    groves: ["bheemuni-padam-gudur", "chilaka-gandi-muthyalamma", "gandi-muthyalamma", "mallela-theertham", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Madhuca longifolia photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Madhuca longifolia photographed in the Gandi Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Madhuca longifolia photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Madhuca longifolia photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "maerua-angolensis",
    scientificName: "Maerua angolensis",
    family: "Capparaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Maerua angolensis photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Maerua angolensis photographed in the Buddhavanam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Maerua angolensis photographed in the Buddhavanam sacred grove, photo 3" }],
  },
  // review
  {
    id: "magnolia-sieboldii",
    scientificName: "Magnolia sieboldii",
    family: "Magnoliaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Magnolia sieboldii photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Magnolia sieboldii photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "malachra-alceifolia",
    scientificName: "Malachra alceifolia",
    family: "Malvaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Malachra alceifolia photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Malachra alceifolia photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Malachra alceifolia photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Malachra alceifolia photographed in the Gunjedu Musalamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Malachra alceifolia photographed in the Gunjedu Musalamma sacred grove, photo 5" }],
  },
  {
    id: "mallotus-philippensis",
    scientificName: "Mallotus philippensis",
    family: "Euphorbiaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Mallotus philippensis photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Mallotus philippensis photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Mallotus philippensis photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Mallotus philippensis photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Mallotus philippensis photographed in the Kota Maisamma Thalli sacred grove, photo 5" }],
  },
  // review
  {
    id: "markhamia-zanzibarica",
    scientificName: "Markhamia zanzibarica",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Markhamia zanzibarica photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Markhamia zanzibarica photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Markhamia zanzibarica photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Markhamia zanzibarica photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  // review
  {
    id: "melanolepis-multiglandulosa",
    scientificName: "Melanolepis multiglandulosa",
    family: "Euphorbiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Melanolepis multiglandulosa photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Melanolepis multiglandulosa photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "melicoccus-bijugatus",
    scientificName: "Melicoccus bijugatus",
    family: "Sapindaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Melicoccus bijugatus photographed in the Devuni Gutta sacred grove" }],
  },
  {
    id: "micrargeria-filiformis",
    scientificName: "Micrargeria filiformis",
    family: "Orobanchaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Micrargeria filiformis photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Micrargeria filiformis photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Micrargeria filiformis photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Micrargeria filiformis photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  {
    id: "millingtonia-hortensis",
    scientificName: "Millingtonia hortensis",
    family: "Bignoniaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 933, height: 1400, alt: "Millingtonia hortensis photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Millingtonia hortensis photographed in the Gunjedu Musalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "mimosa-tenuiflora",
    scientificName: "Mimosa tenuiflora",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Mimosa tenuiflora photographed in the Agasthappayya Swamy sacred grove" }],
  },
  {
    id: "momordica-balsamina",
    scientificName: "Momordica balsamina",
    family: "Cucurbitaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Momordica balsamina photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Momordica balsamina photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "monardella-undulata",
    scientificName: "Monardella undulata",
    family: "Lamiaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Monardella undulata photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Monardella undulata photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "morinda-lucida",
    scientificName: "Morinda lucida",
    family: "Rubiaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Morinda lucida photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Morinda lucida photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Morinda lucida photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  {
    id: "mucuna-pruriens",
    scientificName: "Mucuna pruriens",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Mucuna pruriens photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Mucuna pruriens photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Mucuna pruriens photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Mucuna pruriens photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Mucuna pruriens photographed in the Bheemuni Padam sacred grove, photo 5" }],
  },
  // review
  {
    id: "mucuna-sloanei",
    scientificName: "Mucuna sloanei",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Mucuna sloanei photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Mucuna sloanei photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "mundulea-sericea",
    scientificName: "Mundulea sericea",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Mundulea sericea photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "neocarya-macrophylla",
    scientificName: "Neocarya macrophylla",
    family: "Chrysobalanaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Neocarya macrophylla photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Neocarya macrophylla photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  {
    id: "neolamarckia-cadamba",
    scientificName: "Neolamarckia cadamba",
    family: "Rubiaceae",
    groves: ["bheemuni-padam-gudur", "buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Neolamarckia cadamba photographed in the Buddhavanam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Neolamarckia cadamba photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Neolamarckia cadamba photographed in the Buddhavanam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Neolamarckia cadamba photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Neolamarckia cadamba photographed in the Bheemuni Padam sacred grove, photo 5" }],
  },
  // review
  {
    id: "nephrolepis-brownii",
    scientificName: "Nephrolepis brownii",
    family: "Nephrolepidaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Nephrolepis brownii photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Nephrolepis brownii photographed in the Saleshwaram sacred grove, photo 2" }],
  },
  {
    id: "nerium-oleander",
    scientificName: "Nerium oleander",
    family: "Apocynaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Nerium oleander photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Nerium oleander photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "niphidium-crassifolium",
    scientificName: "Niphidium crassifolium",
    family: "Polypodiaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Niphidium crassifolium photographed in the Saleshwaram sacred grove" }],
  },
  // review
  {
    id: "nothofagus-obliqua",
    scientificName: "Nothofagus obliqua",
    family: "Nothofagaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Nothofagus obliqua photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "nyctanthes-arbor-tristis",
    scientificName: "Nyctanthes arbor-tristis",
    family: "Oleaceae",
    groves: ["durgamma-rukma-thanda", "gandi-muthyalamma", "kota-maisamma-yellandu", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Nyctanthes arbor-tristis photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Nyctanthes arbor-tristis photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Nyctanthes arbor-tristis photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "nyssa-aquatica",
    scientificName: "Nyssa aquatica",
    family: "Nyssaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Nyssa aquatica photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Nyssa aquatica photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Nyssa aquatica photographed in the Bheemuni Padam sacred grove, photo 3" }],
  },
  // review
  {
    id: "ochna-pulchra",
    scientificName: "Ochna pulchra",
    family: "Ochnaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ochna pulchra photographed in the Buddhavanam sacred grove" }],
  },
  // review
  {
    id: "ochroma-pyramidale",
    scientificName: "Ochroma pyramidale",
    family: "Malvaceae",
    groves: ["gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ochroma pyramidale photographed in the Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Ochroma pyramidale photographed in the Gandi Muthyalamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "ochrosia-elliptica",
    scientificName: "Ochrosia elliptica",
    family: "Apocynaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ochrosia elliptica photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ochrosia elliptica photographed in the Durgamma sacred grove, photo 2" }],
  },
  {
    id: "ocimum-tenuiflorum",
    scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Ocimum tenuiflorum photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Ocimum tenuiflorum photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Ocimum tenuiflorum photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "ouret-lanata",
    scientificName: "Ouret lanata",
    family: "Amaranthaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ouret lanata photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Ouret lanata photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "paederia-foetida",
    scientificName: "Paederia foetida",
    family: "Rubiaceae",
    groves: ["kota-maisamma-yellandu", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Paederia foetida photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Paederia foetida photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Paederia foetida photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Paederia foetida photographed in the Kota Maisamma Thalli sacred grove, photo 4" }],
  },
  // review
  {
    id: "passiflora-ligularis",
    scientificName: "Passiflora ligularis",
    family: "Passifloraceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Passiflora ligularis photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "passiflora-vesicaria",
    scientificName: "Passiflora vesicaria",
    family: "Passifloraceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Passiflora vesicaria photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Passiflora vesicaria photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  {
    id: "peltophorum-pterocarpum",
    scientificName: "Peltophorum pterocarpum",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Peltophorum pterocarpum photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "persea-americana",
    scientificName: "Persea americana",
    family: "Lauraceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Persea americana photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Persea americana photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 933, height: 1400, alt: "Persea americana photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "phaseolus-polystachios",
    scientificName: "Phaseolus polystachios",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Phaseolus polystachios photographed in the Agasthappayya Swamy sacred grove" }],
  },
  // review
  {
    id: "philenoptera-violacea",
    scientificName: "Philenoptera violacea",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Philenoptera violacea photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "phlebodium-aureum",
    scientificName: "Phlebodium aureum",
    family: "Polypodiaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Phlebodium aureum photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Phlebodium aureum photographed in the Saleshwaram sacred grove, photo 2" }],
  },
  {
    id: "phoenix-sylvestris",
    scientificName: "Phoenix sylvestris",
    family: "Arecaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Phoenix sylvestris photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Phoenix sylvestris photographed in the Gunjedu Musalamma sacred grove, photo 2" }],
  },
  {
    id: "phyllanthus-reticulatus",
    scientificName: "Phyllanthus reticulatus",
    family: "Phyllanthaceae",
    groves: ["gunjedu-musalamma-narsampet", "mallela-theertham", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Mallela Theertham sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Venkateshwara Swamy sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Phyllanthus reticulatus photographed in the Venkateshwara Swamy sacred grove, photo 6" }],
  },
  // review
  {
    id: "piliostigma-thonningii",
    scientificName: "Piliostigma thonningii",
    family: "Fabaceae",
    groves: ["chilaka-gandi-muthyalamma", "neeladishwaraswamy", "saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 1047, alt: "Piliostigma thonningii photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Piliostigma thonningii photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Piliostigma thonningii photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 1047, alt: "Piliostigma thonningii photographed in the Saleshwaram sacred grove, photo 4" }],
  },
  // review
  {
    id: "pimenta-dioica",
    scientificName: "Pimenta dioica",
    family: "Myrtaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pimenta dioica photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "pinanga-dicksonii",
    scientificName: "Pinanga dicksonii",
    family: "Arecaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pinanga dicksonii photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "pipturus-argenteus",
    scientificName: "Pipturus argenteus",
    family: "Urticaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pipturus argenteus photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Pipturus argenteus photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "piscidia-piscipula",
    scientificName: "Piscidia piscipula",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu", "mallela-theertham", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Piscidia piscipula photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Piscidia piscipula photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Piscidia piscipula photographed in the Neeladishwaraswamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Piscidia piscipula photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Piscidia piscipula photographed in the Neeladishwaraswamy sacred grove, photo 5" }],
  },
  {
    id: "pisonia-aculeata",
    scientificName: "Pisonia aculeata",
    family: "Nyctaginaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pisonia aculeata photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Pisonia aculeata photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "pistacia-atlantica",
    scientificName: "Pistacia atlantica",
    family: "Anacardiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pistacia atlantica photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "planchonia-careya",
    scientificName: "Planchonia careya",
    family: "Lecythidaceae",
    groves: ["devuni-gutta-mulugu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Planchonia careya photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Planchonia careya photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Planchonia careya photographed in the Mallela Theertham sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Planchonia careya photographed in the Devuni Gutta sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Planchonia careya photographed in the Devuni Gutta sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Planchonia careya photographed in the Devuni Gutta sacred grove, photo 6" }],
  },
  // review
  {
    id: "pleiogynium-timoriense",
    scientificName: "Pleiogynium timoriense",
    family: "Anacardiaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Pleiogynium timoriense photographed in the Kota Maisamma Thalli sacred grove" }],
  },
  {
    id: "plumeria-rubra",
    scientificName: "Plumeria rubra",
    family: "Apocynaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Plumeria rubra photographed in the Venkateshwara Swamy sacred grove" }],
  },
  // review
  {
    id: "polyscias-diversifolia",
    scientificName: "Polyscias diversifolia",
    family: "Araliaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Polyscias diversifolia photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "portulaca-umbraticola",
    scientificName: "Portulaca umbraticola",
    family: "Portulacaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Portulaca umbraticola photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Portulaca umbraticola photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "premna-tomentosa",
    scientificName: "Premna tomentosa",
    family: "Lamiaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Premna tomentosa photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "prosopis-cineraria",
    scientificName: "Prosopis cineraria",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Prosopis cineraria photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Prosopis cineraria photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Prosopis cineraria photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "prunus-serotina",
    scientificName: "Prunus serotina",
    family: "Rosaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Prunus serotina photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Prunus serotina photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "pseudolachnostylis-maprouneifolia",
    scientificName: "Pseudolachnostylis maprouneifolia",
    family: "Phyllanthaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Pseudolachnostylis maprouneifolia photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Pseudolachnostylis maprouneifolia photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  // review
  {
    id: "psychotria-carthagenensis",
    scientificName: "Psychotria carthagenensis",
    family: "Rubiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Psychotria carthagenensis photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Psychotria carthagenensis photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Psychotria carthagenensis photographed in the Durgamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Psychotria carthagenensis photographed in the Durgamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "pterocarpus-angolensis",
    scientificName: "Pterocarpus angolensis",
    family: "Fabaceae",
    groves: ["chilaka-gandi-muthyalamma", "durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterocarpus angolensis photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Pterocarpus angolensis photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "pterocarpus-erinaceus",
    scientificName: "Pterocarpus erinaceus",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterocarpus erinaceus photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Pterocarpus erinaceus photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Pterocarpus erinaceus photographed in the Devuni Gutta sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Pterocarpus erinaceus photographed in the Devuni Gutta sacred grove, photo 4" }],
  },
  // review
  {
    id: "pterocarpus-indicus",
    scientificName: "Pterocarpus indicus",
    family: "Fabaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 933, height: 1400, alt: "Pterocarpus indicus photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Pterocarpus indicus photographed in the Gunjedu Musalamma sacred grove, photo 2" }],
  },
  {
    id: "pterocarpus-santalinus",
    scientificName: "Pterocarpus santalinus",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Pterocarpus santalinus photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Pterocarpus santalinus photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "pterolobium-hexapetalum",
    scientificName: "Pterolobium hexapetalum",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterolobium hexapetalum photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "pterospermum-acerifolium",
    scientificName: "Pterospermum acerifolium",
    family: "Malvaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterospermum acerifolium photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "pterospermum-suberifolium",
    scientificName: "Pterospermum suberifolium",
    family: "Malvaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterospermum suberifolium photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Pterospermum suberifolium photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  {
    id: "pterospermum-xylocarpum",
    scientificName: "Pterospermum xylocarpum",
    family: "Malvaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pterospermum xylocarpum photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Pterospermum xylocarpum photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "pueraria-montana",
    scientificName: "Pueraria montana",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pueraria montana photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Pueraria montana photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "pyrrosia-lingua",
    scientificName: "Pyrrosia lingua",
    family: "Polypodiaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Pyrrosia lingua photographed in the Saleshwaram sacred grove" }],
  },
  // review
  {
    id: "quercus-humboldtii",
    scientificName: "Quercus humboldtii",
    family: "Fagaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Quercus humboldtii photographed in the Gunjedu Musalamma sacred grove" }],
  },
  // review
  {
    id: "quercus-mongolica",
    scientificName: "Quercus mongolica",
    family: "Fagaceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Quercus mongolica photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "quercus-muehlenbergii",
    scientificName: "Quercus muehlenbergii",
    family: "Fagaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Quercus muehlenbergii photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Quercus muehlenbergii photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Quercus muehlenbergii photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "quercus-polymorpha",
    scientificName: "Quercus polymorpha",
    family: "Fagaceae",
    groves: ["bheemuni-padam-gudur", "durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Quercus polymorpha photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Quercus polymorpha photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Quercus polymorpha photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Quercus polymorpha photographed in the Durgamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "quercus-serrata",
    scientificName: "Quercus serrata",
    family: "Fagaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Quercus serrata photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Quercus serrata photographed in the Durgamma sacred grove, photo 2" }],
  },
  // review
  {
    id: "quercus-tuberculata",
    scientificName: "Quercus tuberculata",
    family: "Fagaceae",
    groves: ["gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Quercus tuberculata photographed in the Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "radermachera-xylocarpa",
    scientificName: "Radermachera xylocarpa",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Radermachera xylocarpa photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "rauvolfia-caffra",
    scientificName: "Rauvolfia caffra",
    family: "Apocynaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Rauvolfia caffra photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Rauvolfia caffra photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "rawsonia-lucida",
    scientificName: "Rawsonia lucida",
    family: "Achariaceae",
    groves: ["bheemuni-padam-gudur", "sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Rawsonia lucida photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Rawsonia lucida photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Rawsonia lucida photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Rawsonia lucida photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  // review
  {
    id: "rhus-glabra",
    scientificName: "Rhus glabra",
    family: "Anacardiaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Rhus glabra photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Rhus glabra photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "roseodendron-donnell-smithii",
    scientificName: "Roseodendron donnell-smithii",
    family: "Bignoniaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Roseodendron donnell-smithii photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Roseodendron donnell-smithii photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "ruellia-patula",
    scientificName: "Ruellia patula",
    family: "Acanthaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ruellia patula photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Ruellia patula photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Ruellia patula photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Ruellia patula photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "sabicea-calycina",
    scientificName: "Sabicea calycina",
    family: "Rubiaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Sabicea calycina photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Sabicea calycina photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  {
    id: "salvadora-persica",
    scientificName: "Salvadora persica",
    family: "Salvadoraceae",
    groves: ["chilaka-gandi-muthyalamma", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Salvadora persica photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Salvadora persica photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Salvadora persica photographed in the Kota Maisamma Thalli sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Salvadora persica photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "sandoricum-koetjape",
    scientificName: "Sandoricum koetjape",
    family: "Meliaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Sandoricum koetjape photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Sandoricum koetjape photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  {
    id: "santalum-album",
    scientificName: "Santalum album",
    family: "Santalaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Santalum album photographed in the Buddhavanam sacred grove" }],
  },
  {
    id: "saraca-asoca",
    scientificName: "Saraca asoca",
    family: "Fabaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Saraca asoca photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Saraca asoca photographed in the Saleshwaram sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Saraca asoca photographed in the Saleshwaram sacred grove, photo 3" }],
  },
  // review
  {
    id: "saraca-declinata",
    scientificName: "Saraca declinata",
    family: "Fabaceae",
    groves: ["saleshwaram"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Saraca declinata photographed in the Saleshwaram sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Saraca declinata photographed in the Saleshwaram sacred grove, photo 2" }],
  },
  // review
  {
    id: "sassafras-albidum",
    scientificName: "Sassafras albidum",
    family: "Lauraceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Sassafras albidum photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Sassafras albidum photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  {
    id: "schleichera-oleosa",
    scientificName: "Schleichera oleosa",
    family: "Sapindaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu", "gandi-chinna-muthyalamma", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Schleichera oleosa photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Schleichera oleosa photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Schleichera oleosa photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Schleichera oleosa photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  {
    id: "scleria-lithosperma",
    scientificName: "Scleria lithosperma",
    family: "Cyperaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Scleria lithosperma photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Scleria lithosperma photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Scleria lithosperma photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "sclerocarya-birrea",
    scientificName: "Sclerocarya birrea",
    family: "Anacardiaceae",
    groves: ["bheemuni-padam-gudur", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Sclerocarya birrea photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Sclerocarya birrea photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Sclerocarya birrea photographed in the Venkateshwara Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Sclerocarya birrea photographed in the Bheemuni Padam sacred grove, photo 4" }],
  },
  // review
  {
    id: "searsia-chirindensis",
    scientificName: "Searsia chirindensis",
    family: "Anacardiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Searsia chirindensis photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "semialarium-mexicanum",
    scientificName: "Semialarium mexicanum",
    family: "Celastraceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Semialarium mexicanum photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Semialarium mexicanum photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "senegalia-ataxacantha",
    scientificName: "Senegalia ataxacantha",
    family: "Fabaceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Senegalia ataxacantha photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "senegalia-galpinii",
    scientificName: "Senegalia galpinii",
    family: "Fabaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Senegalia galpinii photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "senna-auriculata",
    scientificName: "Senna auriculata",
    family: "Fabaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Senna auriculata photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Senna auriculata photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }],
  },
  {
    id: "senna-occidentalis",
    scientificName: "Senna occidentalis",
    family: "Fabaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Senna occidentalis photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Senna occidentalis photographed in the Neeladishwaraswamy sacred grove, photo 2" }],
  },
  {
    id: "senna-tora",
    scientificName: "Senna tora",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Senna tora photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Senna tora photographed in the Agasthappayya Swamy sacred grove, photo 2" }],
  },
  // review
  {
    id: "sesbania-drummondii",
    scientificName: "Sesbania drummondii",
    family: "Fabaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Sesbania drummondii photographed in the Devuni Gutta sacred grove" }],
  },
  {
    id: "shorea-roxburghii",
    scientificName: "Shorea roxburghii",
    family: "Dipterocarpaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Shorea roxburghii photographed in the Bheemuni Padam sacred grove" }],
  },
  {
    id: "sida-acuta",
    scientificName: "Sida acuta",
    family: "Malvaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Sida acuta photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Sida acuta photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Sida acuta photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "spathodea-campanulata",
    scientificName: "Spathodea campanulata",
    family: "Bignoniaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Spathodea campanulata photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Spathodea campanulata photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Spathodea campanulata photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "sphagneticola-trilobata",
    scientificName: "Sphagneticola trilobata",
    family: "Asteraceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Sphagneticola trilobata photographed in the Buddhavanam sacred grove" }],
  },
  // review
  {
    id: "spirostachys-africana",
    scientificName: "Spirostachys africana",
    family: "Euphorbiaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Spirostachys africana photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "steganotaenia-araliacea",
    scientificName: "Steganotaenia araliacea",
    family: "Apiaceae",
    groves: ["gandi-muthyalamma", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Steganotaenia araliacea photographed in the Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Steganotaenia araliacea photographed in the Mallela Theertham sacred grove, photo 2" }],
  },
  // review
  {
    id: "sterculia-africana",
    scientificName: "Sterculia africana",
    family: "Malvaceae",
    groves: ["agasthappayya-swamy-maripeda", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Sterculia africana photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Sterculia africana photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Sterculia africana photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  {
    id: "sterculia-foetida",
    scientificName: "Sterculia foetida",
    family: "Malvaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Sterculia foetida photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "streblus-asper",
    scientificName: "Streblus asper",
    family: "Moraceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Streblus asper photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  // review
  {
    id: "strophostyles-helvola",
    scientificName: "Strophostyles helvola",
    family: "Fabaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Strophostyles helvola photographed in the Agasthappayya Swamy sacred grove" }],
  },
  {
    id: "strychnos-nux-vomica",
    scientificName: "Strychnos nux-vomica",
    family: "Loganiaceae",
    groves: ["chilaka-gandi-muthyalamma", "neeladishwaraswamy", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Strychnos nux-vomica photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Strychnos nux-vomica photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Strychnos nux-vomica photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "strychnos-potatorum",
    scientificName: "Strychnos potatorum",
    family: "Loganiaceae",
    groves: ["bheemuni-padam-gudur", "chilaka-gandi-muthyalamma", "devuni-gutta-mulugu", "gandi-chinna-muthyalamma", "mallela-theertham", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Strychnos potatorum photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Strychnos potatorum photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Strychnos potatorum photographed in the Gandi Chinna Muthyalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Strychnos potatorum photographed in the Devuni Gutta sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Strychnos potatorum photographed in the Mallela Theertham sacred grove, photo 5" }],
  },
  // review
  {
    id: "stryphnodendron-adstringens",
    scientificName: "Stryphnodendron adstringens",
    family: "Fabaceae",
    groves: ["devuni-gutta-mulugu", "durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Stryphnodendron adstringens photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Stryphnodendron adstringens photographed in the Devuni Gutta sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Stryphnodendron adstringens photographed in the Durgamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "styphnolobium-japonicum",
    scientificName: "Styphnolobium japonicum",
    family: "Fabaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Styphnolobium japonicum photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Styphnolobium japonicum photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  // review
  {
    id: "swietenia-humilis",
    scientificName: "Swietenia humilis",
    family: "Meliaceae",
    groves: ["chilaka-gandi-muthyalamma", "durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Swietenia humilis photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Swietenia humilis photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Swietenia humilis photographed in the Durgamma sacred grove, photo 3" }],
  },
  {
    id: "swietenia-macrophylla",
    scientificName: "Swietenia macrophylla",
    family: "Meliaceae",
    groves: ["bheemuni-padam-gudur", "chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Swietenia macrophylla photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Swietenia macrophylla photographed in the Bheemuni Padam sacred grove, photo 2" }],
  },
  // review
  {
    id: "syzygium-aqueum",
    scientificName: "Syzygium aqueum",
    family: "Myrtaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Syzygium aqueum photographed in the Devuni Gutta sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Syzygium aqueum photographed in the Devuni Gutta sacred grove, photo 2" }],
  },
  {
    id: "syzygium-cumini",
    scientificName: "Syzygium cumini",
    family: "Myrtaceae",
    groves: ["krishnaswami-naikalgudem-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Syzygium cumini photographed in the Krishnaswami Temple sacred grove" }],
  },
  // review
  {
    id: "syzygium-guineense",
    scientificName: "Syzygium guineense",
    family: "Myrtaceae",
    groves: ["chilaka-gandi-muthyalamma", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Syzygium guineense photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Syzygium guineense photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Syzygium guineense photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "tabebuia-aurea",
    scientificName: "Tabebuia aurea",
    family: "Bignoniaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tabebuia aurea photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Tabebuia aurea photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Tabebuia aurea photographed in the Venkateshwara Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Tabebuia aurea photographed in the Venkateshwara Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "tabernaemontana-alba",
    scientificName: "Tabernaemontana alba",
    family: "Apocynaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tabernaemontana alba photographed in the Chilaka Gandi Muthyalamma sacred grove" }],
  },
  {
    id: "tadehagi-triquetrum",
    scientificName: "Tadehagi triquetrum",
    family: "Fabaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tadehagi triquetrum photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Tadehagi triquetrum photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "tamarindus-indica",
    scientificName: "Tamarindus indica",
    family: "Fabaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tamarindus indica photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove" }],
  },
  {
    id: "tectona-grandis",
    scientificName: "Tectona grandis",
    family: "Lamiaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tectona grandis photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Tectona grandis photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Tectona grandis photographed in the Venkateshwara Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Tectona grandis photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Tectona grandis photographed in the Venkateshwara Swamy sacred grove, photo 5" }],
  },
  {
    id: "terminalia-arjuna",
    scientificName: "Terminalia arjuna",
    family: "Combretaceae",
    groves: ["bheemuni-padam-gudur", "chilaka-gandi-muthyalamma", "devuni-gutta-mulugu", "gunjedu-musalamma-narsampet", "kota-maisamma-yellandu", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Terminalia arjuna photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Terminalia arjuna photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Terminalia arjuna photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "terminalia-bellirica",
    scientificName: "Terminalia bellirica",
    family: "Combretaceae",
    groves: ["bheemuni-padam-gudur", "kota-maisamma-yellandu", "mallela-theertham", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Terminalia bellirica photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Terminalia bellirica photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Terminalia bellirica photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  {
    id: "terminalia-catappa",
    scientificName: "Terminalia catappa",
    family: "Combretaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Terminalia catappa photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Terminalia catappa photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Terminalia catappa photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  {
    id: "terminalia-chebula",
    scientificName: "Terminalia chebula",
    family: "Combretaceae",
    groves: ["bheemuni-padam-gudur", "devuni-gutta-mulugu", "durgamma-rukma-thanda", "gandi-muthyalamma", "kota-maisamma-yellandu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Terminalia chebula photographed in the Bheemuni Padam sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Terminalia chebula photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Terminalia chebula photographed in the Gandi Muthyalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "terminalia-mantaly",
    scientificName: "Terminalia mantaly",
    family: "Combretaceae",
    groves: ["buddavanam-nagarjuna-sagar"],
    photos: [{ file: "1", width: 1096, height: 1400, alt: "Terminalia mantaly photographed in the Buddhavanam sacred grove" }],
  },
  // review
  {
    id: "terminalia-oblonga",
    scientificName: "Terminalia oblonga",
    family: "Combretaceae",
    groves: ["gandi-muthyalamma", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 933, height: 1400, alt: "Terminalia oblonga photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Terminalia oblonga photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Terminalia oblonga photographed in the Gandi Muthyalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "terminalia-phanerophlebia",
    scientificName: "Terminalia phanerophlebia",
    family: "Combretaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Terminalia phanerophlebia photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Terminalia phanerophlebia photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  {
    id: "thottea-siliquosa",
    scientificName: "Thottea siliquosa",
    family: "Aristolochiaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Thottea siliquosa photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Thottea siliquosa photographed in the Durgamma sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Thottea siliquosa photographed in the Durgamma sacred grove, photo 3" }],
  },
  {
    id: "thunbergia-erecta",
    scientificName: "Thunbergia erecta",
    family: "Acanthaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Thunbergia erecta photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Thunbergia erecta photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
  {
    id: "toona-ciliata",
    scientificName: "Toona ciliata",
    family: "Meliaceae",
    groves: ["durgamma-rukma-thanda", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Toona ciliata photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Toona ciliata photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Toona ciliata photographed in the Mallela Theertham sacred grove, photo 3" }],
  },
  // review
  {
    id: "toxicodendron-succedaneum",
    scientificName: "Toxicodendron succedaneum",
    family: "Anacardiaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Toxicodendron succedaneum photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Toxicodendron succedaneum photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Toxicodendron succedaneum photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  // review
  {
    id: "tribulus-cistoides",
    scientificName: "Tribulus cistoides",
    family: "Zygophyllaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tribulus cistoides photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Tribulus cistoides photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Tribulus cistoides photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Tribulus cistoides photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  {
    id: "tribulus-terrestris",
    scientificName: "Tribulus terrestris",
    family: "Zygophyllaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Tribulus terrestris photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Tribulus terrestris photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Tribulus terrestris photographed in the Agasthappayya Swamy sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Tribulus terrestris photographed in the Agasthappayya Swamy sacred grove, photo 4" }],
  },
  // review
  {
    id: "trichilia-americana",
    scientificName: "Trichilia americana",
    family: "Meliaceae",
    groves: ["gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Trichilia americana photographed in the Gandi Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "trichilia-emetica",
    scientificName: "Trichilia emetica",
    family: "Meliaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Trichilia emetica photographed in the Mallela Theertham sacred grove" }],
  },
  {
    id: "trichosanthes-cucumerina",
    scientificName: "Trichosanthes cucumerina",
    family: "Cucurbitaceae",
    groves: ["gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Trichosanthes cucumerina photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Trichosanthes cucumerina photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Trichosanthes cucumerina photographed in the Gunjedu Musalamma sacred grove, photo 3" }],
  },
  {
    id: "urena-lobata",
    scientificName: "Urena lobata",
    family: "Malvaceae",
    groves: ["bheemuni-padam-gudur", "gunjedu-musalamma-narsampet"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Urena lobata photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Urena lobata photographed in the Bheemuni Padam sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Urena lobata photographed in the Bheemuni Padam sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Urena lobata photographed in the Bheemuni Padam sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Urena lobata photographed in the Gunjedu Musalamma sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Urena lobata photographed in the Gunjedu Musalamma sacred grove, photo 6" }, { file: "7", width: 1400, height: 933, alt: "Urena lobata photographed in the Gunjedu Musalamma sacred grove, photo 7" }],
  },
  // review
  {
    id: "vaccinium-arboreum",
    scientificName: "Vaccinium arboreum",
    family: "Ericaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Vaccinium arboreum photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Vaccinium arboreum photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }],
  },
  // review
  {
    id: "vachellia-aroma",
    scientificName: "Vachellia aroma",
    family: "Fabaceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Vachellia aroma photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "vachellia-cornigera",
    scientificName: "Vachellia cornigera",
    family: "Fabaceae",
    groves: ["sammakka-sarakka-jagannayakulagudem"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Vachellia cornigera photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Vachellia cornigera photographed in the Sammakka Sarakka, Jagannayakulagudem sacred grove, photo 2" }],
  },
  {
    id: "vachellia-nilotica",
    scientificName: "Vachellia nilotica",
    family: "Fabaceae",
    groves: ["gunjedu-musalamma-narsampet", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Gunjedu Musalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Gunjedu Musalamma sacred grove, photo 4" }, { file: "5", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Venkateshwara Swamy sacred grove, photo 5" }, { file: "6", width: 1400, height: 933, alt: "Vachellia nilotica photographed in the Venkateshwara Swamy sacred grove, photo 6" }],
  },
  // review
  {
    id: "vachellia-xanthophloea",
    scientificName: "Vachellia xanthophloea",
    family: "Fabaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vachellia xanthophloea photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Vachellia xanthophloea photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Vachellia xanthophloea photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "vangueria-infausta",
    scientificName: "Vangueria infausta",
    family: "Rubiaceae",
    groves: ["gandi-chinna-muthyalamma", "kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vangueria infausta photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Vangueria infausta photographed in the Kota Maisamma Thalli sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Vangueria infausta photographed in the Gandi Chinna Muthyalamma sacred grove, photo 3" }],
  },
  {
    id: "ventilago-madraspatana",
    scientificName: "Ventilago madraspatana",
    family: "Rhamnaceae",
    groves: ["gandi-chinna-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Ventilago madraspatana photographed in the Gandi Chinna Muthyalamma sacred grove" }],
  },
  // review
  {
    id: "vitellaria-paradoxa",
    scientificName: "Vitellaria paradoxa",
    family: "Sapotaceae",
    groves: ["devuni-gutta-mulugu", "mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitellaria paradoxa photographed in the Mallela Theertham sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Vitellaria paradoxa photographed in the Mallela Theertham sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Vitellaria paradoxa photographed in the Devuni Gutta sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Vitellaria paradoxa photographed in the Devuni Gutta sacred grove, photo 4" }],
  },
  // review
  {
    id: "vitex-pooara",
    scientificName: "Vitex pooara",
    family: "Lamiaceae",
    groves: ["kota-maisamma-yellandu"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitex pooara photographed in the Kota Maisamma Thalli sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Vitex pooara photographed in the Kota Maisamma Thalli sacred grove, photo 2" }],
  },
  // review
  {
    id: "vitis-californica",
    scientificName: "Vitis californica",
    family: "Vitaceae",
    groves: ["agasthappayya-swamy-maripeda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitis californica photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Vitis californica photographed in the Agasthappayya Swamy sacred grove, photo 2" }, { file: "3", width: 1400, height: 840, alt: "Vitis californica photographed in the Agasthappayya Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "vitis-labrusca",
    scientificName: "Vitis labrusca",
    family: "Vitaceae",
    groves: ["agasthappayya-swamy-maripeda", "gunjedu-musalamma-narsampet", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitis labrusca photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 933, height: 1400, alt: "Vitis labrusca photographed in the Gunjedu Musalamma sacred grove, photo 2" }, { file: "3", width: 933, height: 1400, alt: "Vitis labrusca photographed in the Gunjedu Musalamma sacred grove, photo 3" }, { file: "4", width: 1400, height: 933, alt: "Vitis labrusca photographed in the Gunjedu Musalamma sacred grove, photo 4" }],
  },
  // review
  {
    id: "vitis-rupestris",
    scientificName: "Vitis rupestris",
    family: "Vitaceae",
    groves: ["mallela-theertham"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitis rupestris photographed in the Mallela Theertham sacred grove" }],
  },
  // review
  {
    id: "vitis-tiliifolia",
    scientificName: "Vitis tiliifolia",
    family: "Vitaceae",
    groves: ["agasthappayya-swamy-maripeda", "neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Vitis tiliifolia photographed in the Agasthappayya Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Vitis tiliifolia photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Vitis tiliifolia photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "waltheria-indica",
    scientificName: "Waltheria indica",
    family: "Malvaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Waltheria indica photographed in the Neeladishwaraswamy sacred grove" }],
  },
  // review
  {
    id: "wisteria-frutescens",
    scientificName: "Wisteria frutescens",
    family: "Fabaceae",
    groves: ["devuni-gutta-mulugu"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Wisteria frutescens photographed in the Devuni Gutta sacred grove" }],
  },
  {
    id: "wrightia-tinctoria",
    scientificName: "Wrightia tinctoria",
    family: "Apocynaceae",
    groves: ["gandi-muthyalamma", "venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Wrightia tinctoria photographed in the Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Wrightia tinctoria photographed in the Venkateshwara Swamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Wrightia tinctoria photographed in the Venkateshwara Swamy sacred grove, photo 3" }],
  },
  // review
  {
    id: "xanthocercis-zambesiaca",
    scientificName: "Xanthocercis zambesiaca",
    family: "Fabaceae",
    groves: ["neeladishwaraswamy"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Xanthocercis zambesiaca photographed in the Neeladishwaraswamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Xanthocercis zambesiaca photographed in the Neeladishwaraswamy sacred grove, photo 2" }, { file: "3", width: 1065, height: 1400, alt: "Xanthocercis zambesiaca photographed in the Neeladishwaraswamy sacred grove, photo 3" }],
  },
  {
    id: "xantolis-tomentosa",
    scientificName: "Xantolis tomentosa",
    family: "Sapotaceae",
    groves: ["chilaka-gandi-muthyalamma"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Xantolis tomentosa photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 1" }, { file: "2", width: 1400, height: 840, alt: "Xantolis tomentosa photographed in the Chilaka Gandi Muthyalamma sacred grove, photo 2" }],
  },
  {
    id: "xylia-xylocarpa",
    scientificName: "Xylia xylocarpa",
    family: "Fabaceae",
    groves: ["bheemuni-padam-gudur"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Xylia xylocarpa photographed in the Bheemuni Padam sacred grove" }],
  },
  // review
  {
    id: "xylopia-aromatica",
    scientificName: "Xylopia aromatica",
    family: "Annonaceae",
    groves: ["durgamma-rukma-thanda"],
    photos: [{ file: "1", width: 1400, height: 840, alt: "Xylopia aromatica photographed in the Durgamma sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Xylopia aromatica photographed in the Durgamma sacred grove, photo 2" }],
  },
  {
    id: "ziziphus-oenopolia",
    scientificName: "Ziziphus oenopolia",
    family: "Rhamnaceae",
    groves: ["venkateshwara-swamy-anantharam"],
    photos: [{ file: "1", width: 1065, height: 1400, alt: "Ziziphus oenopolia photographed in the Venkateshwara Swamy sacred grove, photo 1" }, { file: "2", width: 1065, height: 1400, alt: "Ziziphus oenopolia photographed in the Venkateshwara Swamy sacred grove, photo 2" }],
  },
];
