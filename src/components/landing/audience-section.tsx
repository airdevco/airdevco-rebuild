import { motion } from "framer-motion";
import { UserIcon, BuildingOffice2Icon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { ComponentType } from "react";

export interface AudienceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

export interface AudienceSectionProps {
  label?: string;
  title?: string;
  description?: string;
  audience?: AudienceItem[];
  backgroundColor?: string;
}

const DEFAULT_AUDIENCE: AudienceItem[] = [
  {
    title: "Entrepreneurs",
    subtitle: "Launching their full V1",
    description: "Launch your full-featured product to market in weeks, not months. Validate faster and scale with confidence.",
    icon: UserIcon,
    color: "#1265EF"
  },
  {
    title: "SMBs",
    subtitle: "Building internal tools",
    description: "Replace costly SaaS subscriptions with custom internal tools tailored to your exact workflows and processes.",
    icon: BuildingOffice2Icon,
    color: "#0584C7"
  },
  {
    title: "Enterprises",
    subtitle: "Launching a new product",
    description: "Innovate rapidly without disturbing core systems. Build, test, and deploy new digital products at startup speed.",
    icon: GlobeAltIcon,
    color: "#7C3AED"
  }
];

export const AudienceSection = ({ 
  label = "WHO WE HELP",
  title = "Built for ambitious teams",
  description = "Whether you're a founder or an enterprise leader, our full-scale build process is designed to deliver production-grade software that scales.",
  audience = DEFAULT_AUDIENCE,
  backgroundColor = "#f6f9fc"
}: AudienceSectionProps) => {
  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-[16px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-[20px] text-[#425466] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden h-full"
            >
              <div className="h-2 w-full" style={{ backgroundColor: item.color }} />
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 flex-shrink-0 -translate-y-[2px]" />
                  <h3 className="text-[24px] font-medium text-[#1a1a1a] leading-[32px]">
                    {item.title}
                  </h3>
                </div>
                {item.subtitle && (
                  <div className="text-[15px] font-semibold text-[#6C7280] uppercase tracking-wide mb-4">
                    {item.subtitle}
                  </div>
                )}
                {item.description && (
                  <p className="text-gray-600 leading-relaxed text-[18px]">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

