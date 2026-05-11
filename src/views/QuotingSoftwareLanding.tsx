"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { QuotingSoftwareHeader } from "@/components/landing/quoting-software-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  QuotingSoftwareLandingHero,
  QuotingSoftwareWhyAirdev,
  QuotingSoftwareTypesSection,
  QuotingSoftwarePricingSection,
  QUOTING_SOFTWARE_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/quoting-software-sections";

const QUOTING_SOFTWARE_DOC_TITLE = "Airdev | The smarter way to launch your quoting software";
const QUOTING_SOFTWARE_META_DESCRIPTION =
  "Launch quoting software you own—catalogs, CPQ, approvals, and CRM integrations tailored to your sales motion.";
export default function QuotingSoftwareLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = QUOTING_SOFTWARE_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", QUOTING_SOFTWARE_META_DESCRIPTION);
    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc !== null) metaDesc.setAttribute("content", previousDesc);
    };
  }, []);

  return (
    <>
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
      >
        <QuotingSoftwareHeader />
        <main>
          <QuotingSoftwareLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <QuotingSoftwareWhyAirdev />
          <QuotingSoftwareTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={QUOTING_SOFTWARE_CASE_SLIDES}
            />
          </div>
          <QuotingSoftwarePricingSection />
          <Testimonials
            label="Testimonials"
            title="Clients trust Airdev to launch and scale"
            description=""
            sectionClassName="pb-4"
            gridAreaClassName="pb-10"
            moreLinkWrapperClassName="mt-5"
          />
          <div id="contact" className="scroll-mt-[88px]">
            <IndexLandingCTA
              sectionClassName="pt-8 pb-10"
              title="Have a quoting software product in mind?"
              description={
                "Chat with our team to see what we can do.\nWe've shipped 1,000+ products — yours could be next."
              }
              buttonText="Talk to us"
            />
          </div>
          <LandingPricingPopup plans={PRICING_PLANS} />
        </main>
        <Footer variant="minimal" topDivider />
      </div>
    </>
  );
}
