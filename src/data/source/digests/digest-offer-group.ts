import type { OfferGroupBase, OfferGroupData } from "@/src/types"

//@ts-ignore
export function digestOfferGroupBase(source): OfferGroupBase {
  return {
    title: source.offerGroupName,
    description: source.offerGroupDescription,
    slug: source.slug.current,
  }
}

//@ts-ignore
export function digestOfferGroupData(source): OfferGroupData {
  const data = digestOfferGroupBase(source)
  //@ts-ignore
  return data
}
