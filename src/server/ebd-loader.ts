import { readdirSync } from "fs";
import { join } from "path";

export function getEbd(formatVersion: string): string[] {
  const ebdPath = join(process.cwd(), "static", "ebd", formatVersion);
  try {
    return readdirSync(ebdPath)
      .filter((file) => file.endsWith(".svg")) // only .svg are relevant <select> options
      .map((file) => file.replace(".svg", "")) // prevent ".svg" file endings from being displayed in <select> options
      .sort((a, b) => a.localeCompare(b));
  } catch (error) {
    console.error(`No EBDs found for format version ${formatVersion}`, error);
    return [];
  }
}
