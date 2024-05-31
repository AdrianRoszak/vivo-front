import type { AboutPageData } from "../types"
import type { TeamMemberTypeBase } from "../types/blog-article-types"
import { fetchAboutPageData } from "./source"
import { digestMetaData, digestValues } from "./source/digests"
import { secureImage } from "./source/digests/digest-blog-article"

export async function getAboutPage(): Promise<AboutPageData | null> {
  const data = digestAboutPageData(await fetchAboutPageData())
  return data
}

//@ts-ignore
function digestAboutPageData(source): AboutPageData | null {
  if (!source) return null

  return {
    sectionValues: digestValues(source.singletonAbout.sectionValues),
    metaData: digestMetaData(source.singletonAbout.seoTitle),
    team:
      source.team && Array.isArray(source.team)
        ? source.team.map(digestTeamMember)
        : null,
  }
}

//@ts-ignore
function digestTeamMember(source): TeamMemberTypeBase | null {
  if (!source) return null

  const { name, image, slug, shortDescription } = source

  return {
    name,
    image: secureImage(image),
    slug,
    description: shortDescription,
  }
}
