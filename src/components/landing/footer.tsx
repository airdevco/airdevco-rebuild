import { Facebook, Twitter, Linkedin } from "lucide-react";
import { ROUTES } from "@/config/routes";

export type FooterVariant = "default" | "minimal";

type FooterProps = {
  /** `minimal`: copyright + social only (marketplace landing). Default: full footer. */
  variant?: FooterVariant;
};

const FooterBottomBar = ({
  withTopBorder,
  compact,
}: {
  withTopBorder: boolean;
  compact?: boolean;
}) => (
  <div
    className={`flex flex-col md:flex-row justify-between items-center ${compact ? "gap-3 md:gap-4" : "gap-6"} ${withTopBorder ? "pt-8 border-t" : ""}`}
    style={withTopBorder ? { borderColor: "#E2E8F0" } : undefined}
  >
    <p className="text-gray-500 text-sm">© 2026 Airdev, Inc. All rights reserved.</p>
    <div className="flex items-center gap-6 text-gray-500">
      <a href="#" className="hover:text-gray-900" aria-label="Facebook">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className="hover:text-gray-900" aria-label="Twitter">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className="hover:text-gray-900" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
);

export const Footer = ({ variant = "default" }: FooterProps = {}) => {
  if (variant === "minimal") {
    return (
      <footer className="py-5 sm:py-6 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FooterBottomBar withTopBorder={false} compact />
        </div>
      </footer>
    );
  }

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
                  <a href={ROUTES.MVPS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    MVPs
                  </a>
                </li>
                <li>
                  <a href={ROUTES.FULL_SCALE_BUILDS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Full-scale builds
                  </a>
                </li>
                <li>
                  <a href={ROUTES.PRODUCT_DESIGN} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Product design
                  </a>
                </li>
                <li>
                  <a href={ROUTES.AI_ENABLEMENT} className="text-gray-600 hover:text-gray-900 transition-colors">
                    AI enablement
                  </a>
                </li>
                <li>
                  <a href={ROUTES.BUBBLE_DEVELOPMENT} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bubble Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Product types</h4>
              <ul className="space-y-4">
                <li>
                  <a href={ROUTES.SAAS_PRODUCTS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    SaaS
                  </a>
                </li>
                <li>
                  <a href={ROUTES.MARKETPLACES} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Marketplaces
                  </a>
                </li>
                <li>
                  <a href={ROUTES.AI_APPLICATIONS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    AI Applications
                  </a>
                </li>
                <li>
                  <a href={ROUTES.INTERNAL_TOOLS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Internal Tools
                  </a>
                </li>
                <li>
                  <a href={ROUTES.CUSTOMER_PORTAL} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Portals
                  </a>
                </li>
                <li>
                  <a href={ROUTES.ERP} className="text-gray-600 hover:text-gray-900 transition-colors">
                    ERPs
                  </a>
                </li>
                <li>
                  <a href={ROUTES.BUSINESS_SOFTWARE} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Others
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Industries</h4>
              <ul className="space-y-4">
                <li>
                  <a href={ROUTES.TECHNOLOGY_AND_SOFTWARE} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href={ROUTES.LMS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href={ROUTES.HEALTHCARE} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href={ROUTES.FINANCIAL_SERVICES} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Financial services
                  </a>
                </li>
                <li>
                  <a href={ROUTES.INDUSTRIAL_AND_MANUFACTURING} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href={ROUTES.PUBLIC_SECTOR_AND_NONPROFIT} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Government
                  </a>
                </li>
                <li>
                  <a href={ROUTES.CONSUMER_AND_RETAIL} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Others
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href={ROUTES.CLIENT_STORIES} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Client Stories
                  </a>
                </li>
                <li>
                  <a href={ROUTES.APPROACH} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href={ROUTES.CAREERS} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href={ROUTES.CORE_VALUES} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Core Values
                  </a>
                </li>
                <li>
                  <a href={ROUTES.BLOG} className="text-gray-600 hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <FooterBottomBar withTopBorder={true} />
      </div>
    </footer>
  );
};



