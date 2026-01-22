import { Button } from "@/components/ui/button";

interface CTAProps {
  topDiagonalBg?: string;
}

export const CTA = ({ topDiagonalBg = "#f6f9fc" }: CTAProps = {}) => {
  return (
    <section className="pt-24 pb-24 relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#1265EF]">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #1265EF 0%, #3b82f6 50%, #6366f1 100%)',
        }} />
        
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-[#6366f1] blur-[80px] mix-blend-overlay animate-mesh-blob-1" />
          <div className="absolute top-[20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-[#06b6d4] blur-[80px] mix-blend-overlay animate-mesh-blob-2" />
          <div className="absolute bottom-[-30%] left-[20%] w-[80%] h-[80%] rounded-full bg-[#8b5cf6] blur-[80px] mix-blend-overlay animate-mesh-blob-3" />
          <div className="absolute top-[40%] left-[40%] w-[50%] h-[50%] rounded-full bg-[#3b82f6] blur-[60px] mix-blend-overlay animate-mesh-blob-4" />
        </div>

        {/* Diagonal Slanted Shape - Top */}
        <div 
          className="absolute -top-px left-0 right-0 h-24 lg:h-32 z-20"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
            backgroundColor: topDiagonalBg,
          }}
        />
        
        {/* Diagonal Slanted Shape - Bottom */}
        <div 
          className="absolute -bottom-px left-0 right-0 h-24 lg:h-32 bg-white z-20"
          style={{
            clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white" style={{ marginBottom: '6px' }}>
            Want to explore working with us?
          </h2>
          <p className="text-xl text-white leading-relaxed mb-4">
            Chat with our team to see how we can help
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#0AE4E3] text-black hover:bg-white hover:text-black active:bg-white active:text-black rounded-[6px] px-8 pt-5 pb-4 text-lg font-medium transition-all flex items-center justify-center" style={{ minHeight: '56px', lineHeight: '0.9' }}>
              Talk to us
            </Button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes mesh-blob-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20%, -20%) scale(1.2); }
            66% { transform: translate(-15%, 25%) scale(0.85); }
          }
          @keyframes mesh-blob-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-25%, 25%) scale(1.3); }
            66% { transform: translate(15%, -15%) scale(0.75); }
          }
          @keyframes mesh-blob-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30%, 15%) scale(0.85); }
            66% { transform: translate(-20%, -20%) scale(1.15); }
          }
          @keyframes mesh-blob-4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-30%, -30%) scale(1.2); }
            66% { transform: translate(20%, 20%) scale(0.8); }
          }
          .animate-mesh-blob-1 { animation: mesh-blob-1 4s ease-in-out infinite; }
          .animate-mesh-blob-2 { animation: mesh-blob-2 5s ease-in-out infinite; }
          .animate-mesh-blob-3 { animation: mesh-blob-3 4.5s ease-in-out infinite; }
          .animate-mesh-blob-4 { animation: mesh-blob-4 3.5s ease-in-out infinite; }
        `
      }} />
    </section>
  );
};
