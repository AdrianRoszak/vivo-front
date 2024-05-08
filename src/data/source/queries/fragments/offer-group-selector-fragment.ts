export const offerGroupSelectorFragment = `
  offerGroupSelectorField {
      sectionOfferGroup[]->{
        offerGroupName,
        offerGroupDesc,
        slug {
          current
        }
      }
    }
  `
