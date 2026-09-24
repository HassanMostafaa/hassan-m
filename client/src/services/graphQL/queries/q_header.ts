import { f_media } from "./../fragments/base-components/f_media";
import { f_button } from "./../fragments/base-components/f_button";
import { IGenHeader } from "@/src/types/IGenTypes";
import { gql, TypedDocumentNode } from "@apollo/client";

interface IHeaderQuery {
  header: IGenHeader;
}

export const q_header: TypedDocumentNode<IHeaderQuery> = gql`
  ${f_button}
  ${f_media}
  query q_header {
    header {
      Brand {
        Logo {
          ...f_media
        }
        LogoSmall {
          ...f_media
        }
      }
      HeaderNavigations {
        Items {
          ...f_button
        }
      }
      PrimaryAction {
        ...f_button
      }
      SecondaryAction {
        ...f_button
      }
      createdAt
      documentId
      publishedAt
      updatedAt
    }
  }
`;
