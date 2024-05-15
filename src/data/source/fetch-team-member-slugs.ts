import { sanityClient } from "sanity:client"

export async function fetchTeamMemberSlugs() {
  const query = `*[_type == "teamMember"] { slug {current} }`
  const data = await sanityClient.fetch(query)

  return data
}
