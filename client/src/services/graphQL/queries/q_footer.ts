import { f_media } from "./../fragments/base-components/f_media";
import { f_button } from "./../fragments/base-components/f_button";
import { gql, TypedDocumentNode } from "@apollo/client";
import { IGenFooter } from "@/src/types/IGenTypes";
import { f_page_link } from "../fragments/base-components/f_page_link";

interface IFooterQuery {
  footer: IGenFooter;
}

export const q_footer: TypedDocumentNode<IFooterQuery> = gql`
  ${f_button}
  ${f_media}
  ${f_page_link}
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
      links {
        ...f_page_link
      }
      publishedAt
      socialLinks {
        ...f_button
      }
      updatedAt
    }
  }
`;
