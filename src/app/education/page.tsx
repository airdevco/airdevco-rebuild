import type { Metadata } from "next";
import Education from "@/views/Education";

export const metadata: Metadata = {
  title: "A better way to build for education | Airdev",
  description:
    "Build modern education and training platforms faster with no-code and AI. Airdev helps teams launch scalable learning products.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "A better way to build for education | Airdev",
    description:
      "Build modern education and training platforms faster with no-code and AI. Airdev helps teams launch scalable learning products.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A better way to build for education | Airdev",
    description:
      "Build modern education and training platforms faster with no-code and AI. Airdev helps teams launch scalable learning products.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function EducationPage() {
  return <Education />;
}
