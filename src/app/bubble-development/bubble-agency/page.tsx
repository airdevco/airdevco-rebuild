import type { Metadata } from "next";
import BubbleAgency from "@/views/BubbleAgency";

export const metadata: Metadata = {
  title: "Airdev | A White-Glove Experience From the Premier Bubble Agency",
  description:
    "A white-glove Bubble agency experience. Dedicated teams, rigorous processes, and enterprise-grade support for your most important builds.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | A White-Glove Experience From the Premier Bubble Agency",
    description:
      "A white-glove Bubble agency experience. Dedicated teams, rigorous processes, and enterprise-grade support for your most important builds.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | A White-Glove Experience From the Premier Bubble Agency",
    description:
      "A white-glove Bubble agency experience. Dedicated teams, rigorous processes, and enterprise-grade support for your most important builds.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function BubbleAgencyPage() {
  return <BubbleAgency />;
}
