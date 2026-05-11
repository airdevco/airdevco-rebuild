"use client";

import { useEffect } from "react";
import {
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  IndexLandingCTA,
  Footer,
} from "@/components/landing";
import { AiChatbotHeader } from "@/components/landing/ai-chatbot-header";
import { LandingPricingPopup } from "@/components/landing/landing-pricing-popup";
import {
  AiChatbotLandingHero,
  AiChatbotWhyAirdev,
  AiChatbotTypesSection,
  AiChatbotPricingSection,
  AI_CHATBOT_CASE_SLIDES,
  PRICING_PLANS,
} from "@/components/landing/ai-chatbot-sections";

const AI_CHATBOT_DOC_TITLE = "Airdev | The smarter way to launch your AI chatbot product";
const AI_CHATBOT_META_DESCRIPTION =
  "Launch an AI chatbot you own—conversational UI, knowledge grounding, tools, and safety tailored to your product.";
export default function AiChatbotLanding() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = AI_CHATBOT_DOC_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", AI_CHATBOT_META_DESCRIPTION);
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
        <AiChatbotHeader />
        <main>
          <AiChatbotLandingHero />
          <div className="pt-8 pb-4">
            <ClientLogoTicker variant="featured" />
          </div>
          <AiChatbotWhyAirdev />
          <AiChatbotTypesSection />
          <div id="case-studies" className="scroll-mt-[88px]">
            <CaseStudies
              label="CASE STUDIES"
              description="From MVPs that raised millions to enterprise platforms serving thousands of users."
              slides={AI_CHATBOT_CASE_SLIDES}
            />
          </div>
          <AiChatbotPricingSection />
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
              title="Have an AI chatbot product in mind?"
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
