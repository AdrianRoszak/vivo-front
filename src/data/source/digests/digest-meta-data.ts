export type MetaDataType = {
  seoTitle: string
  seoDescription: string
}

//@ts-ignore
export function digestMetaData(source): MetaDataType {
  return {
    seoTitle: source.title,
    seoDescription: source.description,
  }
}
