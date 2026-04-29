"use client";

import { Button } from "@/components/ui/button";

interface SaasCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "dark" | "light";
  /** `responsive`: left-aligned on small screens, centered from md up. */
  contentLayout?: "center" | "responsive";
}

export const SaasCTA = ({
  title = "Looking to build the next big thing?",
  description = "Chat with our team to see what we can do.",
  buttonText = "Talk to us",
  buttonLink = "#",
  variant = "dark",
  contentLayout = "center",
}: SaasCTAProps = {}) => {
  const isLight = variant === "light";
  const isResponsive = contentLayout === "responsive";
  const openLandingPricingPopup = () => {
    window.dispatchEvent(new CustomEvent("open-landing-pricing-popup"));
  };
  
  return (
    <section className={`relative isolate overflow-hidden ${isLight ? "bg-[#f6f9fc]" : "bg-[#0A2540]"} py-20`}>
      {/* Glow effect from the snippet */}
      {isLight ? (
        <div className="absolute top-[42%] left-1/2 -z-20 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 scale-[2] rounded-[50%] bg-gradient-to-r from-[#1265EF]/60 to-[#0AE4E3]/60 blur-3xl pointer-events-none" />
      ) : (
        <div className="absolute top-[42%] left-1/2 -z-20 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 scale-[2] rounded-[50%] bg-gradient-to-r from-[#77E8E9] to-[#716FFF] blur-3xl pointer-events-none" />
      )}

      {/* Concentric Circles - Recreating the visual from the image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 hidden">
        <div className="w-[300px] h-[300px] border border-white/10 rounded-full" />
        <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute w-[750px] h-[750px] border border-white/5 rounded-full" />
        <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full" />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-[1200px] px-6 ${
          isResponsive ? "text-left md:text-center" : "text-center"
        }`}
      >
        <div
          className={`max-w-4xl w-full ${
            isResponsive ? "md:mx-auto" : "mx-auto"
          }`}
        >
          <h2
            className={`text-4xl font-semibold tracking-tight lg:text-5xl ${
              isLight ? "text-gray-900" : "text-white"
            } ${isResponsive ? "text-left md:text-center" : ""}`}
            style={{ marginBottom: "6px" }}
          >
            {title}
          </h2>
          <p
            className={`mb-4 text-xl leading-relaxed ${
              isLight ? "text-gray-700" : "text-white"
            } ${isResponsive ? "text-left md:text-center" : ""}`}
          >
            {description}
          </p>
          <div
            className={`flex ${
              isResponsive ? "justify-start md:justify-center" : "justify-center"
            }`}
          >
            {buttonLink && buttonLink !== '#' ? (
              <a href={buttonLink}>
                <Button 
                  className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-8 pt-5 pb-4 text-lg font-medium transition-all flex items-center justify-center" 
                  style={{ minHeight: '56px', lineHeight: '0.9' }}
                >
                  {buttonText}
                </Button>
              </a>
            ) : (
              <Button 
                onClick={openLandingPricingPopup}
                className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-8 pt-5 pb-4 text-lg font-medium transition-all flex items-center justify-center" 
                style={{ minHeight: '56px', lineHeight: '0.9' }}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
