import { Facebook, Twitter, Linkedin } from "lucide-react";
import { ROUTES } from "@/config/routes";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <a href={ROUTES.HOME} className="mb-6 block">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg" 
                alt="Airdev" 
                className="h-7 w-auto"
              />
            </a>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              The trusted no-code & Bubble agency. Helping businesses launch world-class software products in a fraction of the time and cost.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={ROUTES.BUBBLE_AGENCY}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Bubble agency
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bubble freelancers
                  </a>
                </li>
                <li>
                  <a href={ROUTES.BUBBLE_APP_AUDIT} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bubble app audit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bubble developers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">What we build</h4>
              <ul className="space-y-4">
                <li><a href={ROUTES.AI_APPLICATIONS} className="text-gray-600 hover:text-gray-900 transition-colors">AI Apps</a></li>
                <li><a href={ROUTES.SAAS_PRODUCTS} className="text-gray-600 hover:text-gray-900 transition-colors">SaaS Products</a></li>
                <li><a href={ROUTES.MARKETPLACES} className="text-gray-600 hover:text-gray-900 transition-colors">Marketplaces</a></li>
                <li><a href={ROUTES.INTERNAL_TOOLS} className="text-gray-600 hover:text-gray-900 transition-colors">Internal Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href={ROUTES.CLIENT_STORIES} className="text-gray-600 hover:text-gray-900 transition-colors">Client Stories</a></li>
                <li><a href={ROUTES.CAREERS} className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href={ROUTES.BLOG} className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">For Builders</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Canvas Framework</a></li>
                <li><a href={ROUTES.PARTNERS} className="text-gray-600 hover:text-gray-900 transition-colors">Partner Program</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Bubble Bootcamp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: '#E2E8F0' }}>
          <p className="text-gray-500 text-sm">© 2025 Airdev, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-gray-900"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-900"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};



