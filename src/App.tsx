
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import SustainabilityScorecard from "./pages/SustainabilityScorecard";
import ImpactPartnershipPage from "./pages/ImpactPartnership";
import EcoLaunchTier from "./pages/EcoLaunchTier";
import SustainProTier from "./pages/SustainProTier";
import LegacyImpactTier from "./pages/LegacyImpactTier";
import PartnershipTiers from "./pages/PartnershipTiers";
import OurMission from "./pages/OurMission";
import SustainabilityEthics from "./pages/SustainabilityEthics";
import SocialImpactAfrica from "./pages/SocialImpactAfrica";
import EducationalResources from "./pages/EducationalResources";
import StudentLeadership from "./pages/StudentLeadership";
import FactoryVisits from "./pages/FactoryVisits";
import { UniformSolutions } from "./pages/UniformSolutions";
import CircularEconomyTakeback from "./pages/CircularEconomyTakeback";
import KapesImpactPlatform from "./pages/KapesImpactPlatform";
import { SchoolShopsLockers } from "./pages/SchoolShopsLockers";
import { DeliveryPackaging } from "./pages/DeliveryPackaging";
import OurProcess from "./pages/OurProcess";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/sustainability-scorecard" element={<SustainabilityScorecard />} />
            <Route path="/impact-partnership" element={<ImpactPartnershipPage />} />
            
            {/* Why Kapes routes */}
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/sustainability-ethics" element={<SustainabilityEthics />} />
            <Route path="/social-impact-africa" element={<SocialImpactAfrica />} />
            <Route path="/educational-resources" element={<EducationalResources />} />
            <Route path="/student-leadership" element={<StudentLeadership />} />
            <Route path="/factory-visits" element={<FactoryVisits />} />
            
            {/* Sustainability as a Service routes */}
            <Route path="/uniform-solutions" element={<UniformSolutions />} />
            <Route path="/circular-economy-takeback" element={<CircularEconomyTakeback />} />
            <Route path="/kapes-impact-platform" element={<KapesImpactPlatform />} />
            <Route path="/school-shops-lockers" element={<SchoolShopsLockers />} />
            <Route path="/delivery-packaging" element={<DeliveryPackaging />} />
            
            {/* Partner with us routes */}
            <Route path="/our-process" element={<OurProcess />} />
            
            
            {/* Resources routes */}
            <Route path="/resources" element={<Resources />} />
            
            {/* Redirect old tier URLs to new impact partnership page */}
            <Route path="/ecolaunch-tier" element={<ImpactPartnershipPage />} />
            <Route path="/sustainpro-tier" element={<ImpactPartnershipPage />} />
            <Route path="/legacyimpact-tier" element={<ImpactPartnershipPage />} />
            <Route path="/partnership-tiers" element={<ImpactPartnershipPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
