import { digestMetaData, type MetaDataType } from "./digest-meta-data"
import type { SectionIntro } from "@/src/types"
import { digestSectionIntro } from "./digest-section-intro"
import type { TypedObject } from "astro-portabletext/types"

export type DiagnosisItem = {
  name: string
  shortDescription: string
  description: TypedObject
}

export interface DiagnosisPageData {
  metaData: MetaDataType
  sectionHero: SectionIntro
  services: DiagnosisItem[]
}

//@ts-ignore
export function digestDiagnosisPageData(source): DiagnosisPageData {
  return {
    metaData: digestMetaData(source.singletonDiagnosis.seoTitle),
    sectionHero: digestSectionIntro(source.singletonDiagnosis.sectionHero),
    services:
      source.singletonDiagnosis.diagnosisItemSelector.map(digestDiagnosisItem),
  }
}

//@ts-ignore
export function digestDiagnosisItem(source): DiagnosisItem {
  return {
    name: source.serviceName,
    shortDescription: source.serviceShortDescription,
    description: source.serviceDescription,
  }
}
