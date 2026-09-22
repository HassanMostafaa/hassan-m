import { IGenHeader } from "@/src/types/IGenTypes";
import { client } from "../graphQL/client";
import { q_header } from "../graphQL/queries/q_header";

interface ILayoutPropsResponse {
  header: IGenHeader | undefined | null;
  footer?: null;
}

export const getLayoutProps = async (): Promise<ILayoutPropsResponse> => {
  try {
    const headerQuery = client.query({
      query: q_header,
    });

    const [header] = await Promise.all([headerQuery]);

    return {
      header: header?.data?.header,
      footer: null,
    };
  } catch (error) {
    console.error("Error fetching layout props:", error);
    throw error;
  }
};
