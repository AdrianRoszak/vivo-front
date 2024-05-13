import { offerGroupSelectorFragment } from "./fragments/offer-group-selector-fragment"
import { getCurrentDate } from "@/src/utils"
import {
  seoFragment,
  teaserBlogArticleFragment,
  valuesFragment,
} from "@/src/data/source/queries/fragments"

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
    ${valuesFragment}
  },
  ${seoFragment}
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${teaserBlogArticleFragment}
  }
}`
