
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurProcess from "./pages/OurProcess";
import ImplementationTimeline from "./pages/ImplementationTimeline";
import EssentialsTier from "./pages/EssentialsTier";
import CoreTier from "./pages/CoreTier";
import ImpactTier from "./pages/ImpactTier";
import EducationalResources from "./pages/EducationalResources";
import PartnershipTiers from "./pages/PartnershipTiers";
import FactoryVisits from "./pages/FactoryVisits";
import StudentGovernance from "./pages/StudentGovernance";
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
          <Route path="/offers" element={<Offers />} />
          <Route path="/impact" element={<Impact />} />
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
