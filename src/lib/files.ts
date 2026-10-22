import fs from "node:fs";
import path from "node:path";
import { profile, research } from "@/content";

/** True if /public/<relPath> exists. Runs at build time (server only). */
export function publicFileExists(relPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", relPath));
}

/**
 * Returns the public URL of /public/images/<file> if it exists, otherwise null
 * so the caller can render a placeholder.
 */
export function imageSrc(file: string): string | null {
  return publicFileExists(path.join("images", file)) ? `/images/${file}` : null;
}

/** Whether the resume PDF has been added to /public. */
export function hasResume(): boolean {
  return publicFileExists(profile.resume);
}

/** Whether there are any research notes to show. */
export function hasResearch(): boolean {
  return research.notes.length > 0;
}
