"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  Footer,
  ValueProps,
  SampleProducts,
} from "@/components/landing";
import { IndexLandingCTA } from "@/components/landing/index-landing-cta";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";

/** OUR CLIENTS — SaaS products page only (links go to full case studies). */
const SAAS_PRODUCTS_CASE_STUDIES = [
  {
    id: "tributi",
    caseStudySlug: "tributi-latin-american-turbo-tax-no-code",
    company: "Tributi",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777935802x342363134894177340/tributi.png",
    logoText: "VC funded",
    heading:
      "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63507625712da8bcd35f011e_tributi.jpeg",
    imageTitle:
      "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Tax management software", color: "#00d4ff" },
      { label: "Timeline", value: "5 weeks", color: "#a960ee" },
      {
        label: "Key results",
        value: "Supported 20k daily users and launched a successful YCombinator bid",
        color: "#ff6b6b",
      },
    ],
  },
  {
    id: CASE_STUDY_SLUG.cerebro,
    caseStudySlug: CASE_STUDY_SLUG.cerebro,
    company: "Cerebro Sports",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    logoText: "Mark Cuban-funded",
    heading: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    description: "",
    image:
      "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
    imageTitle: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Analytics Platform", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      {
        label: "Key results",
        value: "A pre-seed fundraising round led by Mark Cuban to help scale internal data operations",
        color: "#ff6b6b",
      },
    ],
  },
  {
    id: "my-nft-alerts",
    caseStudySlug: "my-nft-alerts-web-platform-no-code",
    company: "My NFT Alerts",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777953165x204069526181363420/mynftalerts.png",
    logoText: "",
    heading:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635079364569b5471f0fc12d_nft.jpeg",
    imageTitle:
      "How Airdev helped My NFT Alerts build a custom no-code platform on Bubble for NFT holders to track, trade and set personalized floor price alerts",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Portfolio tracking app", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Rapid user adoption", color: "#ff6b6b" },
    ],
  },
];

const SaasProducts = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero 
            title="A better way to launch your SaaS startup"
            description="We help founders go from idea to launched product in a fraction of the time. Get a real SaaS you can sell, raise on, and scale, without hiring a dev team or burning through your runway."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772587812851x876454729909677400/flowline.webp"
          />
          <div className="pt-16 pb-24">
            <ClientLogoTicker variant="featured" />
          </div>
          <ValueProps />
          <CaseStudies disableLogoGrayscale slides={SAAS_PRODUCTS_CASE_STUDIES} />
          <SampleProducts bgColor="#F6F9FC" />
          <Testimonials label="WHAT CLIENTS SAY" />
          <IndexLandingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SaasProducts;

