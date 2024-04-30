import type { ImageType } from "./blog-article-types"

export type ValueTeaser = {
  title: string
  icon: {
    alt: string
    source: string
  }
}

export type ValueTeaserList = ValueTeaser[]

export type SectionValues = {
  decoImage: ImageType | null
  values: ValueTeaserList
}
