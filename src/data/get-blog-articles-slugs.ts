import { fetchBlogArticlesSlugs } from "./source/fetch-blog-articles-slugs"

export async function getBlogArticlesSlugs() {
  const data = await fetchBlogArticlesSlugs()
  return data
}
