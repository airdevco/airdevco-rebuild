"use client";

import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { ErpHeader } from "@/components/landing/erp-header";
import { ErpCTA } from "@/components/landing/erp-page-cta";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  ErpLandingHero,
  ErpWhyAirdev,
  ErpTypesSection,
  ErpPricingSection,
  ERP_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/erp-sections";

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

export default function ErpLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
      >
        <ErpHeader />
        <main>
          <ErpLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <ErpWhyAirdev />
          <ErpTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDY"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={ERP_CASE_SLIDES}
              hideLogoGrid
            />
          </div>
          <ErpPricingSection />
          <Testimonials
            label="Testimonials"
            title="Clients trust Airdev to launch and scale"
            description=""
          />
          <div id="contact" className="scroll-mt-[88px]">
            <ErpCTA
              title="Have an ERP product in mind?"
              description="We're happy to talk through it, even if you're just exploring."
              buttonText="Get started"
            />
          </div>
          <LandingPricingPopup plans={PRICING_PLANS} />
        </main>
        <Footer variant="minimal" />
      </div>
    </>
  );
}
