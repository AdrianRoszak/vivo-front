import { digestBlogArticle } from "@/src/data/source/digests"
import { fetchHomePageData } from "@/src/data/source"
import type { BlogArticleList } from "../types"
import type { TypedObject } from "astro-portabletext/types"

type HomePageData = {
  sectionHero: {
    headline: string
    tagline: TypedObject | string
  }
  sectionBlog: {
    headline: string
    tagline: TypedObject | string
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
    sectionBlog: data.singletonHome.sectionBlog,
    blogArticles: data.blogArticles.map(digestBlogArticle),
  }
}
