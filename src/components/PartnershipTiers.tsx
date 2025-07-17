import React from "react";
import { Pricing } from "@/components/ui/pricing";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export const PartnershipTiers = () => {
  // Reordered tiers with Impact in the middle
  const plans: PricingPlan[] = [
    {
      name: "ESSENTIALS",
      price: "0",
      yearlyPrice: "0",
      period: "month",
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
      price: "0", 
      yearlyPrice: "0",
      period: "month",
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
      price: "0",
      yearlyPrice: "0", 
      period: "month",
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
    <Pricing 
      plans={plans}
      title="Partnership Tiers"
      description="Choose the level of impact that's right for your school\nAll tiers include sustainable, ethical uniforms and dedicated support."
    />
  );
};