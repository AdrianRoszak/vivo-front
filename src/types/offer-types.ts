import type { SectionIntro } from "./common-types"

export type OfferGroupBase = {
  title: string
  description: string
  slug: string
}

export type OfferGroupData = OfferGroupBase & {
  services: string[]
}

type OfferGroups = OfferGroupBase[]

export type SectionHomeOffer = {
  intro: SectionIntro
  offerGroups: OfferGroups
}
