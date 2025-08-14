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
              Sustainable School Uniforms for <span className="text-primary">UK Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Supporting British schools in achieving their sustainability targets while providing high-quality, affordable uniforms that withstand the UK climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Book a School Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View UK Impact Report
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
              Transforming UK Education
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">200+</div>
                <div className="text-muted-foreground">UK Schools Partnered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Students Equipped</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">£2M+</div>
                <div className="text-muted-foreground">Saved for UK Families</div>
              </div>
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
              Our uniform solutions support the UK's Net Zero by 2050 commitment and align with DfE sustainability guidance for schools.
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
                Join Leading UK Schools
              </h2>
              <p className="text-muted-foreground">
                Schedule a consultation with our UK education team today.
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