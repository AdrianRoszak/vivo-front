import type { IContact } from "@/src/data/domain"

export interface IContactRepository {
  getMedfile(): Promise<IContact["medfile"]>
}
