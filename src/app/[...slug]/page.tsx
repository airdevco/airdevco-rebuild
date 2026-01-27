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

export function generateStaticParams() {
  const routes = Object.values(ROUTES).filter(
    (path) => path !== "*" && !EXPLICIT_NEXT_PATHS.has(path)
  );
  return routes.map((path) => {
    const slug = path.slice(1).split("/").filter(Boolean);
    return { slug };
  });
}

export default function Page() {
  return <ClientOnly />;
}
