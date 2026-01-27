import type { Metadata } from "next";
import ProductManagers from "@/views/ProductManagers";

export const metadata: Metadata = {
  title: "Become a Partner Product Manager | Airdev",
  description:
    "Manage end-to-end product builds as an Airdev Partner PM. Work with startups to enterprises, lead teams of top Bubble builders, and grow your product career.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Become a Partner Product Manager | Airdev",
    description:
      "Manage end-to-end product builds as an Airdev Partner PM. Work with startups to enterprises, lead teams of top Bubble builders, and grow your product career.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner Product Manager | Airdev",
    description:
      "Manage end-to-end product builds as an Airdev Partner PM. Work with startups to enterprises, lead teams of top Bubble builders, and grow your product career.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PartnersProductManagersPage() {
  return <ProductManagers />;
}
