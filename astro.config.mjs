import { defineConfig } from "astro/config"
import sanity from "@sanity/astro"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
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
  output: "hybrid",
  adapter: vercel(),
})
