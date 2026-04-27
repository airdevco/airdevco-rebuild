"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { BusinessSoftwareHeader } from "@/components/landing/business-software-header";
import { BusinessSoftwareCTA } from "@/components/landing/business-software-page-cta";
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

const COLFAX_STYLES = `
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

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
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
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
              labelClassName="text-[15px]"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={BUSINESS_SOFTWARE_CASE_SLIDES}
            />
          </div>
          <BusinessSoftwarePricingSection />
          <Testimonials
            label="Testimonials"
            labelClassName="text-[15px]"
            title="Clients trust Airdev to launch and scale"
            description=""
          />
          <div id="contact" className="scroll-mt-[88px]">
            <BusinessSoftwareCTA
              title="Have a business software product in mind?"
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
