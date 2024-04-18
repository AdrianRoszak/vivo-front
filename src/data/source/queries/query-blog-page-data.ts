import { teaserBlogArticleFragment } from "@/src/data/source/queries/fragments"
import { getCurrentDate } from "@/src/utils"

export const queryBlogPageData = `{
  "blogArticles": *[_type == "blogArticle" && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc) {
    ${teaserBlogArticleFragment}
  }
}`
