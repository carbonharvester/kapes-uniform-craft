import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footprints, Droplets, Zap, TreePine, Recycle, Users } from "lucide-react";

const WhatsInAFootprint = () => {
  const footprintData = [
    {
      icon: Droplets,
      title: "Water Usage",
      conventional: "2,700 liters per uniform",
      kapes: "340 liters per uniform",
      reduction: "87% reduction",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Energy Consumption", 
      conventional: "45 kWh per uniform",
      kapes: "12 kWh per uniform",
      reduction: "73% reduction",
      color: "yellow"
    },
    {
      icon: TreePine,
      title: "CO2 Emissions",
      conventional: "8.5 kg CO2 per uniform",
      kapes: "2.1 kg CO2 per uniform",
      reduction: "75% reduction",
      color: "green"
    },
    {
      icon: Recycle,
      title: "Waste Generated",
      conventional: "1.2 kg waste per uniform",
      kapes: "0.1 kg waste per uniform",
      reduction: "92% reduction",
      color: "purple"
    }
  ];

  const lifecycle = [
    {
      stage: "Raw Materials",
      description: "Organic and recycled fibers",
      impact: "Reduced pesticide use, lower water consumption"
    },
    {
      stage: "Production",
      description: "Ethical manufacturing",
      impact: "Clean energy, fair wages, safe conditions"
    },
    {
      stage: "Transport",
      description: "Optimized logistics",
      impact: "Carbon-neutral shipping, minimal packaging"
    },
    {
      stage: "Use Phase",
      description: "Durable design",
      impact: "Longer lifespan, fewer replacements needed"
    },
    {
      stage: "End of Life",
      description: "Takeback program",
      impact: "Recycling, upcycling, donation programs"
    }
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Environmental Impact</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              What's in a{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Footprint?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Every uniform leaves an environmental footprint. Here's how we're making ours as light as possible.
            </p>
            <div className="flex items-center gap-2 text-lg text-white/80">
              <Footprints className="h-6 w-6 text-green-400" />
              <span className="font-semibold">75% smaller environmental footprint</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Footprint Comparison */}
      <section style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(209 100% 91%) 20%, hsl(209 100% 91%) 80%, hsl(0 0% 100%) 100%)' }} className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Kapes vs. Conventional Uniforms</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {footprintData.map((data, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${data.color}-100`}>
                      <data.icon className={`h-6 w-6 text-${data.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{data.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Conventional</p>
                      <p className="text-sm font-semibold text-red-600">{data.conventional}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Kapes</p>
                      <p className="text-sm font-semibold text-green-600">{data.kapes}</p>
                    </div>
                    <Badge className={`bg-${data.color}-100 text-${data.color}-800`}>
                      {data.reduction}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Assessment */}
      <section className="py-16 px-4 bg-gradient-warm-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Full Lifecycle Assessment</h2>
          <div className="space-y-6">
            {lifecycle.map((stage, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{stage.stage}</CardTitle>
                      <CardDescription>{stage.description}</CardDescription>
                    </div>
                    <Badge variant="outline">Stage {index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                    <strong>Impact Reduction:</strong> {stage.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Numbers */}
      <section style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(209 100% 91%) 20%, hsl(209 100% 91%) 80%, hsl(0 0% 100%) 100%)' }} className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Real Impact, Real Numbers</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600">2.3M</CardTitle>
                <CardDescription>Liters of water saved annually</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-green-600">850T</CardTitle>
                <CardDescription>CO2 emissions prevented per year</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple-600">95%</CardTitle>
                <CardDescription>Waste diverted from landfills</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Third Party Verification */}
      <section className="py-16 px-4 bg-gradient-warm-section">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Third-Party Verified</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our environmental impact data is independently verified by:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Carbon Trust</h4>
                  <p className="text-sm text-muted-foreground">Carbon footprint certification</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Water Footprint Network</h4>
                  <p className="text-sm text-muted-foreground">Water usage assessment</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cradle to Cradle Institute</h4>
                  <p className="text-sm text-muted-foreground">Circular design certification</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Global Recycled Standard</h4>
                  <p className="text-sm text-muted-foreground">Recycled content verification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-footer">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Measure Your School's Impact
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Use our impact calculator to see how much your school could reduce its environmental footprint with Kapes uniforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Calculate Your Impact
            </Button>
            <Button variant="outline" size="lg">
              Download Full LCA Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsInAFootprint;
