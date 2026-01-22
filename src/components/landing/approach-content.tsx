import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon,
  NoSymbolIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
  ScaleIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

export const ApproachContent = () => {
  return (
    <>
      {/* THE OLD WAY Section */}
      <section className="py-24 bg-[#151515] relative overflow-hidden">
        {/* Diagonal Slanted Shape - Top */}
        <div 
          className="absolute -top-px left-0 right-0 h-12 lg:h-16 z-20 bg-white"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
          }}
        />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }} />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-20 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#0AE4E3] font-semibold tracking-wide uppercase text-sm mb-3 block">
                THE OLD WAY
              </span>
              <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[1.05] text-white mb-6">
                Why traditional development falls short
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                For decades, companies looking to build software have been forced to choose between two imperfect options, each with significant drawbacks.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
                {/* Column 1: Build Custom */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gray-700/20 flex items-center justify-center text-gray-400">
                      <WrenchScrewdriverIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Build Custom</h3>
                      <div className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
                        Traditional Agencies
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CurrencyDollarIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">High Upfront Cost</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">Requires significant capital investment ($100k+) before a single line of code is written.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ClockIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">Slow Time to Market</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">Can take 6-12 months to launch an MVP, missing critical market opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">High Risk</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">Complex projects often go over budget, miss deadlines, or fail completely.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Buy SaaS */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gray-700/20 flex items-center justify-center text-gray-400">
                      <CloudIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Buy SaaS</h3>
                      <div className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">
                        Off-the-shelf Solutions
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <NoSymbolIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">Limited Flexibility</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">You're stuck with the features they provide, which may not fit your unique workflow.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ScaleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">Scaling Costs</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">Per-user pricing can become prohibitively expensive as your team grows.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <AdjustmentsHorizontalIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <div>
                        <h4 className="text-[18px] text-gray-200 font-medium mb-1">Generic Features</h4>
                        <p className="text-[16px] text-gray-400 leading-relaxed">Built for the mass market, not for your specific competitive advantage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Slanted Shape - Bottom */}
        <div 
          className="absolute -bottom-px left-0 right-0 h-12 lg:h-16 bg-white z-20"
          style={{
            clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
          }}
        />
      </section>

      {/* THE NEW WAY Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3 block">
              THE NEW WAY
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
              A better way to build software
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We combine visual programming with modern AI to deliver the speed and cost of SaaS with the flexibility and ownership of custom development.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                    <RocketLaunchIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-0.5">Build with Airdev</h3>
                    <div className="text-[14px] font-medium text-[#1265EF] uppercase">
                      Visual program + AI
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <BoltIcon className="w-6 h-6 flex-shrink-0" style={{ color: '#4CAF50' }} />
                    <div>
                      <h4 className="text-[18px] text-[#1a1a1a] font-medium mb-1">Lightning Fast</h4>
                      <p className="text-[16px] text-gray-600 leading-relaxed">Launch in weeks, not months. Our visual programming approach combined with AI assistance dramatically reduces development time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CurrencyDollarIcon className="w-6 h-6 flex-shrink-0" style={{ color: '#4CAF50' }} />
                    <div>
                      <h4 className="text-[18px] text-[#1a1a1a] font-medium mb-1">Cost Effective</h4>
                      <p className="text-[16px] text-gray-600 leading-relaxed">Build for a fraction of the cost of traditional agencies. No need for large upfront investments or expensive developer teams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SparklesIcon className="w-6 h-6 flex-shrink-0" style={{ color: '#4CAF50' }} />
                    <div>
                      <h4 className="text-[18px] text-[#1a1a1a] font-medium mb-1">100% Flexible</h4>
                      <p className="text-[16px] text-gray-600 leading-relaxed">Custom tailored to your exact business needs and workflows. Every feature and integration is built specifically for your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheckIcon className="w-6 h-6 flex-shrink-0" style={{ color: '#4CAF50' }} />
                    <div>
                      <h4 className="text-[18px] text-[#1a1a1a] font-medium mb-1">Secure & Scalable</h4>
                      <p className="text-[16px] text-gray-600 leading-relaxed">Enterprise-grade security and scalability out of the box. Built on robust infrastructure that grows with your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


