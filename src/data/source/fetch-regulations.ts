import { sanityClient } from "sanity:client"
import { queryRegulationsData } from "./queries"

export async function fetchRegulations() {
  const query = queryRegulationsData
  const data = await sanityClient.fetch(query)

  return data
}
