import { readdirSync } from "fs";
import { join } from "path";

export function getEbds(): Record<string, string[]> {
  const ebds: Record<string, string[]> = {};
  const ebdPaths = [
    join(process.cwd(), "static", "ebd"), // submodule synced at ./static/ebd/
    join(process.cwd(), "build", "ebd"), // submodule copied to ./build/ebd/ during build time
  ];

  for (const ebdPath of ebdPaths) {
    try {
      const formatVersions = readdirSync(ebdPath, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);

      for (const formatVersion of formatVersions) {
        const versionPath = join(ebdPath, formatVersion);
        ebds[formatVersion] = readdirSync(versionPath)
          .filter((file) => file.endsWith(".svg"))
          .map((file) => file.replace(".svg", ""))
          .sort((a, b) => a.localeCompare(b));
      }

      if (Object.keys(ebds).length > 0) {
        return ebds;
      }
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT"
      ) {
        // ignore expected error when preview falls back to ./build/ebd/
        continue;
      }
      console.error(`error loading EBDs from ${ebdPath}:`, error);
    }
  }
  return {};
}
