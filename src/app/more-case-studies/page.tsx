import type { Metadata } from "next";
import MoreCaseStudies from "@/views/MoreCaseStudies";

export const metadata: Metadata = {
  title: "Client Stories | Airdev",
  description:
    "Browse all Airdev client stories. See how startups, enterprises, and nonprofits have launched production-grade no-code applications with Airdev.",
  openGraph: {
    type: "website",
    title: "Client Stories | Airdev",
    description:
      "Browse all Airdev client stories. See how startups, enterprises, and nonprofits have launched production-grade no-code applications with Airdev.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | Airdev",
    description:
      "Browse all Airdev client stories. See how startups, enterprises, and nonprofits have launched production-grade no-code applications with Airdev.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function MoreCaseStudiesPage() {
  return <MoreCaseStudies />;
}
