import { gql } from "@apollo/client";

export const f_media = gql`
  fragment f_media on UploadFile {
    alternativeText
    size
    url
    ext
    mime
    focalPoint
  }
`;
