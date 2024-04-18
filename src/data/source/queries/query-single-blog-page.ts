import { fullBlogArticleFragment } from "@/src/data/source/queries/fragments"

export const queryBlogPageData = `*[_type == "blogArticle" && slug.current == $slug] {
    ${fullBlogArticleFragment}
}`
