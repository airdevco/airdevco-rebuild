import type { Metadata } from "next";
import BubbleDevelopment from "@/views/BubbleDevelopment";

export const metadata: Metadata = {
  title: "Hire Top 1% Bubble Developers | Agency & Freelancer Options",
  description:
    "Hire vetted Bubble developers for your next build. Choose agency quality or flexible freelancers—all trained on Airdev's Canvas framework and processes.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Hire Top 1% Bubble Developers | Agency & Freelancer Options",
    description:
      "Hire vetted Bubble developers for your next build. Choose agency quality or flexible freelancers—all trained on Airdev's Canvas framework and processes.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Top 1% Bubble Developers | Agency & Freelancer Options",
    description:
      "Hire vetted Bubble developers for your next build. Choose agency quality or flexible freelancers—all trained on Airdev's Canvas framework and processes.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function BubbleDevelopmentPage() {
  return <BubbleDevelopment />;
}
