import { getCurrentDate } from "@/src/utils"
import { seoFragment } from "./fragments"

export const queryTeamMemberData = `*[_type == "teamMember" && slug.current == $slug] {
    _id,
    name,
    image,
    longBio,
    shortDescription,
    ${seoFragment}
    "articles": *[_type == "blogArticle" && references(^._id) && publishedAt < "${getCurrentDate()}"] | order(publishedAt desc)
}`
