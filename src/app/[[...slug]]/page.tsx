import { ClientOnly } from "./client";
import { ROUTES } from "@/config/routes";

export function generateStaticParams() {
  const routes = Object.values(ROUTES).filter((path) => path !== "*");
  return routes.map((path) => {
    const slug = path === "/" ? [] : path.slice(1).split("/").filter(Boolean);
    return { slug };
  });
}

export default function Page() {
  return <ClientOnly />;
}
