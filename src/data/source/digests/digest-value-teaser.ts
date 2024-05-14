import type { ValueTeaser } from "@/src/types"

//@ts-ignore
export function digestValueTeaser(source): ValueTeaser | null {
  if (!source) return null

  return {
    title: source.title,
    icon: source.icon ? source.icon : "",
    body: source.body ? source.body : null,
  }
}
