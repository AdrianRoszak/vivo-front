import * as services from "@/src/data/application/services"
import type { IContact } from "@/src/data/domain"

export const getMedfile = async (): Promise<IContact["medfile"]> => {
  const medfile = digestMedfile(await services.getMedfile())
  return medfile
}

//@ts-ignore
function digestMedfile(source): IContact["medfile"] {
  return {
    generalLink: source.medfileRegistrationGeneral,
  }
}
