import type { TypedObject } from "astro-portabletext/types"
import { fetchFaqPageData } from "./source"
import type { SectionIntro } from "../types"
import { digestMetaData, digestSectionIntro } from "./source/digests"
import type { MetaDataType } from "./source/digests/digest-meta-data"

type FaqItem = {
  question: string
  answer: TypedObject
}

export type FaqPage = {
  sectionHero: SectionIntro
  faqItems: FaqItem[]
  metaData: MetaDataType
}

export async function getFaqPage(): Promise<FaqPage> {
  const data = digestFaqPageData(await fetchFaqPageData())
  return data
}

//@ts-ignore
function digestFaqItem(source): FaqItem | null {
  if (!source) return null
  return {
    question: source.question,
    answer: source.answer,
  }
}

//@ts-ignore
function digestFaqPageData(source): FaqPage {
  const { sectionHero, seoTitle, sectionFaq } = source[0]

  return {
    sectionHero: digestSectionIntro(sectionHero),
    faqItems: sectionFaq.faqs.map(digestFaqItem),
    metaData: digestMetaData(seoTitle),
  }
}
