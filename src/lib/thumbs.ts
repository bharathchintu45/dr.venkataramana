/**
 * Inserts a `/thumbs` segment before the filename of a full-size image
 * path (e.g. `/images/landscapes/dsc-8756.webp` ->
 * `/images/landscapes/thumbs/dsc-8756.webp`). Every photo under
 * `public/images` has a 640px copy there; use it wherever the image
 * renders smaller than that, since `images.unoptimized` means Next
 * serves the file as-is.
 */
export function thumbPath(imagePath: string): string {
  const idx = imagePath.lastIndexOf("/");
  if (idx === -1) return imagePath;
  return `${imagePath.slice(0, idx)}/thumbs${imagePath.slice(idx)}`;
}
