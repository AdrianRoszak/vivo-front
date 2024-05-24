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
    articleBody,
    categories,
    seoTitle,
  } = article

  return {
    title,
    description: articleTeaser,
    body: articleBody,
    mainImage: mainImage ? secureImage(mainImage) : null,
    slug: slug.current,
    published: publishedAt,
    seoTitle: seoTitle
      ? {
          title: seoTitle.title,
          description: seoTitle.description,
        }
      : {
          title: "",
          description: "",
        },
    author: author
      ? {
          name: author.name,
          image: secureImage(author.thumbnail),
          slug: author.slug.current,
          description: author.shortDescription,
        }
      : {
          name: "Redakcja Vivo",
          image: null,
        },
    categories: categories.map((category: { title: string }) => category.title),
  }
}

//@ts-ignore
export function secureImage(image) {
  if (!image) return null
  if (image.hasOwnProperty("image")) {
    return {
      alt: image.alt,
      source: image.image.asset._ref,
    }
  }
  return null
}
