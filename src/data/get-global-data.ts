import { fetchGlobalData } from "./source"
import { digestGlobalData } from "./source/digests"

export async function getGlobalData() {
  const data = digestGlobalData(await fetchGlobalData())
  return data
}
