
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute, AuthRoute } from "@/components/auth";
import { SettingsDialog } from "@/components/settings-dialog";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { lazy, Suspense, useEffect, useState } from "react";
import { ROUTES } from "@/config/routes";
import Index from "./views/Index";

const BubbleAppAudit = lazy(() => import("./views/BubbleAppAudit"));
const Partners = lazy(() => import("./views/Partners"));
const Developers = lazy(() => import("./views/Developers"));
const ProductManagers = lazy(() => import("./views/ProductManagers"));
const UxDesigners = lazy(() => import("./views/UxDesigners"));
const CoreValues = lazy(() => import("./views/CoreValues"));
const Mission = lazy(() => import("./views/Mission"));
const Approach = lazy(() => import("./views/Approach"));
const Careers = lazy(() => import("./views/Careers"));
const Blog = lazy(() => import("./views/Blog"));
const BlogPostDetail = lazy(() => import("./views/BlogPostDetail"));
const Signup = lazy(() => import("./views/Signup"));
const Login = lazy(() => import("./views/Login"));
const ForgotPassword = lazy(() => import("./views/ForgotPassword"));
const ResetPassword = lazy(() => import("./views/ResetPassword"));
const Dashboard = lazy(() => import("./views/Dashboard"));
const Projects = lazy(() => import("./views/Projects"));
const Team = lazy(() => import("./views/Team"));
const Settings = lazy(() => import("./views/Settings"));
const Account = lazy(() => import("./views/Account"));
const Admin = lazy(() => import("./views/Admin"));
const Portal = lazy(() => import("./views/Portal"));
const NotFound = lazy(() => import("./views/NotFound"));
const Onboarding = lazy(() => import("./views/Onboarding"));
const ClientStories = lazy(() => import("./views/ClientStories"));
const MoreCaseStudies = lazy(() => import("./views/MoreCaseStudies"));
const CaseStudyDetail = lazy(() => import("./views/CaseStudyDetail"));
const SaasProducts = lazy(() => import("./views/SaasProducts"));
const Marketplaces = lazy(() => import("./views/Marketplaces"));
const Portals = lazy(() => import("./views/Portals"));
const InternalTools = lazy(() => import("./views/InternalTools"));
const Erps = lazy(() => import("./views/Erps"));
const AiApplications = lazy(() => import("./views/AiApplications"));
const FinancialServices = lazy(() => import("./views/FinancialServices"));
const TechnologyAndSoftware = lazy(() => import("./views/TechnologyAndSoftware"));
const IndustrialAndManufacturing = lazy(() => import("./views/IndustrialAndManufacturing"));
const PublicSectorAndNonprofit = lazy(() => import("./views/PublicSectorAndNonprofit"));
const Healthcare = lazy(() => import("./views/Healthcare"));
const ConsumerAndRetail = lazy(() => import("./views/ConsumerAndRetail"));
const Mvps = lazy(() => import("./views/Mvps"));
const FullScaleBuilds = lazy(() => import("./views/FullScaleBuilds"));
const ProductDesign = lazy(() => import("./views/ProductDesign"));
const BubbleDevelopment = lazy(() => import("./views/BubbleDevelopment"));
const BubbleAgency = lazy(() => import("./views/BubbleAgency"));
const FlexBubbleFreelancers = lazy(() => import("./views/FlexBubbleFreelancers"));
const AiEnablement = lazy(() => import("./views/AiEnablement"));
const Marketplace = lazy(() => import("./views/Saas"));
const SaasLanding = lazy(() => import("./views/SaasLanding"));
const CrmLanding = lazy(() => import("./views/CrmLanding"));
const CustomerPortalLanding = lazy(() => import("./views/CustomerPortalLanding"));
const KnowledgeManagementLanding = lazy(() => import("./views/KnowledgeManagementLanding"));
const AiChatbotLanding = lazy(() => import("./views/AiChatbotLanding"));
const OrderManagementLanding = lazy(() => import("./views/OrderManagementLanding"));
const QuotingSoftwareLanding = lazy(() => import("./views/QuotingSoftwareLanding"));
const HrManagementLanding = lazy(() => import("./views/HrManagementLanding"));
const BusinessSoftwareLanding = lazy(() => import("./views/BusinessSoftwareLanding"));
const ErpLanding = lazy(() => import("./views/ErpLanding"));
const LmsLanding = lazy(() => import("./views/LmsLanding"));
const MvpLanding = lazy(() => import("./views/MvpLanding"));
const InventoryManagementLanding = lazy(() => import("./views/InventoryManagementLanding"));
const Education = lazy(() => import("./views/Education"));

