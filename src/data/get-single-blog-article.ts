import type { BlogArticleType } from "../types"
import { fetchSingleBlogArticleData } from "./source"

export async function getSingleBlogArticle(
  slug: string,
): Promise<BlogArticleType> {
  const data = await fetchSingleBlogArticleData(slug)
  return data
}
