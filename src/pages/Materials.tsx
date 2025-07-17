
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, TreePine, Droplets, Shield, Heart } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      icon: TreePine,
      title: "Regenerative Cotton",
      description: "Sourced from farms using regenerative agriculture practices that restore soil health and sequester carbon.",
      benefits: ["Carbon negative farming", "Soil health restoration", "Biodiversity increase"]
    },
    {
      icon: Recycle,
      title: "Recycled Polyester",
      description: "Made from recycled plastic bottles, giving new life to waste materials.",
      benefits: ["Reduces plastic waste", "Lower energy consumption", "Same durability as virgin polyester"]
    },
    {
      icon: Leaf,
      title: "Organic Hemp",
      description: "Naturally sustainable fiber that requires minimal water and no pesticides.",
      benefits: ["Naturally antimicrobial", "Highly durable", "Improves with each wash"]
    },
    {
      icon: Droplets,
      title: "TENCEL™ Lyocell",
      description: "Made from sustainably sourced wood pulp in a closed-loop process.",
      benefits: ["Biodegradable", "Moisture-wicking", "Silky soft feel"]
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "OEKO-TEX Standard 100",
      description: "Ensures harmful substances are not present in our fabrics"
    },
    {
      icon: Leaf,
      title: "Global Organic Textile Standard (GOTS)",
      description: "Certifies organic fibers and ethical manufacturing"
    },
    {
      icon: Heart,
      title: "Cradle to Cradle Certified",
      description: "Products designed for a circular economy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4">Sustainable Materials</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Fabrics That{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Heal the Planet
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Every fiber we choose is selected for its positive impact on people and planet. Discover the innovative materials that make our uniforms both beautiful and responsible.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Materials Grid */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Material Portfolio</h2>
              <p className="text-muted-foreground text-lg">Innovation meets sustainability in every thread</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {materials.map((material, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <material.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-medium">{material.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {material.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {material.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Certified Excellence</h2>
              <p className="text-muted-foreground text-lg">Third-party verified sustainability standards</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-4">{cert.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Material Journey */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">From Fiber to Future</h2>
              <p className="text-muted-foreground text-lg">The journey of our sustainable materials</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Sourcing</h3>
                  <p className="text-sm text-muted-foreground">Ethical, sustainable fiber sourcing from verified farms</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">Clean, chemical-free processing with minimal environmental impact</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">Ethical production in certified facilities with fair labor practices</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-medium mb-2">End of Life</h3>
                  <p className="text-sm text-muted-foreground">Biodegradable or recyclable materials ensuring circular design</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Feel the quality and comfort of our sustainable materials while knowing you're making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Request Samples
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Learn About Our Process
              </Button>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default Materials;
