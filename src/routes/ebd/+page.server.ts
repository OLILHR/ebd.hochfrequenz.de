import { getFormatVersions } from "../../server/format-version-loader";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const formatVersions = getFormatVersions();
  return { formatVersions };
}) satisfies PageServerLoad;
