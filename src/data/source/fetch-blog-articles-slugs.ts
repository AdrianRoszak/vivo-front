import { sanityClient } from "sanity:client"

export async function fetchBlogArticlesSlugs() {
  const query = `*[_type == "blogArticle"] { slug {current} }`
  const data = await sanityClient.fetch(query)

  return data
}
