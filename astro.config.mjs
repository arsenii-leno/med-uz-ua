import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://med.uz.ua",
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "uk",
        locales: {
          uk: "uk",
          sk: "sk",
          en: "en",
          hu: "hu",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "sk", "en", "hu"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
