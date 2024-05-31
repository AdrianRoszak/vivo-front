import { valuesFragment, seoFragment } from "./fragments"

export const queryAboutPageData = `{
 "singletonAbout": *[_type == "singletonAbout"][0] {
    ${valuesFragment},
    ${seoFragment}
  },
  "team": *[_type == "teamMember" && roles.therapist == true] {
    image,
    name,
    shortDescription,
    slug,
  }
}
`
