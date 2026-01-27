import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog | Airdev",
  description:
    "Insights on no-code development, AI, software development, and building products faster. Learn from Airdev's experience building hundreds of applications.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Blog | Airdev",
    description:
      "Insights on no-code development, AI, software development, and building products faster. Learn from Airdev's experience building hundreds of applications.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Airdev",
    description:
      "Insights on no-code development, AI, software development, and building products faster. Learn from Airdev's experience building hundreds of applications.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function BlogPage() {
  return <Blog />;
}
