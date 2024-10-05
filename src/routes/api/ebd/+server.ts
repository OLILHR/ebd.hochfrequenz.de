import { json } from "@sveltejs/kit";
import { getEbd } from "../../../server/ebd-loader";
// eslint-disable-next-line import/order
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const formatVersion = url.searchParams.get("formatVersion");
  if (!formatVersion) {
    return json({ error: "Format version is required" }, { status: 400 });
  }

  const ebds = getEbd(formatVersion);
  return json(ebds);
};
