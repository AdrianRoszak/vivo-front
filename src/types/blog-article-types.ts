import type { TypedObject } from "astro-portabletext/types"

export type ImageType = {
  alt: string
  source: string
}

export type TeamMemberTypeBase = {
  name: string
  image: ImageType | null
  slug: { current: string }
  description: string
}

export type BlogArticleType = {
  title: string
  slug: string
  published: string
  author: TeamMemberTypeBase
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
