import type { Metadata } from "next";
import Portals from "@/views/Portals";

export const metadata: Metadata = {
  title: "Launch your customer portal | Airdev",
  description:
    "Launch self-service customer portals with no-code. Airdev helps startups and enterprises ship flexible portal experiences in a fraction of the time and cost of traditional development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Launch your customer portal | Airdev",
    description:
      "Launch self-service customer portals with no-code. Airdev helps startups and enterprises ship flexible portal experiences in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch your customer portal | Airdev",
    description:
      "Launch self-service customer portals with no-code. Airdev helps startups and enterprises ship flexible portal experiences in a fraction of the time and cost of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function PortalsPage() {
  return <Portals />;
}
