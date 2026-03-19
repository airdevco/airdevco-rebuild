import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your marketplace",
  description:
    "Launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch. Fast, flexible, and you own the platform.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your marketplace",
    description:
      "Launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your marketplace",
    description:
      "Launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function SaasPage() {
  redirect("/marketplace");
}
