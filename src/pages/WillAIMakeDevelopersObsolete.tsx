"use client";

import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const WillAIMakeDevelopersObsolete = () => {

  return (
    <>
      <style dangerouslySetInnerHTML={{
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
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-12 overflow-hidden bg-white">
            <div className="relative z-10 max-w-[800px] mx-auto px-6">
              <div className="relative mb-4">
                <Link 
                  href="/blog" 
                  className="absolute left-[-56px] text-[#1E3B8A] hover:text-[#0A0A0A] transition-colors -top-3 hidden md:block"
                >
                  <ArrowLeft className="w-10 h-10" />
                </Link>
                <div className="text-[13px] font-bold text-[#1F3A8A] uppercase tracking-wider">
                  BLOG
                </div>
              </div>
              
              <div>
                <h1 className="text-[40px] lg:text-[56px] leading-[1.1] font-bold tracking-tight text-[#0A0A0A] mb-6">
                  Will AI make software developers obsolete?
                </h1>
                
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png"
                    alt="Vlad"
                    className="w-10 h-10 rounded-full object-contain flex-shrink-0 bg-gray-50"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#0A0A0A] leading-tight">Vlad</span>
                    <span className="text-sm text-gray-500 leading-tight">March 1, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="pb-12 bg-white">
            <div className="max-w-[800px] mx-auto px-6">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[#425466] prose-p:leading-relaxed prose-li:text-[#425466]">
                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  The other day I was scrolling through Twitter and saw a GIF of yet another AI demo. This time, AI took a rough paper sketch of a tip calculator and magically turned it into a functional app.
                </p>

                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  This would have been unimaginable even a couple of years ago in the pre-Chat GPT era. And so, it's not hard to envision that in just a few more years, instead of a calculator, AI will be able to build complex software as well as humans can. At Airdev, we make our living building complex software (sometimes with AI built into it), so the question of whether our skillset will become obsolete soon is worth pausing on.
                </p>

                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  The idea that technological innovation can lead to a decrease in jobs isn't new. It is widely accepted that in the short term, technology improvements can cause job losses and disruptions. But the long-term effects are more contentious. Optimists often use the phrase "Luddite fallacy" to describe the belief that technological innovations are harmful to jobs and point to many examples of the opposite.
                </p>

                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  One common reference is the printing press, which many predicted would decrease the demand for scribes, who used to painstakingly copy manuscripts by hand. But instead, the overall literacy rate and demand for books greatly increased, leading to a whole industry around publishing and distribution of books. And, in the more recent past, the ATM was predicted to reduce the number of bank tellers employed but did the opposite – it made it cheaper to operate a bank branch, leading to more bank branches, leading to more tellers.
                </p>

                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  So how might this play out for developers? One version is that AI will make it drastically easier (and thus cheaper) to create custom tools. Companies that couldn't afford tailored software before will now be able to create it instead of settling for SaaS products and Excel spreadsheets – leading to overall increased demand for software developers.
                </p>

                <p className="text-[18px] lg:text-[20px] leading-relaxed mb-8">
                  No matter whether you agree with that premise, one thing is clear: the developer job is going to change, likely in the following ways:
                </p>

                <ul className="text-[18px] lg:text-[20px] leading-relaxed mb-8 space-y-3 list-disc list-outside ml-6">
                  <li>As AI takes over routine tasks, developers will focus on the more complex and creative ones</li>
                  <li>AI is likely to be better at building new software from scratch than editing existing software, so the job of developers will probably involve more tweaking and less ground-up building</li>
                  <li>Developers will need to learn how to work alongside AI using skills like prompt engineering</li>
                  <li>Softer skills like collaboration and communication are going to become more important for developers to get things done within organizations</li>
                </ul>

                <p className="text-[18px] lg:text-[20px] leading-relaxed">
                  So, I believe that the job of a software developer is here to stay for a while. But how long? I don't know, and no one else does either. It seems plausible that, at some point, AI is going to be so powerful that it will be able to manage the entire software development process, solving creative problems and collaborating with others (who might also be AI). And hopefully, in that world, humans will find other useful ways to occupy their time.
                </p>
              </div>
            </div>
          </article>

          {/* You May Also Like */}
          <section className="pb-12 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 pt-8">
              <div className="text-[13px] font-bold text-[#4B5563] uppercase tracking-wider mb-8">
                YOU MAY ALSO LIKE
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="#" className="group flex flex-col h-full">
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
                    <img 
                      src="https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/65498e40843a555ecef7f88b_OnlyBots%20and%20Why%20No-Code%20%2B%20AI%20is%20Perfect%20Pairing.png"
                      alt="OnlyBots & why no-code + AI is the perfect pairing"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#1265EF] transition-colors">
                      OnlyBots & why no-code + AI is the perfect pairing
                    </h3>
                    
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 mt-auto">
                      <img 
                        src="https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png"
                        alt="Airdev"
                        className="w-8 h-8 rounded-full object-contain bg-gray-100 flex-shrink-0"
                      />
                      <span>Airdev</span>
                    </div>
                  </div>
                </Link>

                <Link href="#" className="group flex flex-col h-full">
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
                    <img 
                      src="https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63c9890b5600e737c73e3ea9_Untitled%20design%20(30).png"
                      alt="The no-code movement in 2023: The rise of the professional no-coder"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#1265EF] transition-colors">
                      The no-code movement in 2023: The rise of the professional no-coder
                    </h3>
                    
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 mt-auto">
                      <img 
                        src="https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png"
                        alt="Vlad"
                        className="w-8 h-8 rounded-full object-contain bg-gray-100 flex-shrink-0"
                      />
                      <span>Vlad</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default WillAIMakeDevelopersObsolete;

