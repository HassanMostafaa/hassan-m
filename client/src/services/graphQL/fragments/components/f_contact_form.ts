import { f_input } from "./../base-components/f_input";
import { gql, type TypedDocumentNode } from "@apollo/client";

export const f_contact_form: TypedDocumentNode = gql`
  ${f_input}
  fragment f_contact_form on ComponentComponentsContactForm {
    id
    title
    description
    phone
    email
    formTag
    formTitle
    inputs {
      ...f_input
    }
  }
`;
