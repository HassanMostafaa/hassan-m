import { IGenHeader } from "@/src/types/IGenTypes";
import { gql, TypedDocumentNode } from "@apollo/client";

export const q_header: TypedDocumentNode<{ header: IGenHeader | null }> = gql`
  query q_header {
    header {
      Brand {
        Logo {
          url
          alternativeText
        }
        LogoSmall {
          url
          alternativeText
        }
      }
      HeaderNavigations {
        Items {
          id
          buttonText
          buttonUrl
          variant
          style
          isExternalUrl
        }
      }
      PrimaryAction {
        id
        buttonText
        buttonUrl
        variant
        style
        isExternalUrl
      }
      SecondaryAction {
        id
        buttonText
        buttonUrl
        variant
        style
        isExternalUrl
      }
      createdAt
      documentId
      publishedAt
      updatedAt
    }
  }
`;
