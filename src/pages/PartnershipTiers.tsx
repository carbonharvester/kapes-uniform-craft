import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const PartnershipTiers = () => {
  const tiers = [{
    name: "EcoLaunch",
    badge: "🟢 EcoLaunch Tier",
    tagline: "Ethical Uniforms, Simplified",
    description: "For schools who want sustainable, ethical uniforms without the complexity",
    icon: Star,
    color: "green",
    route: "/ecolaunch-tier",
    features: ["100% Sustainable Uniforms", "Ethical Manufacturing", "Custom Design & Sampling", "Fully Managed Online Shop", "Full Delivery Options", "Plastic-Free Packaging"]
  }, {
    name: "SustainPro",
    badge: "🔵 SustainPro Tier",
    tagline: "Sustainable Uniforms + Real Impact",
    description: "For schools who want to create positive change with impact tracking",
    icon: Zap,
    color: "blue",
    route: "/sustainpro-tier",
    features: ["Everything in EcoLaunch", "Fully Managed Takeback Scheme", "KapesImpact™ Dashboard", "Free Meals & Uniforms Donated", "Factory Visits & Teaching Materials"]
  }, {
    name: "LegacyImpact",
    badge: "🟣 LegacyImpact Tier: Flagship Program",
    tagline: "For Schools Who Want to Lead — Not Follow",
    description: "Our highest level of partnership for values-driven schools",
    icon: Crown,
    color: "purple",
    route: "/legacyimpact-tier",
    features: ["Everything in SustainPro", "QR Codes on Every Garment", "Student Leadership Opportunity", "Custom PR & CSR Toolkit", "Dedicated Account Manager"]
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-6 py-2 font-medium">
              Choose Your Partnership Level
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Partnership{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Tiers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Choose the level of impact that's right for your school. All tiers include sustainable, ethical uniforms and dedicated support.
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Tiers Grid */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card key={index} className={`relative border-0 shadow-glass hover-lift transition-smooth ${tier.color === 'blue' ? 'ring-2 ring-primary/20' : ''}`}>
                {tier.color === 'blue' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-xl">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <tier.icon className="h-6 w-6 text-primary" />
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">
                      {tier.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{tier.tagline}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={tier.route}>
                    <Button className={`w-full rounded-xl font-medium px-6 py-4 transition-all duration-300 hover:scale-105 ${tier.color === 'blue' ? '' : 'variant-outline'}`} variant={tier.color === 'blue' ? 'default' : 'outline'}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="relative py-16 px-4 bg-muted/30 -mx-4 rounded-3xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Compare all features across our partnership tiers
            </p>
          </div>
          
          <Card className="border-0 shadow-glass overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="w-1/4 font-medium text-foreground">Feature</TableHead>
                    <TableHead className="text-center font-medium text-foreground">EcoLaunch</TableHead>
                    <TableHead className="text-center font-medium text-foreground">SustainPro</TableHead>
                    <TableHead className="text-center font-medium text-foreground">LegacyImpact</TableHead>
                    <TableHead className="text-center font-medium text-foreground">Custom</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">3-Year Contract</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center blur-sm">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sustainable Materials</TableCell>
                    <TableCell className="text-center text-sm">Standard only</TableCell>
                    <TableCell className="text-center text-sm">Mix available</TableCell>
                    <TableCell className="text-center text-sm">100% only</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Premium blend</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Commission Option</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Up to 20%</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm blur-sm">Flexible</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Takeback Scheme</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center blur-sm">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Home Delivery</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center blur-sm">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">School Shop</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Available</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">School Locker Collection</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm blur-sm">Available</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Packaging</TableCell>
                    <TableCell className="text-center text-sm">Standard</TableCell>
                    <TableCell className="text-center text-sm">Recycled Plastic</TableCell>
                    <TableCell className="text-center text-sm">Plastic-Free (Glassine)</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Premium eco</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">KapesImpact™</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Dashboard Access</TableCell>
                    <TableCell className="text-center text-sm">QR Code + Dashboard</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Advanced analytics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Free Uniforms & Meals in Africa</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center text-sm">Included</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Enhanced program</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Kapes Young Leaders Council Member</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center blur-sm">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Factory Visits & Education</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm blur-sm">Priority access</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Kapes Adventures Discount</TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </TableCell>
                    <TableCell className="text-center text-sm blur-sm">VIP access</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Marketing Support</TableCell>
                    <TableCell className="text-center text-sm">Minimal</TableCell>
                    <TableCell className="text-center text-sm">Optional</TableCell>
                    <TableCell className="text-center text-sm">Custom PR Kit</TableCell>
                    <TableCell className="text-center text-sm blur-sm">Full service</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
          
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-glass hover-lift transition-smooth max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Interested in Custom Tier?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Contact us to discuss bespoke partnership options tailored to your school's specific needs.
                </p>
                <Button variant="outline" className="rounded-xl font-medium px-6 py-3 transition-all duration-300 hover:scale-105">
                  Contact Us for Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
            Book your free uniform and sustainability audit to find the perfect tier for your school.
          </p>
          <Button size="lg" className="rounded-xl font-medium px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            Book Free Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PartnershipTiers;
