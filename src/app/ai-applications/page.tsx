import type { Metadata } from "next";
import AiApplications from "@/views/AiApplications";

export const metadata: Metadata = {
  title: "AI Applications | Airdev",
  description:
    "Build AI-powered applications with no-code. Airdev builds intelligent apps with integrations, automation, and custom AI features for startups and enterprises.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "AI Applications | Airdev",
    description:
      "Build AI-powered applications with no-code. Airdev builds intelligent apps with integrations, automation, and custom AI features for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Applications | Airdev",
    description:
      "Build AI-powered applications with no-code. Airdev builds intelligent apps with integrations, automation, and custom AI features for startups and enterprises.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function AiApplicationsPage() {
  return <AiApplications />;
}
