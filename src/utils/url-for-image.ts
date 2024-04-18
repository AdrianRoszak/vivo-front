import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "sanity:client"

export function urlForImage(source: string) {
  const builder = imageUrlBuilder(sanityClient)
  return builder.image(source)
}
