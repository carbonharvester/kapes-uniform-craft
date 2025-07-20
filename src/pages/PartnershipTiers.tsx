import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const PartnershipTiers = () => {
  const tiers = [{
    name: "EcoLaunch",
    badge: "EcoLaunch",
    tagline: "Ethical Uniforms, Simplified",
    description: "For schools who want sustainable, ethical uniforms without the complexity",
    icon: Star,
    color: "green",
    route: "/ecolaunch-tier",
    features: ["100% Sustainable Uniforms", "Ethical Manufacturing", "Custom Design & Sampling", "Fully Managed Online Shop", "Full Delivery Options", "Plastic-Free Packaging"]
  }, {
    name: "SustainPro",
    badge: "SustainPro",
    tagline: "Sustainable Uniforms + Real Impact",
    description: "For schools who want to create positive change with impact tracking",
    icon: Zap,
    color: "blue",
    route: "/sustainpro-tier",
    features: ["Everything in EcoLaunch", "Fully Managed Takeback Scheme", "KapesImpact™ Dashboard", "Free Meals & Uniforms Donated", "Factory Visits & Teaching Materials"],
    popular: true
  }, {
    name: "LegacyImpact",
    badge: "LegacyImpact",
    tagline: "For Schools Who Want to Lead — Not Follow",
    description: "Our highest level of partnership for values-driven schools",
    icon: Crown,
    color: "purple",
    route: "/legacyimpact-tier",
    features: ["Everything in SustainPro", "QR Codes on Every Garment", "Student Leadership Opportunity", "Custom PR & CSR Toolkit", "Dedicated Account Manager"]
  }];

  const comparisonFeatures = [
    { name: "3-Year Contract", ecolaunch: true, sustainpro: true, legacyimpact: true, custom: true },
    { name: "Sustainable Materials", ecolaunch: "Standard only", sustainpro: "Mix available", legacyimpact: "100% only", custom: "Premium blend" },
    { name: "Commission Option", ecolaunch: false, sustainpro: "Up to 20%", legacyimpact: false, custom: "Flexible" },
    { name: "Takeback Scheme", ecolaunch: false, sustainpro: true, legacyimpact: true, custom: true },
    { name: "Home Delivery", ecolaunch: true, sustainpro: true, legacyimpact: true, custom: true },
    { name: "School Shop", ecolaunch: false, sustainpro: "Optional", legacyimpact: "Optional", custom: "Available" },
    { name: "School Locker Collection", ecolaunch: false, sustainpro: "Optional", legacyimpact: true, custom: "Available" },
    { name: "Packaging", ecolaunch: "Standard", sustainpro: "Recycled Plastic", legacyimpact: "Plastic-Free", custom: "Premium eco" },
    { name: "KapesImpact™", ecolaunch: false, sustainpro: "Dashboard Access", legacyimpact: "QR Code + Dashboard", custom: "Advanced analytics" },
    { name: "Free Uniforms & Meals in Africa", ecolaunch: false, sustainpro: "Optional", legacyimpact: "Included", custom: "Enhanced program" },
    { name: "Student Leadership Council", ecolaunch: false, sustainpro: true, legacyimpact: true, custom: true },
    { name: "Factory Visits & Education", ecolaunch: false, sustainpro: "Optional", legacyimpact: true, custom: "Priority access" },
    { name: "Kapes Adventures Discount", ecolaunch: false, sustainpro: false, legacyimpact: true, custom: "VIP access" },
    { name: "Marketing Support", ecolaunch: "Minimal", sustainpro: "Optional", legacyimpact: "Custom PR Kit", custom: "Full service" }
  ];

  const renderTableCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Partnership Tiers</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Impact Level
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Choose the level of impact that's right for your school. All tiers include sustainable, ethical uniforms and dedicated support.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Tiers Grid */}
          <section>
            <div className="grid gap-8 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <Card key={index} className={`border-0 shadow-glass hover-lift transition-smooth relative ${tier.popular ? 'ring-2 ring-primary/20' : ''}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-xl px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <tier.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 rounded-xl px-4 py-2">
                        {tier.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-medium leading-tight">{tier.tagline}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={tier.route}>
                      <Button 
                        className={`w-full rounded-xl font-medium px-6 py-4 hover:scale-105 transition-smooth ${tier.popular ? '' : 'variant-outline'}`} 
                        variant={tier.popular ? 'default' : 'outline'}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Detailed Feature Comparison
              </h2>
              <p className="text-muted-foreground text-lg">
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
                    {comparisonFeatures.map((feature, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{feature.name}</TableCell>
                        <TableCell className="text-center">
                          {renderTableCell(feature.ecolaunch)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderTableCell(feature.sustainpro)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderTableCell(feature.legacyimpact)}
                        </TableCell>
                        <TableCell className="text-center blur-sm">
                          {renderTableCell(feature.custom)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
            
            <div className="mt-12 text-center">
              <Card className="border-0 shadow-glass hover-lift transition-smooth max-w-md mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">Interested in Custom Tier?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Contact us to discuss bespoke partnership options tailored to your school's specific needs.
                  </p>
                  <Button variant="outline" className="rounded-xl font-medium px-6 py-3 hover:scale-105 transition-smooth">
                    Contact Us for Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-footer py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Book your free uniform and sustainability audit to find the perfect tier for your school.
            </p>
            <Button size="lg" className="rounded-xl font-medium px-8 py-4 text-lg hover:scale-105 transition-smooth">
              Book Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PartnershipTiers;
