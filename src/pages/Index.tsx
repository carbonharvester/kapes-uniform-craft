import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { ValueCalculator } from "@/components/ValueCalculator";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { DifferentiationTimeline } from "@/components/DifferentiationTimeline";
import { KapesImpactDashboard } from "@/components/KapesImpactDashboard";
import { FreeAuditTool } from "@/components/FreeAuditTool";
import { Testimonials } from "@/components/Testimonials";
import { BonusesAndCTA } from "@/components/BonusesAndCTA";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SchoolCodeEntry />
      <ValueCalculator />
      <PartnershipTiers />
      <DifferentiationTimeline />
      <KapesImpactDashboard />
      <FreeAuditTool />
      <Testimonials />
      <BonusesAndCTA />
      <ContactForm />
    </div>
  );
};

export default Index;