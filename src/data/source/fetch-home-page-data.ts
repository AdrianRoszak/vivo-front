import { sanityClient } from "sanity:client"
import { queryHomePageData } from "@/src/data/source/queries"

export async function fetchHomePageData() {
  const query = queryHomePageData
  const data = await sanityClient.fetch(query)

  return data
}
