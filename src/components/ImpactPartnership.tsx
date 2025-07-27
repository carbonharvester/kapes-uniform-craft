
import React from "react";
import { ImpactPartnershipSection } from "@/components/ui/impact-partnership-section";
import { ImpactFeature } from "@/components/ui/impact-partnership-section";
import { Leaf, Heart, Users, Cog } from "lucide-react";

export const ImpactPartnership = () => {
  const impactFeatures: ImpactFeature[] = [
    {
      category: "Environmental Impact",
      features: [
        "100% Sustainable Materials Only",
        "Zero-Waste Circular System",
        "Plastic-Free Packaging",
        "Fully Managed Takeback Scheme",
        "Carbon Footprint Tracking"
      ],
      description: "Every uniform drives environmental healing through regenerative materials and circular systems",
      icon: "leaf",
      color: "green"
    },
    {
      category: "Social Impact",
      features: [
        "Free School Meals Funded",
        "Free Uniforms Donated Globally", 
        "Ethical Manufacturing Guarantee",
        "Fair Wage Verification",
        "Community Development Support"
      ],
      description: "Your partnership directly funds meals and uniforms for children in need across Africa",
      icon: "heart",
      color: "red"
    },
    {
      category: "Educational Excellence",
      features: [
        "Student Leadership Council",
        "Factory Visits & Teaching Materials",
        "QR Codes on Every Garment",
        "Impact Dashboard Access",
        "Sustainability Curriculum Support"
      ],
      description: "Transform uniforms into powerful educational tools that engage students in global citizenship",
      icon: "users",
      color: "blue"
    },
    {
      category: "Operational Excellence",
      features: [
        "Fully Managed Online Shop",
        "AI-Powered Sizing Technology",
        "Multiple Delivery Options",
        "Dedicated Account Manager",
        "Custom PR & CSR Toolkit"
      ],
      description: "Complete operational support so you can focus on education while we handle everything else",
      icon: "cog",
      color: "purple"
    }
  ];

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <ImpactPartnershipSection 
        title="One Partnership, Maximum Impact"
        subtitle="Join the impact-first uniform provider. Every school gets every feature—because real change happens when impact comes before profit."
        features={impactFeatures}
      />
    </div>
  );
};
