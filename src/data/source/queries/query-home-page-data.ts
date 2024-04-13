export const queryHomePageData = `{
  "singletonHome": *[_type == "singletonHome"][0] {
  sectionHero
},
  "blogArticles": *[_type == "blogArticle"] {
    title,
    slug,
    publishedAt,
    author->{
      name,
      slug
    }
  }
}`
