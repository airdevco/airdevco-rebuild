import type { Metadata } from "next";
import InternalTools from "@/views/InternalTools";

export const metadata: Metadata = {
  title: "Internal Tools | Airdev",
  description:
    "Build custom internal tools, ops dashboards, and workflow apps with no-code. Airdev builds secure, performant internal software for teams and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Internal Tools | Airdev",
    description:
      "Build custom internal tools, ops dashboards, and workflow apps with no-code. Airdev builds secure, performant internal software for teams and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Tools | Airdev",
    description:
      "Build custom internal tools, ops dashboards, and workflow apps with no-code. Airdev builds secure, performant internal software for teams and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function InternalToolsPage() {
  return <InternalTools />;
}
