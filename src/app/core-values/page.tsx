import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layouts/MarketingLayout";
import { CoreValuesContent } from "./core-values-content";

const OG_IMAGE =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg";

const INDEX_OG_TITLE = "Airdev | The leading no-code and Bubble app development agency";

const PAGE_DESCRIPTION = "Our core values help us navigate and make decisions.";

export const metadata: Metadata = {
  title: "Core values | Airdev",
  description: PAGE_DESCRIPTION,
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: INDEX_OG_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: INDEX_OG_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function CoreValuesPage() {
  return (
    <MarketingLayout>
      <CoreValuesContent />
    </MarketingLayout>
  );
}
