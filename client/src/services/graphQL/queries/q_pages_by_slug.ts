import { f_featured_projects } from "./../fragments/components/f_featured_projects";
import { gql, TypedDocumentNode } from "@apollo/client";
import { f_seo } from "../fragments/f_seo";
import {
  IGenPage,
  IGenQ_Pages_By_SlugQueryVariables,
} from "@/src/types/IGenTypes";
import { f_hero_section } from "../fragments/components/f_hero_section";
import { f_simple_cards_grid } from "../fragments/components/f_grid_cards";

export const q_pages_by_slug: TypedDocumentNode<
  { pages: Array<IGenPage> },
  IGenQ_Pages_By_SlugQueryVariables
> = gql`
  ${f_seo}
  ${f_hero_section}
  ${f_simple_cards_grid}
  ${f_featured_projects}

  query q_pages_by_slug($filters: PageFiltersInput) {
    pages(filters: $filters) {
      documentId
      title
      slug
      seo {
        ...f_seo
      }
      sections {
        ...f_hero_section
        ...f_simple_cards_grid
        ...f_featured_projects
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
