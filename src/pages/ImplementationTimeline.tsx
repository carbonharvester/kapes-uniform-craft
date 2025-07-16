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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Implementation Timeline
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your journey from consultation to launch — typically 13-21 weeks from start to finish
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Total timeline: 3-5 months</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className={getStatusColor(phase.status)}>
                          {phase.phase}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{phase.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
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
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Milestones</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Approval</CardTitle>
                <CardDescription>End of Phase 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Final uniform designs approved by school leadership and student representatives.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Soft Launch</CardTitle>
                <CardDescription>End of Phase 4</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Limited rollout with select families to test systems and processes.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Full Launch</CardTitle>
                <CardDescription>End of Phase 5</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Complete rollout to all students with full support systems active.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your free consultation to discuss your timeline and requirements.
          </p>
          <Button size="lg" className="mr-4">
            Book Free Consultation
          </Button>
          <Button variant="outline" size="lg">
            Download Timeline PDF
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ImplementationTimeline;