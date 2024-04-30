import { fetchHomePageData } from "@/src/data/source"

import type { ImageType } from "../types"
import type { MetaDataType } from "./source/digests/digest-meta-data"
import type { SectionIntro } from "./source/digests/digest-section-intro"
import type { BlogArticleList } from "../types"
import { digestHomePageData } from "./source/digests"

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
