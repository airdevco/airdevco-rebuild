"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { MvpHeader } from "@/components/landing/mvp-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  MvpLandingHero,
  MvpWhyAirdev,
  MvpTypesSection,
  MvpPricingSection,
  MVP_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/mvp-sections";

const MVP_DOC_TITLE = "Airdev | The smarter way to launch your MVP";
const MVP_META_DESCRIPTION =
  "Ship a production-ready MVP in weeks with Airdev. Focused scope, real users, and software you own. No-code and Bubble expertise.";
export default function MvpLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = MVP_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", MVP_META_DESCRIPTION);
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
        <MvpHeader />
        <main>
          <MvpLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <MvpWhyAirdev />
          <MvpTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={MVP_CASE_SLIDES}
            />
          </div>
          <MvpPricingSection />
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
              title="Ready to scope your MVP?"
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
