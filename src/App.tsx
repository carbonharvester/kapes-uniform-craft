
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurProcess from "./pages/OurProcess";
import ImplementationTimeline from "./pages/ImplementationTimeline";
import EssentialsTier from "./pages/EssentialsTier";
import CoreTier from "./pages/CoreTier";
import ImpactTier from "./pages/ImpactTier";
import EducationalResources from "./pages/EducationalResources";
import OurMission from "./pages/OurMission";
import Materials from "./pages/Materials";
import OurFactories from "./pages/OurFactories";
import WhatsInAFootprint from "./pages/WhatsInAFootprint";
import PartnershipTiers from "./pages/PartnershipTiers";
import FactoryVisits from "./pages/FactoryVisits";
import StudentGovernance from "./pages/StudentGovernance";
import { UniformSolutions } from "./pages/UniformSolutions";
import { SchoolShopsLockers } from "./pages/SchoolShopsLockers";
import { KapesImpactPlatform } from "./pages/KapesImpactPlatform";
import { DeliveryPackaging } from "./pages/DeliveryPackaging";
import SustainabilityEthics from "./pages/SustainabilityEthics";
import CircularEconomyTakeback from "./pages/CircularEconomyTakeback";
import SocialImpactAfrica from "./pages/SocialImpactAfrica";
import { Header } from "@/components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Process & Timeline Routes */}
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/implementation-timeline" element={<ImplementationTimeline />} />
          
          {/* Partnership Tier Routes */}
          <Route path="/partnership-tiers" element={<PartnershipTiers />} />
          <Route path="/essentials-tier" element={<EssentialsTier />} />
          <Route path="/core-tier" element={<CoreTier />} />
          <Route path="/impact-tier" element={<ImpactTier />} />
          
          {/* Resource Routes */}
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/factory-visits" element={<FactoryVisits />} />
          <Route path="/student-governance" element={<StudentGovernance />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/our-factories" element={<OurFactories />} />
          <Route path="/whats-in-a-footprint" element={<WhatsInAFootprint />} />
          <Route path="/uniform-solutions" element={<UniformSolutions />} />
          <Route path="/school-shops-lockers" element={<SchoolShopsLockers />} />
          <Route path="/kapes-impact-platform" element={<KapesImpactPlatform />} />
          <Route path="/delivery-packaging" element={<DeliveryPackaging />} />
          <Route path="/sustainability-ethics" element={<SustainabilityEthics />} />
          <Route path="/circular-economy-takeback" element={<CircularEconomyTakeback />} />
          <Route path="/social-impact-africa" element={<SocialImpactAfrica />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
