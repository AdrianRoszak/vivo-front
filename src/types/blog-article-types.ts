import type { TypedObject } from "astro-portabletext/types"

export type ImageType = {
  alt: string
  source: string
}

// type TextBlockType = {
//   [key: string]: string | number | object | null
// }

export type BlogArticleType = {
  title: string
  slug: string
  published: string
  author: {
    name: string
    image: ImageType | null
    slug?: string
    description?: string
  }
  mainImage: ImageType | null
  categories: string[]
  seoTitle: {
    title: string
    description: string
  }
  description?: TypedObject
  body?: TypedObject
}

export type BlogArticleList = BlogArticleType[]
