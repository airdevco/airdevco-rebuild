import type { Metadata } from "next";
import BubbleAppAudit from "@/views/BubbleAppAudit";

export const metadata: Metadata = {
  title: "Bubble App Audit | Airdev",
  description:
    "Get a detailed report of the current state of your Bubble app, along with a plan to make it more secure, performant, and scalable.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Bubble App Audit | Airdev",
    description:
      "Get a detailed report of the current state of your Bubble app, along with a plan to make it more secure, performant, and scalable.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble App Audit | Airdev",
    description:
      "Get a detailed report of the current state of your Bubble app, along with a plan to make it more secure, performant, and scalable.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function BubbleAppAuditPage() {
  return <BubbleAppAudit />;
}
