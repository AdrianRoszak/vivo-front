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
  seoTitle,
  ${blogArticleFragment}
`

export const teaserBlogArticleFragment = `
  articleTeaser,
  ${blogArticleFragment}
`
