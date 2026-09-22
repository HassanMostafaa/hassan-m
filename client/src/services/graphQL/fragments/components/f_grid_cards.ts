import { gql } from "@apollo/client";
import { f_button } from "../base-components/f_button";

export const f_grid_cards = gql`
  ${f_button}
  fragment f_grid_cards on ComponentComponentsGridCards {
    id
    Items {
      id
      Title
      Description
      Action {
        ...f_button
      }
    }
  }
`;
