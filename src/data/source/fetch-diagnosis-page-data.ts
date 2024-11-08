import { sanityClient } from "sanity:client"
import { queryDiagnosisPageData } from "./queries"

export async function fetchDiagnosisPageData() {
  const query = queryDiagnosisPageData
  const data = await sanityClient.fetch(query)

  return data
}
