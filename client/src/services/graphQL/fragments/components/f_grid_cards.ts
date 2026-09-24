import { gql } from "@apollo/client";
import { f_button } from "../base-components/f_button";

export const f_simple_cards_grid = gql`
  ${f_button}
  fragment f_simple_cards_grid on ComponentComponentsGridCards {
    id
    items {
      id
      title
      description
      action {
        ...f_button
      }
    }
  }
`;
