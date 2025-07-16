import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, QrCode } from "lucide-react";

const ImpactTier = () => {
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
    "Student Governance Opportunity",
    "Factory Visits & Teaching Materials",
    "Kapes Adventures Discount",
    "Custom PR & CSR Toolkit",
    "Dedicated Account Manager"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Impact Tier: Flagship Program</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For Schools Who Want to Lead — Not Follow
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The Impact Tier is our highest level of partnership, built for values-driven schools that want to embed sustainability, equity, and student voice into the heart of their uniform program.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Crown className="h-4 w-4 text-purple-500" />
            <span>Our complete, flagship experience — with every feature included</span>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-purple-200">
              <CardHeader>
                <QrCode className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">QR-Coded Garments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Every item tells its story — scan to see impact per garment, carbon saved, and factory transparency.</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardHeader>
                <Crown className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Student Board Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Your school nominates a student to join the Kapes Student Board — real governance, real impact.</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Your dedicated account manager provides strategy, planning, and ongoing support whenever you need it.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">✅ What's Included</CardTitle>
              <CardDescription>Absolutely everything — this is our complete, flagship experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-1">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item}</h3>
                      {item === "KapesImpact™ Dashboard + QR Codes" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Get school-wide reporting PLUS QR codes printed on every garment. Scan to see impact per item, use in lessons and PR.
                        </p>
                      )}
                      {item === "Student Governance Opportunity" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Your school nominates one student to join the Kapes Student Board — contributing to real decisions and campaigns.
                        </p>
                      )}
                      {item === "Custom PR & CSR Toolkit" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Media-ready visuals, reports, templates, and guidance to showcase your impact across newsletters, social media, and press.
                        </p>
                      )}
                      {item === "Dedicated Account Manager" && (
                        <p className="text-sm text-muted-foreground mt-1">
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
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">❌ What's Not Included</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Absolutely nothing.</p>
              <p className="text-muted-foreground mt-2">
                This is our complete, flagship experience — with every feature and every level of impact included.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 Best For</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools leading the way in sustainability and social responsibility</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools that want to give students a voice in their uniform program</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools that value community, transparency, and education</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools ready to turn their uniform into a global impact engine</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
            "Uniforms shouldn't just cover students — they should empower them."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            The Impact Tier turns your school into a model for what ethical education looks like.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Lead the Future of Education
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the most comprehensive ethical uniform program available — where every detail drives positive change.
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

export default ImpactTier;