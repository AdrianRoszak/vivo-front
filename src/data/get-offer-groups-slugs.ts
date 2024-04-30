import { fetchOfferGroupsSlugs } from "./source"

export async function getOfferGroupsSlugs() {
  const data = await fetchOfferGroupsSlugs()
  return data
}
