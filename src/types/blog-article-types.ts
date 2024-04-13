export type BlogArticleType = {
  title: string
  slug: string
  published: string
  author: {
    name: string
  }
}

export type BlogArticleList = BlogArticleType[]
