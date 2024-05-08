import type { GlobalData } from "@/src/types"

//@ts-ignore
export function digestGlobalData(source): GlobalData {
  const data = source[0]
  return {
    name: data.name,
    address: {
      street: data.address.street,
      number: data.address.houseNumber,
      city: data.address.city,
      zip: data.address.zipCode,
    },
    contact: {
      email: data.email,
      phone: data.phone,
    },
  }
}
