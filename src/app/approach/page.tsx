import type { Metadata } from "next";
import Approach from "@/views/Approach";

export const metadata: Metadata = {
  title: "Software Development Using the Power of No Code | Airdev",
  description:
    "Learn about our approach to software development. Our proprietary Canvas building framework supercharges the Bubble building process, providing clients with beautiful design, more admin controls, and cost and time savings.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Software Development Using the Power of No Code | Airdev",
    description:
      "Learn about our approach to software development. Our proprietary Canvas building framework supercharges the Bubble building process, providing clients with beautiful design, more admin controls, and cost and time savings.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Using the Power of No Code | Airdev",
    description:
      "Learn about our approach to software development. Our proprietary Canvas building framework supercharges the Bubble building process, providing clients with beautiful design, more admin controls, and cost and time savings.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ApproachPage() {
  return <Approach />;
}
