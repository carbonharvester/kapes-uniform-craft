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
