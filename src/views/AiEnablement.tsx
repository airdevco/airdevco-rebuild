"use client";

import {
  Navbar,
  CaseStudies,
  IndexLandingCTA,
  Footer,
  ProcessSection,
  WhoWeAre,
} from "@/components/landing";
import { Button } from "@/components/ui/button";
import { AiEnablementWhoWeWorkWithSection } from "@/components/landing/ai-enablement-who-we-work-with-section";
import { AiEnablementPhase01Section } from "@/components/landing/ai-enablement-phase-01-section";
import { AiEnablementPhase02Section } from "@/components/landing/ai-enablement-phase-02-section";
import { AiEnablementCaseStudySection } from "@/components/landing/ai-enablement-case-study-section";
import { AiEnablementSampleSolutionsSection } from "@/components/landing/ai-enablement-sample-solutions-section";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";

/** Same asset as `/approach` hero (`ApproachLandingHero`). */
const AI_ENABLEMENT_HERO_BLUR_BG =
  "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d482ff67a3aac218170979_blurbg3.svg";

const AI_ENABLEMENT_SLIDES = [
  {
    id: "kidsbook",
    caseStudySlug: "kidsbook-marketplace-app",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767135534066x924543251627778700/kidsbook.png",
    logoText: "",
    heading: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Kids' activities marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ]
  },
  {
    id: "bolster",
    caseStudySlug: CASE_STUDY_SLUG.bolster,
    company: "Bolster",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767069657325x211103928710127970/bolster.png",
    logoText: "",
    heading: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076547ab429d14db22f83_bolster.jpeg",
    imageTitle: "How Bolster developed 3 custom no-code web apps on Bubble in just 6 weeks per app",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Custom web portals", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks per app", color: "#a960ee" },
      { label: "Key results", value: "Raised $2.8M in funding", color: "#ff6b6b" },
    ]
  },
  {
    id: "playground",
    caseStudySlug: "my-nft-alerts-web-platform-no-code",
    company: "My NFT Alerts",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777953165x204069526181363420/mynftalerts.png",
    logoText: "",
    heading: "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635079364569b5471f0fc12d_nft.jpeg",
    imageTitle: "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Portfolio tracking app", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Rapid user adoption", color: "#ff6b6b" },
    ]
  }
];

const AI_ENABLEMENT_WHO_WE_ARE_STATS = [
  {
    label: (
      <span className="inline-block max-w-[14rem]">
        Software projects shipped
        <br />
        since 2015
      </span>
    ),
    value: "1,000",
    suffix: "+",
  },
  {
    label: "Clients ranging from global enterprises to seed-stage startups",
    value: "F100",
    suffix: "",
  },
  {
    label: "Building production software before AI made it cool",
    value: 9,
    suffix: " yrs",
  },
  {
    label: "Strategists, designers, engineers under one roof. No subcontractors.",
    value: "In-house",
    suffix: "",
  },
];

const AiEnablement = () => {
  const openLandingPricingPopup = () => {
    window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
  };

  return (
    <>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <section className="relative scroll-mt-[88px] overflow-x-hidden bg-white pb-16 pt-32 lg:pb-20 lg:pt-48">
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-white"
              aria-hidden
              style={{
                backgroundImage: `url(${AI_ENABLEMENT_HERO_BLUR_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              aria-hidden
              style={{
                background: `
            linear-gradient(
              to top,
              #ffffff 0%,
              rgba(255, 255, 255, 0.97) 5%,
              rgba(255, 255, 255, 0.88) 12%,
              rgba(255, 255, 255, 0.58) 24%,
              rgba(255, 255, 255, 0.28) 38%,
              rgba(255, 255, 255, 0.08) 50%,
              transparent 64%
            ),
            linear-gradient(
              to bottom,
              #ffffff 0%,
              rgba(255, 255, 255, 0.98) 4%,
              rgba(255, 255, 255, 0.9) 10%,
              rgba(255, 255, 255, 0.72) 18%,
              rgba(255, 255, 255, 0.42) 30%,
              rgba(255, 255, 255, 0.15) 44%,
              transparent 62%
            )
          `,
              }}
            />

            <div className="relative z-10 mx-auto max-w-[1200px] px-6">
              <div className="mx-auto max-w-5xl">
                <h1 className="mx-auto mb-8 text-left text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0D2350] lg:text-center lg:text-[80px]">
                  <span className="block">AI Enablement,</span>
                  <span className="block text-[#6C7280]">end-to-end.</span>
                </h1>

                <p className="mx-auto mb-8 max-w-lg whitespace-pre-line text-left text-xl leading-relaxed text-gray-600 lg:text-center">
                  {`Most firms will sell you a strategy or sell you code.
We do both — figuring out where AI actually fits in your business, then building and shipping it.`}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                  <Button
                    type="button"
                    onClick={openLandingPricingPopup}
                    className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none"
                  >
                    Book a discovery call
                  </Button>
                  <a
                    href="#sample-solutions"
                    className="text-[16px] font-medium text-[#1265EF] transition-colors hover:text-[#1a1a1a]"
                  >
                    See sample solutions
                  </a>
                </div>
              </div>
            </div>
          </section>
          <AiEnablementWhoWeWorkWithSection />
          <WhoWeAre
            label="HOW WE'RE DIFFERENT"
            title={
              <>
                <span className="block">Most firms can advise or build.</span>
                <span className="block lg:whitespace-nowrap">
                  We&apos;ve been doing both for a decade.
                </span>
              </>
            }
            description="This track record is why our AI recommendations actually ship — we've spent a decade learning what production software needs to survive contact with real users."
            stats={AI_ENABLEMENT_WHO_WE_ARE_STATS}
            hideGallery
            compactMetricsBottom
            introClassName="max-w-6xl"
            statLabelClassName="text-sm font-normal"
            bgColor="#0A2540"
            labelColor="#0AE4E3"
            titleColor="#FFFFFF"
            descriptionColor="#ADBDCC"
          />
          <AiEnablementPhase01Section />
          <AiEnablementPhase02Section />
          <AiEnablementSampleSolutionsSection />
          <AiEnablementCaseStudySection />
          <CaseStudies 
            label="AI-POWERED APPLICATIONS"
            description="We've helped businesses integrate AI capabilities into their applications, from intelligent automation to personalized user experiences. Our visual development approach makes AI integration faster and more accessible."
            slides={AI_ENABLEMENT_SLIDES}
          />
          <ProcessSection />
          <div className="pt-16">
            <IndexLandingCTA />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiEnablement;
