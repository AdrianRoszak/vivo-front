import {
  digestBlogArticle,
  digestMetaData,
  digestOfferGroupBase,
  digestSectionIntro,
  digestSectionValues,
  digestTeamMember,
} from "@/src/data/source/digests"

import type { HomePageData, SectionHomeOffer } from "@/src/types"
import type { SectionAbout } from "@/src/types/singleton-types"

//@ts-ignore
export function digestHomePageData(source): HomePageData {
  return {
    sectionHero: digestSectionIntro(source.singletonHome.sectionHero),
    sectionValues: digestSectionValues(source.singletonHome.sectionHomeValues),
    sectionOffer: digestSectionOffer(source.singletonHome.secOffer),
    sectionAbout: digestSectionAbout(source.singletonHome.sectionAbout),
    team:
      source.team && Array.isArray(source.team)
        ? source.team.map(digestTeamMember)
        : null,
    sectionBlog: digestSectionIntro(source.singletonHome.sectionBlog),
    blogArticles: source.blogArticles.map(digestBlogArticle),
    metaData: digestMetaData(source.singletonHome.seoTitle),
  }
}

//@ts-ignore
export function digestSectionOffer(source): SectionHomeOffer | null {
  if (!source) return null

  return {
    intro: digestSectionIntro(source.offerIntroField),
    offerGroups:
      source.offerGroupSelectorField.sectionOfferGroup.map(
        digestOfferGroupBase,
      ),
  }
}

//@ts-ignore
export function digestSectionAbout(source): SectionAbout {
  return {
    intro: digestSectionIntro(source),
  }
}
