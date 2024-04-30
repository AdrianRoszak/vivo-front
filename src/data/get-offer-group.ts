import type { OfferGroup } from "@/src/types/offer-types"
import { fetchOfferGroup } from "./source"
import { digestOfferGroup } from "./source/digests/digest-home-page-data"

export async function getOfferGroup(slug: string) {
  const data = digestOfferGroupData(await fetchOfferGroup(slug))
  return data
}

type OfferGroupData = OfferGroup & {
  services: string[]
}

//@ts-ignore
export function digestOfferGroupData(source): OfferGroupData {
  const data = digestOfferGroup(source)
  //@ts-ignore
  return data
}
