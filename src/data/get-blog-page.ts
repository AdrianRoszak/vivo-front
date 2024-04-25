import { fetchBlogPageData } from "@/src/data/source"

import {
  digestBlogArticle,
  digestSectionIntro,
} from "@/src/data/source/digests"

import type { BlogArticleList } from "@/src/types"
import type { SectionIntro } from "./source/digests/digest-section-intro"

type BlogPageData = {
  sectionIntro: SectionIntro
  blogArticles: BlogArticleList
}

export async function getBlogPage(): Promise<BlogPageData> {
  const data = digestBlogPageData(await fetchBlogPageData())
  return data
}

//@ts-ignore
function digestBlogPageData(source): BlogPageData {
  return {
    sectionIntro: digestSectionIntro(source.singletonBlog.sectionHero),
    blogArticles: source.blogArticles.map(digestBlogArticle),
  }
}
