import type { Metadata } from "next";
import FullScaleBuilds from "@/views/FullScaleBuilds";

export const metadata: Metadata = {
  title: "Full-scale builds | Airdev",
  description:
    "Scale your product with full-scale no-code builds. Airdev delivers complex, enterprise-grade applications with clear processes and expert teams.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Full-scale builds | Airdev",
    description:
      "Scale your product with full-scale no-code builds. Airdev delivers complex, enterprise-grade applications with clear processes and expert teams.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-scale builds | Airdev",
    description:
      "Scale your product with full-scale no-code builds. Airdev delivers complex, enterprise-grade applications with clear processes and expert teams.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function FullScaleBuildsPage() {
  return <FullScaleBuilds />;
}
