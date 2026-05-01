import type { Metadata } from "next";
import { fetchQuery } from "convex/nextjs";
import { ClientOnly } from "./client";
import { ROUTES } from "@/config/routes";
import { CASE_STUDY_STATIC_SLUGS } from "@/config/case-study-static-slugs";
import { api } from "../../../convex/_generated/api";
import {
  absolutizeImageUrl,
  caseStudyMetaDescription,
  resolveSiteOrigin,
} from "@/lib/case-study-seo";

/** Paths with explicit Next.js routes; exclude from catch-all static params */
const EXPLICIT_NEXT_PATHS = new Set([
  "/",
  "/marketplace",
  "/saas",
  "/crm",
  "/customer-portal",
  "/knowledge-management",
  "/ai-chatbot",
  "/order-management",
  "/quoting",
  "/hr-management",
  "/business-software",
  "/erp",
  "/lms",
  "/mvp",
  "/inventory-management",
  "/mission",
  "/approach",
  "/core-values",
  "/bubble-app-audit",
  "/partners",
  "/partners/developers",
  "/partners/product-managers",
  "/partners/ux-designers",
  "/client-stories",
  "/more-case-studies",
  "/saas-products",
  "/marketplaces",
  "/portals",
  "/internal-tools",
  "/erps",
  "/ai-applications",
  "/financial-services",
  "/technology-and-software",
  "/industrial-and-manufacturing",
  "/public-sector-and-nonprofit",
  "/healthcare",
  "/consumer-and-retail",
  "/mvps",
  "/full-scale-builds",
  "/product-design",
  "/bubble-development",
  "/bubble-development/bubble-agency",
  "/bubble-development/flex-bubble-freelancers",
  "/ai-enablement",
  "/careers",
  "/blog",
]);

/** Auth and protected routes – exclude from static generation (not needed for SEO, cause build errors) */
const EXCLUDED_ROUTES = new Set([
  "/signup",
  "/login",
  "/forgot-password",
  "/reset-password",
  "/onboarding",
  "/account",
  "/admin",
  "/admin/dashboard",
  "/admin/projects",
  "/admin/team",
  "/admin/settings",
  "/portal",
  "/portal/projects",
  "/portal/customers",
]);

export async function generateStaticParams() {
  const routes = Object.values(ROUTES).filter(
    (path) =>
      path !== "*" &&
      !EXPLICIT_NEXT_PATHS.has(path) &&
      !EXCLUDED_ROUTES.has(path)
  );
  const routeParams = routes.map((path) => ({
    slug: path.slice(1).split("/").filter(Boolean),
  }));

  // Include all case study detail paths so the SPA router handles them
  const caseStudyParams = CASE_STUDY_STATIC_SLUGS.map((s) => ({
    slug: ["case-studies", s],
  }));

  // Fetch blog post slugs from Convex so /post/:slug pages get static shells
  let blogParams: { slug: string[] }[] = [];
  if (process.env.NEXT_PUBLIC_CONVEX_URL) {
    try {
      const posts = await fetchQuery(api.blogPosts.list);
      blogParams = posts.map((p) => ({ slug: ["post", p.slug] }));
    } catch {
      // If Convex is unreachable at build time, blog post direct URLs rely on
      // client-side navigation; links from /blog still work fine.
    }
  }

  const params = [...routeParams, ...caseStudyParams, ...blogParams];
  if (params.length === 0) {
    return [{ slug: ["_"] }];
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const segments = params.slug ?? [];
  if (segments.length !== 2 || segments[0] !== "case-studies") {
    return {};
  }

  const studySlug = segments[1];
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return {};
  }

  try {
    const study = await fetchQuery(api.caseStudies.getBySlug, {
      slug: studySlug,
    });

    if (study === null) {
      return {
        title: "Case study not found | Airdev",
        description:
          "This case study may have been removed or the URL is incorrect.",
      };
    }

    const siteOrigin = resolveSiteOrigin();
    const titleBase = study.metaTitle?.trim() || study.name;
    const title = `${titleBase} | Airdev`;
    const description = caseStudyMetaDescription(study);
    const ogImage = absolutizeImageUrl(siteOrigin, study.thumbnailImage);
    const path = `/case-studies/${studySlug}`;

    return {
      title,
      description: description || undefined,
      alternates: { canonical: path },
      openGraph: {
        type: "article",
        title,
        description: description || undefined,
        url: `${siteOrigin}${path}`,
        images: ogImage ? [{ url: ogImage, alt: study.name }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: description || undefined,
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch {
    return {
      title: "Case study | Airdev",
      description: "Client story from Airdev.",
    };
  }
}

export default function Page() {
  return <ClientOnly />;
}
