import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  MapPinIcon,
  BriefcaseIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

interface Role {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bio?: string;
  person: {
    name: string;
    location: string;
    experience: string;
    projects: string;
    avatar: string;
  };
}

const ROLES: Role[] = [
  {
    id: "director",
    title: "Product Director",
    description: "Product Directors are your fractional CTO, guiding you through your product journey with business strategy and technical expertise.",
    icon: SparklesIcon,
    color: "#1265EF",
    person: {
      name: "Ed D.",
      location: "San Francisco, CA",
      experience: "20 years in product",
      projects: "100+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/664e2bb52640ffefe5acd40e__base.Image.png"
    },
    bio: "Ed began his career in predictive analytics in the retail industry, and has since served as head of product at multiple funded startups. He joined Airdev in 2019, where he has led more than 100 client engagements over the past 5 years. As a Product Director, he helps clients translate their vision into a clear product roadmap, and manages team execution to bring those products to life."
  },
  {
    id: "manager",
    title: "Product Manager",
    description: "Product Managers coordinate day-to-day development, translating your vision into actionable requirements and keeping the team aligned on priorities.",
    icon: ClipboardDocumentListIcon,
    color: "#10b981",
    person: {
      name: "Vineet A.",
      location: "San Jose, CA",
      experience: "18 years in product",
      projects: "20+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66995b093a59833e81244611_vivek.webp"
    },
    bio: "Vineet is a seasoned product expert, having worked at PayPal, Twilio, and Udacity before joining Airdev to build no-code products. As a Product Manager, he works with clients to document detailed app specifications, and manages the build from start to finish."
  },
  {
    id: "designer",
    title: "UX Designer",
    description: "UX Designers craft beautiful, intuitive interfaces and high-fidelity prototypes in Figma, ensuring your product delights users from day one.",
    icon: PaintBrushIcon,
    color: "#f59e0b",
    person: {
      name: "Lillian C.",
      location: "San Francisco, CA",
      experience: "8 years in UX Design",
      projects: "10+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6699465a5fe3346f123d771a_lillian.webp"
    },
    bio: "Lillian is a multidisciplinary designer with experience crafting 0-1 consumer and B2B products across a range of platforms. Prior to Airdev, she was a UX designer at Meta (Facebook) and several startups. Today she specializes in creating clean and intuitive user experiences to bring client concepts to life."
  },
  {
    id: "assembler",
    title: "UI Assembler",
    description: "UI Assemblers translate pixel-perfect designs into responsive Bubble interfaces, ensuring every detail matches the approved mockups.",
    icon: ComputerDesktopIcon,
    color: "#06b6d4",
    person: {
      name: "Ludovic S.",
      location: "Belgium",
      experience: "10 years in Design",
      projects: "40+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66995b0989a54f469fac8624_Ludovic.webp"
    },
    bio: "Originally an environmental engineer, Ludovic transitioned to Bubble design 4 years ago, where he has crafted dozens of custom design setups for Fortune 100 companies. Today he focuses his efforts on implementing pixel-perfect responsive front-end designs to set builds up for success."
  },
  {
    id: "developer",
    title: "Bubble Developer",
    description: "Bubble Developers build the logic, database architecture, and integrations that power your application with performance and scalability in mind.",
    icon: CommandLineIcon,
    color: "#ec4899",
    person: {
      name: "Nate E.",
      location: "Virginia Beach, VA",
      experience: "6 years Bubbling",
      projects: "30+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66995b0916178c1fd94c0e87_nate.png"
    },
    bio: "Nate spent 10 years in the Navy as a cryptologist before discovering his passion for Bubble as a startup founder. He has built dozens of applications with Airdev for clients ranging from startups to large enterprises, with an emphasis on data security, performance, scalability, and API integrations."
  },
  {
    id: "qa",
    title: "QA Specialist",
    description: "QA Specialists thoroughly test every feature to catch bugs and ensure your app is stable, secure, and ready for launch.",
    icon: ShieldCheckIcon,
    color: "#a855f7",
    person: {
      name: "Ainah T.",
      location: "Metro Manila, Philippines",
      experience: "10 years in QA",
      projects: "50+ Airdev projects",
      avatar: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66995b093a59833e812445ac_alina.webp"
    },
    bio: "Ainah has spent 10 years in QA, including 6 at Hewlett Packard, prior to joining Airdev. Today she specializes in end-to-end feature testing and regression testing, to spot issues before they pose problems for a build."
  }
];

