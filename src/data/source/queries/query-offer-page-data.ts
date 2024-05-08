import { offerGroupSelectorFragment, seoFragment } from "./fragments"

export const queryOfferPageData = `{
  "singletonOffer": *[_type == "singletonOffer"][0] {
  ${offerGroupSelectorFragment},
  ${seoFragment}
  },
}`
