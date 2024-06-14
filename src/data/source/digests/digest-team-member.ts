import type { TeamMemberTypeBase } from "@/src/types/blog-article-types"
import { secureImage } from "./digest-blog-article"

//@ts-ignore
export function digestTeamMember(source): TeamMemberTypeBase | null {
  if (!source) return null

  const { name, image, slug, shortDescription } = source

  return {
    name,
    image: secureImage(image),
    slug,
    description: shortDescription,
  }
}
