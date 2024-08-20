import type { AboutPageData } from "../types"
import { fetchAboutPageData } from "./source"
import {
  digestMetaData,
  digestSectionIntro,
  digestTeamMember,
  digestValues,
} from "./source/digests"
import { secureImage } from "./source/digests/digest-blog-article"

export async function getAboutPage(): Promise<AboutPageData | null> {
  const data = digestAboutPageData(await fetchAboutPageData())
  return data
}

//@ts-ignore
function digestAboutPageData(source): AboutPageData | null {
  if (!source) return null

  return {
    metaData: digestMetaData(source.singletonAbout.seoTitle),
    sectionHero: digestSectionIntro(source.singletonAbout.sectionHero),
    sectionAbout: source.singletonAbout.sectionAbout,
    sectionAboutValues: {
      tagline: source.singletonAbout.sectionAboutValues.tagline,
      headline: source.singletonAbout.sectionAboutValues.sectionValuesTitle,
      values: digestValues(
        source.singletonAbout.sectionAboutValues.sectionValues,
      ),
    },
    sectionTeam: {
      headline: source.singletonAbout.sectionTeam.sectionTeamTitle,
      tagline: source.singletonAbout.sectionTeam.tagline,
    },
    decoImage: secureImage(source.singletonAbout.image),
    team:
      source.team && Array.isArray(source.team)
        ? source.team.map(digestTeamMember)
        : null,
  }
}
