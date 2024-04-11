import { fetchHomePageData } from "@/src/data/source"

export async function getHomePage() {
  const data = await fetchHomePageData()
  return data
}
