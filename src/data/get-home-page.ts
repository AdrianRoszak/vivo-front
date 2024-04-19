import { digestBlogArticle } from "@/src/data/source/digests"
import { fetchHomePageData } from "@/src/data/source"
import type { BlogArticleList } from "../types"
import type { TypedObject } from "astro-portabletext/types"

type SectionIntro = {
  headline: string
  tagline: TypedObject | string
}

type ValueTeaser = {
  title: string
}

type ValueTeaserList = ValueTeaser[]

type HomePageData = {
  sectionHero: SectionIntro
  sectionValues: ValueTeaserList
  sectionOffer: SectionIntro
  sectionBlog: SectionIntro
  blogArticles: BlogArticleList
}

export async function getHomePage(): Promise<HomePageData> {
  const data = digestHomePageData(await fetchHomePageData())
  return data
}

//@ts-ignore
function digestHomePageData(data): HomePageData {
  return {
    sectionHero: digestSectionIntro(data.singletonHome.sectionHero),
    sectionValues:
      data.singletonHome.sectionValues.values.map(digestValueTeaser),
    sectionOffer: digestSectionIntro(data.singletonHome.sectionOffer),
    sectionBlog: digestSectionIntro(data.singletonHome.sectionBlog),
    blogArticles: data.blogArticles.map(digestBlogArticle),
  }
}
//@ts-ignore
function digestSectionIntro(source): SectionIntro {
  return {
    headline: source.headline,
    tagline: source.tagline,
  }
}

//@ts-ignore
function digestValueTeaser(source): ValueTeaser {
  return {
    title: source.title,
  }
}
