import { fetchOfferGroup } from "./source"

export async function getOfferGroup(slug: string) {
  const data = await fetchOfferGroup(slug)
  return data
}
