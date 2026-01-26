"use client";

import {
  Navbar,
  Hero,
  Testimonials,
  SaasCTA,
  Footer,
  ClientLogoTicker,
  OurRoles,
  NoCodeSpeed,
} from "@/components/landing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import {
  SparklesIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  PaintBrushIcon,
  CheckCircleIcon as ClipboardCheckIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  ArrowPathIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

const BubbleAgency = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Colfax';
            src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `,
        }}
      />
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={{ fontFamily: "'Colfax', sans-serif" }}
      >
        <Navbar />
        <main>
          <Hero
            title="A white-glove experience from the premier Bubble agency"
            description="Our teams of top no-code experts take care of every detail to help you launch a world-class product."
            showImages={true}
            showButton={true}
            buttonText="Talk to us"
            titleMaxWidth="800px"
            alignLeft={true}
            lottieAnimation="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/646dcae8ab7266fb0356dd33_swipe-vector.lottie"
            label="TRUSTED BY ORGANIZATIONS OF ALL SIZES"
          />
          <div className="pt-16">
            <ClientLogoTicker />
          </div>

          {/* Benefits section – local copy of ValueProps layout so content can differ on this page */}
          <section className="py-24 bg-[#0A2540]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-left max-w-2xl mb-16">
                <span className="text-[15px] font-semibold text-[#0AE4E3] uppercase tracking-wider mb-3 block">
                  THE AIRDEV DIFFERENCE
                </span>
                <h2 className="text-[48px] font-semibold tracking-tight leading-none text-white mb-6">
                  A premium agency experience
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our white-glove Bubble agency model gives you the quality of a top-tier software studio, with the speed and flexibility of visual development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Product leadership",
                    description: "Your Product Director will guide you through the entire process.",
                    icon: SparklesIcon,
                  },
                  {
                    title: "Specialized team",
                    description: "We staff a full team of development, design, product, and QA experts.",
                    icon: UserGroupIcon,
                  },
                  {
                    title: "Technical requirements",
                    description: "Your Product Manager will document each feature's specs.",
                    icon: ClipboardDocumentCheckIcon,
                  },
                  {
                    title: "Hi-fidelity designs",
                    description: "Your UX Designer will create pixel-perfect custom Figma designs for your app.",
                    icon: PaintBrushIcon,
                  },
                  {
                    title: "Project management",
                    description: "Our project portal helps us follow a clear and transparent process.",
                    icon: ClipboardCheckIcon,
                  },
                  {
                    title: "Expert QA testing",
                    description: "Your QA specialist will run end-to-end testing to catch bugs & omissions.",
                    icon: ShieldCheckIcon,
                  },
                  {
                    title: "Central support",
                    description: "Your team can access centralized resources and expert help desk personnel.",
                    icon: LifebuoyIcon,
                  },
                  {
                    title: "Post-launch plans",
                    description: "Flexible fractional team plans, from low-level maintenance to a full-team sprint.",
                    icon: ArrowPathIcon,
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-[#112F4E]/50 border border-[#1E3A5F] rounded-2xl p-8 flex flex-col h-full"
                  >
                    {value.icon && (
                      <div className="mb-4">
                        <value.icon className="w-8 h-8 text-[#0AE4E3]" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-[#ADBDCC] text-[18px] leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <OurRoles />
          <NoCodeSpeed />

          <section className="py-24 bg-[#F6F9FC]">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                  MODELS
                </span>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Two ways to run your build
                </h2>
                <p className="text-[20px] text-[#425466] leading-relaxed">
                  Select the development approach that aligns with your project's needs—whether you require guaranteed delivery within a set budget or the agility to evolve your product as you grow.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                      <LockClosedIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Fixed</h3>
                  </div>
                  <p className="text-[#425466] text-lg mb-8 leading-relaxed">
                    Book a team & start building
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Fixed scope, timeline, & budget
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Optimized for certainty, best for smaller initial builds
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#1265EF]/10 flex items-center justify-center text-[#1265EF]">
                      <ArrowPathIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Iterative</h3>
                  </div>
                  <p className="text-[#425466] text-lg mb-8 leading-relaxed">
                    Book a team & start building
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Fixed capacity, prioritize & adjust scope as you go
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-[#0B58D3]" />
                      </div>
                      <span className="text-[#425466] text-lg leading-relaxed">
                        Optimized for flexibility, best for bigger builds/teams
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Testimonials backgroundColor="#FFFFFF" />

          {/* FAQ Section – localized content for Bubble Agency page */}
          <section className="py-24 bg-white">
            <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
                  FAQS
                </span>
                <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
                  Your questions, answered
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    question: "What criteria should I use to evaluate Bubble agencies?",
                    answer: (
                      <>
                        <p className="mb-4">
                          When evaluating Bubble agencies, consider the following criteria:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Experience and Portfolio:</strong> Look for agencies with a strong track record and relevant case studies.
                          </li>
                          <li>
                            <strong>Client Testimonials:</strong> Check reviews and feedback from past clients.
                          </li>
                          <li>
                            <strong>Technical Expertise:</strong> Ensure the agency has deep knowledge of Bubble and related technologies.
                          </li>
                          <li>
                            <strong>Communication and Support:</strong> Evaluate their communication practices and post-launch support.
                          </li>
                          <li>
                            <strong>Development Process:</strong> Understand their workflow, including project management and quality assurance.
                          </li>
                        </ul>
                        <p className="mt-4">
                          For more details, read our full article here.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "What’s the difference between working with a Bubble agency vs. a Bubble freelance developer?",
                    answer: (
                      <>
                        <p>
                          Working with a Bubble agency can offer a higher degree of consistency, professional output, and team
                          continuity than freelancers. Agencies provide a diverse team with specialized skills and more centralized
                          knowledge/tools, ensuring comprehensive solutions and ongoing support. They are ideal for larger, complex
                          projects requiring reliable, high-quality results.
                        </p>
                        <p className="mt-4">
                          In contrast, freelancers can be a cost-effective option for smaller budgets or those seeking a technical
                          cofounder. They may offer flexibility but might lack the same level of reliability and scalability as an
                          agency.
                        </p>
                        <p className="mt-4">
                          For more details, read our full article here.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "When should I consider hiring a Bubble agency to build my app?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Consider hiring a Bubble agency if:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Your app requires advanced features, complex workflows, or extensive integrations.</li>
                          <li>You have tight deadlines and need to expedite the development process.</li>
                          <li>You lack the time or expertise to learn and build the app yourself.</li>
                          <li>You need a scalable, high-quality solution that can handle future growth.</li>
                          <li>Your app is critical for operations and needs to be up and running perfectly from day one.</li>
                          <li>
                            You seek ongoing support, maintenance, and updates for your app.
                          </li>
                        </ul>
                        <p className="mt-4">
                          For more details, read our full article here.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "Can I scale my Bubble-built app?",
                    answer: (
                      <>
                        <p>
                          Yes. We always design apps to optimize for scale, based on our understanding of the potential features and
                          user behavior our client envisions. The Bubble technology is built to scale, with the ability to upgrade
                          server capacity as needed (including migrating to a dedicated AWS cluster) to service a growing user base.
                          Bubble provides simple dashboards and notifications to track app capacity usage to help you adjust as needed.
                        </p>
                      </>
                    ),
                  },
                  {
                    question: "What security features does Bubble have?",
                    answer: (
                      <>
                        <p className="mb-4">
                          Bubble is built on Amazon Web Services (AWS), which is itself compliant with certifications such as SOC 2,
                          CSA, ISO 27001, and more. All data behind Bubble apps is stored in the cloud using AWS and is generally
                          hosted on AWS West Region (Oregon, US) which maintains a state-of-the-art security infrastructure. Below are
                          more of Bubble’s security features:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>AWS:</strong> All data behind Bubble apps is stored in the cloud using Amazon Web Services (AWS),
                            the industry standard.
                          </li>
                          <li>
                            <strong>Encryption:</strong> Bubble encrypts all traffic to bubble.is over https, and encourages and
                            supports users to use encryption on their own domains.
                          </li>
                          <li>
                            <strong>SSL:</strong> Bubble apps can add SSL encryption to their own domains under any paid Bubble plan.
                          </li>
                          <li>
                            <strong>Dedicated infrastructure:</strong> For large and complex apps, Bubble offers plans with the ability
                            to be on a dedicated AWS cluster, which leads to more reliable performance and greater security.
                          </li>
                          <li>
                            <strong>External database support:</strong> Bubble apps can interface with separate databases using API
                            calls for specific compliance or infrastructure needs.
                          </li>
                          <li>
                            <strong>Logs:</strong> Every action that changes data in a Bubble app’s database is logged, enabling
                            auditing if needed.
                          </li>
                          <li>
                            <strong>Privacy rules:</strong> Bubble enables role-based privacy rules for apps, restricting what data is
                            sent from servers to users’ hardware.
                          </li>
                        </ul>
                        <p className="mt-4">
                          Bubble's privacy policy can be found at bubble.is/terms, and Bubble employees do not have access to view
                          customer data except when necessary to resolve engineering issues.
                        </p>
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white border-b last:border-0"
                    style={{ borderColor: "#E2E8F0" }}
                  >
                    <AccordionTrigger className="text-left font-medium text-[#1a1a1a] hover:no-underline py-6 text-[18px] items-center">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-6 text-[18px]" style={{ lineHeight: "29px" }}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BubbleAgency;

