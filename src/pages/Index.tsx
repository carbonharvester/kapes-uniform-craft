
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { SchoolLogos } from "@/components/SchoolLogos";
import { KapesImpactDashboard } from "@/components/KapesImpactDashboard";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="parent-section" className="scroll-mt-20">
        <SchoolCodeEntry />
      </div>
      <div id="school-section" className="scroll-mt-20">
        <WhatMakesKapesDifferent />
      </div>
      <ValueCalculator />
      <SchoolLogos />
      <PartnershipTiers />
      <KapesImpactDashboard />
      <FreeAuditTool />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
