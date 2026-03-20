import type { Metadata } from "next";
import LmsLanding from "@/views/LmsLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your LMS product",
  description:
    "Launch a learning management system you own—courses, assessments, cohorts, and analytics tailored to your training or education product.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your LMS product",
    description:
      "Launch a learning management system you own—courses, assessments, cohorts, and analytics tailored to your training or education product.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your LMS product",
    description:
      "Launch a learning management system you own—courses, assessments, cohorts, and analytics tailored to your training or education product.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function LmsPage() {
  return <LmsLanding />;
}
