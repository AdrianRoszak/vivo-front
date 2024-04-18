import { sanityClient } from "sanity:client"
import { queryGlobalData } from "./queries"

export async function fetchGlobalData() {
  const query = queryGlobalData
  const data = await sanityClient.fetch(query)

  return data
}
