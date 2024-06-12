import { fetchTeamMemberData } from "@/src/data/source"
import type { TypedObject } from "astro-portabletext/types"
import { secureImage } from "./source/digests/digest-blog-article"
import type { BlogArticleType, ImageType } from "../types"
import {
  digestMetaData,
  type MetaDataType,
} from "./source/digests/digest-meta-data"

export type TeamMemberType = {
  name: string
  bio: TypedObject
  image: ImageType | null
  metaData: MetaDataType
  short: string
  articles: BlogArticleType[] | null
}

export async function getTeamMember(
  slug: string,
): Promise<TeamMemberType | null> {
  const arr = await fetchTeamMemberData(slug)
  const data = digestTeamMember(arr[0])
  return data
}

//@ts-ignore
function digestTeamMember(source): TeamMemberType | null {
  if (!source) return null

  return {
    name: source.name ? source.name : "",
    short: source.shortDescription,
    bio: source.longBio,
    image: source.image ? secureImage(source.image) : null,
    articles: source.articles.length > 0 ? source.articles : null,
    metaData: source.seoTitle
      ? digestMetaData(source.seoTitle)
      : {
          seoTitle: "Poradnia psychologiczno-pedagogiczna Vivo",
          seoDescription: "",
        },
  }
}
