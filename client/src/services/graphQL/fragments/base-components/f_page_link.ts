import { gql } from "@apollo/client";

export const f_page_link = gql`
  fragment f_page_link on Page {
    slug
    title
    documentId
  }
`;
