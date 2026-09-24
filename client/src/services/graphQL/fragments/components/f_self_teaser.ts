import { f_button } from "./../base-components/f_button";
import { gql } from "@apollo/client";

export const f_self_teaser = gql`
  ${f_button}
  fragment f_self_teaser on ComponentComponentsSelfTeaser {
    id
    marqueeText
    sectionTeaserText
    title
    description
    actionButton {
      ...f_button
    }
  }
`;
