import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const KapesComparison = () => {
  const comparisonData = [
    {
      icon: "🧵",
      feature: "Materials",
      kapes: "100% Sustainable",
      kapesPositive: true,
      traditional: "Virgin Synthetics",
      traditionalPositive: false,
    },
    {
      icon: "⚖️",
      feature: "Ethical Manufacturing",
      kapes: "100% Audited & Certified",
      kapesPositive: true,
      traditional: "Limited Oversight",
      traditionalPositive: false,
    },
    {
      icon: "🌱",
      feature: "Carbon Neutral Uniforms",
      kapes: "Yes",
      kapesPositive: true,
      traditional: "No",
      traditionalPositive: false,
    },
    {
      icon: "🍽️",
      feature: "Free Meals for Children", 
      kapes: "Yes",
      kapesPositive: true,
      traditional: "No",
      traditionalPositive: false,
    },
    {
      icon: "👕",
      feature: "Free Uniforms to Kids in Need",
      kapes: "Yes",
      kapesPositive: true,
      traditional: "No",
      traditionalPositive: false,
    },
    {
      icon: "♻️",
      feature: "Takeback & Recycling Scheme",
      kapes: "Fully Managed",
      kapesPositive: true,
      traditional: "Not Offered",
      traditionalPositive: false,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-6">
            How Kapes Compares to Traditional Uniform Suppliers
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We don't just supply uniforms. We help schools reduce their carbon footprint, 
            support children in need, and tell a story their community can be proud of.
          </p>
          
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50/80 border-b">
                      <th className="text-left font-semibold py-6 px-8 text-gray-700">Feature</th>
                      <th className="text-center font-semibold py-6 px-8 text-gray-700">Kapes</th>
                      <th className="text-center font-semibold py-6 px-8 text-gray-700">Traditional Suppliers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                        <td className="py-6 px-8">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{row.icon}</span>
                            <span className="font-medium text-gray-900">{row.feature}</span>
                          </div>
                        </td>
                        <td className="py-6 px-8 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span className="font-medium text-green-600">{row.kapes}</span>
                          </div>
                        </td>
                        <td className="py-6 px-8 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <X className="h-5 w-5 text-red-500" />
                            <span className="font-medium text-red-600">{row.traditional}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-10">
            <Button 
              size="lg" 
              className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth shadow-lg"
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