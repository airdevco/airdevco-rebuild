"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  SaasCTA,
  Footer,
  ValueProps,
  SampleProducts,
} from "@/components/landing";
import { CUSTOMER_PORTAL_TYPES_PRODUCTS } from "@/components/landing/customer-portal-sections";
import { CASE_STUDY_SLUG } from "@/config/case-study-static-slugs";

/** Case studies for the Portals page only — Teach for America, Cadence, Resolis (aligned with CRM / customer-portal / full-scale data). */
const PORTALS_CASE_STUDIES = [
  {
    id: CASE_STUDY_SLUG.tfa,
    company: "Teach for America",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447145612x608821623632928600/tfa.png",
    logoText: "",
    heading:
      "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075d6712da824635efa1d_tfa%20(1).jpeg",
    imageTitle:
      "How Airdev helped Teach for America build a custom no-code internal hub with Bubble to support corps members across their journey",
    customFields: [
      { label: "Business type", value: "National nonprofit", color: "#635bff" },
      { label: "Product type", value: "Internal hub", color: "#00d4ff" },
      { label: "Timeline", value: "4 weeks", color: "#a960ee" },
      { label: "Key results", value: "Ability to manage the organization at scale", color: "#ff6b6b" },
    ],
  },
  {
    id: CASE_STUDY_SLUG.cadence,
    company: "Cadence Translate",
    logo: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a9ff1b72d8c1ec14d79f4_cadence.webp",
    logoText: "500 startups funded",
    heading:
      "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    description: "",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
    imageTitle:
      "How Airdev helped Cadence Translate connect Salesforce data to a custom no-code gig portal in just weeks",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Salesforce-integrated gig management platform", color: "#00d4ff" },
      { label: "Timeline", value: "4 weeks of development", color: "#a960ee" },
      { label: "Key results", value: "400% increase in jobs processed per month", color: "#ff6b6b" },
    ],
  },
  {
    id: "resolis",
    company: "Resolis",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767136295917x196197816364843680/resolis.png",
    logoText: "",
    heading: "How Airdev helped Resolis build an internal tool to streamline their public infrastructure asset management services",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/6698333e120200f6df1df8ad_Resolis%20no-code%20internal%20tool.jpg",
    imageTitle: "How Airdev helped Resolis build an internal tool to streamline their public infrastructure asset management services",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Internal tool", color: "#00d4ff" },
      { label: "Timeline", value: "5 months", color: "#a960ee" },
      { label: "Key results", value: "Standardization of niche, manual processes for teams operating across the UK", color: "#ff6b6b" },
    ],
  },
];

const Portals = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
        `,
        }}
      />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
      >
        <Navbar />
        <main>
          <Hero
            title="A better way to launch your customer portal"
            description="We use a new approach to help startups and enterprises with self-service customer portals that are 100% flexible, for a small fraction of the cost of building from scratch."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://1ad0fcb18ec6cf492f21eeb75aa30267.cdn.bubble.io/d44/f1774308481244x911091318809670300/cp5.webp"
          />
          <div className="pt-16 pb-24">
            <ClientLogoTicker variant="featured" />
          </div>
          <ValueProps />
          <CaseStudies
            slides={PORTALS_CASE_STUDIES}
            description="From nonprofits unifying corps support to enterprises connecting billing, orders, and help in one place—see how we've helped teams ship customer portals that scale with their users and stay easy to evolve."
          />
          <SampleProducts
            bgColor="#F6F9FC"
            products={CUSTOMER_PORTAL_TYPES_PRODUCTS}
            label="COMMON FEATURES"
            title="Customer portal features we specialize in"
            titleMaxWidth="36rem"
            description="From secure sign-in to billing, support, and integrations—we build the core capabilities modern customer portals need. Choose what you need and we'll implement it."
            leftColumnClassName="lg:col-span-3"
            rightColumnClassName="lg:col-span-9"
          />
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portals;
