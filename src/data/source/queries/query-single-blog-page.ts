import { fullBlogArticleFragment } from "@/src/data/source/queries/fragments"

export const querySingleBlogPageData = `*[_type == "blogArticle" && slug.current == $slug] {
  ${fullBlogArticleFragment},
}`
