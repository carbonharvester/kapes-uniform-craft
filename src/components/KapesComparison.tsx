import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileOptimizedTable } from "@/components/MobileOptimizedTable";

export const KapesComparison = () => {
  const comparisonData = [
    {
      feature: "Materials",
      kapes: "100% Sustainable",
      kapesPositive: true,
      traditional: "Virgin Synthetics",
      traditionalPositive: false,
    },
    {
      feature: "Ethical Manufacturing",
      kapes: "100% Audited & Certified",
      kapesPositive: true,
      traditional: "Limited Oversight",
      traditionalPositive: false,
    },
    {
      feature: "Buy-back Clauses",
      kapes: "No Restrictive Clauses",
      kapesPositive: true,
      traditional: "Restrictive Terms",
      traditionalPositive: false,
    },
    {
      feature: "Free Meals for Students", 
      kapes: "Yes",
      kapesPositive: true,
      traditional: "No",
      traditionalPositive: false,
    },
    {
      feature: "Free Uniforms for Students",
      kapes: "Yes",
      kapesPositive: true,
      traditional: "No",
      traditionalPositive: false,
    },
    {
      feature: "Takeback Scheme",
      kapes: "Fully Managed",
      kapesPositive: true,
      traditional: "Not Offered",
      traditionalPositive: false,
    },
    {
      feature: "Student Learning",
      kapes: "Education Programs & Trips",
      kapesPositive: true,
      traditional: "Not Offered",
      traditionalPositive: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4 md:mb-6">
            How Kapes Compares to Traditional Uniform Suppliers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            We don't just supply uniforms. We help schools reduce their carbon footprint, 
            support children in need, and tell a story their community can be proud of.
          </p>
          
          <MobileOptimizedTable data={comparisonData} />
          
          <div className="mt-8 md:mt-10">
            <Button 
              size="touch" 
              className="rounded-xl font-medium px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:scale-105 transition-smooth shadow-lg w-full sm:w-auto"
              onClick={() => window.location.href = '/impact-partnership'}
            >
              See Full Comparison
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};