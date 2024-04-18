import { sanityClient } from "sanity:client"

export async function fetchSingleBlogArticleData(slug: string) {
  const query = `*[_type == "blogArticle" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    author->{name},
    mainImage,
    articleBody
  }`
  const params = { slug }
  const data = await sanityClient.fetch(query, params)

  return data
}
