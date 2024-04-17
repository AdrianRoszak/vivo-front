import type { BlogArticleType } from "@/src/types"

//@ts-ignore
export function digestBlogArticle(article): BlogArticleType | null {
  if (!article) return null

  const {
    title,
    mainImage,
    slug,
    publishedAt,
    author,
    articleTeaser,
    categories,
  } = article

  //@ts-ignore
  function secureImage(image) {
    if (image.hasOwnProperty("image")) {
      return {
        alt: image.alt,
        source: image.image.asset._ref,
      }
    }
    return null
  }

  return {
    title,
    description: articleTeaser,
    mainImage: secureImage(mainImage),
    slug: slug.current,
    published: publishedAt,
    author: author
      ? {
          name: author.name,
          image: secureImage(author.image),
        }
      : {
          name: "Redakcja Vivo",
          image: null,
        },
    categories: categories.map((category: { title: string }) => category.title),
  }
}
