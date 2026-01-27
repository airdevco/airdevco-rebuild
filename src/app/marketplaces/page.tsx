import type { Metadata } from "next";
import Marketplaces from "@/views/Marketplaces";

export const metadata: Metadata = {
  title: "Marketplaces | Airdev",
  description:
    "Build two-sided marketplaces, matching platforms, and multi-party apps with no-code. Airdev builds scalable marketplace software for startups and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Marketplaces | Airdev",
    description:
      "Build two-sided marketplaces, matching platforms, and multi-party apps with no-code. Airdev builds scalable marketplace software for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplaces | Airdev",
    description:
      "Build two-sided marketplaces, matching platforms, and multi-party apps with no-code. Airdev builds scalable marketplace software for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function MarketplacesPage() {
  return <Marketplaces />;
}
