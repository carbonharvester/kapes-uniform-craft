import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export const KapesComparison = () => {
  const isMobile = useIsMobile();
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
          
          {isMobile ? (
            // Mobile table layout
            <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-background/90 rounded-2xl overflow-hidden backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20">
                        <th className="text-left font-bold py-5 px-4 text-foreground text-sm border-r border-primary/10">Feature</th>
                        <th className="text-center font-bold py-5 px-3 text-foreground text-sm border-r border-primary/10">Kapes</th>
                        <th className="text-center font-bold py-5 px-3 text-foreground text-sm">Traditional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border/30 last:border-b-0 hover:bg-primary/5 transition-colors">
                          <td className="py-5 px-4 text-left border-r border-border/20">
                            <span className="font-semibold text-foreground text-sm leading-tight">{row.feature}</span>
                          </td>
                          <td className="py-5 px-3 text-center border-r border-border/20">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                <Check className="h-3 w-3 text-white font-bold" />
                              </div>
                              <span className="font-bold text-emerald-700 text-xs leading-tight text-center">{row.kapes}</span>
                            </div>
                          </td>
                          <td className="py-5 px-3 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                <X className="h-3 w-3 text-white font-bold" />
                              </div>
                              <span className="font-bold text-red-700 text-xs leading-tight text-center">{row.traditional}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Desktop table layout
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-background to-background/95 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary/15 to-primary/8 border-b-2 border-primary/20">
                        <th className="text-left font-bold py-8 px-8 text-foreground border-r border-primary/15 text-lg">Feature</th>
                        <th className="text-center font-bold py-8 px-8 text-foreground border-r border-primary/15 text-lg">Kapes</th>
                        <th className="text-center font-bold py-8 px-8 text-foreground text-lg">Traditional Suppliers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border/30 hover:bg-primary/8 transition-all duration-300 hover:scale-[1.01]">
                          <td className="py-8 px-8 border-r border-border/20">
                            <span className="font-semibold text-foreground text-lg">{row.feature}</span>
                          </td>
                          <td className="py-8 px-8 text-center border-r border-border/20">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                                <Check className="h-4 w-4 text-white font-bold" />
                              </div>
                              <span className="font-bold text-emerald-700 text-base">{row.kapes}</span>
                            </div>
                          </td>
                          <td className="py-8 px-8 text-center">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                                <X className="h-4 w-4 text-white font-bold" />
                              </div>
                              <span className="font-bold text-red-700 text-base">{row.traditional}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="rounded-2xl font-bold px-10 py-5 text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0"
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