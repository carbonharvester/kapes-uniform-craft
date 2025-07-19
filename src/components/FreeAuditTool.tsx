
import { CheckCircle } from "lucide-react";
import { ScorecardAssessmentForm } from "./ScorecardAssessmentForm";

export const FreeAuditTool = () => {
  return (
    <section className="py-16 bg-background-warm relative">
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
            
            <ScorecardAssessmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};
