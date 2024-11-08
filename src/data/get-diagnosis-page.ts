import { fetchDiagnosisPageData } from "@/src/data/source"
import { digestDiagnosisPageData } from "./source/digests"

import type { DiagnosisPageData } from "./source/digests/digest-diagnosis-page-data"

export async function getDiagnosisPage(): Promise<DiagnosisPageData> {
  const data = digestDiagnosisPageData(await fetchDiagnosisPageData())
  return data
}
