
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurProcess from "./pages/OurProcess";
import ImplementationTimeline from "./pages/ImplementationTimeline";
import EcoLaunchTier from "./pages/EcoLaunchTier";
import SustainProTier from "./pages/SustainProTier";
import LegacyImpactTier from "./pages/LegacyImpactTier";
import EducationalResources from "./pages/EducationalResources";
import OurMission from "./pages/OurMission";
import PartnershipTiers from "./pages/PartnershipTiers";
import FactoryVisits from "./pages/FactoryVisits";
import StudentLeadership from "./pages/StudentLeadership";
import { UniformSolutions } from "./pages/UniformSolutions";
import { SchoolShopsLockers } from "./pages/SchoolShopsLockers";
import KapesImpactPlatform from "./pages/KapesImpactPlatform";
import { DeliveryPackaging } from "./pages/DeliveryPackaging";
import SustainabilityEthics from "./pages/SustainabilityEthics";
import CircularEconomyTakeback from "./pages/CircularEconomyTakeback";
import SocialImpactAfrica from "./pages/SocialImpactAfrica";
import SustainabilityScorecardPage from "./pages/SustainabilityScorecard";
import { Header } from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Process & Timeline Routes */}
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/implementation-timeline" element={<ImplementationTimeline />} />
          
          {/* Partnership Tier Routes */}
          <Route path="/partnership-tiers" element={<PartnershipTiers />} />
          <Route path="/ecolaunch-tier" element={<EcoLaunchTier />} />
          <Route path="/sustainpro-tier" element={<SustainProTier />} />
          <Route path="/legacyimpact-tier" element={<LegacyImpactTier />} />
          
          {/* Resource Routes */}
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/factory-visits" element={<FactoryVisits />} />
          <Route path="/student-leadership" element={<StudentLeadership />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/uniform-solutions" element={<UniformSolutions />} />
          <Route path="/school-shops-lockers" element={<SchoolShopsLockers />} />
           <Route path="/kapes-impact-platform" element={<KapesImpactPlatform />} />
          <Route path="/delivery-packaging" element={<DeliveryPackaging />} />
          <Route path="/sustainability-ethics" element={<SustainabilityEthics />} />
          <Route path="/circular-economy-takeback" element={<CircularEconomyTakeback />} />
          <Route path="/social-impact-africa" element={<SocialImpactAfrica />} />
          <Route path="/sustainability-scorecard" element={<SustainabilityScorecardPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
