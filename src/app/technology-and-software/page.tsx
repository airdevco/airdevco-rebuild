import type { Metadata } from "next";
import TechnologyAndSoftware from "@/views/TechnologyAndSoftware";

export const metadata: Metadata = {
  title: "Technology & Software | Airdev",
  description:
    "Build developer tools, data & analytics, and technology platforms with no-code. Airdev builds software products for tech companies and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Technology & Software | Airdev",
    description:
      "Build developer tools, data & analytics, and technology platforms with no-code. Airdev builds software products for tech companies and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology & Software | Airdev",
    description:
      "Build developer tools, data & analytics, and technology platforms with no-code. Airdev builds software products for tech companies and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function TechnologyAndSoftwarePage() {
  return <TechnologyAndSoftware />;
}
