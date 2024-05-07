import { getCurrentDate } from "@/src/utils"
import {
  seoFragment,
  teaserBlogArticleFragment,
} from "@/src/data/source/queries/fragments"

export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero,
  secOffer {
    offerIntroField,
    offerGroupSelectorField {
      sectionOfferGroup[]->{
        offerGroupName,
        offerGroupDesc,
        slug {
          current
        }
      }
    }
  },
  sectionBlog,
  sectionHomeValues {
    decoImage,
    sectionValues {
      values[]->{
        title,
        icon
      }
    }
  },
  ${seoFragment}
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${teaserBlogArticleFragment}
  }
}`
