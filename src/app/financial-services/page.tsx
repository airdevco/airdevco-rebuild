import type { Metadata } from "next";
import FinancialServices from "@/views/FinancialServices";

export const metadata: Metadata = {
  title: "A better way to build fintech | Airdev",
  description:
    "Build secure fintech and financial services apps with no-code. Airdev builds compliant, scalable financial products for startups and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "A better way to build fintech | Airdev",
    description:
      "Build secure fintech and financial services apps with no-code. Airdev builds compliant, scalable financial products for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A better way to build fintech | Airdev",
    description:
      "Build secure fintech and financial services apps with no-code. Airdev builds compliant, scalable financial products for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function FinancialServicesPage() {
  return <FinancialServices />;
}
