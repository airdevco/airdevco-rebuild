"use client";

import {
  Navbar,
  Hero,
  Testimonials,
  IndexLandingCTA,
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
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
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
          <DesignPrinciples inlineLayout labelColor="#1e3a8a" />
          <ProductExperts
            hideProfiles
            backgroundColor="#F6F9FC"
            labelColor="#1e3a8a"
            titleColor="#1a1a1a"
            descriptionColor="#425466"
          />
          <DiscoveryOutputs prototypeScale={0.8} />
          <AudienceSection 
            label="HOW IT'S USED"
            title="Built for every stage"
            description="From planning to validation — here's how teams put it to work at every step of the product journey."
            backgroundColor="white"
            showTopBorder={false}
            capabilitiesIconTitleStyle
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
          <Testimonials backgroundColor="#F6F9FC" label="WHAT CLIENTS SAY" />
          <div className="pt-16">
            <IndexLandingCTA />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductDesign;

