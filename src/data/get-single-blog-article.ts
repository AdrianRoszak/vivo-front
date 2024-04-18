import { digestBlogArticle } from "@/src/data/source/digests"
import type { BlogArticleType } from "../types"
import { fetchSingleBlogArticleData } from "./source"

export async function getSingleBlogArticle(
  slug: string,
): Promise<BlogArticleType | null> {
  const arr = await fetchSingleBlogArticleData(slug)
  const data = digestBlogArticle(arr[0])
  return data
}
