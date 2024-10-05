import { getEbd } from "../../server/ebd-loader";
import { getFormatVersions } from "../../server/format-version-loader";
// eslint-disable-next-line import/order
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({ url }) => {
  const formatVersions = getFormatVersions();
  const selectedFormatVersion = url.searchParams.get("formatVersion") || "";
  const ebds = selectedFormatVersion ? getEbd(selectedFormatVersion) : [];

  return {
    formatVersions,
    selectedFormatVersion,
    ebds,
  };
}) satisfies PageServerLoad;
