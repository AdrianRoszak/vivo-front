import type { OfferGroupBase, OfferGroupData, Service } from "@/src/types"

//@ts-ignore
export function digestOfferGroupBase(source): OfferGroupBase {
  return {
    title: source.offerGroupName,
    description: source.offerGroupDesc,
    slug: source.slug.current,
  }
}

//@ts-ignore
export function digestOfferGroupData(source): OfferGroupData {
  const data = digestOfferGroupBase(source)
  //@ts-ignore
  return {
    ...data,
    services: source.serviceGroupSelector.map(digestService),
  }
}

//@ts-ignore
export function digestService(source): Service {
  return {
    name: source.serviceName,
    shortDescription: source.serviceShortDescription,
    description: source.serviceDescription,
    therapists:
      // @ts-ignore
      source.Therapists && source.Therapists.map((therapist) => therapist.name),
    subgroup: source.serviceYouth || null,
    workshops: source.serviceAdult ? source.serviceAdult.workshops : null,
  }
}
