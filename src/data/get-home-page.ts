import { digestBlogArticle } from "@/src/data/source/digests"
import { fetchHomePageData } from "@/src/data/source"
import type { BlogArticleList } from "../types"
import type { TypedObject } from "astro-portabletext/types"
import type { ImageType } from "../types"
import { secureImage } from "./source/digests/digest-blog-article"

type SectionIntro = {
  headline: string
  tagline: TypedObject | string
}

export type ValueTeaser = {
  title: string
  icon: {
    alt: string
    source: string
  }
}

type ValueTeaserList = ValueTeaser[]
type SectionValues = {
  decoImage: ImageType | null
  values: ValueTeaserList
}

export type HomePageData = {
  sectionHero: SectionIntro
  sectionValues: SectionValues
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
    sectionValues: digestSectionValues(data.singletonHome.sectionHomeValues),
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
    icon: source.icon ? source.icon : "",
  }
}
//@ts-ignore

function digestSectionValues(source): SectionValues {
  return {
    decoImage: source.decoImage ? secureImage(source.decoImage) : null,
    values: source.sectionValues.values.map(digestValueTeaser),
  }
}
