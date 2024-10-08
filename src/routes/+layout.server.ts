import { getFormatVersions } from "../server/format-version-loader";

export const load = async () => {
  const formatVersions = getFormatVersions();

  return {
    formatVersions,
  };
};
