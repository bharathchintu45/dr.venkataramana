// Optional write-up for a sacred-grove flora record (see groveFlora.ts for the
// generated photo/name records these key into by `id`). Kept as a SEPARATE
// file, deliberately never touched by the flora generator, so this is the
// only file that needs editing to add a plant's full description — the
// generated `groveFlora.ts` (with its `// review` flags) stays untouched.
//
// Every field is optional. A flora record with no entry here still gets a
// page at /sacred-groves/flora/<id> (photos + name + family + groves), just
// without the write-up sections — that page is marked noindex until an entry
// is added, so it never counts as thin content for search engines.
//
// To add a plant's info, copy the template below, replace the id with the
// exact id from groveFlora.ts, and fill in whatever is known — leave out any
// field that isn't. Never invent facts: only add what you can confirm.

export interface GroveFloraDetail {
  /** Common name used locally, if different from the scientific name. */
  localName?: string;
  /** Name in Telugu (the primary local language across these grove sites). */
  teluguName?: string;
  /** Tree / shrub / herb / climber / grass, etc. */
  habit?: string;
  /** The main write-up: what the plant is, where it grows, how to recognise it. */
  description?: string;
  floweringFruiting?: string;
  distribution?: string;
  /** Traditional/medicinal/ritual uses recorded for this species. */
  ethnobotanicalUses?: string;
  conservationStatus?: string;
  /** Why this species matters to the grove itself — a sacred tree, a temple
   *  planting, a species tied to a local ritual or festival, etc. */
  culturalSignificance?: string;
  notes?: string;
  references?: string[];
}

export const groveFloraDetails: Record<string, GroveFloraDetail> = {
  // Template — copy this block, rename the key to the flora id, and fill in
  // only what is confirmed. Delete any field left unknown.
  // "murdannia-saddlepeakensis": {
  //   localName: "",
  //   teluguName: "",
  //   habit: "Herb",
  //   description: "",
  //   floweringFruiting: "",
  //   distribution: "",
  //   ethnobotanicalUses: "",
  //   conservationStatus: "",
  //   culturalSignificance: "",
  //   notes: "",
  //   references: [],
  // },
};
