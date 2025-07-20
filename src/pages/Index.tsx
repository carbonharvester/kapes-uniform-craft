
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { SchoolLogos } from "@/components/SchoolLogos";
import { KapesImpactDashboard } from "@/components/KapesImpactDashboard";
import { BlogSection } from "@/components/BlogSection";
import { FloatingGetStarted } from "@/components/FloatingGetStarted";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="parent-section" className="scroll-mt-20">
        <SchoolCodeEntry />
      </div>
      <div id="audit-section" className="scroll-mt-20">
        <FreeAuditTool />
      </div>
      <div id="school-section" className="scroll-mt-20">
        <WhatMakesKapesDifferent />
      </div>
      <ValueCalculator />
      <SchoolLogos />
      <PartnershipTiers />
      <Testimonials />
      <KapesImpactDashboard />
      <BlogSection />
      <Footer />
      <FloatingGetStarted />
    </div>
  );
};

export default Index;
