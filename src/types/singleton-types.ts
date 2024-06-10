import type { TypedObject } from "astro-portabletext/types"
import type { MetaDataType } from "../data/source/digests/digest-meta-data"
import type { BlogArticleList, TeamMemberTypeBase } from "./blog-article-types"
import type { SectionIntro } from "./common-types"
import type { SectionHomeOffer } from "./offer-types"
import type { SectionValues } from "./values-types"

type SingletonBaseType = {
  metaData: MetaDataType
}

export type HomePageData = {
  sectionHero: SectionIntro
  sectionValues: SectionValues
  sectionOffer: SectionHomeOffer | null
  sectionBlog: SectionIntro
  blogArticles: BlogArticleList
  metaData: MetaDataType
}

export type OfferPageData = {
  offerGroups: SectionHomeOffer["offerGroups"]
  metaData: MetaDataType
}

export type AboutPageData = SingletonBaseType & {
  sectionHero: SectionIntro
  sectionAbout: TypedObject
  sectionValues: SectionValues
  sectionTeam: {
    headline: string
    tagline: string
  }
  team: TeamMemberTypeBase[]
}
