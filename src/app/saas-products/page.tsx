import type { Metadata } from "next";
import SaasProducts from "@/views/SaasProducts";

export const metadata: Metadata = {
  title: "A better way to launch your SaaS startup | Airdev",
  description:
    "Launch your SaaS startup faster with no-code. Airdev builds secure, scalable SaaS products in a fraction of the time and cost of traditional development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "A better way to launch your SaaS startup | Airdev",
    description:
      "Launch your SaaS startup faster with no-code. Airdev builds secure, scalable SaaS products in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A better way to launch your SaaS startup | Airdev",
    description:
      "Launch your SaaS startup faster with no-code. Airdev builds secure, scalable SaaS products in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function SaasProductsPage() {
  return <SaasProducts />;
}
