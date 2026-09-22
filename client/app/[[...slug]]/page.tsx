import { getPageProps } from "@/src/services/content/getPageProps";
import { notFound } from "next/navigation";

export default async function NextjsPage({
  params: promiseParams,
  searchParams: promiseSearchParams,
}: {
  params: { slug: string[] };
  searchParams: { page?: string };
}) {
  const params = await promiseParams;
  const searchParams = await promiseSearchParams;
  const slug = params?.slug?.join("/") || "home";

  const { is404, page } = await getPageProps({ slug });

  if (is404) notFound();

  return (
    <div>
      <p>params: {JSON.stringify(params)}</p>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
      <p>slug: {slug}</p>

      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  );
}
