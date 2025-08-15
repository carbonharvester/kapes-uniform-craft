import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sun, Waves, MapPin } from "lucide-react";

export default function AustraliaSchools() {
  const benefits = [
    {
      icon: <Sun className="w-6 h-6 text-primary" />,
      title: "Climate Optimized",
      description: "UV-protective fabrics designed for Australia's harsh sun and diverse climate conditions."
    },
    {
      icon: <Waves className="w-6 h-6 text-primary" />,
      title: "Ocean Protection",
      description: "Recycled ocean plastic uniforms helping protect Australia's precious marine ecosystems."
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Local Manufacturing",
      description: "Supporting Australian jobs with local production facilities and supply chains."
    }
  ];

  const features = [
    "SPF 50+ sun protection fabrics",
    "Moisture-wicking for hot climates",
    "Indigenous design collaboration options",
    "Nationwide distribution network",
    "ACARA sustainability curriculum support",
    "Carbon offset shipping programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Expanding to <span className="text-primary">Australia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're planning to bring our sustainable uniform solutions to Australian schools. Express your interest to be part of our expansion journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Express Interest
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-center mb-12">
              Built for Australian Conditions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-center mb-12">
              Proudly Australian Made
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-12">
              Our Vision for Australia
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">All</div>
                <div className="text-muted-foreground">States & Territories</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">Ocean</div>
                <div className="text-muted-foreground">Plastic Recovery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">Carbon</div>
                <div className="text-muted-foreground">Neutral Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-center mb-12">
              How Kapes Will Compare to Australian Suppliers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium text-primary">Kapes</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Beleza</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Lowes</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Stuarts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">100% Sustainable Materials</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Ocean Plastic Recycling</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Carbon Neutral Shipping</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">SPF 50+ Protection</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-muted-foreground">Partial</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Online Ordering</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4">Indigenous Design Collaboration</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              Supporting Australia's Climate Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our uniforms will help Australian schools achieve their sustainability targets while protecting students from unique environmental challenges.
            </p>
            <Button size="lg" variant="outline">
              View Climate Impact Data
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                Join Our Australia Expansion
              </h2>
              <p className="text-muted-foreground">
                Be among the first Australian schools to partner with us when we launch.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}