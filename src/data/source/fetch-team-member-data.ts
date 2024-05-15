import { sanityClient } from "sanity:client"
import { seoFragment } from "./queries/fragments"

export async function fetchTeamMemberData(slug: string) {
  const query = `*[_type == "teamMember" && slug.current == $slug] {
    name,
    image,
    longBio,
    shortDescription,
    ${seoFragment}
  }`
  const params = { slug }
  const data = await sanityClient.fetch(query, params)

  return data
}
