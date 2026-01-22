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
  
  // ============================================
  // Services
  // ============================================
  BUBBLE_APP_AUDIT: "/bubble-app-audit",
  BUBBLE_DEVELOPMENT: "/bubble-development",
  BUBBLE_AGENCY: "/bubble-development/bubble-agency",
  MARKETPLACES: "/marketplaces",
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