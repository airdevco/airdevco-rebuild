"use client";

import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import { MarketplaceHeader } from "@/components/landing/saas-marketplace-header";
import {
  MarketplaceLandingHero,
  MarketplaceWhyAirdev,
  MarketplaceTypesSection,
  MarketplacePricingSection,
  SAAS_MARKETPLACE_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/saas-marketplace-sections";
export default function Marketplace() {
  return (
    <>
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
      >
        <MarketplaceHeader />
        <main>
          <MarketplaceLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <MarketplaceWhyAirdev />
          <MarketplaceTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={SAAS_MARKETPLACE_CASE_SLIDES}
            />
          </div>
          <MarketplacePricingSection />
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
              title="Have a marketplace in mind?"
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
