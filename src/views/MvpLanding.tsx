"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
} from "@/components/landing";
import { MvpHeader } from "@/components/landing/mvp-header";
import { MvpCTA } from "@/components/landing/mvp-page-cta";
import {
  MvpLandingHero,
  MvpWhyAirdev,
  MvpTypesSection,
  MvpPricingSection,
  MVP_CASE_SLIDES,
} from "@/components/landing/mvp-sections";

const MVP_DOC_TITLE = "Airdev | The smarter way to launch your MVP";
const MVP_META_DESCRIPTION =
  "Ship a production-ready MVP in weeks with Airdev. Focused scope, real users, and software you own. No-code and Bubble expertise.";

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

export default function MvpLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = MVP_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", MVP_META_DESCRIPTION);
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
        <MvpHeader />
        <main>
          <MvpLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <MvpWhyAirdev />
          <MvpTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={MVP_CASE_SLIDES}
            />
          </div>
          <MvpPricingSection />
          <Testimonials
            label="Testimonials"
            title="Clients trust Airdev to launch and scale"
            description=""
          />
          <div id="contact" className="scroll-mt-[88px]">
            <MvpCTA
              title="Ready to scope your MVP?"
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
