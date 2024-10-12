import { readdirSync } from "fs";
import { join } from "path";

type FormatVersion = {
  code: string;
  detailedFormatVersion: string;
};

const formatVersionMap: Record<string, string> = {
  "2104": "April 2021",
  "2110": "Oktober 2021",
  "2204": "April 2022",
  "2210": "Oktober 2022",
  "2304": "April 2023",
  "2310": "Oktober 2023",
  "2404": "April 2024",
  "2410": "Oktober 2024",
  "2504": "April 2025",
  "2510": "Oktober 2025",
};

function formatVersion(version: string): FormatVersion {
  const versionNumber = version.slice(2);
  const formatVersionDate = formatVersionMap[versionNumber];
  return {
    code: version,
    detailedFormatVersion: `${formatVersionDate} (${version})`,
  };
}

export function getFormatVersions(): FormatVersion[] {
  const ebdPaths = [
    join(process.cwd(), "static", "ebd"), // submodule synced at ./static/ebd/
    join(process.cwd(), "build", "ebd"), // submodule copied to ./build/ebd/ during build time
  ];

  for (const ebdPath of ebdPaths) {
    try {
      const dirs = readdirSync(ebdPath, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);
      return dirs
        .map(formatVersion)
        .sort((a, b) => b.code.localeCompare(a.code)); // descending order to show latest FV at the top
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT"
      ) {
        // ignore expected error when preview falls back to ./build/ebd/
        continue;
      }
      console.error(
        `error loading format version directories from ${ebdPath}:`,
        error,
      );
    }
  }
  return [];
}
