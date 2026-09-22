import { gql } from "@apollo/client";
import { f_seo } from "../fragments/f_seo";

export const q_pages_by_slug = gql`
  ${f_seo}

  query q_pages_by_slug($filters: PageFiltersInput) {
    pages(filters: $filters) {
      title
      slug
      seo {
        ...f_seo
      }
    }
  }
`;
