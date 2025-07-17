import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { DifferentiationTimeline } from "@/components/DifferentiationTimeline";
import { KapesImpactDashboard } from "@/components/KapesImpactDashboard";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { BonusesAndCTA } from "@/components/BonusesAndCTA";
import { SchoolLogos } from "@/components/SchoolLogos";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SchoolCodeEntry />
      <SchoolLogos />
      <WhatMakesKapesDifferent />
      <ValueCalculator />
      <PartnershipTiers />
      <DifferentiationTimeline />
      <KapesImpactDashboard />
      <FreeAuditTool />
      <Testimonials />
      <BonusesAndCTA />
      <Footer />
    </div>
  );
};

export default Index;