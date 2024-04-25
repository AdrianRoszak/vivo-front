import type { TypedObject } from "astro-portabletext/types"

export type SectionIntro = {
  headline: string
  tagline: TypedObject | string
}

//@ts-ignore
export function digestSectionIntro(source): SectionIntro {
  return {
    headline: source.headline,
    tagline: source.tagline,
  }
}
