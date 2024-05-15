import { fetchTeamMemberData } from "@/src/data/source"

export type TeamMemberType = {
  name: string
}

export async function getTeamMember(
  slug: string,
): Promise<TeamMemberType | null> {
  const arr = await fetchTeamMemberData(slug)
  const data = digestTeamMember(arr[0])
  return data
}

//@ts-ignore
function digestTeamMember(source): TeamMemberType {
  return {
    name: source.name,
  }
}
