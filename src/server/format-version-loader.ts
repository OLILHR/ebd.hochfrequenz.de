import { readdirSync } from "fs";
import { join } from "path";

export function getFormatVersions(): string[] {
  const ebdPath = join(process.cwd(), "static", "ebd");
  try {
    return readdirSync(ebdPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort((a, b) => a.localeCompare(b)); // ascending order
  } catch (error) {
    console.error(
      "no directories associated with format versions located in the submodule.",
      error,
    );
    return [];
  }
}
