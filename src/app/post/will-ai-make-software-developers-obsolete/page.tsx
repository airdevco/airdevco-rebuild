import type { Metadata } from "next";
import WillAIMakeDevelopersObsolete from "@/views/WillAIMakeDevelopersObsolete";

export const metadata: Metadata = {
  title: "Will AI make software developers obsolete? | Airdev",
  description:
    "Will AI replace software developers? Find out as we explore the potential impact of artificial intelligence on the future of software development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "article",
    title: "Will AI make software developers obsolete? | Airdev",
    description:
      "Will AI replace software developers? Find out as we explore the potential impact of artificial intelligence on the future of software development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Will AI make software developers obsolete? | Airdev",
    description:
      "Will AI replace software developers? Find out as we explore the potential impact of artificial intelligence on the future of software development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function WillAIMakeDevelopersObsoletePage() {
  return <WillAIMakeDevelopersObsolete />;
}