const queryClient = new QueryClient();

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('account') === 'true') {
      setSettingsOpen(true);
    }
  }, [location]);

  const handleSettingsOpenChange = (open: boolean) => {
    setSettingsOpen(open);
    if (!open) {
      const params = new URLSearchParams(location.search);
      params.delete('account');
      const newSearch = params.toString();
      navigate({
        pathname: location.pathname,
        search: newSearch ? `?${newSearch}` : ''
      }, { replace: true });
    }
  };

  return (
    <>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
        <Route path={ROUTES.HOME} element={<Index />} />
        <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
        <Route path={ROUTES.SAAS} element={<SaasLanding />} />
        <Route path={ROUTES.CRM} element={<CrmLanding />} />
        <Route path={ROUTES.CUSTOMER_PORTAL} element={<CustomerPortalLanding />} />
        <Route path={ROUTES.KNOWLEDGE_MANAGEMENT} element={<KnowledgeManagementLanding />} />
        <Route path={ROUTES.AI_CHATBOT} element={<AiChatbotLanding />} />
        <Route path={ROUTES.ORDER_MANAGEMENT} element={<OrderManagementLanding />} />
        <Route path={ROUTES.QUOTING_SOFTWARE} element={<QuotingSoftwareLanding />} />
        <Route path={ROUTES.HR_MANAGEMENT} element={<HrManagementLanding />} />
        <Route path={ROUTES.BUSINESS_SOFTWARE} element={<BusinessSoftwareLanding />} />
        <Route path={ROUTES.ERP} element={<ErpLanding />} />
        <Route path={ROUTES.LMS} element={<LmsLanding />} />
        <Route path={ROUTES.EDUCATION} element={<Education />} />
        <Route path={ROUTES.MVP} element={<MvpLanding />} />
        <Route path={ROUTES.INVENTORY_MANAGEMENT} element={<InventoryManagementLanding />} />
        <Route path={ROUTES.BUBBLE_APP_AUDIT} element={<BubbleAppAudit />} />
        <Route path={ROUTES.CLIENT_STORIES} element={<ClientStories />} />
        <Route path={ROUTES.MORE_CASE_STUDIES} element={<MoreCaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path={ROUTES.SAAS_PRODUCTS} element={<SaasProducts />} />
        <Route path={ROUTES.MARKETPLACES} element={<Marketplaces />} />
        <Route path={ROUTES.PORTALS} element={<Portals />} />
        <Route path={ROUTES.INTERNAL_TOOLS} element={<InternalTools />} />
        <Route path={ROUTES.ERPS} element={<Erps />} />
        <Route path={ROUTES.AI_APPLICATIONS} element={<AiApplications />} />
        <Route path={ROUTES.FINANCIAL_SERVICES} element={<FinancialServices />} />
        <Route path={ROUTES.TECHNOLOGY_AND_SOFTWARE} element={<TechnologyAndSoftware />} />
        <Route path={ROUTES.INDUSTRIAL_AND_MANUFACTURING} element={<IndustrialAndManufacturing />} />
        <Route path={ROUTES.PUBLIC_SECTOR_AND_NONPROFIT} element={<PublicSectorAndNonprofit />} />
        <Route path={ROUTES.HEALTHCARE} element={<Healthcare />} />
        <Route path={ROUTES.CONSUMER_AND_RETAIL} element={<ConsumerAndRetail />} />
        <Route path={ROUTES.MVPS} element={<Mvps />} />
        <Route path={ROUTES.FULL_SCALE_BUILDS} element={<FullScaleBuilds />} />
        <Route path={ROUTES.PRODUCT_DESIGN} element={<ProductDesign />} />
        <Route path={ROUTES.BUBBLE_DEVELOPMENT} element={<BubbleDevelopment />} />
        <Route path={ROUTES.BUBBLE_AGENCY} element={<BubbleAgency />} />
        <Route path={ROUTES.FLEX_BUBBLE_FREELANCERS} element={<FlexBubbleFreelancers />} />
        <Route path={ROUTES.AI_ENABLEMENT} element={<AiEnablement />} />
        <Route path={ROUTES.PARTNERS} element={<Partners />} />
        <Route path={ROUTES.PARTNERS_DEVELOPERS} element={<Developers />} />
        <Route path={ROUTES.PARTNERS_PRODUCT_MANAGERS} element={<ProductManagers />} />
        <Route path={ROUTES.PARTNERS_UX_DESIGNERS} element={<UxDesigners />} />
        <Route path={ROUTES.CORE_VALUES} element={<CoreValues />} />
        <Route path={ROUTES.MISSION} element={<Mission />} />
        <Route path={ROUTES.APPROACH} element={<Approach />} />
        <Route path={ROUTES.CAREERS} element={<Careers />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path="/post/:slug" element={<BlogPostDetail />} />
        <Route path={ROUTES.SIGNUP} element={
          <AuthRoute>
            <Signup />
          </AuthRoute>
        } />
        <Route path={ROUTES.LOGIN} element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        } />
        <Route path={ROUTES.FORGOT_PASSWORD} element={
          <AuthRoute>
            <ForgotPassword />
          </AuthRoute>
        } />
        <Route path={ROUTES.RESET_PASSWORD} element={
          <AuthRoute>
            <ResetPassword />
          </AuthRoute>
        } />
        <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />
        <Route
          path={ROUTES.ACCOUNT}
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute requiredRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={ROUTES.ADMIN_DASHBOARD} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="settings">
            <Route index element={<Navigate to={`${ROUTES.ADMIN_SETTINGS}/notifications`} replace />} />
            <Route path=":section" element={<Settings />} />
          </Route>
        </Route>
        <Route
          path={ROUTES.PORTAL}
          element={
            <ProtectedRoute>
              <Portal />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={ROUTES.PORTAL_PROJECTS} replace />} />
          <Route path="projects" element={<div className="p-6"><p className="text-muted-foreground">Insert tab content here</p></div>} />
          <Route path="customers" element={<div className="p-6"><p className="text-muted-foreground">Insert tab content here</p></div>} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
      <SettingsDialog open={settingsOpen} onOpenChange={handleSettingsOpenChange} />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
