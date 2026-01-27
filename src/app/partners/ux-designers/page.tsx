import type { Metadata } from "next";
import UxDesigners from "@/views/UxDesigners";

export const metadata: Metadata = {
  title: "Become a Partner UX Designer | Airdev",
  description:
    "Design amazing products as an Airdev Partner Designer. Create high-fidelity Figma mockups for client apps, work remotely, and grow your design career.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Become a Partner UX Designer | Airdev",
    description:
      "Design amazing products as an Airdev Partner Designer. Create high-fidelity Figma mockups for client apps, work remotely, and grow your design career.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner UX Designer | Airdev",
    description:
      "Design amazing products as an Airdev Partner Designer. Create high-fidelity Figma mockups for client apps, work remotely, and grow your design career.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PartnersUxDesignersPage() {
  return <UxDesigners />;
}
