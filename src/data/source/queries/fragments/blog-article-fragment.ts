export const blogArticleFragment = `
    mainImage,
    title,
    slug,
    publishedAt,
    author->{
      name,
      image,
      slug
    },
    categories[]->{
      title
    }
  `

export const fullBlogArticleFragment = `
  ${blogArticleFragment},
  articleBody
`

export const teaserBlogArticleFragment = `
  ${blogArticleFragment},
  articleTeaser
`
