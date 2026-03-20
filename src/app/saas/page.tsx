import type { Metadata } from "next";
import SaasLanding from "@/views/SaasLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your SaaS startup",
  description:
    "We use a new approach to help entrepreneurs launch SaaS products, for a fraction of cost and time of traditional development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your SaaS startup",
    description:
      "We use a new approach to help entrepreneurs launch SaaS products, for a fraction of cost and time of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your SaaS startup",
    description:
      "We use a new approach to help entrepreneurs launch SaaS products, for a fraction of cost and time of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function SaasPage() {
  return <SaasLanding />;
}
