"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { BusinessSoftwareHeader } from "@/components/landing/business-software-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  BusinessSoftwareLandingHero,
  BusinessSoftwareWhyAirdev,
  BusinessSoftwareTypesSection,
  BusinessSoftwarePricingSection,
  BUSINESS_SOFTWARE_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/business-software-sections";

const BUSINESS_SOFTWARE_DOC_TITLE = "Airdev | The smarter way to launch your business software";
const BUSINESS_SOFTWARE_META_DESCRIPTION =
  "Launch business software you own—CRM, ERP, inventory, orders, quoting, HR, and learning tailored to how you operate.";
export default function BusinessSoftwareLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = BUSINESS_SOFTWARE_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", BUSINESS_SOFTWARE_META_DESCRIPTION);
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
        <BusinessSoftwareHeader />
        <main>
          <BusinessSoftwareLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <BusinessSoftwareWhyAirdev />
          <BusinessSoftwareTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={BUSINESS_SOFTWARE_CASE_SLIDES}
            />
          </div>
          <BusinessSoftwarePricingSection />
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
              title="Have a business software product in mind?"
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
