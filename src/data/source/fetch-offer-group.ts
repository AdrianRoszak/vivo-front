import { sanityClient } from "sanity:client"

export async function fetchOfferGroup(slug: string) {
  const query = `*[_type == "offerGroup" && slug.current == $slug][0] {
    offerGroupName,
    offerGroupDescription,
    slug,
    serviceGroupSelector[]-> {
      serviceName,
      serviceDescription,
    }
  }`
  const params = { slug }
  const data = await sanityClient.fetch(query, params)
  return data
}
