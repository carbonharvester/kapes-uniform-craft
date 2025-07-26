
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScorecardTeaser = () => {
  const scrollToAudit = () => {
    const element = document.getElementById('audit-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">
              Schools Are Discovering Their{" "}
              <span className="font-medium text-primary">Hidden Sustainability Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most schools are surprised by their sustainability score. What will yours reveal?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive mb-2">87%</h3>
              <p className="text-sm text-muted-foreground">of schools scored below 40% on sustainability</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
              <p className="text-sm text-muted-foreground">schools have completed the assessment</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-accent-foreground mb-2">5 min</h3>
              <p className="text-sm text-muted-foreground">average time to complete</p>
            </div>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Sample Question:</h3>
            <div className="bg-muted/50 p-6 rounded-xl mb-6">
              <p className="font-medium mb-3">"What materials are your current uniforms primarily made from?"</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                  <span>100% Cotton</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                  <span>Polyester blend</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                  <span>Organic/sustainable materials</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={scrollToAudit}
                size="lg" 
                className="px-8 py-4 text-lg font-medium rounded-xl hover:scale-105 transition-all duration-300"
              >
                What's Your School's Score?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Join schools improving their sustainability impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
