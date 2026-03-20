import type { Metadata } from "next";
import HrManagementLanding from "@/views/HrManagementLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your HR management software",
  description:
    "Launch HR management software you own—employee records, time off, performance, recruiting, and compliance tailored to your organization.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your HR management software",
    description:
      "Launch HR management software you own—employee records, time off, performance, recruiting, and compliance tailored to your organization.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your HR management software",
    description:
      "Launch HR management software you own—employee records, time off, performance, recruiting, and compliance tailored to your organization.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function HrManagementPage() {
  return <HrManagementLanding />;
}
