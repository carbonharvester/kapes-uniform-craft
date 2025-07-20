import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, Settings, Truck, BarChart3 } from "lucide-react";
import { Footer } from "@/components/Footer";

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
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Four-Step Journey</h2>
              <p className="text-muted-foreground text-lg">A seamless pathway to sustainable uniforms</p>
            </div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-0 shadow-glass hover-lift transition-smooth">
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <step.icon className="h-8 w-8 text-primary" />
                          </div>
                          <Badge className="bg-primary/10 text-primary">
                            Step {index + 1}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl md:text-3xl font-medium mb-2">
                            {step.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="ml-22">
                        <div className="grid md:grid-cols-2 gap-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Overview */}
          <section className="py-16 bg-gradient-warm-section -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Typical Timeline</h2>
              <p className="text-muted-foreground text-lg">From initial contact to full implementation</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-light text-primary mb-2">2-3</div>
                  <p className="text-sm text-muted-foreground">weeks</p>
                  <h3 className="font-medium mt-4">Discovery & Design</h3>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-light text-primary mb-2">3-4</div>
                  <p className="text-sm text-muted-foreground">weeks</p>
                  <h3 className="font-medium mt-4">Setup & Configuration</h3>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-light text-primary mb-2">1-2</div>
                  <p className="text-sm text-muted-foreground">weeks</p>
                  <h3 className="font-medium mt-4">Launch & Delivery</h3>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-light text-primary mb-2">∞</div>
                  <p className="text-sm text-muted-foreground">ongoing</p>
                  <h3 className="font-medium mt-4">Monitor & Optimize</h3>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Sets Us Apart */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">What Sets Us Apart</h2>
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
