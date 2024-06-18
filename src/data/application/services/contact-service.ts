import * as sanityContactRepository from "@/src/data/infrastructure/sanity/sanity-contact-repository"
import type { IContact } from "../../domain"

export const getMedfile = async (): Promise<IContact["medfile"]> => {
  return sanityContactRepository.getMedfile()
}
