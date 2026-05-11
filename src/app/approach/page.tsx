import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ApproachLandingHero } from "./approach-landing-hero";
import { ApproachProcessSection } from "./approach-process-section";
import { ApproachWhoWeAreSection } from "./approach-who-we-are-section";
import { ApproachTestimonialsSection } from "./approach-testimonials-section";
import { ApproachCtaSection } from "./approach-cta-section";

export const metadata: Metadata = {
  title: "Approach | Airdev",
  description:
    "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The leading no-code and Bubble app development agency",
    description:
      "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The leading no-code and Bubble app development agency",
    description:
      "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function ApproachPage() {
  return (
    <>
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
      >
        <Navbar />
        <main>
          <ApproachLandingHero />
          <ApproachProcessSection />
          <ApproachWhoWeAreSection />
          <ApproachTestimonialsSection />
          <ApproachCtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
