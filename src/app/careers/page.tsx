import type { Metadata } from "next";
import Careers from "@/views/Careers";

export const metadata: Metadata = {
  title: "No-Code Careers for Developers, Designers & PMs | Airdev",
  description:
    "Join Airdev's team or partner program. Build no-code products, grow your career, and work with top talent in the no-code space.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "No-Code Careers for Developers, Designers & PMs | Airdev",
    description:
      "Join Airdev's team or partner program. Build no-code products, grow your career, and work with top talent in the no-code space.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No-Code Careers for Developers, Designers & PMs | Airdev",
    description:
      "Join Airdev's team or partner program. Build no-code products, grow your career, and work with top talent in the no-code space.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function CareersPage() {
  return <Careers />;
}
