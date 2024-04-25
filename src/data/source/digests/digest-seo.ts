export type MetaDataType = {
  seoTitle: string
  seoDescription: string
}

//@ts-ignore
export function digestSeo(source): MetaDataType {
  return {
    seoTitle: source.title,
    seoDescription: source.description,
  }
}
