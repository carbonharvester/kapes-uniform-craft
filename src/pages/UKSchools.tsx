import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Recycle, TrendingUp } from "lucide-react";

export default function UKSchools() {
  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Ofsted Alignment",
      description: "Support your school's sustainability goals and demonstrate environmental leadership in inspections."
    },
    {
      icon: <Recycle className="w-6 h-6 text-primary" />,
      title: "Circular Economy",
      description: "Leading the UK in circular uniform solutions with take-back schemes and recycling programs."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Cost Savings",
      description: "Reduce uniform costs for families while improving quality and sustainability outcomes."
    }
  ];

  const features = [
    "Weather-resistant UK climate fabrics",
    "Government sustainability compliance",
    "Local UK manufacturing partnerships",
    "Free uniform programs for disadvantaged students",
    "Carbon neutral delivery options",
    "WRAP (Waste & Resources Action Programme) certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Coming Soon to <span className="text-primary">UK Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're expanding to support British schools in achieving their sustainability targets. Register your interest to be among the first to partner with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Register Interest
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn About Our Impact
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
              Leading UK Schools in Sustainability
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
              Designed for British Schools
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
              Our Goals for UK Education
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">2050</div>
                <div className="text-muted-foreground">Net Zero Target</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Circular Materials</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">Local</div>
                <div className="text-muted-foreground">UK Manufacturing</div>
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
              How Kapes Will Compare to UK Suppliers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium text-primary">Kapes</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Stevensons</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Brigade</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Price & Buckland</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">100% Sustainable Materials</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">Partial</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Net Zero by 2050 Aligned</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Circular Economy Model</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                    <td className="p-4 text-center text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">UK Weather Optimized</td>
                    <td className="p-4 text-center text-primary">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
                    <td className="p-4 text-center text-green-500">✓</td>
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
                    <td className="p-4">Free Uniforms for Disadvantaged</td>
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

      {/* Government Alignment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              Aligned with UK Government Initiatives
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our uniform solutions will support the UK's Net Zero by 2050 commitment and align with DfE sustainability guidance for schools.
            </p>
            <Button size="lg" variant="outline">
              View Compliance Documentation
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
                Be Among the First UK Schools
              </h2>
              <p className="text-muted-foreground">
                Register your interest to join our UK expansion program.
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