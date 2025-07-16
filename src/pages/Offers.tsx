import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Offers = () => {
  const tiers = [
    {
      name: "EcoLaunch",
      description: "Base tier for schools starting their sustainability journey",
      features: ["Basic sustainable materials", "Standard reporting", "Email support"],
      price: "Revenue share model"
    },
    {
      name: "SustainPro",
      description: "Core offering for schools committed to impact",
      features: ["Premium eco-materials", "KapesImpact™ dashboard", "Priority support", "Educational resources"],
      price: "Enhanced revenue share"
    },
    {
      name: "LegacyImpact",
      description: "Full impact partnership for transformation leaders",
      features: ["Cutting-edge materials", "Full analytics suite", "Dedicated account manager", "Factory visits", "Custom programs"],
      price: "Premium partnership"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Partnership Offers & Tiers</h1>
          
          {/* Tier Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Partnership Level</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <Card key={tier.name} className={index === 1 ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <p className="text-lg font-semibold">{tier.price}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing Details */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Pricing Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>No Upfront Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We believe in value-first partnerships. Pay only when you see results through our revenue share model.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Buy-Back Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We'll buy back unsold inventory, ensuring zero risk for your school's uniform program.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contract Info */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Partnership Terms</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contract Duration</h3>
                    <p>3-year minimum partnership to ensure meaningful impact and relationship development.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Upgrade Path</h3>
                    <p>Seamless tier upgrades available as your school's sustainability goals evolve.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Custom Quote Form */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Get Your Custom Quote</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">School Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students</label>
                    <input type="number" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Tier</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>EcoLaunch</option>
                      <option>SustainPro</option>
                      <option>LegacyImpact</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Request Custom Quote</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Offers;