import { writable } from "svelte/store";

export const dynamicRoutes = writable({
  formatVersions: [],
  ebds: {},
});
