import { seoFragment } from "./fragments"

export const queryPriceListData = `*[_type == "singletonPrices"] {
  sectionHero,
  priceList {
    priceItems[]-> {
      title,
      variants[]-> {
        title,
        price
      }
    }
  },
  ${seoFragment}
}`
