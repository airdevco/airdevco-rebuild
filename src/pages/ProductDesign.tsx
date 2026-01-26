"use client";

import {
  Navbar,
  Hero,
  Testimonials,
  SaasCTA,
  Footer,
  AudienceSection,
  DesignPrinciples,
  ProductExperts,
  DiscoveryOutputs,
} from "@/components/landing";
import { DocumentTextIcon, PresentationChartLineIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const ProductDesign = () => {
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
            title="Design products that users love"
            description="We combine user research, strategic thinking, and modern design principles to create intuitive, beautiful products that solve real problems. Our product design process ensures your application not only looks great but delivers exceptional user experiences."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            lottieAnimation="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/646dcae8ab7266fb0356dd33_swipe-vector.lottie"
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <DesignPrinciples />
          <ProductExperts />
          <DiscoveryOutputs />
          <AudienceSection 
            label="HOW IT'S USED"
            title="How it's used"
            description=""
            backgroundColor="white"
            audience={[
              {
                title: "Plan build",
                subtitle: "",
                description: "Use your prototype and documentation to guide development, ensuring every feature is built exactly as designed.",
                icon: DocumentTextIcon,
                color: "#1265EF"
              },
              {
                title: "Present investors",
                subtitle: "",
                description: "Show investors a working prototype that demonstrates your vision and validates your product concept before development.",
                icon: PresentationChartLineIcon,
                color: "#0584C7"
              },
              {
                title: "Validate users",
                subtitle: "",
                description: "Test your product with real users, gather feedback, and iterate on the design before committing to full development.",
                icon: CheckCircleIcon,
                color: "#7C3AED"
              }
            ]}
          />
          <Testimonials backgroundColor="#F6F9FC" />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductDesign;

