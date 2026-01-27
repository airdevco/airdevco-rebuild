import { ClientOnly } from "./client";
import { ROUTES } from "@/config/routes";

/** Paths with explicit Next.js routes; exclude from catch-all static params */
const EXPLICIT_NEXT_PATHS = new Set([
  "/",
  "/mission",
  "/approach",
  "/core-values",
  "/bubble-app-audit",
  "/partners",
  "/partners/developers",
  "/partners/product-managers",
  "/partners/ux-designers",
  "/client-stories",
  "/saas-products",
  "/marketplaces",
  "/internal-tools",
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
  "/ai-enablement",
  "/careers",
  "/blog",
  "/post/will-ai-make-software-developers-obsolete",
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

export function generateStaticParams() {
  const routes = Object.values(ROUTES).filter(
    (path) =>
      path !== "*" &&
      !EXPLICIT_NEXT_PATHS.has(path) &&
      !EXCLUDED_ROUTES.has(path)
  );
  const params = routes.map((path) => {
    const slug = path.slice(1).split("/").filter(Boolean);
    return { slug };
  });
  // output: 'export' requires at least one static path for dynamic routes
  if (params.length === 0) {
    return [{ slug: ["_"] }];
  }
  return params;
}

export default function Page() {
  return <ClientOnly />;
}
