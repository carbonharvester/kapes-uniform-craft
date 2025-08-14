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
              Sustainable School Uniforms for <span className="text-primary">Australian Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Protecting Australian students and the environment with uniforms designed for our unique climate, from the Outback to the coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Request School Partnership
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Download Australia Report
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
              Leading Change Across Australia
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Australian Schools</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">300K+</div>
                <div className="text-muted-foreground">Students Protected</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">50 Tonnes</div>
                <div className="text-muted-foreground">Ocean Plastic Recycled</div>
              </div>
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
              Our uniforms help Australian schools achieve their sustainability targets while protecting students from our unique environmental challenges.
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
                Ready to Make a Difference?
              </h2>
              <p className="text-muted-foreground">
                Connect with our Australian team to discuss your school's sustainability journey.
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