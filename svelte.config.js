import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      paths: {
        base:
          process.env.NODE_ENV === "development" ? "/ebd.hochfrequenz.de" : "",
      },
      precompress: false,
      strict: true,
    }),
  },
};

export default config;
