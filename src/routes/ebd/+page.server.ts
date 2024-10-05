import { getEbd } from "../../server/ebd-loader";
import { getFormatVersions } from "../../server/format-version-loader";
// eslint-disable-next-line import/order
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const formatVersions = getFormatVersions();
  const ebds = getEbd();

  return {
    formatVersions,
    ebds,
  };
};
