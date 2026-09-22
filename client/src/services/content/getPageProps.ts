import { IGenPage } from "@/src/types/IGenTypes";
import { client } from "../graphQL/client";
import { q_pages_by_slug } from "../graphQL/queries/q_pages_by_slug";

interface IPagePropsReturn {
  page: IGenPage | null;
  is404: boolean;
}

export const getPageProps = async ({
  slug,
}: {
  slug: string;
}): Promise<IPagePropsReturn> => {
  try {
    const pageResponse = await client.query({
      query: q_pages_by_slug,
      variables: {
        filters: {
          slug: {
            eqi: slug,
          },
        },
      },
    });

    return {
      page: pageResponse.data?.pages?.[0] || null,
      is404: !pageResponse.data?.pages?.[0],
    };
  } catch (error) {
    console.error("Error fetching page props:", { error });
    return {
      is404: true,
      page: null,
    };
  }
};
