import { gql } from "@apollo/client";

export const f_seo = gql`
  fragment f_seo on ComponentMetaComponentsSeo {
    metaTitle
    metaDescription
    metaImage {
      url
    }
    noIndex
  }
`;
