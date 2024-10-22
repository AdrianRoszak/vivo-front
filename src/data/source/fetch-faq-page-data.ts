import { sanityClient } from "sanity:client"
import { queryFaqPageData } from "./queries"

export async function fetchFaqPageData() {
  const query = queryFaqPageData
  const data = await sanityClient.fetch(query)

  return data
}
