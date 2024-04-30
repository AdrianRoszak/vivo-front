import { fetchHomePageData } from "@/src/data/source"
import { digestHomePageData } from "./source/digests"

import type { HomePageData } from "../types"

export async function getHomePage(): Promise<HomePageData> {
  const data = digestHomePageData(await fetchHomePageData())
  return data
}
