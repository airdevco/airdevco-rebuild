"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { OrderManagementHeader } from "@/components/landing/order-management-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  OrderManagementLandingHero,
  OrderManagementWhyAirdev,
  OrderManagementTypesSection,
  OrderManagementPricingSection,
  ORDER_MANAGEMENT_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/order-management-sections";

const ORDER_MANAGEMENT_DOC_TITLE = "Airdev | The smarter way to launch your order management software";
const ORDER_MANAGEMENT_META_DESCRIPTION =
  "Launch order management software you own—faster than traditional development, with room to grow.";
export default function OrderManagementLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = ORDER_MANAGEMENT_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", ORDER_MANAGEMENT_META_DESCRIPTION);
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
        <OrderManagementHeader />
        <main>
          <OrderManagementLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <OrderManagementWhyAirdev />
          <OrderManagementTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={ORDER_MANAGEMENT_CASE_SLIDES}
            />
          </div>
          <OrderManagementPricingSection />
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
              title="Ready to build order management software?"
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
