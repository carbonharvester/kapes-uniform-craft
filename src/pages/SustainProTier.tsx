import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap } from "lucide-react";

const SustainProTier = () => {
  const included = [
    "100% Sustainable Uniforms",
    "Ethical Manufacturing", 
    "Custom Uniform Design & Sampling",
    "Online Shop (Fully Managed)",
    "Full Delivery Options",
    "Plastic-Free Packaging",
    "Fully Managed Takeback Scheme",
    "KapesImpact™ Dashboard",
    "Free School Meals & Uniforms Donated",
    "Factory Visits & Teaching Materials"
  ];

  const notIncluded = [
    "QR codes on garments",
    "Student leadership opportunities", 
    "Kapes Adventures discount",
    "Custom PR & CSR toolkit",
    "Dedicated account manager"
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">SustainPro Tier</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Sustainable Uniforms +{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Real Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              For schools who want to create positive change — get all the sustainability benefits plus meaningful impact tracking and global contributions.
            </p>
            <div className="flex items-center gap-2 text-lg text-white/80">
              <Zap className="h-5 w-5 text-blue-400" />
              <span>Most popular choice for purpose-driven schools</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* What's Included */}
      <section className="bg-gradient-warm-section relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <Card className="mb-12 border-0 shadow-glass">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl md:text-3xl font-medium text-primary flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                What's Included
              </CardTitle>
              <CardDescription className="text-lg">Everything from Essentials plus meaningful impact features</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid gap-6 md:grid-cols-1">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item}</h3>
                      {item === "Fully Managed Takeback Scheme" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Return worn uniforms → we recycle them → we donate meals. All tracked and reported.
                        </p>
                      )}
                      {item === "KapesImpact™ Dashboard" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Real-time tracking of your school's environmental and social impact with detailed reporting.
                        </p>
                      )}
                      {item === "Free School Meals & Uniforms Donated" && (
                        <p className="text-muted-foreground leading-relaxed">
                          A portion of every sale funds school meals for children in need across Africa and free uniforms made locally.
                        </p>
                      )}
                      {item === "Factory Visits & Teaching Materials" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Access to school trips, factory tours, and classroom resources focused on sustainability and ethics.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-glass">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl md:text-3xl font-medium text-red-600 flex items-center gap-3">
                <X className="h-6 w-6" />
                What's Not Included
              </CardTitle>
              <CardDescription className="text-lg">Premium features available in LegacyImpact Tier</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid gap-4 md:grid-cols-1">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="bg-gradient-light-warm-section relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Your Impact at a Glance</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardHeader className="p-8">
                <CardTitle className="text-4xl font-light tracking-tight text-primary mb-2">12,000+</CardTitle>
                <CardDescription className="text-lg">School meals funded</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardHeader className="p-8">
                <CardTitle className="text-4xl font-light tracking-tight text-primary mb-2">85%</CardTitle>
                <CardDescription className="text-lg">Reduction in uniform waste</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardHeader className="p-8">
                <CardTitle className="text-4xl font-light tracking-tight text-primary mb-2">500+</CardTitle>
                <CardDescription className="text-lg">Uniforms donated globally</CardDescription>
              </CardHeader>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="bg-gradient-warm-section relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Perfect For</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools committed to measurable social and environmental impact</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools wanting to engage students in sustainability education</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools that value transparency and circular economy practices</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools ready to showcase their positive global contributions</p>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-footer">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            Make an Impact Beyond Your Classroom
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
            The SustainPro Tier connects your school to a global movement of positive change — with every uniform making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Compare All Tiers
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Book Your Free Uniform & Sustainability Audit
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainProTier;
