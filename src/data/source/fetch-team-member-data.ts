import { sanityClient } from "sanity:client"

export async function fetchTeamMemberData(slug: string) {
  const query = `*[_type == "teamMember" && slug.current == $slug] {
    name,
  }`
  const params = { slug }
  const data = await sanityClient.fetch(query, params)

  return data
}
