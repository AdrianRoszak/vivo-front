import { seoFragment } from "./seo-fragment"

export const blogArticleFragment = `
    mainImage,
    title,
    slug,
    publishedAt,
    author->{
      name,
      image,
      slug,
      shortDescription
    },
    categories[]->{
      title
    }
  `

export const fullBlogArticleFragment = `
  articleBody,
  ${seoFragment}
  ${blogArticleFragment}
`

export const teaserBlogArticleFragment = `
  articleTeaser,
  ${blogArticleFragment}
`
