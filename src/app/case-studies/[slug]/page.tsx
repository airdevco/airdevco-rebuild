import type { Metadata } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import CaseStudyDetail from "@/views/CaseStudyDetail";

const getConvexClient = () =>
  new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const client = getConvexClient();
    const slugs = await client.query(api.caseStudies.listSlugs, {});
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const client = getConvexClient();
    const study = await client.query(api.caseStudies.getBySlug, { slug });
    if (!study) return { title: "Case Study | Airdev" };

    const title = study.metaTitle ?? study.name;
    const description =
      study.heroSummary ??
      study.thumbnailSummary ??
      "Read this Airdev client story.";

    return {
      title: `${title} | Airdev`,
      description,
      openGraph: {
        type: "website",
        title,
        description,
        images: study.thumbnailImage
          ? [study.thumbnailImage]
          : [
              "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
            ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: study.thumbnailImage
          ? [study.thumbnailImage]
          : [
              "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
            ],
      },
    };
  } catch {
    return { title: "Case Study | Airdev" };
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseStudyDetail slug={slug} />;
}
