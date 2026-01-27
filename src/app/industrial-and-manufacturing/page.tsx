import type { Metadata } from "next";
import IndustrialAndManufacturing from "@/views/IndustrialAndManufacturing";

export const metadata: Metadata = {
  title: "Industrial & Manufacturing | Airdev",
  description:
    "Build operations, supply chain, and manufacturing software with no-code. Airdev builds internal tools and platforms for industrial and manufacturing companies.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Industrial & Manufacturing | Airdev",
    description:
      "Build operations, supply chain, and manufacturing software with no-code. Airdev builds internal tools and platforms for industrial and manufacturing companies.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial & Manufacturing | Airdev",
    description:
      "Build operations, supply chain, and manufacturing software with no-code. Airdev builds internal tools and platforms for industrial and manufacturing companies.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function IndustrialAndManufacturingPage() {
  return <IndustrialAndManufacturing />;
}
