import { readFile } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "src", "assets", "fonts");

export async function loadOgFonts() {
  const [bodoni700, bodoni500Italic, work600] = await Promise.all([
    readFile(path.join(dir, "bodoni-moda-700-normal.woff")),
    readFile(path.join(dir, "bodoni-moda-500-italic.woff")),
    readFile(path.join(dir, "work-sans-600-normal.woff")),
  ]);
  return [
    { name: "Bodoni Moda", data: bodoni700, weight: 700 as const, style: "normal" as const },
    { name: "Bodoni Moda", data: bodoni500Italic, weight: 500 as const, style: "italic" as const },
    { name: "Work Sans", data: work600, weight: 600 as const, style: "normal" as const },
  ];
}
