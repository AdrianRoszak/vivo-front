import { fetchOfferGroup } from "./source"
import { digestOfferGroupData } from "@/src/data/source/digests"

export async function getOfferGroup(slug: string) {
  const data = digestOfferGroupData(await fetchOfferGroup(slug))
  return data
}
