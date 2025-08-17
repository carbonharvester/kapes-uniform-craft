import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, Settings, Truck, BarChart3, Calendar } from "lucide-react";
import { Footer } from "@/components/Footer";

const OurProcess = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "2-4 weeks",
      activities: [
        "Initial consultation and needs assessment",
        "School values and requirements workshop",
        "Stakeholder interviews (staff, students, parents)",
        "Current uniform audit and sizing analysis",
        "Sustainability goals alignment"
      ]
    },
    {
      phase: "Phase 2",
      title: "Design & Development",
      duration: "4-6 weeks",
      activities: [
        "Custom uniform design creation",
        "Material selection and sustainability verification",
        "Sample production and testing",
        "Student and parent feedback collection",
        "Final design refinement and approval"
      ]
    },
    {
      phase: "Phase 3",
      title: "Sampling & Manufacturing",
      duration: "10-12 weeks",
      activities: [
        "Sample production and testing",
        "Manufacturing setup and quality assurance",
        "Bulk production scheduling",
        "Quality control checkpoints",
        "Pre-delivery inspections"
      ]
    },
    {
      phase: "Phase 4",
      title: "Testing & Training",
      duration: "2-3 weeks",
      activities: [
        "System testing and quality assurance",
        "Staff training sessions",
        "Parent information packs creation",
        "Soft launch with select families",
        "Feedback collection and adjustments"
      ]
    },
    {
      phase: "Phase 5",
      title: "Launch & Rollout",
      duration: "2-4 weeks",
      activities: [
        "Full school rollout announcement",
        "Parent information sessions",
        "Student sizing and ordering",
        "First delivery batch coordination",
        "Customer support activation"
      ]
    },
    {
      phase: "Phase 6",
      title: "Optimization & Growth",
      duration: "Ongoing",
      activities: [
        "Performance monitoring and reporting",
        "Impact tracking and dashboard updates",
        "Regular review meetings",
        "Continuous improvement implementation",
        "Additional service rollouts"
      ]
    }
  ];

  const processSteps = [{
    step: "01",
    title: "Complete Assessment",
    description: "Take our free 3-minute sustainability assessment to qualify for consultation.",
    timeline: "3 minutes"
  }, {
    step: "02",
    title: "Consultation",
    description: "Deep dive into your school's needs, requirements, and sustainability goals.",
    timeline: "Week 1"
  }, {
    step: "03",
    title: "Proposal",
    description: "Based on consultation, if we see the school as a good fit, we will present a proposal.",
    timeline: "Week 2-3"
  }, {
    step: "04",
    title: "Design",
    description: "Custom uniform design, climate optimization, and design approvals.",
    timeline: "Week 4-8"
  }, {
    step: "05",
    title: "Signed Agreement",
    description: "Finalize uniform supply agreement prior to manufacturing.",
    timeline: "Week 9-10"
  }, {
    step: "06",
    title: "Material Production",
    description: "Sourcing and production of sustainable materials.",
    timeline: "Week 11-17"
  }, {
    step: "07",
    title: "Sampling",
    description: "Physical sample creation with testing and approvals.",
    timeline: "Week 18-20"
  }, {
    step: "08",
    title: "Manufacturing",
    description: "Ethical production with quality control and certification.",
    timeline: "Week 21-25"
  }, {
    step: "09",
    title: "Shipping",
    description: "Quality control, packaging, and carbon-neutral delivery.",
    timeline: "Week 26-30"
  }, {
    step: "10",
    title: "Launch",
    description: "Full rollout of your sustainable uniform program to all families.",
    timeline: "Week 31"
  }, {
    step: "11",
    title: "Ongoing Partnership",
    description: "Continuous optimization, impact reporting, and circular economy management.",
    timeline: "Ongoing"
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Process</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              From Vision to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Our proven process takes you from consultation to delivery, making ethical uniforms effortless for your school.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
      {/* Process Steps */}
      <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Our 11-Step Process</h2>
              <p className="text-muted-foreground text-lg">A detailed pathway from assessment to ongoing partnership</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-3 py-1 text-sm font-medium">
                        {step.step}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{step.timeline}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold leading-tight">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Implementation Timeline */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Detailed Implementation Timeline</h2>
              <p className="text-muted-foreground text-lg">Your journey from consultation to launch — typically 3 to 5 months from start to finish</p>
            </div>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader className="p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">
                            {phase.phase}
                          </Badge>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-5 w-5" />
                            <span className="text-lg">{phase.duration}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{phase.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Milestones */}
          <section className="bg-gradient-warm-section py-16 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Key Milestones</h2>
              <p className="text-muted-foreground text-lg">Critical checkpoints in your implementation journey</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-semibold leading-none tracking-tight">Design Approval</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">End of Phase 2</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Final uniform designs approved by school leadership and student representatives.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-semibold leading-none tracking-tight">Manufacturing Complete</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">End of Phase 3</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Uniforms manufactured and quality checked, ready for delivery.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-semibold leading-none tracking-tight">Full Launch</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">End of Phase 5</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Complete rollout to all students with full support systems active.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Sets Us Apart */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">What Sets Us Apart</h2>
              <p className="text-muted-foreground text-lg">Why schools choose our process</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">Zero Admin Burden</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We handle everything from design to delivery, so you can focus on education
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">Collaborative Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Students, parents, and staff are involved in every design decision
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">Continuous Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated account management and ongoing optimization
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-footer">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free uniform and sustainability audit to take the first step toward ethical uniforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Book Free Audit
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                View Implementation Timeline
              </Button>
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProcess;
