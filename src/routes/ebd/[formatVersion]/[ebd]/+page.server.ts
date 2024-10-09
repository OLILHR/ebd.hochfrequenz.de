import { error } from "@sveltejs/kit";
import { readFileSync } from "fs";
import { join } from "path";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { formatVersion, ebd } = params;

  const ebdFile = `E_${ebd.slice(1)}`;
  const ebdPath = join(
    process.cwd(),
    "static",
    "ebd",
    formatVersion,
    `${ebdFile}.svg`,
  );

  try {
    const ebdContent = readFileSync(ebdPath, "utf-8");
    return { ebdContent };
  } catch (err) {
    console.error(`error reading SVG file: ${err}`);
    throw error(
      404,
      `HIER FALLBACK ERROR MESSAGE & HOCHFREQUENZ AD FÜR GITHUB CONTRIBUTIONS. ${ebdFile}`,
    );
  }
};
