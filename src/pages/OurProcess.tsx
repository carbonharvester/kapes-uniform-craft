import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Settings, Truck, BarChart3 } from "lucide-react";

const OurProcess = () => {
  const steps = [
    {
      icon: Users,
      title: "Discovery & Design",
      description: "Understanding your school's needs, values, and uniform requirements",
      details: [
        "Initial consultation and needs assessment",
        "Custom design development",
        "Sample creation and feedback",
        "Final design approval"
      ]
    },
    {
      icon: Settings,
      title: "Setup & Configuration",
      description: "Building your custom online shop and systems",
      details: [
        "Online shop development",
        "Payment and delivery setup",
        "Staff training and onboarding",
        "System testing and optimization"
      ]
    },
    {
      icon: Truck,
      title: "Launch & Delivery",
      description: "Going live with full support and monitoring",
      details: [
        "Soft launch with select families",
        "Full rollout to all students",
        "Ongoing delivery management",
        "Customer support setup"
      ]
    },
    {
      icon: BarChart3,
      title: "Monitor & Optimize",
      description: "Continuous improvement and impact tracking",
      details: [
        "Performance monitoring",
        "Impact reporting and dashboards",
        "Regular reviews and updates",
        "Continuous optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Process
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            From consultation to delivery — how we make ethical uniforms effortless for your school
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your free uniform and sustainability audit to begin your journey with Kapes.
          </p>
          <Button size="lg" className="mr-4">
            Book Free Audit
          </Button>
          <Button variant="outline" size="lg">
            View Implementation Timeline
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;