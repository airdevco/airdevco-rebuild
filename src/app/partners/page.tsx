import type { Metadata } from "next";
import Partners from "@/views/Partners";

export const metadata: Metadata = {
  title: "Partner Program | Airdev",
  description:
    "Join a global remote team of the world's best no-code experts. Airdev Partners offers the flexibility of freelancing without the hassle of finding clients—build software for startups to enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Partner Program | Airdev",
    description:
      "Join a global remote team of the world's best no-code experts. Airdev Partners offers the flexibility of freelancing without the hassle of finding clients—build software for startups to enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Program | Airdev",
    description:
      "Join a global remote team of the world's best no-code experts. Airdev Partners offers the flexibility of freelancing without the hassle of finding clients—build software for startups to enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PartnersPage() {
  return <Partners />;
}
