import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const PartnershipTiers = () => {
  const tiers = [
    {
      name: "EcoLaunch",
      subtitle: "Perfect for getting started",
      features: ["Basic sustainable materials", "Standard reporting", "Email support"],
      badge: "Starting Point"
    },
    {
      name: "SustainPro",
      subtitle: "Most popular choice",
      features: ["Premium eco-materials", "KapesImpact™ dashboard", "Priority support", "Educational resources"],
      badge: "Recommended",
      highlighted: true
    },
    {
      name: "LegacyImpact",
      subtitle: "For transformation leaders",
      features: ["Cutting-edge materials", "Full analytics suite", "Dedicated account manager", "Factory visits"],
      badge: "Premium"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Tiers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the partnership level that aligns with your school's sustainability goals and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card key={tier.name} className={tier.highlighted ? "border-primary shadow-lg relative" : ""}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <Badge variant="outline" className="w-fit mx-auto mb-2">{tier.badge}</Badge>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-muted-foreground">{tier.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">Compare All Tiers</Button>
          </div>
        </div>
      </div>
    </section>
  );
};