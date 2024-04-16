import { fetchBlogPageData } from "@/src/data/source"
import { digestBlogArticle } from "@/src/data/source/digests"
import type { BlogArticleList } from "@/src/types"

type BlogPageData = {
  blogArticles: BlogArticleList
}

export async function getBlogPage(): Promise<BlogPageData> {
  const data = digestBlogPageData(await fetchBlogPageData())
  return data
}

//@ts-ignore
function digestBlogPageData(data): BlogPageData {
  return {
    blogArticles: data.blogArticles.map(digestBlogArticle),
  }
}
