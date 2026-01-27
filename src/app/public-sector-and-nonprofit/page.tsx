import type { Metadata } from "next";
import PublicSectorAndNonprofit from "@/views/PublicSectorAndNonprofit";

export const metadata: Metadata = {
  title: "Public Sector & Nonprofit | Airdev",
  description:
    "Build grant management, program delivery, and civic software with no-code. Airdev builds secure, compliant apps for public sector and nonprofit organizations.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Public Sector & Nonprofit | Airdev",
    description:
      "Build grant management, program delivery, and civic software with no-code. Airdev builds secure, compliant apps for public sector and nonprofit organizations.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Sector & Nonprofit | Airdev",
    description:
      "Build grant management, program delivery, and civic software with no-code. Airdev builds secure, compliant apps for public sector and nonprofit organizations.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PublicSectorAndNonprofitPage() {
  return <PublicSectorAndNonprofit />;
}
