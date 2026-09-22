import { getPageProps } from "@/src/services/content/getPageProps";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function NextjsPage({
  params: promiseParams,
  searchParams: promiseSearchParams,
}: PageProps) {
  const params = await promiseParams;
  const searchParams = await promiseSearchParams;
  const slug = params?.slug?.join("/") || "home";

  const { is404, page } = await getPageProps(slug);

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join("/")
    : resolvedParams.slug || "home";

  const { page, is404 } = await getPageProps(slug);

  if (is404 || !page) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: page?.seo?.metaTitle || page.title || "Hassan",
    description: page?.seo?.metaDescription || undefined,

    robots: page?.seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,

    alternates: page?.seo?.canonicalUrl
      ? {
          canonical: page?.seo?.canonicalUrl,
        }
      : undefined,

    openGraph: {
      title: page?.seo?.metaTitle || page.title || "Hassan",
      description: page?.seo?.metaDescription || undefined,
      images: page?.seo?.metaImage?.url
        ? [
            {
              url: page?.seo?.metaImage.url,
              alt: page?.seo?.metaImage.alternativeText || undefined,
            },
          ]
        : undefined,
      type: "website",
    },
  };
}
