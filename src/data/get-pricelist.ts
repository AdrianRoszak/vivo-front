import { fetchPriceListData } from "./source"
import { digestMetaData, digestSectionIntro } from "./source/digests"

import type { TypedObject } from "astro-portabletext/types"
import type { SectionIntro } from "../types"
import type { MetaDataType } from "./source/digests/digest-meta-data"

type PriceListVariant = {
  name: string | TypedObject
  price: number
}

type PriceListItem = {
  name: string
  variants: PriceListVariant[]
}

type PriceList = {
  sectionHero: SectionIntro
  priceList: PriceListItem[]
  metaData: MetaDataType
}

export async function getPriceList(): Promise<PriceList> {
  const data = digestPriceListData(await fetchPriceListData())
  return data
}

//@ts-ignore
function digestPriceListData(source): PriceList {
  const { sectionHero, seoTitle, priceList } = source[0]

  return {
    sectionHero: digestSectionIntro(sectionHero),
    priceList: priceList.priceItems.map(digestPriceList),
    metaData: digestMetaData(seoTitle),
  }
}

//@ts-ignore
function digestPriceList(source): PriceListItem {
  return {
    name: source.title,
    variants: source.variants.map(digestPriceListVariant),
  }
}

//@ts-ignore
function digestPriceListVariant(source) {
  return {
    name: source.title || source.longTitle,
    price: `${source.price} zł`,
  }
}
