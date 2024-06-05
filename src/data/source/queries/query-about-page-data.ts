import { valuesFragment, seoFragment } from "./fragments"

export const queryAboutPageData = `{
  "singletonAbout": *[_type == "singletonAbout"][0] {
    sectionHero,
    sectionAbout,
    ${valuesFragment},
    ${seoFragment}
  },
  "team": *[_type == "teamMember" && roles.therapist == true && active == true] {
    name,
    image,
    slug,
    shortDescription
  }
}
`
