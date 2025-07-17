import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const ImplementationTimeline = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "2-4 weeks",
      status: "planning",
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
      status: "design",
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
      title: "Platform Setup",
      duration: "3-4 weeks",
      status: "development",
      activities: [
        "Online shop development and customization",
        "Payment gateway integration",
        "Delivery options configuration",
        "KapesImpact™ dashboard setup",
        "Staff training materials preparation"
      ]
    },
    {
      phase: "Phase 4",
      title: "Testing & Training",
      duration: "2-3 weeks", 
      status: "testing",
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
      status: "launch",
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
      status: "optimize",
      activities: [
        "Performance monitoring and reporting",
        "Impact tracking and dashboard updates",
        "Regular review meetings",
        "Continuous improvement implementation",
        "Additional service rollouts"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'design': return 'bg-purple-100 text-purple-800';
      case 'development': return 'bg-yellow-100 text-yellow-800';
      case 'testing': return 'bg-orange-100 text-orange-800';
      case 'launch': return 'bg-green-100 text-green-800';
      case 'optimize': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-6 py-2 font-medium">
              Implementation Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Implementation{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Timeline
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Your journey from consultation to launch — typically 13-21 weeks from start to finish
            </p>
            <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Total timeline: 3-5 months</span>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
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
        </div>
      </section>

      {/* Key Milestones */}
      <section className="relative py-16 px-4 bg-muted/30 -mx-4 rounded-3xl">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Key Milestones</h2>
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
                <CardTitle className="text-xl font-semibold leading-none tracking-tight">Soft Launch</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">End of Phase 4</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">Limited rollout with select families to test systems and processes.</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
            Book your free consultation to discuss your timeline and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Download Timeline PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImplementationTimeline;