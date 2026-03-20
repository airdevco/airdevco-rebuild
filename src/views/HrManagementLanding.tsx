"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { HrManagementHeader } from "@/components/landing/hr-management-header";
import { HrManagementCTA } from "@/components/landing/hr-management-page-cta";
import {
  HrManagementLandingHero,
  HrManagementWhyAirdev,
  HrManagementTypesSection,
  HrManagementPricingSection,
  HR_MANAGEMENT_CASE_SLIDES,
} from "@/components/landing/hr-management-sections";

const HR_MANAGEMENT_DOC_TITLE = "Airdev | The smarter way to launch your HR management software";
const HR_MANAGEMENT_META_DESCRIPTION =
  "Launch HR management software you own—employee records, time off, performance, recruiting, and compliance tailored to your organization.";

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
      <style dangerouslySetInnerHTML={{ __html: COLFAX_STYLES }} />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
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
          />
          <div id="contact" className="scroll-mt-[88px]">
            <HrManagementCTA
              title="Have an HR management product in mind?"
              description="We're happy to talk through it, even if you're just exploring."
              buttonText="Talk to Us"
            />
          </div>
        </main>
        <Footer variant="minimal" />
      </div>
    </>
  );
}
