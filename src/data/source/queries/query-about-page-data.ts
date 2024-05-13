import { valuesFragment, seoFragment } from "./fragments"

export const queryAboutPageData = `
  *[_type == "singletonAbout"][0] {
    ${valuesFragment},
    ${seoFragment}
  }
`
