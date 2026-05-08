"use client";

import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  SaasCTA,
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

const COLFAX_STYLES = `
  @font-face {
    font-family: 'Colfax';
    src: url('/fonts/Colfax-Regular.woff2') format('woff2'), url('/fonts/Colfax-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('/fonts/Colfax-Medium.woff2') format('woff2'), url('/fonts/Colfax-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('/fonts/Colfax-Bold.woff2') format('woff2'), url('/fonts/Colfax-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('/fonts/Colfax-Black.woff2') format('woff2'), url('/fonts/Colfax-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default function Marketplace() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
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
          />
          <div id="contact" className="scroll-mt-[88px]">
            <SaasCTA
              title="Have a marketplace in mind?"
              description="We're happy to talk through it, even if you're just exploring."
              buttonText="Talk to Us"
            />
          </div>
          <LandingPricingPopup plans={PRICING_PLANS} />
        </main>
        <Footer variant="minimal" />
      </div>
    </>
  );
}
