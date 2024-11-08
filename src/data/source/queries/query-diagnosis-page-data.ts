import { seoFragment } from "./fragments"

export const queryDiagnosisPageData = `{
  "singletonDiagnosis": *[_type == "singletonDiagnosis"][0] {
  sectionHero,
  diagnosisItemSelector[]-> {
      serviceName,
      serviceDescription,
      serviceShortDescription,
    },
  ${seoFragment}
  },
}`
