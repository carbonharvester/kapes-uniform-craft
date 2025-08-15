import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Leaf, Users } from "lucide-react";

export default function MiddleEastSchools() {
  const benefits = [
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Sustainable Materials",
      description: "Uniforms made from organic cotton and recycled materials, supporting environmental goals across the Gulf region."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Cultural Sensitivity",
      description: "Designs that respect local customs and traditions while maintaining modern sustainability standards."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Community Impact",
      description: "Supporting local communities through ethical manufacturing and educational programs."
    }
  ];

  const features = [
    "Climate-appropriate fabrics for desert conditions",
    "Modest designs respecting cultural values",
    "Circular economy take-back programs",
    "Local distribution networks",
    "Arabic language support",
    "Halal-certified supply chain"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Sustainable School Uniforms for the <span className="text-primary">Middle East</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering schools across the UAE, Saudi Arabia, Qatar, and beyond with eco-friendly uniforms that honor tradition while protecting our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Request Partnership Information
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Download Regional Case Study
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
              Why Middle Eastern Schools Choose Kapes
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
              Tailored for the Region
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
              Making an Impact Across the Gulf
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Schools Partnered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Sustainable Uniforms Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">25%</div>
                <div className="text-muted-foreground">Reduction in Carbon Footprint</div>
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
              How Kapes Compares to Regional Suppliers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium text-primary">Kapes</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Al Bassam</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Gulf Uniform</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Mashriq</th>
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
                    <td className="p-4">Climate-Appropriate Fabrics</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Modest Design Options</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Community Investment Programs</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Take-Back & Recycling</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr>
                    <td className="p-4">Regional Distribution</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                Partner with Kapes
              </h2>
              <p className="text-muted-foreground">
                Ready to discuss your school's sustainability goals? Contact us today.
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