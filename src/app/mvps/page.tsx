import type { Metadata } from "next";
import Mvps from "@/views/Mvps";

export const metadata: Metadata = {
  title: "Launch fast, scale smart | Airdev",
  description:
    "Launch your MVP fast with no-code. Airdev builds production-ready MVPs in weeks so you can validate, iterate, and scale without traditional dev timelines.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Launch fast, scale smart | Airdev",
    description:
      "Launch your MVP fast with no-code. Airdev builds production-ready MVPs in weeks so you can validate, iterate, and scale without traditional dev timelines.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch fast, scale smart | Airdev",
    description:
      "Launch your MVP fast with no-code. Airdev builds production-ready MVPs in weeks so you can validate, iterate, and scale without traditional dev timelines.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function MvpsPage() {
  return <Mvps />;
}
