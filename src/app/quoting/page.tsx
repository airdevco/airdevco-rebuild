import type { Metadata } from "next";
import QuotingSoftwareLanding from "@/views/QuotingSoftwareLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your quoting software",
  description:
    "Launch quoting software you own—catalogs, CPQ, approvals, and CRM integrations tailored to your sales motion.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your quoting software",
    description:
      "Launch quoting software you own—catalogs, CPQ, approvals, and CRM integrations tailored to your sales motion.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your quoting software",
    description:
      "Launch quoting software you own—catalogs, CPQ, approvals, and CRM integrations tailored to your sales motion.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function QuotingSoftwarePage() {
  return <QuotingSoftwareLanding />;
}
