import { sanityClient } from "sanity:client"
import { queryTeamMemberData } from "./queries"

export async function fetchTeamMemberData(slug: string) {
  const params = { slug }
  const data = await sanityClient.fetch(queryTeamMemberData, params)
  return data
}
