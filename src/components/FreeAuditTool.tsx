import { CheckCircle, Target, FileText, Users, Download, Zap, Star, TrendingUp } from "lucide-react";
import { ScorecardAssessmentForm } from "./ScorecardAssessmentForm";
export const FreeAuditTool = () => {
  return <section id="audit-section" className="py-16 relative" style={{
    backgroundColor: 'hsl(var(--background-light-warm))'
  }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm text-muted-foreground">Rated 4.9/5 by school administrators</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight leading-tight mb-4">Take the First Step: Get Your Free Sustainability Assessment & Consultation</h2>
            <p className="text-muted-foreground mb-4">If your school values sustainability take our scorecard to get a comprehensive analysis of your current uniform program with actionable recommendations</p>
            
          </div>

          {/* Social proof banner */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 text-center">
            <p className="text-sm font-medium text-primary">
              Limited Time: Free expert consultation for qualified schools (Valued at $750)
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-medium mb-6">What You'll Receive:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Your Sustainability Score</h4>
                    <p className="text-muted-foreground text-sm">Get an instant score revealing how eco-friendly your uniforms really are</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Personalized Improvement Plan</h4>
                    <p className="text-muted-foreground text-sm">Tailored feedback explaining your score with simple steps to boost it</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Free Expert Consultation</h4>
                    <p className="text-muted-foreground text-sm">Qualify for a one-on-one session with Kapes Founder, Matthew Benjamin, to implement changes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Zero Cost, High Reward</h4>
                    <p className="text-muted-foreground text-sm">Just 5 minutes for insights that save money, reduce waste, and enhance reputation</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-4 bg-background/50 rounded-xl border border-border/50">
                <p className="text-sm italic text-muted-foreground mb-2">
                  "The assessment revealed gaps we never knew existed. We're now making  improving our sustainability rating while making a real social impact."
                </p>
                <p className="text-xs font-medium">- Michelle Wijkhuijs, School Services & Events Coordinator, British International School of Jeddah</p>
              </div>
            </div>
            
            <ScorecardAssessmentForm />
          </div>
        </div>
      </div>
    </section>;
};