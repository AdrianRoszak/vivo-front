import { digestMetaData } from "./digest-meta-data"
import { digestOfferGroupBase } from "./digest-offer-group"

//@ts-ignore
export function digestOfferPageData(source): OfferPageData | null {
  if (!source) return null

  const { singletonOffer } = source

  if (!singletonOffer) return null

  return {
    offerGroups:
      singletonOffer.offerGroupSelectorField.sectionOfferGroup.map(
        digestOfferGroupBase,
      ),
    metaData: singletonOffer.seoTitle
      ? digestMetaData(singletonOffer.seoTitle)
      : {
          seoTitle: "",
          seoDescription: "",
        },
  }
}
