/**
 * Centralized route configuration
 * Update URLs here to automatically update all links throughout the app
 * 
 * To change a URL, update the value here and all references will automatically update
 */
export const ROUTES = {
  // ============================================
  // Home
  // ============================================
  HOME: "/",

  /** Marketplace landing (mirrors airdev-marketplace marketing page) */
  MARKETPLACE: "/marketplace",
  /** Dedicated SaaS landing clone of marketplace page */
  SAAS: "/saas",
  /** Dedicated CRM landing clone of SaaS page */
  CRM: "/crm",
  /** Dedicated customer portal landing (edit customer-portal-* components only) */
  CUSTOMER_PORTAL: "/customer-portal",
  /** Dedicated knowledge management landing (edit knowledge-management-* components only) */
  KNOWLEDGE_MANAGEMENT: "/knowledge-management",
  /** Dedicated AI chatbot product landing (edit ai-chatbot-* components only) */
  AI_CHATBOT: "/ai-chatbot",
  /** Dedicated order management software landing (edit order-management-* components only) */
  ORDER_MANAGEMENT: "/order-management",
  /** Dedicated quoting software landing (edit quoting-software-* components only) */
  QUOTING_SOFTWARE: "/quoting",
  /** Dedicated HR management software landing (edit hr-management-* components only) */
  HR_MANAGEMENT: "/hr-management",
  /** Business software overview (edit business-software-* components only) */
  BUSINESS_SOFTWARE: "/business-software",
  /** Dedicated ERP landing clone for enterprise resource planning */
  ERP: "/erp",
  /** Application-types ERPs marketing page (isolated layout; edit `Erps.tsx` only) */
  ERPS: "/erps",
  /** Dedicated LMS landing for learning management systems */
  LMS: "/lms",
  /** Dedicated MVP product landing (ERP-style layout; edit mvp-* components only) */
  MVP: "/mvp",
  /** Dedicated inventory management product landing */
  INVENTORY_MANAGEMENT: "/inventory-management",
  
  // ============================================
  // Services
  // ============================================
  BUBBLE_APP_AUDIT: "/bubble-app-audit",
  BUBBLE_DEVELOPMENT: "/bubble-development",
  BUBBLE_AGENCY: "/bubble-development/bubble-agency",
  MARKETPLACES: "/marketplaces",
  /** Customer / partner / vendor portals (marketing page; edit `Portals.tsx` only) */
  PORTALS: "/portals",
  INTERNAL_TOOLS: "/internal-tools",
  AI_APPLICATIONS: "/ai-applications",
  TECHNOLOGY_AND_SOFTWARE: "/technology-and-software",
  INDUSTRIAL_AND_MANUFACTURING: "/industrial-and-manufacturing",
  PUBLIC_SECTOR_AND_NONPROFIT: "/public-sector-and-nonprofit",
  HEALTHCARE: "/healthcare",
  CONSUMER_AND_RETAIL: "/consumer-and-retail",
  
  // ============================================
  // Products / What We Build
  // ============================================
  SAAS_PRODUCTS: "/saas-products",
  CLIENT_STORIES: "/client-stories",
  FINANCIAL_SERVICES: "/financial-services",
  MVPS: "/mvps",
  FULL_SCALE_BUILDS: "/full-scale-builds",
  PRODUCT_DESIGN: "/product-design",
  AI_ENABLEMENT: "/ai-enablement",
  
  // ============================================
  // Partners
  // ============================================
  PARTNERS: "/partners",
  PARTNERS_DEVELOPERS: "/partners/developers",
  PARTNERS_PRODUCT_MANAGERS: "/partners/product-managers",
  PARTNERS_UX_DESIGNERS: "/partners/ux-designers",
  
  // ============================================
  // Company / About
  // ============================================
  MISSION: "/mission",
  APPROACH: "/approach",
  CORE_VALUES: "/core-values",
  CAREERS: "/careers",
  BLOG: "/blog",
  BLOG_AI_DEVELOPERS: "/post/will-ai-make-software-developers-obsolete",
  
  // ============================================
  // Authentication
  // ============================================
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  
  // ============================================
  // Protected Routes
  // ============================================
  ACCOUNT: "/account",
  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_PROJECTS: "/admin/projects",
  ADMIN_TEAM: "/admin/team",
  ADMIN_SETTINGS: "/admin/settings",
  PORTAL: "/portal",
  PORTAL_PROJECTS: "/portal/projects",
  PORTAL_CUSTOMERS: "/portal/customers",
  
  // ============================================
  // System
  // ============================================
  NOT_FOUND: "*",
} as const;

// Type for route values (for TypeScript autocomplete and type safety)
export type Route = typeof ROUTES[keyof typeof ROUTES];

// Helper function to build routes with query parameters
export const buildRoute = (route: Route, params?: Record<string, string>): string => {
  if (!params || Object.keys(params).length === 0) {
    return route;
  }
  const queryString = new URLSearchParams(params).toString();
  return `${route}?${queryString}`;
};