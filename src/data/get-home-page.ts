import { fetchHomePageData } from "@/src/data/source"
import type { BlogArticleList, BlogArticleType } from "../types"

type HomePageData = {
  sectionHero: {
    headline: string
    tagline: string
  }
  blogArticles: BlogArticleList
}

export async function getHomePage(): Promise<HomePageData> {
  const data = digestHomePageData(await fetchHomePageData())
  return data
}

//@ts-ignore
function digestHomePageData(data): HomePageData {
  return {
    sectionHero: data.singletonHome.sectionHero,
    blogArticles: data.blogArticles.map(digestBlogArticle),
  }
}

//@ts-ignore
function digestBlogArticle(article): BlogArticleType {
  const { title, mainImage, slug, publishedAt, author, articleTeaser } = article

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
    author: {
      name: author.name,
      image: secureImage(author.image),
    },
  }
}
