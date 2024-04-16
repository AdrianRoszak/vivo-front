import { sanityClient } from "sanity:client"
import { queryBlogPageData } from "@/src/data/source/queries"

export async function fetchBlogPageData() {
  const query = queryBlogPageData
  const data = await sanityClient.fetch(query)

  return data
}
