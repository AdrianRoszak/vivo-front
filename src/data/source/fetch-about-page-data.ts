import { sanityClient } from "sanity:client"
import { queryAboutPageData } from "./queries"

export async function fetchAboutPageData() {
  const query = queryAboutPageData
  const data = await sanityClient.fetch(query)

  return data
}
