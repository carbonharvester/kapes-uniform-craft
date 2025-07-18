
import React from "react";
import { PartnershipSection } from "@/components/ui/partnership-section";
import { PartnershipTier } from "@/components/ui/partnership-tier-card";

export const PartnershipTiers = () => {
  const tiers: PartnershipTier[] = [
    {
      name: "ECOLAUNCH",
      features: [
        "100% Sustainable Uniforms",
        "Ethical Manufacturing",
        "Custom Design & Sampling",
        "Fully Managed Online Shop",
        "Full Delivery Options",
        "Plastic-Free Packaging"
      ],
      description: "For schools who want sustainable, ethical uniforms without the complexity",
      cta: "Learn More",
      href: "/ecolaunch-tier",
      popular: false,
    },
    {
      name: "SUSTAINPRO",
      features: [
        "Everything in EcoLaunch",
        "Fully Managed Takeback Scheme",
        "KapesImpact™ Dashboard",
        "Free Meals & Uniforms Donated",
        "Factory Visits & Teaching Materials"
      ],
      description: "For schools who want to create positive change with impact tracking",
      cta: "Learn More",
      href: "/sustainpro-tier",
      popular: false,
    },
    {
      name: "LEGACYIMPACT",
      features: [
        "Everything in SustainPro",
        "QR Codes on Every Garment",
        "Student Governance Opportunity",
        "Custom PR & CSR Toolkit",
        "Dedicated Account Manager",
        "Buy Now Pay Later Option"
      ],
      description: "Our highest level of partnership for values-driven schools",
      cta: "Learn More",
      href: "/legacyimpact-tier",
      popular: false,
    },
    {
      name: "CUSTOM",
      features: [
        "Bespoke Partnership Design",
        "Multi-Location Support", 
        "Advanced Impact Reporting",
        "Executive Advisory Sessions",
        "Priority Development Access"
      ],
      description: "Tailored partnerships combining elements from all tiers for unique requirements",
      cta: "Contact Us",
      href: "/contact",
      highlighted: true,
    }
  ];

  return (
    <PartnershipSection 
      title="Partnership Tiers"
      subtitle="Choose the level of impact that's right for your school. All tiers include sustainable, ethical uniforms and dedicated support."
      tiers={tiers}
    />
  );
};
