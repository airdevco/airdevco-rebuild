

export const HeroShapeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Stripe-like Mesh Gradient Container */}
      <div className="absolute inset-0 opacity-80 sm:opacity-60">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
              radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
              radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
            `
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(60,130,246,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[80px] animate-blob mix-blend-multiply" />
        <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute bottom-[-50%] left-[20%] w-[80%] h-[120%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[80px] animate-blob animation-delay-4000 mix-blend-multiply" />
        
        {/* Diagonal Stripe Overlay (Subtle) */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
            backgroundSize: '4px 4px'
          }}
        />
      </div>

      {/* Smooth fade to bottom content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};
