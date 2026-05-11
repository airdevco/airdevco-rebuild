"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { HrManagementHeader } from "@/components/landing/hr-management-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  HrManagementLandingHero,
  HrManagementWhyAirdev,
  HrManagementTypesSection,
  HrManagementPricingSection,
  HR_MANAGEMENT_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/hr-management-sections";

const HR_MANAGEMENT_DOC_TITLE = "Airdev | The smarter way to launch your HR management software";
const HR_MANAGEMENT_META_DESCRIPTION =
  "Launch HR management software you own—employee records, time off, performance, recruiting, and compliance tailored to your organization.";
export default function HrManagementLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = HR_MANAGEMENT_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", HR_MANAGEMENT_META_DESCRIPTION);
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
        <HrManagementHeader />
        <main>
          <HrManagementLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <HrManagementWhyAirdev />
          <HrManagementTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={HR_MANAGEMENT_CASE_SLIDES}
            />
          </div>
          <HrManagementPricingSection />
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
              title="Have an HR management product in mind?"
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
