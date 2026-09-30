import { f_media } from "./../base-components/f_media";
import { f_button } from "./../base-components/f_button";
import { gql } from "@apollo/client";

export const f_feedbacks = gql`
  ${f_button}
  ${f_media}
  fragment f_feedbacks on ComponentComponentsFeedbacks {
    title
    description
    id
    items {
      title
      img {
        ...f_media
      }
      id
      description
      action {
        ...f_button
      }
    }
  }
`;
