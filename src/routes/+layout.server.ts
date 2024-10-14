import fs from "fs";
import path from "path";
import { getEbds } from "../server/ebd-loader";
import { getFormatVersions } from "../server/format-version-loader";

export const load = async () => {
  const formatVersions = getFormatVersions();
  const ebds = getEbds();

  // stores all possible dynamic routes in a JSON file that can be accessed during the build process
  const routes = { formatVersions, ebds };
  const jsonData = JSON.stringify(routes);
  const outputPath = path.join(process.cwd(), "static", "routes.json");
  fs.writeFileSync(outputPath, jsonData);

  return routes;
};
