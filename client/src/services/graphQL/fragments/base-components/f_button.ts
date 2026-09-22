import { gql } from "@apollo/client";

export const f_button = gql`
  fragment f_button on ComponentBaseComponentsButton {
    id
    ButtonText
    ButtonUrl
    Variant
    Style
    ExternalUrl
  }
`;
