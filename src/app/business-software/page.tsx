import type { Metadata } from "next";
import BusinessSoftwareLanding from "@/views/BusinessSoftwareLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your business software",
  description:
    "Launch business software you own—CRM, ERP, inventory, orders, quoting, HR, and learning tailored to how you operate.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your business software",
    description:
      "Launch business software you own—CRM, ERP, inventory, orders, quoting, HR, and learning tailored to how you operate.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your business software",
    description:
      "Launch business software you own—CRM, ERP, inventory, orders, quoting, HR, and learning tailored to how you operate.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function BusinessSoftwarePage() {
  return <BusinessSoftwareLanding />;
}
