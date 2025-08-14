import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Flag, GraduationCap, DollarSign } from "lucide-react";

export default function USASchools() {
  const benefits = [
    {
      icon: <Flag className="w-6 h-6 text-primary" />,
      title: "Made in America",
      description: "Supporting American jobs with domestic manufacturing and fair labor practices."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Educational Excellence",
      description: "Uniforms that support learning environments while teaching sustainability values."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Budget Friendly",
      description: "Affordable solutions that reduce costs for families while improving quality and durability."
    }
  ];

  const features = [
    "All-climate fabric options for diverse US regions",
    "Title I school discount programs",
    "State education compliance certified",
    "Bulk ordering for district-wide programs",
    "STEM education partnerships",
    "Zero-waste manufacturing processes"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Sustainable School Uniforms for <span className="text-primary">American Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering American educators and students with sustainable, affordable uniforms that support learning and environmental stewardship from coast to coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Schedule District Meeting
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View US Impact Study
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
              Advancing American Education
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
              Designed for American Schools
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
              Transforming American Education
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">500+</div>
                <div className="text-muted-foreground">US Schools Partnered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Students Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">$10M+</div>
                <div className="text-muted-foreground">Saved for US Families</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Alignment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
              Supporting Federal Education Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our sustainable uniform programs align with Department of Education initiatives and support schools in meeting federal sustainability targets.
            </p>
            <Button size="lg" variant="outline">
              View Federal Compliance Guide
            </Button>
          </div>
        </div>
      </section>

      {/* State Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-center mb-12">
              Active in All 50 States
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-light text-primary mb-2">California</div>
                <div className="text-sm text-muted-foreground">150+ Schools</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-light text-primary mb-2">Texas</div>
                <div className="text-sm text-muted-foreground">120+ Schools</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-light text-primary mb-2">Florida</div>
                <div className="text-sm text-muted-foreground">80+ Schools</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-light text-primary mb-2">New York</div>
                <div className="text-sm text-muted-foreground">60+ Schools</div>
              </div>
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
                Join America's Sustainability Movement
              </h2>
              <p className="text-muted-foreground">
                Partner with Kapes to lead sustainability in your district.
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