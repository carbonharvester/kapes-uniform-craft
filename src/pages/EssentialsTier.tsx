import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Star } from "lucide-react";

const EssentialsTier = () => {
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">Essentials Tier</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ethical Uniforms, Simplified
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            For schools who want sustainable, ethical uniforms without the complexity — get beautiful, responsible clothing that aligns with your values.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Perfect for schools starting their sustainability journey</span>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">✅ What's Included</CardTitle>
              <CardDescription>Everything you need for ethical, sustainable uniforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item}</h3>
                      {item === "100% Sustainable Uniforms" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Every item is made from regenerative, recycled, or biodegradable materials — always safe, always ethical.
                        </p>
                      )}
                      {item === "Ethical Manufacturing" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Verified, safe, child-labour-free production with full transparency.
                        </p>
                      )}
                      {item === "Custom Uniform Design & Sampling" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Designed to reflect your identity, values, and student feedback.
                        </p>
                      )}
                      {item === "Online Shop (Fully Managed)" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Built, maintained, and supported by Kapes — complete with AI-powered sizing and easy ordering.
                        </p>
                      )}
                      {item === "Full Delivery Options" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Next-day home delivery, e-commerce locker pickup, or Kapes-managed school shop.
                        </p>
                      )}
                      {item === "Plastic-Free Packaging" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          All uniforms delivered in glassine paper — 100% biodegradable and beautiful to unbox.
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
              <CardDescription>Features available in higher tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
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

      {/* Best For */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 Best For</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools wanting ethical uniforms without extra complexity</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools starting their sustainability journey</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools prioritizing quality and ethics over impact programs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-center">Schools wanting a streamlined, low-maintenance solution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Simple. Ethical. Beautiful.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The Essentials Tier delivers sustainable uniforms that align with your values — without the complexity.
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

export default EssentialsTier;