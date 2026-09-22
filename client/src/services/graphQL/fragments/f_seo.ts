import { gql } from "@apollo/client";

export const f_seo = gql`
  fragment f_seo on ComponentMetaComponentsSeo {
    id
    canonicalUrl
    metaTitle
    metaDescription
    noIndex
    metaImage {
      url
    }
  }
`;
