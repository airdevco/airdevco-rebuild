export const BlogPostHeroBg = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 600L1540 600V0C1540 0 1200 200 720 200C240 200 -100 0 -100 0V600Z"
          fill="url(#gradient-hero)"
          fillOpacity="0.05"
        />
        <path
          d="M-100 600L1540 600V100C1540 100 1200 350 720 350C240 350 -100 100 -100 100V600Z"
          fill="url(#gradient-hero-2)"
          fillOpacity="0.08"
        />
        <defs>
          <linearGradient id="gradient-hero" x1="720" y1="0" x2="720" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0F2FE" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient-hero-2" x1="720" y1="100" x2="720" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DBEAFE" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* Soft overlay gradient from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
    </div>
  );
};


