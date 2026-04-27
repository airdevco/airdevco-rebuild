"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { OrderManagementHeader } from "@/components/landing/order-management-header";
import { OrderManagementCTA } from "@/components/landing/order-management-page-cta";
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
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
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
              labelClassName="text-[15px]"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={ORDER_MANAGEMENT_CASE_SLIDES}
            />
          </div>
          <OrderManagementPricingSection />
          <Testimonials
            label="Testimonials"
            labelClassName="text-[15px]"
            title="Clients trust Airdev to launch and scale"
            description=""
          />
          <div id="contact" className="scroll-mt-[88px]">
            <OrderManagementCTA
              title="Ready to build order management software?"
              description="We're happy to talk through workflows, integrations, and rollout—even if you're just exploring."
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
