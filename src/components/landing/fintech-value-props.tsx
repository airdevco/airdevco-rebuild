import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  PuzzlePieceIcon, 
  RocketLaunchIcon, 
  ChartBarIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/solid";

const FINTECH_VALUES = [
  {
    title: "Built for compliance",
    description: "Fintech products need audit trails, permission controls, and careful data handling. We build with those requirements in mind from day one.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure by default",
    description: "Financial products require serious security. We build on SOC 2 compliant infrastructure with encryption, access controls, and monitoring built in.",
    icon: LockClosedIcon,
  },
  {
    title: "Complex integrations handled",
    description: "Plaid, Stripe, Marqeta, credit bureaus, banking APIs. Fintech products often require connecting to multiple financial infrastructure providers. We can help.",
    icon: PuzzlePieceIcon,
  },
  {
    title: "Launch faster, spend less",
    description: "Our visual development approach means smaller teams and faster timelines. Get to market while the opportunity is still there, without burning through your runway.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Scales with transaction volume",
    description: "Start with your MVP and grow from there. The infrastructure is built to scale, so you don't have to rebuild when volume picks up.",
    icon: ChartBarIcon,
  },
  {
    title: "Ongoing partnership",
    description: "Fintech products need ongoing attention. We stick around after launch to help with new features, compliance updates, and operational improvements.",
    icon: UserGroupIcon,
  },
];

interface FintechValuePropsProps {
  title?: string;
  description?: string;
}

export const FintechValueProps = ({ 
  title = "Why fintech companies choose us",
  description = "Building fintech is harder than building regular software. Here's why teams trust us with their financial products."
}: FintechValuePropsProps) => {
  return (
    <section className="py-24 bg-[#0A2540]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-2xl mb-16">
          <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
            BENEFITS
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FINTECH_VALUES.map((value, index) => (
            <div key={index} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-8 flex flex-col h-full">
              <div className="mb-4">
                <value.icon className="w-8 h-8 text-[#0AE4E3]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-[#ADBDCC] text-[18px] leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
