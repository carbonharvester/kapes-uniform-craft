
import React from "react";
import { PartnershipSection } from "@/components/ui/partnership-section";
import { PartnershipTier } from "@/components/ui/partnership-tier-card";
import { Rocket, TreePine, Crown, Settings } from "lucide-react";

export const PartnershipTiers = () => {
  const tier: PartnershipTier = {
    name: "PARTNERSHIP",
    description: "Comprehensive sustainable uniform program with full impact tracking and student engagement",
    features: [
      "100% Sustainable Materials (GOTS Certified Organic Cotton)",
      "Ethical Manufacturing with Full Transparency",
      "Fully Managed Takeback Scheme",
      "KapesImpact™ Dashboard & Analytics",
      "Free Meals & Uniforms Donated (1:1 matching)",
      "Factory Visits & Educational Materials",
      "QR Codes on Every Garment",
      "Student Leadership Opportunity",
      "Custom PR & CSR Toolkit",
      "Dedicated Account Manager"
    ],
    icon: "rocket",
    href: "/partner-with-us",
    cta: "Start Partnership",
    popular: true,
    highlighted: true
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <PartnershipSection
        title="Partnership Program"
        subtitle="A comprehensive sustainable uniform program designed to create lasting impact for your school community."
        tiers={[tier]}
      />
    </div>
  );
};
