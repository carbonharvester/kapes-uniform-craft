
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { SchoolLogos } from "@/components/SchoolLogos";
import { InTheNews } from "@/components/InTheNews";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SchoolLogos />
      <SchoolCodeEntry />
      <WhatMakesKapesDifferent />
      <ValueCalculator />
      <PartnershipTiers />
      <InTheNews />
      <CaseStudies />
      <FreeAuditTool />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
