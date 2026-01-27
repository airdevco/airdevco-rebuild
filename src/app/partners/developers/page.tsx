import type { Metadata } from "next";
import Developers from "@/views/Developers";

export const metadata: Metadata = {
  title: "Become a Partner Developer | Airdev",
  description:
    "Build a career in Bubble development as an Airdev Partner Developer. Earn competitive pay, work remotely, and grow your skills on high-impact projects for startups and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Become a Partner Developer | Airdev",
    description:
      "Build a career in Bubble development as an Airdev Partner Developer. Earn competitive pay, work remotely, and grow your skills on high-impact projects for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner Developer | Airdev",
    description:
      "Build a career in Bubble development as an Airdev Partner Developer. Earn competitive pay, work remotely, and grow your skills on high-impact projects for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PartnersDevelopersPage() {
  return <Developers />;
}
