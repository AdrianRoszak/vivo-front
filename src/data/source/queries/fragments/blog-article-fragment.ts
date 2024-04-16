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
    articleTeaser,
    categories[]->{
      title
    }
  `
