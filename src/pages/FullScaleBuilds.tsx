"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  Testimonials,
  SaasCTA,
  Footer,
  CapabilitiesSection,
  ProcessSection,
  AudienceSection,
} from "@/components/landing";

const FULL_SCALE_SLIDES = [
  {
    id: "dividend",
    company: "Dividend Finance",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447523324x536489976697318800/dividend.png",
    logoText: "$300m+ raised",
    heading: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    description: "",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    imageTitle: "How we built a FinTech platform for Dividend Finance that scaled to process billions of dollars of loan",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "FinTech MVP", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "Billions of dollars of loans processed", color: "#ff6b6b" },
    ]
  },
  {
    id: "bubble",
    company: "Bubble.io",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766446287440x908698787583342700/bubble.io.png",
    logoText: "",
    heading: "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/665f5ab8b085585d4543d3ea_Certification---In-line-5.png",
    imageTitle: "How no-code leader Bubble turned to Airdev for a custom rebuild of their Developer Certification Platform... built on Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Exam platform", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "A more performant, reliable, and flexible exam for users and internal developers", color: "#ff6b6b" },
    ]
  },
  {
    id: "consenna",
    company: "Consenna",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767136271437x995467453409817100/consenna.png",
    logoText: "",
    heading: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076a5905dd76065955f2c_hp-s%20(1).png",
    imageTitle: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Custom marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "30k schools served", color: "#ff6b6b" },
    ]
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
    ]
  }
];

const FullScaleBuilds = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
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
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero 
            title="Build production-ready applications at scale"
            description="From complex enterprise platforms to feature-rich SaaS products, we deliver full-scale applications that power your business growth. Our visual development approach combines speed, quality, and flexibility."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1767142241876x506055610256233660/saas-sn.png"
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <CaseStudies 
            label="PRODUCTION-READY APPLICATIONS"
            description="See how we've transformed businesses with custom-built applications that handle millions of users, process complex workflows, and integrate seamlessly with existing systems. Each project showcases our ability to deliver enterprise-grade solutions."
            slides={FULL_SCALE_SLIDES}
          />
          <AudienceSection />
          <ProcessSection />
          <CapabilitiesSection />
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FullScaleBuilds;

