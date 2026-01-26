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
