
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, FileText, ArrowRight } from "lucide-react";

export const FreeAuditTool = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Free Uniform Program Audit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive analysis of your current uniform program with actionable recommendations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground">What's included in your audit</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sustainability Assessment</h4>
                    <p className="text-muted-foreground">Complete environmental impact analysis of your current uniform program</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cost Optimization Report</h4>
                    <p className="text-muted-foreground">Identify potential savings and operational efficiencies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Impact Projections</h4>
                    <p className="text-muted-foreground">See your potential positive impact with Kapes partnership</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Custom Recommendations</h4>
                    <p className="text-muted-foreground">Tailored action plan specific to your school's needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <Card className="border shadow-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <FileText className="h-5 w-5" />
                    Start Your Free Audit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">School Name</label>
                    <Input placeholder="Your school name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Contact Email</label>
                    <Input type="email" placeholder="your.email@school.edu" className="h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Number of Students</label>
                      <Input type="number" placeholder="e.g., 500" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Annual Budget</label>
                      <Input type="number" placeholder="e.g., £25,000" className="h-12" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-semibold">
                    Get My Free Audit Report
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No commitment required • Report delivered within 2 business days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
