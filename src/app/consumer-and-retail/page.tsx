import type { Metadata } from "next";
import ConsumerAndRetail from "@/views/ConsumerAndRetail";

export const metadata: Metadata = {
  title: "Consumer & Retail | Airdev",
  description:
    "Build consumer apps, e-commerce, and retail software with no-code. Airdev builds engaging, scalable applications for D2C brands and retail companies.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Consumer & Retail | Airdev",
    description:
      "Build consumer apps, e-commerce, and retail software with no-code. Airdev builds engaging, scalable applications for D2C brands and retail companies.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer & Retail | Airdev",
    description:
      "Build consumer apps, e-commerce, and retail software with no-code. Airdev builds engaging, scalable applications for D2C brands and retail companies.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ConsumerAndRetailPage() {
  return <ConsumerAndRetail />;
}
