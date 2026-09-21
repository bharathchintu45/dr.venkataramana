// One-off processing script: converts the raw Urban Biodiversity-GHMC photos
// in "content and images/URBAN BIODIVERSITY-GHMC" (gitignored, not shipped)
// into the flat WebP + thumbs/ layout used by every other src/data/photoGallery.ts
// category (public/images/urban-biodiversity-ghmc/<file>.webp,
// public/images/urban-biodiversity-ghmc/thumbs/<file>.webp).
//
// Base filenames (IMG_..._1.jpg) and their "_1" counterparts were checked by
// hand (resized pixel-diff comparison) and are genuinely distinct photos,
// not duplicates — both are kept. 5 source files are truncated/corrupted
// JPEGs ("VipsJpeg: premature end of JPEG image") and are skipped.
//
// Prints a manifest block (file, width, height) to paste into the new
// galleryCategories entry in src/data/photoGallery.ts.
//
// Re-run only if the source folder changes; safe to delete afterwards.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "content and images/URBAN BIODIVERSITY-GHMC");
const OUT_DIR = path.join(ROOT, "public/images/urban-biodiversity-ghmc");
const THUMB_DIR = path.join(OUT_DIR, "thumbs");

const FULL_WIDTH = 1600;
const THUMB_WIDTH = 640;

function slugify(name) {
  return name
    .replace(/\.(JPG|jpg|JPEG|jpeg)$/, "")
    .toLowerCase()
    .replace(/_/g, "-");
}

async function main() {
  await mkdir(THUMB_DIR, { recursive: true });
  const files = (await readdir(SRC_DIR)).filter((f) => /\.jpe?g$/i.test(f)).sort();

  const manifest = [];
  let skipped = 0;
  for (const f of files) {
    const src = path.join(SRC_DIR, f);
    const slug = slugify(f);
    try {
      const meta = await sharp(src).rotate().metadata();
      const scale = Math.min(1, FULL_WIDTH / (meta.width ?? FULL_WIDTH));
      const outWidth = Math.round((meta.width ?? FULL_WIDTH) * scale);
      const outHeight = Math.round((meta.height ?? FULL_WIDTH) * scale);

      await sharp(src).rotate().resize({ width: FULL_WIDTH, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(OUT_DIR, `${slug}.webp`));
      await sharp(src).rotate().resize({ width: THUMB_WIDTH, withoutEnlargement: true }).webp({ quality: 75 }).toFile(path.join(THUMB_DIR, `${slug}.webp`));

      manifest.push({ file: slug, width: outWidth, height: outHeight });
    } catch (err) {
      console.warn(`SKIPPED (corrupt source): ${f} — ${err.message}`);
      skipped++;
    }
  }

  console.log(`\nProcessed ${manifest.length} photos, skipped ${skipped} corrupt source file(s).`);
  console.log("\n--- MANIFEST ---");
  for (const m of manifest) {
    console.log(JSON.stringify(m));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
