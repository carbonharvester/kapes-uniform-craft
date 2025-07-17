import React from "react";
import { PartnershipTiersDisplay } from "@/components/ui/partnership-tiers";

interface TierPlan {
  name: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export const PartnershipTiers = () => {
  // Reordered tiers with Impact in the middle
  const plans: TierPlan[] = [
    {
      name: "ESSENTIALS",
      features: [
        "100% Sustainable Uniforms",
        "Ethical Manufacturing",
        "Custom Design & Sampling",
        "Fully Managed Online Shop",
        "Full Delivery Options",
        "Plastic-Free Packaging"
      ],
      description: "For schools who want sustainable, ethical uniforms without the complexity",
      buttonText: "Learn More",
      href: "/essentials-tier",
      isPopular: false,
    },
    {
      name: "IMPACT",
      features: [
        "Everything in Core",
        "QR Codes on Every Garment",
        "Student Governance Opportunity",
        "Custom PR & CSR Toolkit",
        "Dedicated Account Manager"
      ],
      description: "Our highest level of partnership for values-driven schools",
      buttonText: "Learn More",
      href: "/impact-tier",
      isPopular: true,
    },
    {
      name: "CORE",
      features: [
        "Everything in Essentials",
        "Fully Managed Takeback Scheme",
        "KapesImpact™ Dashboard",
        "Free Meals & Uniforms Donated",
        "Factory Visits & Teaching Materials"
      ],
      description: "For schools who want to create positive change with impact tracking",
      buttonText: "Learn More",
      href: "/core-tier",
      isPopular: false,
    }
  ];

  return (
    <PartnershipTiersDisplay 
      plans={plans}
      title="Partnership Tiers"
      description="Choose the level of impact that's right for your school\nAll tiers include sustainable, ethical uniforms and dedicated support."
    />
  );
};