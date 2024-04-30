import type { SectionIntro } from "./common-types"

export type OfferGroup = {
  title: string
  description: string
  slug: string
}

type OfferGroups = OfferGroup[]

export type SectionHomeOffer = {
  intro: SectionIntro
  offerGroups: OfferGroups
}
