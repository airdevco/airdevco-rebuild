"use client";

import { Navbar, Footer } from "@/components/landing";
import Link from "next/link";

const blogPosts = [
  {
    title: "Will AI make software developers obsolete?",
    description: "Will AI replace software developers? Find out as we explore the potential impact of artificial intelligence on the future of software development.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "March 1, 2024",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/65eb5fd794639ebcaf575d7f_65e26197d93a68ff92a205ef_Will%20AI%20make%20software%20developers%20obsolete.png",
    link: "/post/will-ai-make-software-developers-obsolete"
  },
  {
    title: "OnlyBots & why no-code + AI is the perfect pairing",
    description: "Learn why no-code + AI represents a major opportunity for entrepreneurs and intrapreneurs, and see a fun example of an AI-powered app we built to prove it!",
    author: "Airdev",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "November 6, 2023",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/65498e40843a555ecef7f88b_OnlyBots%20and%20Why%20No-Code%20%2B%20AI%20is%20Perfect%20Pairing.png",
    link: "#"
  },
  {
    title: "The no-code movement in 2023: The rise of the professional no-coder",
    description: "2023 is poised to be the year that no-code hobbyists turn into no-code professionals (i.e. people who make their living building software). Read some of the trends we see lining up to create this tipping point in the no-code space.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "January 19, 2023",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63c9890b5600e737c73e3ea9_Untitled%20design%20(30).png",
    link: "#"
  },
  {
    title: "Building software that users will love: 5 principles to follow",
    description: "The most successful businesses follow a few simple rules when building software products that excite their users. See them here.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f45160575155869_buildenough.svg",
    link: "#"
  },
  {
    title: "The future of software development: Why most software will be built without code",
    description: "An overview of how no-code development is improving the way standardized software will be built in the future, including when to choose no-code vs. full-code.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f45161b6d15586d_nrt2.svg",
    link: "#"
  },
  {
    title: "How no-code development can benefit consultants",
    description: "Find out how no-code app development can help consulting agencies better serve clients if a recession is coming.",
    author: "Andrew",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516a528155863_downturn.svg",
    link: "#"
  },
  {
    title: "How I cloned Twitter using the no-code tool Bubble",
    description: "In this piece, Vlad describes the creation of Not Real Twitter, a fully-functional clone of the real Twitter, which he built by himself in just four days.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516ad9e155858_twitter2.svg",
    link: "#"
  },
  {
    title: "Why building (most) software applications isn't rocket science",
    description: "Software and its development can seem extremely complex. In reality, most of it is not that hard to understand.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f451690e0155832_rocket.svg",
    link: "#"
  },
  {
    title: "The rise of the long-tail no-code startup",
    description: "No-code is going to enable thousands of new \"long-tail\" tech startups, focused on serving a narrow audience in a focused way.",
    author: "Vlad",
    authorImage: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f4516b7ea1558ec_vlad.png",
    date: "June 29, 2021",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/62aa5d924f451665b4155831_focused.svg",
    link: "#"
  }
];

const Blog = () => {
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
          <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#F6F9FC]">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
              <div className="text-left max-w-5xl">
                <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-4">
                  BLOG
                </div>
                <h1 className="text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-[-0.03em] text-black">
                  Our thoughts about how no-code and AI are changing tech.
                </h1>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {blogPosts.map((post, index) => (
                  <Link href={post.link} key={index} className="group flex flex-col h-full">
                    <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      {/* <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-[#1265EF] text-xs font-bold uppercase tracking-wider rounded-full">
                          Featured
                        </span>
                      </div> */}
                      
                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#1265EF] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-[16px] text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                        <img 
                          src={post.authorImage || `https://ui-avatars.com/api/?name=${post.author}&background=3b82f6&color=fff&size=128`}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-contain bg-gray-100 flex-shrink-0"
                        />
                        <span>{post.author}</span>
                        {/* <span className="mx-2">·</span>
                        <span>{post.date}</span> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <a href="#" className="inline-flex items-center text-[18px] font-medium text-[#1265EF] hover:text-[#1a1a1a] transition-colors gap-2 group/link">
                  See all posts
                  <span className="transition-transform group-hover/link:translate-x-1">&gt;</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;

