export const valueFragmentBase = `
  title,
  icon
`
export const valueFragmentExtended = `
  ${valueFragmentBase},
  body,
`

export const valuesFragment = `
  sectionValues {
    values[]->{
      ${valueFragmentExtended}
    }
  }
`
