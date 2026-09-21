// One-off processing script: converts the raw landscape/urban-forestry
// species photos in "content and images/{ORNAMENTAL & AVENUS,POLYTHENE
// REPLACEMENT TREE SPECIES,TRADABLE OR ECONOMICALLY IMPORTANT PLANT
// SPECIES,WIND BREAKS}" (gitignored, not shipped) into per-species WebP
// folders under public/images/plant-gallery-collections/<id>/, matching the
// sacred-groves-flora convention (1.webp, 2.webp, ... + thumbs/). Also
// prints a manifest block (species id, scientific name, collections,
// leafType, photo dims) to paste into src/data/landscapeFlora.ts.
//
// Several source photos are reused verbatim across collection folders
// (identical file content, different folder) — these are de-duplicated by
// content hash so one photo is processed once and tagged with multiple
// collection memberships, rather than shipped twice.
//
// A handful of source files carry no species name at all in their filename
// (anonymous DSC/IMG codes with no "<name> OR <scientific name>" pattern)
// and are deliberately skipped rather than guessed — see SKIP list below.
//
// Re-run only if the source folders change; safe to delete afterwards.
import sharp from "sharp";
import { createHash } from "node:crypto";
import { readFile, readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC_ROOT = path.join(ROOT, "content and images");
const OUT_ROOT = path.join(ROOT, "public/images/plant-gallery-collections");

const FULL_WIDTH = 1600;
const THUMB_WIDTH = 640;

const COLLECTIONS = [
  { id: "ornamental-avenue", dir: "ORNAMENTAL & AVENUS" },
  { id: "polythene-replacement", dir: "POLYTHENE REPLACEMENT TREE SPECIES" },
  { id: "tradable-economic", dir: "TRADABLE OR ECONOMICALLY IMPORTANT PLANT SPECIES" },
  { id: "wind-breaks", dir: "WIND BREAKS" },
];

// Files with no identifiable species name in their filename — excluded from
// the catalog rather than guessed. Revisit manually if IDs are wanted later.
const SKIP_BASENAMES = new Set([
  "DSC08507.JPG",
  "DSC08526.JPG",
  "DSC02964.JPG",
  "IMG_20160709_165602.jpg",
  "IMG_20160709_165602_1.jpg",
  "IMG_20160709_165651_1.jpg",
  "IMG_20160709_165659_1.jpg",
  "IMG_20160709_165702_1.jpg",
  "IMG_20160709_165855.jpg",
  "IMG_20160709_165855_1.jpg",
  "IMG_20160709_165900_1.jpg",
]);

// Manual overrides for filenames the automatic "<common> OR <sci>" parser
// can't handle (no "OR", no space between common name and scientific name,
// or a source typo in the scientific name).
const MANUAL_OVERRIDES = {
  "IPPA CHETTUDSC06456.JPG": { sci: "Madhuca longifolia" },
  "PARSVAPU CHETTUEriolaena hookeriana Wight & Arn..DSC03069.JPG": { sci: "Eriolaena hookeriana" },
  "THATI IMG_20160509_081738_1.jpg": { sci: "Borassus flabellifer", common: "THATI" },
  "THATI IMG_20160509_081749_1.jpg": { sci: "Borassus flabellifer", common: "THATI" },
  // Source folder spells the genus "Borassisus" (typo for Borassus).
  "THATI OR Borassisus flabelliferDSC_7796.JPG": { sci: "Borassus flabellifer", common: "THATI" },
};

function slugify(sci) {
  const words = sci.trim().split(/\s+/);
  const genus = (words[0] ?? "").replace(/[^A-Za-z-]/g, "");
  const species = (words[1] ?? "").replace(/[^A-Za-z-]/g, "");
  return `${genus}-${species}`.toLowerCase();
}

function titleCase(s) {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseFilename(name) {
  if (MANUAL_OVERRIDES[name]) {
    const { sci, common } = MANUAL_OVERRIDES[name];
    return { common: common ?? null, sci };
  }
  const base = name.replace(/\.(JPG|jpg|JPEG|jpeg)$/, "");
  const orMatch = base.match(/^(.*?)\s+OR\s+(.*)$/i);
  let common = null;
  let rest = base;
  if (orMatch) {
    common = orMatch[1].trim();
    rest = orMatch[2].trim();
  }
  const m = rest.match(/^([A-Z][a-zäöüéè]+)\s+([a-zäöüéè×-]+)/);
  return { common, sci: m ? `${m[1]} ${m[2]}` : null };
}

function leafType(filePath) {
  if (/COMPOUND LEAVES OR NARROW LEAVES/i.test(filePath)) return "narrow";
  if (/SIMPLE LEAVES or BROAD LEAVES/i.test(filePath)) return "broad";
  return null;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(await walk(full));
    else files.push(full);
  }
  return files;
}

async function hashFile(filePath) {
  const buf = await readFile(filePath);
  return createHash("md5").update(buf).digest("hex");
}

async function main() {
  // 1. Collect every source file with a resolved species id.
  const raw = [];
  for (const col of COLLECTIONS) {
    const dir = path.join(SRC_ROOT, col.dir);
    const files = await walk(dir);
    for (const f of files) {
      const base = path.basename(f);
      if (SKIP_BASENAMES.has(base)) continue;
      const { common, sci } = parseFilename(base);
      if (!sci) {
        console.warn(`UNPARSED (skipped): ${f}`);
        continue;
      }
      raw.push({
        file: f,
        collection: col.id,
        leaf: leafType(f),
        common,
        sci,
        id: slugify(sci),
      });
    }
  }

  // 2. De-duplicate identical physical photos (same content hash) reused
  // across collection folders — keep one copy, merge collection tags.
  const bySpecies = new Map(); // id -> { sci, common, collections:Set, leafTypes:Set, photosByHash: Map<hash, {file, collections:Set}> }
  for (const r of raw) {
    const hash = await hashFile(r.file);
    if (!bySpecies.has(r.id)) {
      bySpecies.set(r.id, {
        sci: r.sci,
        commons: new Set(),
        collections: new Set(),
        leafTypes: new Set(),
        photosByHash: new Map(),
      });
    }
    const rec = bySpecies.get(r.id);
    if (r.common) rec.commons.add(titleCase(r.common));
    rec.collections.add(r.collection);
    if (r.leaf) rec.leafTypes.add(r.leaf);
    if (!rec.photosByHash.has(hash)) {
      rec.photosByHash.set(hash, { file: r.file });
    }
  }

  // 3. Process images + print manifest.
  const manifestLines = [];
  const ids = Array.from(bySpecies.keys()).sort();
  for (const id of ids) {
    const rec = bySpecies.get(id);
    const outDir = path.join(OUT_ROOT, id);
    const thumbDir = path.join(outDir, "thumbs");
    await mkdir(thumbDir, { recursive: true });

    const photos = Array.from(rec.photosByHash.values());
    const photoMeta = [];
    for (const [i, p] of photos.entries()) {
      const n = i + 1;
      const fullOut = path.join(outDir, `${n}.webp`);
      const thumbOut = path.join(thumbDir, `${n}.webp`);
      const img = sharp(p.file).rotate();
      const meta = await img.metadata();
      const scale = Math.min(1, FULL_WIDTH / (meta.width ?? FULL_WIDTH));
      const outWidth = Math.round((meta.width ?? FULL_WIDTH) * scale);
      const outHeight = Math.round((meta.height ?? FULL_WIDTH) * scale);
      await sharp(p.file).rotate().resize({ width: FULL_WIDTH, withoutEnlargement: true }).webp({ quality: 80 }).toFile(fullOut);
      await sharp(p.file).rotate().resize({ width: THUMB_WIDTH, withoutEnlargement: true }).webp({ quality: 75 }).toFile(thumbOut);
      photoMeta.push({ file: String(n), width: outWidth, height: outHeight });
    }

    const collections = Array.from(rec.collections).sort();
    const leafTypes = Array.from(rec.leafTypes);
    const commons = Array.from(rec.commons);
    manifestLines.push(
      JSON.stringify({
        id,
        scientificName: rec.sci,
        localNames: commons,
        collections,
        leafType: leafTypes[0] ?? null,
        photos: photoMeta,
      })
    );
    console.log(`Processed ${id}: ${photos.length} photo(s), collections=[${collections.join(", ")}]`);
  }

  console.log("\n--- MANIFEST (one JSON object per species) ---");
  for (const line of manifestLines) console.log(line);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
