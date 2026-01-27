import type { Metadata } from "next";
import Healthcare from "@/views/Healthcare";

export const metadata: Metadata = {
  title: "Healthcare | Airdev",
  description:
    "Build healthcare and life sciences software with no-code. Airdev builds HIPAA-aware, secure applications for healthcare providers, payers, and startups.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Healthcare | Airdev",
    description:
      "Build healthcare and life sciences software with no-code. Airdev builds HIPAA-aware, secure applications for healthcare providers, payers, and startups.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare | Airdev",
    description:
      "Build healthcare and life sciences software with no-code. Airdev builds HIPAA-aware, secure applications for healthcare providers, payers, and startups.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function HealthcarePage() {
  return <Healthcare />;
}
