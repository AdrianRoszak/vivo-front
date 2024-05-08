// type Socials = {
//   facebook: string
//   instagram: string
//   twitter: string
// }

type AddressData = {
  street: string
  number: string
  city: string
  zip: string
}

type ContactData = {
  email: string
  phone: string
}

export type GlobalData = {
  name: string
  address: AddressData
  contact: ContactData
  // social: {
  //   facebook: string
  //   instagram: string
  //   twitter: string
  // }
}
