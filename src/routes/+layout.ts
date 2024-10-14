import { browser } from "$app/environment";
import { dynamicRoutes } from "../server/router";

export const prerender = "auto"; // skips prerendering [slugs]/[dynamic routes].
export const trailingSlash = "always";

export const ssr = true;
export const csr = true;

export const load = async () => {
  if (browser) {
    const response = await fetch("/routes.json");
    const data = await response.json();
    dynamicRoutes.set(data);
  }
};
