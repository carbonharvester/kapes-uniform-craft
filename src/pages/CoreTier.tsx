import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap } from "lucide-react";

const CoreTier = () => {
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
    "Student governance opportunities", 
    "Kapes Adventures discount",
    "Custom PR & CSR toolkit",
    "Dedicated account manager"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Core Tier</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable Uniforms + Real Impact
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            For schools who want to create positive change — get all the sustainability benefits plus meaningful impact tracking and global contributions.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Zap className="h-4 w-4 text-blue-500" />
            <span>Most popular choice for purpose-driven schools</span>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">✅ What's Included</CardTitle>
              <CardDescription>Everything from Essentials plus meaningful impact features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-1">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item}</h3>
                      {item === "Fully Managed Takeback Scheme" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Return worn uniforms → we recycle them → we donate meals. All tracked and reported.
                        </p>
                      )}
                      {item === "KapesImpact™ Dashboard" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Real-time tracking of your school's environmental and social impact with detailed reporting.
                        </p>
                      )}
                      {item === "Free School Meals & Uniforms Donated" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          A portion of every sale funds school meals for children in need across Africa and free uniforms made locally.
                        </p>
                      )}
                      {item === "Factory Visits & Teaching Materials" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Access to school trips, factory tours, and classroom resources focused on sustainability and ethics.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">❌ What's Not Included</CardTitle>
              <CardDescription>Premium features available in Impact Tier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-1">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact at a Glance</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">12,000+</CardTitle>
                <CardDescription>School meals funded</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">85%</CardTitle>
                <CardDescription>Reduction in uniform waste</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">500+</CardTitle>
                <CardDescription>Uniforms donated globally</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 Best For</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools committed to measurable social and environmental impact</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools wanting to engage students in sustainability education</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools that value transparency and circular economy practices</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools ready to showcase their positive global contributions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Make an Impact Beyond Your Classroom
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The Core Tier connects your school to a global movement of positive change — with every uniform making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Compare All Tiers
            </Button>
            <Button variant="outline" size="lg">
              Book Your Free Uniform & Sustainability Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreTier;