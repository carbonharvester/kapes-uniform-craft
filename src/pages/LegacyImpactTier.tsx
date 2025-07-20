import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, QrCode } from "lucide-react";

const LegacyImpactTier = () => {
  const included = [
    "100% Sustainable Uniforms",
    "Ethical Manufacturing",
    "Custom Uniform Design & Sampling", 
    "Online Shop (Fully Managed)",
    "Full Delivery Options",
    "Plastic-Free Packaging",
    "Fully Managed Takeback Scheme",
    "KapesImpact™ Dashboard + QR Codes",
    "Free School Meals & Uniforms Donated",
    "Student Leadership Opportunity",
    "Factory Visits & Teaching Materials",
    "Kapes Adventures Discount",
    "Custom PR & CSR Toolkit",
    "Dedicated Account Manager"
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">LegacyImpact Tier</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              For Schools Who Want to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Lead — Not Follow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              For schools who want to lead — not follow.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      
      {/* Introduction Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            The LegacyImpact Tier is our highest level of partnership, built for values-driven schools that want to embed sustainability, equity, and student voice into the heart of their uniform program.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-primary">
            <Crown className="h-5 w-5" />
            <span className="font-medium">Our complete, flagship experience — with every feature included</span>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-gradient-warm-section relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardHeader className="p-8">
                <QrCode className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold leading-none tracking-tight">QR-Coded Garments</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">Every item tells its story — scan to see impact per garment, carbon saved, and factory transparency.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardHeader className="p-8">
                <Crown className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold leading-none tracking-tight">Kapes Young Leaders Council Member</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">Your school nominates a student to join the Kapes Young Leaders Council — real governance, real impact.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardHeader className="p-8">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-semibold leading-none tracking-tight">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">Your dedicated account manager provides strategy, planning, and ongoing support whenever you need it.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-glass">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl md:text-3xl font-medium text-primary flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                What's Included
              </CardTitle>
              <CardDescription className="text-lg">Absolutely everything — this is our complete, flagship experience</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid gap-6 md:grid-cols-1">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item}</h3>
                      {item === "KapesImpact™ Dashboard + QR Codes" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Get school-wide reporting PLUS QR codes printed on every garment. Scan to see impact per item, use in lessons and PR.
                        </p>
                      )}
                      {item === "Student Leadership Opportunity" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Your school nominates one student to join the Kapes Young Leaders Council — contributing to real decisions and campaigns.
                        </p>
                      )}
                      {item === "Custom PR & CSR Toolkit" && (
                        <p className="text-muted-foreground leading-relaxed">
                          Media-ready visuals, reports, templates, and guidance to showcase your impact across newsletters, social media, and press.
                        </p>
                      )}
                      {item === "Dedicated Account Manager" && (
                        <p className="text-muted-foreground leading-relaxed">
                          For ongoing strategy, planning, support, and reporting — whenever you need it.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="bg-gradient-light-warm-section relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="border-0 shadow-glass">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl md:text-3xl font-medium text-primary flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6" />
                What's Not Included
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-xl font-semibold mb-4">Absolutely nothing.</p>
              <p className="text-muted-foreground leading-relaxed">
                This is our complete, flagship experience — with every feature and every level of impact included.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best For */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Perfect For</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools leading the way in sustainability and social responsibility</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools that want to give students a voice in their uniform program</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools that value community, transparency, and education</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">Schools ready to turn their uniform into a global impact engine</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-to-footer relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            "Uniforms shouldn't just cover students — they should empower them."
          </blockquote>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            The LegacyImpact Tier turns your school into a model for what ethical education looks like.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            Lead the Future of Education
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
            Join the most comprehensive ethical uniform program available — where every detail drives positive change.
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
      </section>
    </div>
  );
};

export default LegacyImpactTier;
