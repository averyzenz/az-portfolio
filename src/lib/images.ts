import fs from "node:fs";
import path from "node:path";

/**
 * Returns the public URL of /public/images/<file> if it exists, otherwise null
 * so the caller can render a placeholder. Runs at build time (server only).
 */
export function imageSrc(file: string): string | null {
  const onDisk = path.join(process.cwd(), "public", "images", file);
  return fs.existsSync(onDisk) ? `/images/${file}` : null;
}
