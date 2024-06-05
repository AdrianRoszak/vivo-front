type Socials = {
  facebook: string
  instagram: string
  youtube: string
  linkedin: string
}

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
  socials: Socials
}
