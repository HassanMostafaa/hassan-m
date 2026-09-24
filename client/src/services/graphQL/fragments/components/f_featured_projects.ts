import { f_button } from "./../base-components/f_button";
import { f_media } from "./../base-components/f_media";
import { gql } from "@apollo/client";

export const f_featured_projects = gql`
  ${f_button}
  ${f_media}
  fragment f_featured_projects on ComponentComponentsFeaturedProjects {
    id
    Items {
      id
      Image {
        ...f_media
      }
      projectUrl
      title
      description
    }
    title
    seeAllButton {
      ...f_button
    }
  }
`;
