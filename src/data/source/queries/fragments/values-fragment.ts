export const valueFragment = `
  title,
  icon
`
export const valuesFragment = `
  sectionValues {
    values[]->{
      ${valueFragment}
    }
  }
`
