
import React, { useState } from 'react';
import SustainabilityScorecard from '@/components/SustainabilityScorecard';
import { Footer } from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Target, FileText, Users, Download, Zap, Star, TrendingUp } from 'lucide-react';

const SustainabilityScorecardPage = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center" style={{ backgroundColor: '#cfeaff' }}>
        <div className="flex-1 flex items-center justify-center py-12">
          <SustainabilityScorecard />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#cfeaff' }}>
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Rated 4.9/5 by school administrators</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Discover Your School's Sustainability Score in 5 Minutes
              </h1>
              <p className="text-muted-foreground mb-6 text-lg max-w-3xl mx-auto">
                If your school values sustainability but does not currently have sustainable uniforms yet, take our scorecard to get a comprehensive analysis of your current uniform program with actionable recommendations
              </p>
              
              {/* Social proof banner */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 text-center">
                <p className="text-sm font-medium text-primary">
                  🔥 Limited Time: Free expert consultation for qualified schools (Valued at $750)
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">What You'll Receive:</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Hidden Sustainability Score</h3>
                      <p className="text-muted-foreground text-sm">Get an instant score revealing how eco-friendly your uniforms really are</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Personalized Improvement Plan</h3>
                      <p className="text-muted-foreground text-sm">Tailored feedback explaining your score with simple steps to boost it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Expert Consultation</h3>
                      <p className="text-muted-foreground text-sm">Qualify for a one-on-one session with Kapes experts to implement changes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Download className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Downloadable Custom Report</h3>
                      <p className="text-muted-foreground text-sm">PDF report with your score, answers, and bespoke recommendations for leadership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Zero Cost, High Reward</h3>
                      <p className="text-muted-foreground text-sm">Just 5 minutes for insights that save money, reduce waste, and enhance reputation</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-4 bg-background/50 rounded-xl border border-border/50">
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "The assessment revealed gaps we never knew existed. We're now improving our sustainability rating while making a real social impact."
                  </p>
                  <p className="text-xs font-medium">- Michelle Wijkhuijs, School Services & Events Coordinator, British International School of Jeddah</p>
                </div>
              </div>
              
              {/* Call to Action Card */}
              <div>
                <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-heading mb-2">
                        Ready to Discover Your Score?
                      </h3>
                      <p className="text-muted-foreground">
                        Take our comprehensive sustainability assessment and unlock personalized insights for your school uniform program.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Takes only 5 minutes</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Instant results</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Free consultation opportunity</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setShowAssessment(true)}
                      className="w-full mt-6 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02]"
                      size="lg"
                    >
                      Start Your Free Assessment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <p className="text-xs text-muted-foreground mt-4">
                      No commitment required • Results delivered instantly
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityScorecardPage;
