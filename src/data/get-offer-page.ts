import type { OfferPageData } from "../types"
import { fetchOfferPageData } from "./source"
import { digestOfferPageData } from "./source/digests"

export async function getOfferPage(): Promise<OfferPageData | null> {
  const data = digestOfferPageData(await fetchOfferPageData())
  return data
}
