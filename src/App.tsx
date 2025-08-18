
import * as React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CircularEconomyTakeback from "@/pages/CircularEconomyTakeback";
import { DeliveryPackaging } from "@/pages/DeliveryPackaging";
import MiddleEastSchools from "@/pages/MiddleEastSchools";
import UKSchools from "@/pages/UKSchools";
import AustraliaSchools from "@/pages/AustraliaSchools";
import USASchools from "@/pages/USASchools";
import EducationalResources from "@/pages/EducationalResources";
import FactoryVisits from "@/pages/FactoryVisits";
import ImpactPartnership from "@/pages/ImpactPartnership";
import KapesImpactPlatform from "@/pages/KapesImpactPlatform";
import OurMission from "@/pages/OurMission";
import OurProcess from "@/pages/OurProcess";
import Resources from "@/pages/Resources";
import { SchoolShopsLockers } from "@/pages/SchoolShopsLockers";
import SocialImpactAfrica from "@/pages/SocialImpactAfrica";
import StudentLeadership from "@/pages/StudentLeadership";
import SustainabilityEthics from "@/pages/SustainabilityEthics";
import SustainabilityScorecard from "@/pages/SustainabilityScorecard";
import { UniformSolutions } from "@/pages/UniformSolutions";
import UniformPolicyMakerPage from "@/pages/UniformPolicyMaker";
import RestrictedSubstanceListCreatorPage from "@/pages/RestrictedSubstanceListCreator";
import Affiliate from "@/pages/Affiliate";
import ScrollToTop from "@/components/ScrollToTop";
import { Header } from "@/components/Header";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen w-full no-horizontal-scroll">
              <ScrollToTop />
              <Header />
              
              <main className="w-full">
                <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/circular-economy-takeback" element={<CircularEconomyTakeback />} />
              <Route path="/delivery-packaging" element={<DeliveryPackaging />} />
              <Route path="/educational-resources" element={<EducationalResources />} />
              <Route path="/factory-visits" element={<FactoryVisits />} />
              <Route path="/impact-partnership" element={<ImpactPartnership />} />
              <Route path="/kapes-impact-platform" element={<KapesImpactPlatform />} />
              <Route path="/our-mission" element={<OurMission />} />
              <Route path="/our-process" element={<OurProcess />} />
              <Route path="/partner-with-us" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/school-shops-lockers" element={<SchoolShopsLockers />} />
              <Route path="/social-impact-africa" element={<SocialImpactAfrica />} />
              <Route path="/student-leadership" element={<StudentLeadership />} />
              <Route path="/sustainability-ethics" element={<SustainabilityEthics />} />
              <Route path="/sustainability-scorecard" element={<SustainabilityScorecard />} />
              <Route path="/uniform-solutions" element={<UniformSolutions />} />
              <Route path="/uniform-policy-maker" element={<UniformPolicyMakerPage />} />
              <Route path="/restricted-substance-list-creator" element={<RestrictedSubstanceListCreatorPage />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/middle-east-schools" element={<MiddleEastSchools />} />
              <Route path="/uk-schools" element={<UKSchools />} />
              <Route path="/australia-schools" element={<AustraliaSchools />} />
              <Route path="/usa-schools" element={<USASchools />} />
              <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Toaster />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
