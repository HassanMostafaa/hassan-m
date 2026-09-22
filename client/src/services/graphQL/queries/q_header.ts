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
          ButtonText
          ButtonUrl
          Variant
          Style
          ExternalUrl
        }
      }
      PrimaryAction {
        id
        ButtonText
        ButtonUrl
        Variant
        Style
        ExternalUrl
      }
      SecondaryAction {
        id
        ButtonText
        ButtonUrl
        Variant
        Style
        ExternalUrl
      }
      createdAt
      documentId
      publishedAt
      updatedAt
    }
  }
`;
