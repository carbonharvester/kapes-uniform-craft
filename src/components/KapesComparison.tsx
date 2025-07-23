import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const KapesComparison = () => {
  const comparisonData = [
    {
      feature: "🌱 Carbon Neutral Uniforms",
      kapes: true,
      traditional: false,
    },
    {
      feature: "🍽️ Free Meals for Children", 
      kapes: true,
      traditional: false,
    },
    {
      feature: "👕 Free Uniforms to Kids in Need",
      kapes: true,
      traditional: false,
    },
    {
      feature: "♻️ Takeback & Recycling Scheme",
      kapes: "Fully Managed",
      traditional: "Not Offered",
    },
    {
      feature: "🧾 Admin Burden on School",
      kapes: "< 1 Hour/Term",
      traditional: "High",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight mb-6">
            How Kapes Compares to Traditional Uniform Suppliers
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We don't just supply uniforms. We help schools reduce their carbon footprint, 
            support children in need, and tell a story their community can be proud of.
          </p>
          
          <Card className="border-0 shadow-glass overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b">
                    <TableHead className="text-left font-semibold py-4 px-6">Feature</TableHead>
                    <TableHead className="text-center font-semibold py-4 px-6">Kapes</TableHead>
                    <TableHead className="text-center font-semibold py-4 px-6">Traditional Suppliers</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="border-b last:border-0">
                      <TableCell className="py-4 px-6 font-medium">{row.feature}</TableCell>
                      <TableCell className="py-4 px-6 text-center">
                        {typeof row.kapes === "boolean" ? (
                          row.kapes ? (
                            <div className="flex items-center justify-center">
                              <Check className="h-5 w-5 text-green-600" />
                              <span className="ml-2 text-green-600 font-medium">Yes</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <X className="h-5 w-5 text-red-600" />
                              <span className="ml-2 text-red-600 font-medium">No</span>
                            </div>
                          )
                        ) : (
                          <span className={row.kapes.includes("<") ? "text-green-600 font-medium" : "text-green-600 font-medium"}>
                            {row.kapes === "< 1 Hour/Term" ? (
                              <div className="flex items-center justify-center">
                                <X className="h-5 w-5 text-green-600" />
                                <span className="ml-2">{row.kapes}</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Check className="h-5 w-5 text-green-600" />
                                <span className="ml-2">{row.kapes}</span>
                              </div>
                            )}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-center">
                        {typeof row.traditional === "boolean" ? (
                          row.traditional ? (
                            <div className="flex items-center justify-center">
                              <Check className="h-5 w-5 text-green-600" />
                              <span className="ml-2 text-green-600 font-medium">Yes</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <X className="h-5 w-5 text-red-600" />
                              <span className="ml-2 text-red-600 font-medium">No</span>
                            </div>
                          )
                        ) : (
                          <span className={row.traditional === "High" ? "text-red-600 font-medium" : "text-red-600 font-medium"}>
                            {row.traditional === "High" ? (
                              <div className="flex items-center justify-center">
                                <Check className="h-5 w-5 text-red-600" />
                                <span className="ml-2">{row.traditional}</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <X className="h-5 w-5 text-red-600" />
                                <span className="ml-2">{row.traditional}</span>
                              </div>
                            )}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <Button 
              size="lg" 
              className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth"
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