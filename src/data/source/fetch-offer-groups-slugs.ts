import { sanityClient } from "sanity:client"

export async function fetchOfferGroupsSlugs() {
  const query = `*[_type == "offerGroup"] { slug {current} }`
  const data = await sanityClient.fetch(query)

  return data
}
