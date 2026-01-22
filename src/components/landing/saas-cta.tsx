import { Button } from "@/components/ui/button";

interface SaasCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "dark" | "light";
}

export const SaasCTA = ({
  title = "Have a project in mind?",
  description = "We're happy to talk through it, even if you're just exploring.",
  buttonText = "Talk to us",
  buttonLink = "#",
  variant = "dark"
}: SaasCTAProps = {}) => {
  const isLight = variant === "light";
  
  return (
    <section className={`relative isolate overflow-hidden ${isLight ? "bg-[#f6f9fc]" : "bg-[#0A2540]"} py-20`}>
      {/* Glow effect from the snippet */}
      {isLight ? (
        <div className="absolute -top-1/3 left-1/2 -z-20 h-[200px] w-[400px] -translate-x-1/2 scale-[2] rounded-[50%] bg-gradient-to-r from-[#1265EF]/60 to-[#0AE4E3]/60 blur-3xl pointer-events-none" />
      ) : (
        <div className="absolute -top-1/3 left-1/2 -z-20 h-[200px] w-[400px] -translate-x-1/2 scale-[2] rounded-[50%] bg-gradient-to-r from-[#77E8E9] to-[#716FFF] blur-3xl pointer-events-none" />
      )}

      {/* Concentric Circles - Recreating the visual from the image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 hidden">
        <div className="w-[300px] h-[300px] border border-white/10 rounded-full" />
        <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute w-[750px] h-[750px] border border-white/5 rounded-full" />
        <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl lg:text-5xl font-semibold tracking-tight ${isLight ? "text-gray-900" : "text-white"}`} style={{ marginBottom: '6px' }}>
            {title}
          </h2>
          <p className={`text-xl ${isLight ? "text-gray-700" : "text-white"} leading-relaxed mb-4`}>
            {description}
          </p>
          <div className="flex justify-center">
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
