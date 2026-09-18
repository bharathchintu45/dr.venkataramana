// One-off processing script: converts the raw drone-flight PNG frames
// (ezgif-4dec73d8f9a4641e-png-split/, gitignored, not shipped) into the two
// WebP sizes HeroFlight actually loads. Re-run only if the source frames
// change; safe to delete afterwards.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "ezgif-4dec73d8f9a4641e-png-split");
const OUT_DESKTOP = path.join(ROOT, "public/images/hero-flight/desktop");
const OUT_MOBILE = path.join(ROOT, "public/images/hero-flight/mobile");

const VARIANTS = [
  { dir: OUT_DESKTOP, width: 1600 },
  { dir: OUT_MOBILE, width: 800 },
];

async function main() {
  const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith(".png")).sort();
  if (files.length === 0) throw new Error(`No PNG frames found in ${SRC_DIR}`);

  await Promise.all(VARIANTS.map((v) => mkdir(v.dir, { recursive: true })));

  for (const [i, file] of files.entries()) {
    const frameNum = String(i + 1).padStart(3, "0");
    const input = path.join(SRC_DIR, file);
    for (const variant of VARIANTS) {
      const out = path.join(variant.dir, `frame-${frameNum}.webp`);
      await sharp(input).resize({ width: variant.width }).webp({ quality: 68, effort: 4 }).toFile(out);
    }
    process.stdout.write(`\rProcessed ${i + 1}/${files.length}`);
  }
  console.log(`\nDone. ${files.length} frames -> ${VARIANTS.length} sizes each.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
