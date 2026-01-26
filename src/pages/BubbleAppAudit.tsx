"use client";

import { Navbar, Footer, SaasCTA } from "@/components/landing";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  ArrowUpCircleIcon, 
  ExclamationTriangleIcon,
  ServerStackIcon,
  BoltIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";

const BubbleAppAudit = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 font-['Colfax']">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                  BUBBLE APP AUDIT
                </div>
                <h1 className="text-[64px] leading-[1.05] font-semibold text-black mb-8" style={{ letterSpacing: '-0.03em', marginLeft: '-0.05em' }}>
                  Know exactly where your Bubble app stands
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Get a detailed report of the current state of your Bubble app,
                  along with a plan to make it more secure, performant, and
                  scalable.
                </p>
                <Button className="h-12 px-8 text-lg font-medium rounded-[6px] bg-[#1265EF] hover:bg-[#0E4FCC]">
                  Get a quote
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/65f2de9865a48be3037b7e9d_app-audit-hero.png"
                  alt="Bubble app audit"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section className="py-24 bg-[#F6F9FC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                RISKS
              </span>
              <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                Why get a Bubble app audit?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bubble owners choose a comprehensive audit to identify & prevent
                the risks that plague apps as they scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "Data Leaks",
                  desc: "80% of Bubble apps have security vulnerabilities; more users means more risk of costly and damaging data leaks.",
                  colorHex: "#EF4444"
                },
                {
                  icon: ClockIcon,
                  title: "Latency & Crashes",
                  desc: "Poor app design can cause slowdowns, inconsistency, and crashes that are entirely preventable on Bubble.",
                  colorHex: "#F97316"
                },
                {
                  icon: ArrowUpCircleIcon,
                  title: "Cost Spikes",
                  desc: "Spikes in \"workload units\" (WUs) can lead to unexpected surges in Bubble app costs as an app scales.",
                  colorHex: "#3B82F6"
                },
                {
                  icon: ExclamationTriangleIcon,
                  title: "Technical Debt",
                  desc: "Bubble allows for rapid feature development, but also rapid accumulation of technical debt that can stall future progress.",
                  colorHex: "#EAB308"
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_16px_rgba(0,0,0,0.04)] flex flex-col overflow-hidden h-full">
                    <div className="h-2 w-full" style={{ backgroundColor: item.colorHex }} />
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <item.icon className="w-6 h-6" style={{ color: item.colorHex }} />
                        <h3 className="text-[18px] font-medium text-[#1a1a1a]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[18px]">
                        {item.desc}
                      </p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Scope Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-left max-w-2xl mb-16">
              <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                AUDIT SCOPE
              </span>
              <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                What you get from our Bubble app audit
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The audit is a comprehensive, step-by-step review of every part of
                your application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[
                {
                  icon: ServerStackIcon,
                  title: "Database",
                  desc: "We evaluate the data structure, privacy rules, option sets, and linkages against the current and potential future needs.",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Security",
                  desc: "We check for potential vulnerabilities and risks in the application, including exposed data and not secured pages.",
                },
                {
                  icon: BoltIcon,
                  title: "Logic",
                  desc: "We evaluate the proper use of reusables, search logic, as well as clear and concise workflows.",
                },
                {
                  icon: Squares2X2Icon,
                  title: "UX",
                  desc: "We evaluate the general user experience, including intuitive navigation, feedback to users, responsive design.",
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: "Maintenance",
                  desc: "We check whether the application has clean and organized workflows and elements for easy maintenance.",
                },
                {
                  icon: ClipboardDocumentCheckIcon,
                  title: "Action plan",
                  desc: "We create a custom action plan based on what we discover and rank each action item on importance.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-4">
                    <item.icon className="w-8 h-8" style={{ color: '#88ADD2' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[18px] font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[#F6F9FC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                PROCESS
              </span>
              <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                How the audit works
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Below are the steps in the audit process
              </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {[
                "You submit a request for a quote and add Airdev as a collaborator to the application",
                "We review the complexity your app and determine which of the packages below applies",
                "You provide more context about your app, including a video walkthrough",
                "One of our expert developers goes through every aspect of your app and writes a detailed report on it",
                "You receive the report and can use it to prioritize your future development and cleanup efforts",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start text-left">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#88ADD2] text-white flex items-center justify-center text-[14px] font-bold pt-1">
                    {i + 1}
                  </div>
                  <p className="text-[#1a1a1a] font-normal leading-relaxed text-[18px] pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Dark Theme */}
        <section className="py-24 bg-[#0A2540] text-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
                PRICING
              </span>
              <h2 className="text-[48px] font-semibold tracking-tight leading-none text-white mb-6">
                Audit packages & pricing
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our pricing is tailored to your app's size and complexity. We will
                take a look at your application and determine which package fit
                your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  price: "$500",
                  title: "Small apps",
                  desc: "Such as a simple single-page listings app with an admin portal",
                },
                {
                  price: "$1,000",
                  title: "Medium apps",
                  desc: "Such as a standard two-sided marketplace with listings, payments, and reviews",
                },
                {
                  price: "$1,500",
                  title: "Large apps",
                  desc: "Such as a SaaS product with many database objects and API integrations",
                },
                {
                  price: "Talk to us",
                  title: "Custom",
                  desc: "Such as an enterprise CRM app with lots of pages, db objects, integrations",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-8 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-[32px] font-bold text-white block mb-1">
                        {item.price}
                      </span>
                      <h3 className="text-lg font-bold text-[#0AE4E3]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#ADBDCC] text-[18px] mb-8 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    <Button className="w-full bg-[#28405A] hover:bg-[#40546C] text-white h-12 text-[18px] font-medium rounded-[6px]">
                      Get a quote
                    </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                FAQ
              </span>
              <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                Common questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What qualifications and experience does Airdev have in Bubble development and app auditing?",
                  answer: "Airdev is the first-ever Bubble development agency, with over 1000 products/clients since 2015. We recruit and train the top 1% of no-code talent globally, and have worked with everyone from solo entrepreneurs to Fortune 500 companies."
                },
                {
                  question: "Can the audit be customized to focus on specific areas or concerns within my app?",
                  answer: "Yes. While our audits are comprehensive, we understand that you may have specific areas or concerns you'd like us to prioritize. When you request an audit, you can add notes specifying any particular areas you want us to focus on, and we'll tailor the audit accordingly. Our default approach is to cover all aspects, but we're flexible and can adjust our focus based on your needs and priorities."
                },
                {
                  question: "Will the final audit report provide recommendations for addressing issues?",
                  answer: "Yes. Our final audit report is designed to provide you with actionable recommendations for addressing any issues identified during the audit process. Our expert developers thoroughly assess every aspect of your app and compile a detailed report outlining their findings and suggestions. You'll receive this report, which you can then use to prioritize your future development efforts and address any areas that may need improvement or cleanup."
                },
                {
                  question: "Will Airdev provide ongoing support or follow-up services after the audit is done?",
                  answer: "After the audit is complete, you have the option to choose whether you want to engage us for further work based on the recommendations we provide. You can hire us through either our Agency model or our Flex model, or you can decide to implement the recommendations independently."
                },
                {
                  question: "How long will the app audit process take?",
                  answer: "It typically takes about 1-2 weeks to complete."
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                  <AccordionTrigger className="text-left font-medium text-[#1a1a1a] hover:no-underline py-6 text-[18px] items-center">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-[18px]" style={{ lineHeight: '29px' }}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <SaasCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BubbleAppAudit;
