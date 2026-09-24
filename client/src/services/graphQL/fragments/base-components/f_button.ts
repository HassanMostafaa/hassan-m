import { f_media } from "./f_media";
import { gql } from "@apollo/client";

export const f_button = gql`
  ${f_media}
  fragment f_button on ComponentBaseComponentsButton {
    id
    buttonText
    buttonUrl
    variant
    style
    isExternalUrl
    withIcons
    startIcon {
      ...f_media
    }
    endIcon {
      ...f_media
    }
  }
`;
