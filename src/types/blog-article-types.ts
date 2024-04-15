import type { TypedObject } from "astro-portabletext/types"

type ImageType = {
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
  }
  mainImage: ImageType | null
  description: TypedObject
}

export type BlogArticleList = BlogArticleType[]
