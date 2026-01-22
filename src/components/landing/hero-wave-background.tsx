export const HeroWaveBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full top-0 left-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 800L1540 800V0C1540 0 1200 250 720 250C240 250 -100 0 -100 0V800Z"
          fill="url(#hero-wave-gradient)"
          fillOpacity="0.15"
        />
        <path
          d="M-100 800L1540 800V150C1540 150 1200 400 720 400C240 400 -100 150 -100 150V800Z"
          fill="url(#hero-wave-gradient-2)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient id="hero-wave-gradient" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-wave-gradient-2" x1="720" y1="150" x2="720" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

