
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="parent-section">
        <SchoolCodeEntry />
      </div>
      <div id="school-section">
        <WhatMakesKapesDifferent />
      </div>
      <ValueCalculator />
      <PartnershipTiers />
      <SchoolLogos />
      <KapesImpactDashboard />
      <FreeAuditTool />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
