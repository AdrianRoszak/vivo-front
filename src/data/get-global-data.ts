import { fetchGlobalData } from "./source"

export async function getGlobalData() {
  const data = digestGlobalData(await fetchGlobalData())
  return data
}

type GlobalData = {
  name: string
  address: {
    street: string
    number: string
    city: string
    zip: string
  }
  contact: {
    email: string
    phone: string
  }
  // social: {
  //   facebook: string
  //   instagram: string
  //   twitter: string
  // }
}

//@ts-ignore
function digestGlobalData(source): GlobalData {
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
