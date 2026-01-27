import type { Metadata } from "next";
import ClientStories from "@/views/ClientStories";

export const metadata: Metadata = {
  title: "Client Stories | Airdev",
  description:
    "We've helped hundreds of startups, fast-growing businesses, and Fortune 500 enterprises launch production-grade no-code applications in a fraction of the time and cost of traditional development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Client Stories | Airdev",
    description:
      "We've helped hundreds of startups, fast-growing businesses, and Fortune 500 enterprises launch production-grade no-code applications in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | Airdev",
    description:
      "We've helped hundreds of startups, fast-growing businesses, and Fortune 500 enterprises launch production-grade no-code applications in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ClientStoriesPage() {
  return <ClientStories />;
}
