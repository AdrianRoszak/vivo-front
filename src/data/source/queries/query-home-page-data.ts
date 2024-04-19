import { getCurrentDate } from "@/src/utils"
import { teaserBlogArticleFragment } from "@/src/data/source/queries/fragments"

export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero,
  sectionOffer,
  sectionBlog,
  sectionValues {
    values[]->{
      title,
      icon
    }
  }
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${teaserBlogArticleFragment}
  }
}`
