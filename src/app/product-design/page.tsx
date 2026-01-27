import type { Metadata } from "next";
import ProductDesign from "@/views/ProductDesign";

export const metadata: Metadata = {
  title: "Product design | Airdev",
  description:
    "Product design that drives outcomes. Airdev combines strategy, UX, and visual design to create products users love and businesses scale on.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Product design | Airdev",
    description:
      "Product design that drives outcomes. Airdev combines strategy, UX, and visual design to create products users love and businesses scale on.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product design | Airdev",
    description:
      "Product design that drives outcomes. Airdev combines strategy, UX, and visual design to create products users love and businesses scale on.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ProductDesignPage() {
  return <ProductDesign />;
}
