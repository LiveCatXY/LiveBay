import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import * as compiler from "vue/compiler-sfc";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://home.lushisang.com", 

  integrations: [
    mdx(),
    sitemap(),
    markdoc(),
    vue({ compiler, devtools: true }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
