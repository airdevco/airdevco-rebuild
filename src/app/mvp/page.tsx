import type { Metadata } from "next";
import MvpLanding from "@/views/MvpLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your MVP",
  description:
    "Ship a production-ready MVP in weeks with Airdev. Focused scope, real users, and software you own. No-code and Bubble expertise.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your MVP",
    description:
      "Ship a production-ready MVP in weeks with Airdev. Focused scope, real users, and software you own. No-code and Bubble expertise.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your MVP",
    description:
      "Ship a production-ready MVP in weeks with Airdev. Focused scope, real users, and software you own. No-code and Bubble expertise.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function MvpPage() {
  return <MvpLanding />;
}
