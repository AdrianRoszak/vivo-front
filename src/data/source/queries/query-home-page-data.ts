export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero
},
  "blogArticles": *[_type == "blogArticle"] {
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
  }
}`
