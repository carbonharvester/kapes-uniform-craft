import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
const PartnershipTiers = () => {
  const tiers = [{
    name: "Essentials",
    badge: "🟢 Essentials Tier",
    tagline: "Ethical Uniforms, Simplified",
    description: "For schools who want sustainable, ethical uniforms without the complexity",
    icon: Star,
    color: "green",
    route: "/essentials-tier",
    features: ["100% Sustainable Uniforms", "Ethical Manufacturing", "Custom Design & Sampling", "Fully Managed Online Shop", "Full Delivery Options", "Plastic-Free Packaging"]
  }, {
    name: "Core",
    badge: "🔵 Core Tier",
    tagline: "Sustainable Uniforms + Real Impact",
    description: "For schools who want to create positive change with impact tracking",
    icon: Zap,
    color: "blue",
    route: "/core-tier",
    features: ["Everything in Essentials", "Fully Managed Takeback Scheme", "KapesImpact™ Dashboard", "Free Meals & Uniforms Donated", "Factory Visits & Teaching Materials"]
  }, {
    name: "Impact",
    badge: "🟣 Impact Tier: Flagship Program",
    tagline: "For Schools Who Want to Lead — Not Follow",
    description: "Our highest level of partnership for values-driven schools",
    icon: Crown,
    color: "purple",
    route: "/impact-tier",
    features: ["Everything in Core", "QR Codes on Every Garment", "Student Governance Opportunity", "Custom PR & CSR Toolkit", "Dedicated Account Manager"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partnership Tiers
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the level of impact that's right for your school
          </p>
        </div>
      </section>

      {/* Tiers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => <Card key={index} className={`relative ${tier.color === 'blue' ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.color === 'blue' && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <tier.icon className={`h-6 w-6 text-${tier.color}-600`} />
                    <Badge variant="outline" className={`bg-${tier.color}-100 text-${tier.color}-800`}>
                      {tier.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{tier.tagline}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  <Link to={tier.route}>
                    <Button className="w-full" variant={tier.color === 'blue' ? 'default' : 'outline'}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare all features across our partnership tiers
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Feature</TableHead>
                  <TableHead className="text-center">Essentials</TableHead>
                  <TableHead className="text-center">Core</TableHead>
                  <TableHead className="text-center">Impact</TableHead>
                  <TableHead className="text-center">Custom</TableHead>
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
                  <TableCell className="text-center text-sm">Home (standard)</TableCell>
                  <TableCell className="text-center text-sm">Home + Lockers + School Shop</TableCell>
                  <TableCell className="text-center text-sm">Same as Core</TableCell>
                  <TableCell className="text-center text-sm blur-sm">All options</TableCell>
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
                  <TableCell className="font-medium">Student Board Member</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
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
          
          <div className="mt-8 text-center">
            <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-2">Interested in Custom Tier?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact us to discuss bespoke partnership options tailored to your school's specific needs.
              </p>
              <Button variant="outline">
                Contact Us for Details
              </Button>
            </div>
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
            Book your free uniform and sustainability audit to find the perfect tier for your school.
          </p>
          <Button size="lg">
            Book Free Audit
          </Button>
        </div>
      </section>
    </div>;
};
export default PartnershipTiers;