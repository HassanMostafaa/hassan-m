import { cache } from "react";
import { IGenPage } from "@/src/types/IGenTypes";
import { client } from "../graphQL/client";
import { q_pages_by_slug } from "../graphQL/queries/q_pages_by_slug";

interface IPagePropsReturn {
  page: IGenPage | null;
  is404: boolean;
}

export const getPageProps = cache(
  async (slug: string): Promise<IPagePropsReturn> => {
    try {
      const { data } = await client.query({
        query: q_pages_by_slug,
        variables: {
          filters: {
            slug: {
              eqi: slug,
            },
          },
        },
      });

      const page = data?.pages?.[0] || null;

      return {
        page,
        is404: !page,
      };
    } catch (error) {
      console.error("Error fetching page props:", { error });

      return {
        is404: true,
        page: null,
      };
    }
  },
);
