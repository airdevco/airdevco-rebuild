import type { Metadata } from "next";
import FlexBubbleFreelancers from "@/views/FlexBubbleFreelancers";

/** Matches airdev.co flex freelancers OG; tab title uses requested wording ("the top 1%"). */
const PAGE_TITLE = "Airdev Flex | Hire the top 1% Bubble Freelancers for Any Budget";
const PAGE_DESCRIPTION =
  "Hire the most experienced Bubble Freelancers to build your app 5x faster and cheaper than traditional freelancers using visual programming.";
const OG_IMAGE =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bc419f43b271de1b9adff7_airdev-open-graph-2%20(1).jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function FlexBubbleFreelancersPage() {
  return <FlexBubbleFreelancers />;
}
