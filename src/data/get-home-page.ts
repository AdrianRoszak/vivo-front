import { fetchHomePageData } from "@/src/data/source"

import {
  digestBlogArticle,
  digestMetaData,
  digestSectionIntro,
} from "@/src/data/source/digests"

import { secureImage } from "./source/digests/digest-blog-article"

import type { ImageType } from "../types"
import type { MetaDataType } from "./source/digests/digest-meta-data"
import type { SectionIntro } from "./source/digests/digest-section-intro"
import type { BlogArticleList } from "../types"

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
  metaData: MetaDataType
}

export async function getHomePage(): Promise<HomePageData> {
  const data = digestHomePageData(await fetchHomePageData())
  return data
}

//@ts-ignore
function digestHomePageData(source): HomePageData {
  return {
    sectionHero: digestSectionIntro(source.singletonHome.sectionHero),
    sectionValues: digestSectionValues(source.singletonHome.sectionHomeValues),
    sectionOffer: digestSectionIntro(source.singletonHome.sectionOffer),
    sectionBlog: digestSectionIntro(source.singletonHome.sectionBlog),
    blogArticles: source.blogArticles.map(digestBlogArticle),
    metaData: digestMetaData(source.singletonHome.seoTitle),
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
