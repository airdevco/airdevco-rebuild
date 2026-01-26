"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  SaasCTA,
  Footer,
  SampleProducts,
  FintechValueProps,
  FINTECH_PRODUCTS,
} from "@/components/landing";

const FinancialServices = () => {
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
            title="A better way to build fintech"
            description="We help fintech companies and financial institutions launch secure, compliant, and scalable applications in a fraction of the time and cost of traditional development. From lending platforms to payment tools, we've built fintech products that process billions in transactions."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            rightImage="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65bd08c2480b92d9276b8e97_2-Company%20Profile.jpg"
          />
          <div className="pt-16 pb-24 hidden">
            <ClientLogoTicker />
          </div>
          <CaseStudies 
            description="We've helped financial services companies build secure fintech platforms, tax management software, portfolio tracking applications, and payment processing solutions."
            slides={[
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
                company: "Tributi",
                logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777935802x342363134894177340/tributi.png",
                logoText: "VC funded",
                heading: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
                description: "",
                image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63507625712da8bcd35f011e_tributi.jpeg",
                imageTitle: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
                customFields: [
                  { label: "Business type", value: "SMB", color: "#635bff" },
                  { label: "Product type", value: "Tax management software", color: "#00d4ff" },
                  { label: "Timeline", value: "5 weeks", color: "#a960ee" },
                  { label: "Key results", value: "Supported 20k daily users and launched a successful YCombinator bid", color: "#ff6b6b" },
                ]
              },
              {
                id: "playground",
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
            ]}
          />
          <SampleProducts 
            bgColor="bg-[#F6F9FC]" 
            products={FINTECH_PRODUCTS}
            label="SAMPLE PRODUCTS"
            title="Fintech products we build"
            description="Secure, compliant products across the fintech landscape. Here are some of the most common types."
            descriptionMaxWidth="600px"
          />
          <FintechValueProps />
          <SaasCTA 
            variant="light" 
            title="Building something in fintech?"
            description="We're happy to talk through your project, even if you're still in the early stages."
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FinancialServices;

