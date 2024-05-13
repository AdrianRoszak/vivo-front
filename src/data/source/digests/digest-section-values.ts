import { secureImage } from "./digest-blog-article"
import { digestValueTeaser } from "@/src/data/source/digests"

//@ts-ignore
export function digestValues(source): SectionValues {
  return {
    values: source.values.map(digestValueTeaser),
  }
}

//@ts-ignore
export function digestSectionValues(source) {
  return {
    decoImage: source.decoImage ? secureImage(source.decoImage) : null,
    values: source.sectionValues.values.map(digestValueTeaser),
  }
}
