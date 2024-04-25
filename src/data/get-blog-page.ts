import { fetchBlogPageData } from "@/src/data/source"

import {
  digestBlogArticle,
  digestMetaData,
  digestSectionIntro,
} from "@/src/data/source/digests"

import type { BlogArticleList } from "@/src/types"
import type { SectionIntro } from "./source/digests/digest-section-intro"
import type { MetaDataType } from "./source/digests/digest-meta-data"

type BlogPageData = {
  sectionIntro: SectionIntro
  blogArticles: BlogArticleList
  metaData: MetaDataType
}

export async function getBlogPage(): Promise<BlogPageData> {
  const data = digestBlogPageData(await fetchBlogPageData())
  return data
}

//@ts-ignore
function digestBlogPageData(source): BlogPageData {
  return {
    metaData: digestMetaData(source.singletonBlog.seoTitle),
    sectionIntro: digestSectionIntro(source.singletonBlog.sectionHero),
    blogArticles: source.blogArticles.map(digestBlogArticle),
  }
}
