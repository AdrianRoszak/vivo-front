import { fetchTeamMemberSlugs } from "@/src/data/source"

export async function getTeamMemberSlugs() {
  const data = await fetchTeamMemberSlugs()
  return data
}
