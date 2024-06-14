import { offerGroupSelectorFragment } from "./fragments/offer-group-selector-fragment"
import { getCurrentDate } from "@/src/utils"
import {
  seoFragment,
  teaserBlogArticleFragment,
} from "@/src/data/source/queries/fragments"
import { valueFragmentBase } from "./fragments/values-fragment"

export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero,
  sectionHomeValues {
    decoImage,
    sectionValues {
      values[]->{
        ${valueFragmentBase}
      }
    }
  },
  secOffer {
    offerIntroField,
    ${offerGroupSelectorFragment}
  },
  sectionAbout,
  sectionBlog,
  ${seoFragment}
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${teaserBlogArticleFragment}
  },
  "team": *[_type == "teamMember" && roles.therapist == true && active == true] {
    name,
    "image": thumbnail,
    slug,
  }
}`
