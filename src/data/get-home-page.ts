import { fetchHomePageData } from "@/src/data/source"
import type { BlogArticleList, BlogArticleType } from "../types"

type HomePageData = {
  sectionHero: {
    headline: string
    tagline: string
  }
  blogArticles: BlogArticleList
}

export async function getHomePage(): Promise<HomePageData> {
  const data = digestHomePageData(await fetchHomePageData())
  return data
}

//@ts-ignore
function digestHomePageData(data): HomePageData {
  return {
    sectionHero: data.singletonHome.sectionHero,
    blogArticles: data.blogArticles.map(digestBlogArticle),
  }
}

//@ts-ignore
function digestBlogArticle(article): BlogArticleType {
  return {
    title: article.title,
    slug: article.slug,
  }
}
