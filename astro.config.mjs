import { defineConfig } from "astro/config"
import sanity from "astro-sanity"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/static"

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
  output: "static",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    imagesConfig: {
      sizes: [320, 640, 768, 1024, 1280, 1536, 1920],
      formats: ["image/avif", "image/webp"],
      domains: [],
    },
  }),
  prefetch: true,
})
