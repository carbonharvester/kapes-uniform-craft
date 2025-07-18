import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Star } from "lucide-react";

const EcoLaunchTier = () => {
  const included = [
    "100% Sustainable Uniforms",
    "Ethical Manufacturing",
    "Custom Uniform Design & Sampling",
    "Online Shop (Fully Managed)",
    "Full Delivery Options",
    "Plastic-Free Packaging"
  ];

  const notIncluded = [
    "Takeback scheme",
    "KapesImpact™ dashboard",
    "Free meals & uniforms donated",
    "Factory visits or teaching materials",
    "Student governance opportunities",
    "Dedicated account manager"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">EcoLaunch Tier</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Ethical Uniforms,{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              For schools who want sustainable, ethical uniforms without the complexity — get beautiful, responsible clothing that aligns with your values.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>Perfect for schools starting their sustainability journey</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* What's Included */}
          <section>
            <Card className="border-0 shadow-glass mb-8">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-medium text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  What's Included
                </CardTitle>
                <CardDescription className="text-lg">Everything you need for ethical, sustainable uniforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">{item}</h3>
                        {item === "100% Sustainable Uniforms" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Every item is made from regenerative, recycled, or biodegradable materials — always safe, always ethical.
                          </p>
                        )}
                        {item === "Ethical Manufacturing" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Verified, safe, child-labour-free production with full transparency.
                          </p>
                        )}
                        {item === "Custom Uniform Design & Sampling" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Designed to reflect your identity, values, and student feedback.
                          </p>
                        )}
                        {item === "Online Shop (Fully Managed)" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Built, maintained, and supported by Kapes — complete with AI-powered sizing and easy ordering.
                          </p>
                        )}
                        {item === "Full Delivery Options" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Next-day home delivery, e-commerce locker pickup, or Kapes-managed school shop.
                          </p>
                        )}
                        {item === "Plastic-Free Packaging" && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            All uniforms delivered in glassine paper — 100% biodegradable and beautiful to unbox.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-glass">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-medium text-red-600 flex items-center gap-2">
                  <X className="h-6 w-6" />
                  What's Not Included
                </CardTitle>
                <CardDescription className="text-lg">Features available in higher tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {notIncluded.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Best For */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Perfect For</h2>
              <p className="text-muted-foreground text-lg">Schools that align with this approach</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-lg font-medium mb-2">Starting Your Journey</h3>
                  <p className="text-muted-foreground">Schools beginning their sustainability journey</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-lg font-medium mb-2">Simplicity First</h3>
                  <p className="text-muted-foreground">Schools wanting ethical uniforms without extra complexity</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-lg font-medium mb-2">Quality Focus</h3>
                  <p className="text-muted-foreground">Schools prioritizing quality and ethics over impact programs</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-lg font-medium mb-2">Low Maintenance</h3>
                  <p className="text-muted-foreground">Schools wanting a streamlined, hands-off solution</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Value Proposition */}
          <section>
            <Card className="border-0 shadow-glass">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Simple. Ethical. Beautiful.</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  The Essentials Tier delivers sustainable uniforms that align with your values — without the complexity. 
                  Every item is ethically made, environmentally responsible, and designed to make students feel confident and proud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                    Compare All Tiers
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                    Book Your Free Audit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default EcoLaunchTier;
