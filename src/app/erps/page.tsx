import type { Metadata } from "next";
import Erps from "@/views/Erps";

export const metadata: Metadata = {
  title: "ERPs | Airdev",
  description:
    "Build custom ERP-style operations software with no-code. Airdev helps teams ship finance, inventory, orders, and workflows tailored to how the business actually runs.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "ERPs | Airdev",
    description:
      "Build custom ERP-style operations software with no-code. Airdev helps teams ship finance, inventory, orders, and workflows tailored to how the business actually runs.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPs | Airdev",
    description:
      "Build custom ERP-style operations software with no-code. Airdev helps teams ship finance, inventory, orders, and workflows tailored to how the business actually runs.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ErpsPage() {
  return <Erps />;
}
