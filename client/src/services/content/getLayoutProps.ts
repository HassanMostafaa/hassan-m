import { IGenFooter, IGenHeader } from "@/src/types/IGenTypes";
import { client } from "../graphQL/client";
import { q_header } from "../graphQL/queries/q_header";
import { q_footer } from "../graphQL/queries/q_footer";

interface ILayoutPropsResponse {
  header: IGenHeader | undefined | null;
  footer?: IGenFooter | undefined | null;
}

export const getLayoutProps = async (): Promise<ILayoutPropsResponse> => {
  try {
    const headerQuery = client.query({
      query: q_header,
    });
    const footerQuery = client.query({
      query: q_footer,
    });

    const [header, footer] = await Promise.all([headerQuery, footerQuery]);

    return {
      header: header?.data?.header,
      footer: footer?.data?.footer,
    };
  } catch (error) {
    console.error("Error fetching layout props:", error);
    throw error;
  }
};
