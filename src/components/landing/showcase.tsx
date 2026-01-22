export const Showcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
        <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
          Our Work
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
          Real apps, real results
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Explore the powerful applications we've built for clients across industries—from AI-powered platforms to enterprise SaaS solutions
        </p>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
          <img 
            src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67a16874fad40d3e5b676ea9_website%20hero.webp" 
            alt="Showcase" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};


