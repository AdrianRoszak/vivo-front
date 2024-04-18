import { getCurrentDate } from "@/src/utils"
import { blogArticleFragment } from "@/src/data/source/queries/fragments"

export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero
},
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) [0..2]{
    ${blogArticleFragment}
  }
}`
