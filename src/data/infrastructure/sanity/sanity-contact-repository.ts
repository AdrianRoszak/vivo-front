import type { IContactRepository } from "@/src/data/infrastructure/contact-repository"
import { sanityClient } from "sanity:client"

export const getMedfile: IContactRepository["getMedfile"] = async () => {
  const query = `*[_type == "companyData"] {
    medfileRegistrationGeneral
  }[0]`

  const result = await sanityClient.fetch(query)

  return result
}
