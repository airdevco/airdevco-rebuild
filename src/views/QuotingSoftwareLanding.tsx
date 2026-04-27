"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { QuotingSoftwareHeader } from "@/components/landing/quoting-software-header";
import { QuotingSoftwareCTA } from "@/components/landing/quoting-software-page-cta";
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
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
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
              labelClassName="text-[15px]"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={QUOTING_SOFTWARE_CASE_SLIDES}
            />
          </div>
          <QuotingSoftwarePricingSection />
          <Testimonials
            label="Testimonials"
            labelClassName="text-[15px]"
            title="Clients trust Airdev to launch and scale"
            description=""
          />
          <div id="contact" className="scroll-mt-[88px]">
            <QuotingSoftwareCTA
              title="Have a quoting software product in mind?"
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
