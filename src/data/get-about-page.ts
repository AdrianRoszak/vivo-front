import type { AboutPageData } from "../types"
import { fetchAboutPageData } from "./source"
import { digestMetaData, digestValues } from "./source/digests"

export async function getAboutPage(): Promise<AboutPageData | null> {
  const data = digestAboutPageData(await fetchAboutPageData())
  return data
}

//@ts-ignore
function digestAboutPageData(source): AboutPageData | null {
  if (!source) return null

  return {
    sectionValues: digestValues(source.sectionValues),
    metaData: digestMetaData(source.seoTitle),
  }
}
