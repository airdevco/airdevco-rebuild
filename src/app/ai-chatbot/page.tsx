import type { Metadata } from "next";
import AiChatbotLanding from "@/views/AiChatbotLanding";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your AI chatbot product",
  description:
    "We use a new approach to help entrepreneurs launch AI chatbot products they fully own, for a fraction of the cost and time of traditional development.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your AI chatbot product",
    description:
      "We use a new approach to help entrepreneurs launch AI chatbot products they fully own, for a fraction of the cost and time of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your AI chatbot product",
    description:
      "We use a new approach to help entrepreneurs launch AI chatbot products they fully own, for a fraction of the cost and time of traditional development.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function AiChatbotPage() {
  return <AiChatbotLanding />;
}
