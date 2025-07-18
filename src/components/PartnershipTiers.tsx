
import { PricingSection } from "@/components/ui/pricing-section";
import { type PricingTier } from "@/components/ui/pricing-card";

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export const TIERS: PricingTier[] = [
  {
    name: "EcoLaunch",
    price: {
      monthly: 2.50,
      yearly: 2.00,
    },
    description: "For schools who want sustainable, ethical uniforms without the complexity",
    features: [
      "100% Sustainable Uniforms",
      "Ethical Manufacturing",
      "Custom Design & Sampling",
      "Fully Managed Online Shop",
      "Full Delivery Options",
      "Plastic-Free Packaging",
    ],
    cta: "Learn More",
  },
  {
    name: "SustainPro",
    price: {
      monthly: 4.00,
      yearly: 3.20,
    },
    description: "For schools who want to create positive change with impact tracking",
    features: [
      "Everything in EcoLaunch",
      "Fully Managed Takeback Scheme",
      "KapesImpact™ Dashboard", 
      "Free Meals & Uniforms Donated",
      "Factory Visits & Teaching Materials",
    ],
    cta: "Learn More",
  },
  {
    name: "LegacyImpact",
    price: {
      monthly: 6.00,
      yearly: 4.80,
    },
    description: "Our highest level of partnership for values-driven schools",
    features: [
      "Everything in SustainPro",
      "QR Codes on Every Garment",
      "Student Governance Opportunity",
      "Custom PR & CSR Toolkit",
      "Dedicated Account Manager",
    ],
    cta: "Learn More",
    popular: true,
  },
  {
    name: "Custom",
    price: {
      monthly: "Contact Us",
      yearly: "Contact Us",
    },
    description: "Tailored solutions for unique school requirements",
    features: [
      "Bespoke uniform design",
      "Custom impact metrics",
      "Flexible payment terms",
      "White-label platform access",
      "Enterprise-level support",
      "Direct community partnerships",
    ],
    cta: "Contact Us",
    highlighted: true,
  },
];

export const PartnershipTiers = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <PricingSection
          title="Partnership Tiers"
          subtitle="Choose the level of impact that's right for your school. All tiers include sustainable, ethical uniforms and dedicated support."
          frequencies={PAYMENT_FREQUENCIES}
          tiers={TIERS}
        />
      </div>
    </section>
  );
};
