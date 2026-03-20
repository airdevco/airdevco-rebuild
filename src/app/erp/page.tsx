import type { Metadata } from "next";
import ErpLanding from "@/views/ErpLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your ERP product",
  description:
    "We use a modern approach to help teams launch ERP products faster, with the flexibility to match their operations and workflows.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your ERP product",
    description:
      "We use a modern approach to help teams launch ERP products faster, with the flexibility to match their operations and workflows.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your ERP product",
    description:
      "We use a modern approach to help teams launch ERP products faster, with the flexibility to match their operations and workflows.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ErpPage() {
  return <ErpLanding />;
}
