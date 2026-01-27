import type { Metadata } from "next";
import AiEnablement from "@/views/AiEnablement";

export const metadata: Metadata = {
  title: "AI enablement | Airdev",
  description:
    "Enable AI capabilities in your applications with no-code. Airdev builds AI-powered features, integrations, and automation for smarter products.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "AI enablement | Airdev",
    description:
      "Enable AI capabilities in your applications with no-code. Airdev builds AI-powered features, integrations, and automation for smarter products.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI enablement | Airdev",
    description:
      "Enable AI capabilities in your applications with no-code. Airdev builds AI-powered features, integrations, and automation for smarter products.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function AiEnablementPage() {
  return <AiEnablement />;
}
