import type { Metadata } from "next";
import OrderManagementLanding from "@/views/OrderManagementLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your order management software",
  description:
    "Launch order management software you own—faster than traditional development, with room to grow.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your order management software",
    description:
      "Launch order management software you own—faster than traditional development, with room to grow.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your order management software",
    description:
      "Launch order management software you own—faster than traditional development, with room to grow.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function OrderManagementPage() {
  return <OrderManagementLanding />;
}
