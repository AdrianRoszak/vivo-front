import { defineConfig } from "astro/config"
import sanity from "@sanity/astro"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"
import icon from "astro-icon"
import sitemap from "@astrojs/sitemap"
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: "https://poradniavivo.pl",
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: true,
    }),
    tailwind(),
    icon(),
    sitemap(),
  ],
  prefetch: true,
  // In modern Astro versions prefer explicit `static` or `server`.
  // This project fetches data at build-time and has no server routes,
  // so static output is appropriate for Vercel CDN deployment.
  output: "static",
  adapter: vercel(),
})
