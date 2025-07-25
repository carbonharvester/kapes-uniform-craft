import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const KapesComparison = () => {
  const comparisonData = [
    {
      feature: "Carbon Neutral Uniforms",
      kapes: "Yes - Carbon offsetting",
      kapesPositive: true,
      traditional: "No carbon offsetting",
      traditionalPositive: false,
    },
    {
      feature: "Sustainable Materials",
      kapes: "100% Sustainable",
      kapesPositive: true,
      traditional: "Virgin synthetic fibres and conventional cotton",
      traditionalPositive: false,
    },
    {
      feature: "AI Size Recommendations",
      kapes: "Fewer returns",
      kapesPositive: true,
      traditional: "Higher returns",
      traditionalPositive: false,
    },
    {
      feature: "Free Meals for Children", 
      kapes: "Yes - 1 uniform returned = 1 meal",
      kapesPositive: true,
      traditional: "No impact programs",
      traditionalPositive: false,
    },
    {
      feature: "Free Uniforms to Kids in Need",
      kapes: "Yes - 1 student = 1 uniform",
      kapesPositive: true,
      traditional: "No impact programs",
      traditionalPositive: false,
    },
    {
      feature: "Takeback & Recycling Scheme",
      kapes: "Fully Managed - We collect & recycle",
      kapesPositive: true,
      traditional: "Not offered",
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
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 text-left font-semibold text-gray-700 text-sm md:text-base">Feature</th>
                  <th className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-base">Kapes</th>
                  <th className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-gray-700 text-sm md:text-base">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 font-medium text-gray-900 text-xs sm:text-sm md:text-base">{row.feature}</td>
                    <td className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 text-center">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                        <span className="text-green-600 font-medium text-xs sm:text-sm md:text-base">{row.kapes}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 md:px-6 py-3 md:py-4 text-center">
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <X className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 flex-shrink-0" />
                        <span className="text-red-600 font-medium text-xs sm:text-sm md:text-base">{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
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