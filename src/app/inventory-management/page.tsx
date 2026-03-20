import type { Metadata } from "next";
import InventoryManagementLanding from "@/views/InventoryManagementLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your inventory management product",
  description:
    "We help teams ship inventory and warehouse software with real-time stock visibility, accurate movements, and workflows that match how you operate.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your inventory management product",
    description:
      "We help teams ship inventory and warehouse software with real-time stock visibility, accurate movements, and workflows that match how you operate.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your inventory management product",
    description:
      "We help teams ship inventory and warehouse software with real-time stock visibility, accurate movements, and workflows that match how you operate.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function InventoryManagementPage() {
  return <InventoryManagementLanding />;
}
