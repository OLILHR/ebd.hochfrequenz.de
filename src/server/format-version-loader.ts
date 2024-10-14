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
  const ebdPath = join(process.cwd(), "static", "ebd");
  try {
    return readdirSync(ebdPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => formatVersion(dirent.name))
      .sort((a, b) => b.code.localeCompare(a.code)); // descending order
  } catch (error) {
    console.error("No format version directories available.", error);
    return [];
  }
}
