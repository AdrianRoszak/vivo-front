import { digestBlogArticle } from "@/src/data/source/digests"
import { fetchTeamMemberData } from "@/src/data/source"
import type { TypedObject } from "astro-portabletext/types"
import { secureImage } from "./source/digests/digest-blog-article"
import type { BlogArticleType, ImageType } from "../types"
import {
  digestMetaData,
  type MetaDataType,
} from "./source/digests/digest-meta-data"

type ExperienceType = {
  name: string
  startDate: string
  endDate: string
}

type EducationType = {
  school: string
  fieldOfStudy: string
  degree: string
}

type FieldsOfInterestType = {
  interest: string
}

type SpecializationType = {
  specialization: string[]
}

export type TeamMemberType = {
  name: string
  bio: TypedObject
  image: ImageType | null
  metaData: MetaDataType
  short: string
  experience?: ExperienceType[]
  education?: EducationType[]
  fieldsOfInterest?: FieldsOfInterestType[]
  specialization?: SpecializationType[]
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
function digestFieldsOfInterest(source): FieldsOfInterestType | null {
  if (!source) return null

  return {
    interest: source.interest,
  }
}

//@ts-ignore
function digestSpecialization(source): SpecializationType | null {
  if (!source) return null

  return {
    specialization: source.specialization,
  }
}

//@ts-ignore
function digestEducation(source): EducationType | null {
  if (!source) return null

  return {
    school: source.school,
    fieldOfStudy: source.fieldOfStudy,
    degree: source.degree,
  }
}

//@ts-ignore
function digestExperience(source): ExperienceType | null {
  if (!source) return null

  // @ts-ignore
  return {
    name: source.name,
    startDate: new Date(source.startDate).toLocaleDateString("pl-PL", {
      year: "numeric",
    }),
    endDate: source.endDate
      ? new Date(source.endDate).toLocaleDateString("pl-PL", {
          year: "numeric",
        })
      : "obecnie",
  }
}

//@ts-ignore
function digestTeamMember(source): TeamMemberType | null {
  if (!source) return null

  return {
    name: source.name ? source.name : "",
    short: source.shortDescription,
    bio: source.longBio,
    image: source.image ? secureImage(source.image) : null,
    experience:
      (source.experience && source.experience.map(digestExperience)) || null,
    education:
      (source.education && source.education.map(digestEducation)) || null,
    fieldsOfInterest:
      source.fieldsOfInterest &&
      source.fieldsOfInterest.map(digestFieldsOfInterest),
    specialization:
      source.specialization && source.specialization.map(digestSpecialization),
    articles:
      source.articles.length > 0
        ? source.articles.map(digestBlogArticle)
        : null,
    metaData: source.seoTitle
      ? digestMetaData(source.seoTitle)
      : {
          seoTitle: "Poradnia psychologiczno-pedagogiczna Vivo",
          seoDescription: "",
        },
  }
}
