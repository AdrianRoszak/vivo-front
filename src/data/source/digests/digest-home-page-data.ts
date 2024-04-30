import {
  digestBlogArticle,
  digestMetaData,
  digestSectionIntro,
  digestSectionValues,
} from "@/src/data/source/digests"

import type { HomePageData, SectionHomeOffer } from "@/src/types"

//@ts-ignore
export function digestHomePageData(source): HomePageData {
  return {
    sectionHero: digestSectionIntro(source.singletonHome.sectionHero),
    sectionValues: digestSectionValues(source.singletonHome.sectionHomeValues),
    sectionOffer: digestSectionIntro(source.singletonHome.secOffer),
    sectionBlog: digestSectionIntro(source.singletonHome.sectionBlog),
    blogArticles: source.blogArticles.map(digestBlogArticle),
    metaData: digestMetaData(source.singletonHome.seoTitle),
  }
}

//@ts-ignore
export function digestSectionOffer(source): SectionHomeOffer | null {
  if (!source) return null

  return {
    intro: {
      headline: "headline",
      tagline: "tagline",
    },
    offerGroups: [
      {
        title: "headline",
        description: "tagline",
        slug: "string",
      },
    ],
  }
}
