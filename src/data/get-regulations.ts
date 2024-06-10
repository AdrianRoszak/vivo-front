import type { TypedObject } from "astro-portabletext/types"
import { fetchRegulations } from "./source"

export type Regulations = {
  title: string
  text: TypedObject
}

export async function getRegulations(): Promise<Regulations | null> {
  const data = digestRegulations(await fetchRegulations())
  return data
}

//@ts-ignore
function digestRegulations(data): Regulations | null {
  if (!data) return null

  return {
    title: data[0].regulations[0].title,
    text: data[0].regulations[0].content,
  }
}
