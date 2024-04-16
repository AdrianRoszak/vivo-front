import { defineConfig } from "astro/config"
import sanity from "@sanity/astro"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_API_VERSION,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: true,
    }),
    tailwind(),
  ],
  prefetch: true,
})
