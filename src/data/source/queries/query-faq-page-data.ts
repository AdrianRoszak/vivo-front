import { seoFragment } from "./fragments"

export const queryFaqPageData = `*[_type == "singletonFaq"] {
    sectionHero,
    sectionFaq {
    faqs[]-> {
      question,
      answer
      }
    },
    ${seoFragment}
  }`
