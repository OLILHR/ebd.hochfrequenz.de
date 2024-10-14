import { readdirSync } from "fs";
import { join } from "path";

export function getEbds(): Record<string, string[]> {
  const ebdPath = join(process.cwd(), "static", "ebd");
  const ebds: Record<string, string[]> = {};

  try {
    const formatVersions = readdirSync(ebdPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const formatVersion of formatVersions) {
      const versionPath = join(ebdPath, formatVersion);
      ebds[formatVersion] = readdirSync(versionPath)
        .filter((file) => file.endsWith(".svg"))
        .map((file) => file.replace(".svg", ""))
        .sort((a, b) => a.localeCompare(b));
    }

    return ebds;
  } catch (error) {
    console.error("Error loading EBDs", error);
    return {};
  }
}
