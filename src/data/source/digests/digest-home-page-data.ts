import {
  digestBlogArticle,
  digestMetaData,
  digestSectionIntro,
  digestSectionValues,
} from "@/src/data/source/digests"

//@ts-ignore
export function digestHomePageData(source): HomePageData {
  return {
    sectionHero: digestSectionIntro(source.singletonHome.sectionHero),
    sectionValues: digestSectionValues(source.singletonHome.sectionHomeValues),
    sectionOffer: digestSectionIntro(source.singletonHome.sectionOffer),
    sectionBlog: digestSectionIntro(source.singletonHome.sectionBlog),
    blogArticles: source.blogArticles.map(digestBlogArticle),
    metaData: digestMetaData(source.singletonHome.seoTitle),
  }
}
