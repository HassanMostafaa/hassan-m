import { f_media } from "./../fragments/base-components/f_media";
import { f_button } from "./../fragments/base-components/f_button";
import { gql, TypedDocumentNode } from "@apollo/client";
import { IGenFooter } from "@/src/types/IGenTypes";

export const q_footer: TypedDocumentNode<{ footer: IGenFooter }> = gql`
  ${f_button}
  ${f_media}
  query q_footer {
    footer {
      brand {
        id
        Logo {
          ...f_media
        }
        LogoSmall {
          ...f_media
        }
      }
      copyrightsText
      createdAt
      documentId
      navigations {
        ...f_button
      }
      publishedAt
      socialLinks {
        ...f_button
      }
      updatedAt
    }
  }
`;
