import { 
  RocketLaunchIcon, 
  CurrencyDollarIcon, 
  ArrowPathIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  LinkIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  BoltIcon,
  CloudIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

export const ApproachValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section 1: Fraction of time and cost */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
              Fraction of time and cost
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-2 lg:mb-8">
              Our visual development approach allows us to bypass the heavy lifting of traditional coding, translating to dramatic savings in both time and budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 lg:mt-0 -mt-6">
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <RocketLaunchIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Speed to Market</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch your MVP in weeks, not months, to validate your ideas faster.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <CurrencyDollarIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Budget Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce development costs by up to 80% compared to traditional agencies.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <ArrowPathIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Iterative Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Adapt and change direction quickly without burning through your runway.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: 100% Flexible */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="order-last lg:order-first grid sm:grid-cols-2 gap-8 lg:mt-0 -mt-4">
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <PuzzlePieceIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Custom Functionality</h3>
              <p className="text-gray-600 leading-relaxed">
                We build complex logic and features specific to your business model.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <PaintBrushIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Pixel-perfect Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Implementation of your brand guidelines and UI/UX without compromise.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <LinkIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Seamless Integrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with any third-party service or API (Stripe, Twilio, OpenAI, etc.).
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <CheckBadgeIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Full Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                You own the IP, the code, and the application completely.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
              100% Flexible
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-2 lg:mb-8">
              Don't settle for off-the-shelf templates. We build fully custom software tailored to your exact unique business requirements, giving you the freedom to innovate.
            </p>
          </div>
        </div>

        {/* Section 3: Scales with you */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
              Scales with you
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-2 lg:mb-8">
              Start small and grow big. Our applications are built on robust infrastructure designed to handle millions of users and transactions, ensuring you never outgrow your platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 lg:mt-0 -mt-6">
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <ShieldCheckIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                SOC 2 Type II compliant infrastructure ensuring your data is always safe.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <BoltIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">High Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for speed and responsiveness at scale, handling heavy loads with ease.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <CloudIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Reliable Hosting</h3>
              <p className="text-gray-600 leading-relaxed">
                Built on AWS-powered infrastructure with 99.9% uptime guarantee.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <UserGroupIcon className="w-8 h-8" style={{ color: '#88ADD2' }} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">Easy Handoff</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with standardized practices making it easy for internal teams to take over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


