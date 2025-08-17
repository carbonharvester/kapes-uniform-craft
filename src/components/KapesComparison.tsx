import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
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

  console.log("KapesComparison component rendering with icons:", { CheckCircle2, XCircle });
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4 md:mb-6">
            How Kapes Uniforms Compares to Traditional Uniform Suppliers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            We don't just supply uniforms. We help schools reduce their carbon footprint, 
            support children in need, and tell a story their community can be proud of.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full border-collapse border border-gray-300 text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-1 py-2 text-center font-semibold text-gray-700">Feature</th>
                  <th className="border border-gray-300 px-1 py-2 text-center font-semibold text-gray-700">Kapes Uniforms</th>
                  <th className="border border-gray-300 px-1 py-2 text-center font-semibold text-gray-700">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-1 py-2 font-medium text-gray-900 text-center align-middle">{row.feature}</td>
                    <td className="border border-gray-300 px-1 py-2 text-center align-top">
                      <div className="flex flex-col items-center gap-1">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-green-600 font-medium">{row.kapes}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-1 py-2 text-center align-top">
                      <div className="flex flex-col items-center gap-1">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-600 font-medium">{row.traditional}</span>
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