export const OurRoles = () => {
  const [activeTab, setActiveTab] = useState(ROLES[0].id);

  const activeRole = ROLES.find(r => r.id === activeTab) || ROLES[0];

  return (
    <section className="py-24 bg-[#F6F9FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-[900px] mb-16">
          <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
            OUR ROLES
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
            Great software is made by teams of specialists
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 lg:gap-24">
          {/* Left Side: Tabs – match SampleProducts vertical tabs (width + layout) */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-2 max-w-xs">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 text-[16px] ${
                    activeTab === role.id
                      ? "bg-[#1265EF]/10 text-[#1265EF] font-medium"
                      : "text-gray-600 hover:text-gray-900 font-normal hover:bg-gray-50"
                  }`}
                >
                  <span className="leading-tight block">
                    {role.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Content – match SaaS SampleProducts card shell, but keep profile group */}
          <div className="lg:col-span-9 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden max-w-3xl">
                  {/* Top Color Border – per-role color */}
                  <div className="h-2 w-full" style={{ backgroundColor: activeRole.color }} />

                  <div className="p-8 lg:p-10">
                    {/* Title and Description */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        {/* Match SaaS SampleProducts icon sizing */}
                        <activeRole.icon className="w-8 h-8 text-black" />
                        <h3 className="text-3xl font-bold text-[#1a1a1a]">
                          {activeRole.title}
                        </h3>
                      </div>
                      <p className="text-[18px] text-gray-600 leading-relaxed">
                        {activeRole.description}
                      </p>
                    </div>

                    {/* Profile group in place of Included features */}
                    <div className="pt-6 -mx-8 px-8 border-t border-slate-200">
                      {/* Special layout for roles with rich profile content (any role with a bio) */}
                      {activeRole.bio ? (
                        <div className="space-y-6">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              {/* Real profile image, no dropshadow */}
                          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                                <img
                                  src={activeRole.person.avatar}
                                  alt={activeRole.person.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                                {activeRole.person.name}
                              </h4>

                              {/* Three vertical icon + text rows, matching SampleProducts feature style */}
                              <div className="space-y-1.5">
                                {[
                                  {
                                    icon: MapPinIcon,
                                    label: activeRole.person.location,
                                  },
                                  {
                                    icon: BriefcaseIcon,
                                    label: activeRole.person.experience,
                                  },
                                  {
                                    icon: ChartBarIcon,
                                    label: activeRole.person.projects,
                                  },
                                ].map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    {/* Plain icon, no circle background */}
                                    <item.icon className="w-5 h-5 text-[#88ADD2] flex-shrink-0" />
                                    <span className="text-[16px] text-gray-700">
                                      {item.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <p className="text-[18px] text-gray-600 leading-relaxed">
                            {activeRole.bio}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            {/* Generic avatar for non-Product Director roles, no dropshadow */}
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1265EF] to-[#0EA5E9] flex items-center justify-center text-white text-3xl font-bold">
                              {activeRole.person.name.charAt(0)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                              {activeRole.person.name}
                            </h4>

                            {/* Same three-row icon + text formatting as Product Director */}
                            <div className="space-y-1.5">
                              {[
                                {
                                  icon: MapPinIcon,
                                  label: activeRole.person.location,
                                },
                                {
                                  icon: BriefcaseIcon,
                                  label: activeRole.person.experience,
                                },
                                {
                                  icon: ChartBarIcon,
                                  label: activeRole.person.projects,
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <item.icon className="w-5 h-5 text-[#88ADD2] flex-shrink-0" />
                                  <span className="text-[16px] text-gray-700">
                                    {item.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
