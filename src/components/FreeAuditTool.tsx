
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, FileText } from "lucide-react";

export const FreeAuditTool = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Free Uniform Program Audit</h2>
            <p className="text-muted-foreground">
              Get a comprehensive analysis of your current uniform program with actionable recommendations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You'll Receive:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Sustainability Assessment</h4>
                    <p className="text-muted-foreground text-sm">Current environmental impact analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">School Benchmarking</h4>
                    <p className="text-muted-foreground text-sm">Compare your sustainability performance against other schools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Impact Projections</h4>
                    <p className="text-muted-foreground text-sm">See your potential positive impact with Kapes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Custom Recommendations</h4>
                    <p className="text-muted-foreground text-sm">Tailored action plan for your school</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Start Your Free Audit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">School Name</label>
                    <Input placeholder="Your school name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Email</label>
                    <Input type="email" placeholder="your.email@school.edu" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students</label>
                    <Input type="number" placeholder="e.g., 500" />
                  </div>
                  <Button type="submit" className="w-full">
                    Get My Free Audit Report
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No commitment required • Report delivered within 2 business days
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
