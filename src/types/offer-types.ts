import type { TypedObject } from "astro-portabletext/types"
import type { SectionIntro } from "./common-types"

export type OfferGroupBase = {
  title: string
  description: TypedObject
  slug: string
}

export type Service = {
  name: string
  shortDescription: string
  description: TypedObject
}

export type OfferGroupData = OfferGroupBase & {
  services: Service[]
}

type OfferGroups = OfferGroupBase[]

export type SectionHomeOffer = {
  intro: SectionIntro
  offerGroups: OfferGroups
}
