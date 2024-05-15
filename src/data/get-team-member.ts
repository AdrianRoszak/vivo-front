import { fetchTeamMemberData } from "@/src/data/source"
import type { TypedObject } from "astro-portabletext/types"
import { secureImage } from "./source/digests/digest-blog-article"
import type { ImageType } from "../types"
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

  const { seoTitle, name, longBio, image, shortDescription } = source

  if (!name || !longBio) return null

  return {
    name,
    short: shortDescription,
    bio: longBio,
    image: image ? secureImage(image) : null,
    metaData: seoTitle
      ? digestMetaData(seoTitle)
      : { seoTitle: "", seoDescription: "" },
  }
}
