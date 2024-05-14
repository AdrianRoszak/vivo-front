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
  secOffer {
    offerIntroField,
    ${offerGroupSelectorFragment}
  },
  sectionBlog,
  sectionHomeValues {
    decoImage,
    sectionValues {
    values[]->{
      ${valueFragmentBase}
    }
  }
  },
  ${seoFragment}
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${teaserBlogArticleFragment}
  }
}`
