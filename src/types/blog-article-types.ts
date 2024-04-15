type ImageType = {
  alt: string
  source: string
}

export type BlogArticleType = {
  title: string
  slug: string
  published: string
  author: {
    name: string
    image: ImageType | null
  }
  mainImage: ImageType | null
}

export type BlogArticleList = BlogArticleType[]
