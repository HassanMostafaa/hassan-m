import { gql } from "@apollo/client";

export const f_input = gql`
  fragment f_input on ComponentBaseComponentsInput {
    id
    label
    placeholder
    type
  }
`;
