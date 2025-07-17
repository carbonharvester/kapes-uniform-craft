
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { SchoolLogos } from "@/components/SchoolLogos";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Divider */}
      <div className="border-t border-border"></div>
      
      <SchoolCodeEntry />
      
      {/* Section spacing */}
      <div className="py-8 bg-muted/30">
        <WhatMakesKapesDifferent />
      </div>
      
      <ValueCalculator />
      
      {/* Section spacing */}
      <div className="py-8 bg-muted/30">
        <PartnershipTiers />
      </div>
      
      <SchoolLogos />
      
      <FreeAuditTool />
      
      {/* Section spacing */}
      <div className="py-8 bg-muted/30">
        <Testimonials />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
