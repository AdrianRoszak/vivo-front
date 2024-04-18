import { sanityClient } from "sanity:client"
import { querySingleBlogPageData } from "./queries"

export async function fetchSingleBlogArticleData(slug: string) {
  const query = querySingleBlogPageData
  const params = { slug }
  const data = await sanityClient.fetch(query, params)

  return data
}
