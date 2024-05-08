import { sanityClient } from "sanity:client"
import { queryOfferPageData } from "./queries"

export async function fetchOfferPageData() {
  const query = queryOfferPageData
  const data = await sanityClient.fetch(query)

  return data
}
