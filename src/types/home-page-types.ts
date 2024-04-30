import type { MetaDataType } from "../data/source/digests/digest-meta-data"
import type { BlogArticleList } from "./blog-article-types"
import type { SectionIntro } from "./common-types"
import type { SectionValues } from "./values-types"

export type HomePageData = {
  sectionHero: SectionIntro
  sectionValues: SectionValues
  sectionOffer: SectionIntro
  sectionBlog: SectionIntro
  blogArticles: BlogArticleList
  metaData: MetaDataType
}
