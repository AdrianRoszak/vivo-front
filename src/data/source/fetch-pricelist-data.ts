import { sanityClient } from "sanity:client"
import { queryPriceListData } from "./queries"

export async function fetchPriceListData() {
  const query = queryPriceListData
  const data = await sanityClient.fetch(query)

  return data
}
