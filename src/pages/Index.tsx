
import { Hero } from "@/components/Hero";
import { SchoolCodeEntry } from "@/components/SchoolCodeEntry";
import { WhatMakesKapesDifferent } from "@/components/WhatMakesKapesDifferent";
import { Testimonials } from "@/components/Testimonials";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SchoolCodeEntry />
      <WhatMakesKapesDifferent />
      <Testimonials />
      <PartnershipTiers />
      <Footer />
    </div>
  );
};

export default Index;
