import type { TypedObject } from "astro-portabletext/types"
import type { SectionIntro } from "./common-types"

export type OfferGroupBase = {
  title: string
  description: string
  slug: string
}

type Service = {
  name: string
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
