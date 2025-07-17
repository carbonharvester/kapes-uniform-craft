
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Clock, Target } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      title: "Free Uniform Audit",
      description: "Comprehensive analysis of your current uniform program with personalized recommendations",
      value: "£2,500 value",
      duration: "Limited time",
      action: "Claim Your Audit"
    },
    {
      title: "Pilot Program Discount",
      description: "50% off first order for schools testing our Essentials tier",
      value: "Up to £5,000 savings",
      duration: "New partners only",
      action: "Start Pilot"
    },
    {
      title: "Early Adopter Package",
      description: "Complete setup, training, and first-year support included",
      value: "£10,000 value",
      duration: "First 50 schools",
      action: "Reserve Your Spot"
    }
  ];

  const benefits = [
    {
      icon: Gift,
      title: "No Setup Fees",
      description: "Complete onboarding and system setup at no cost"
    },
    {
      icon: Star,
      title: "Priority Support",
      description: "Dedicated account manager and priority customer service"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "No long-term contracts required for initial partnerships"
    },
    {
      icon: Target,
      title: "Performance Guarantee",
      description: "100% satisfaction guarantee or full refund within 90 days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4">Special Offers</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Exclusive Offers for{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Forward-Thinking Schools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Start your sustainability journey with exceptional value. Limited-time offers to help progressive schools make the transition to ethical uniforms.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Current Offers */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Current Offers</h2>
              <p className="text-muted-foreground text-lg">Exceptional value for early partners</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {offer.duration}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-medium">{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {offer.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-2xl font-medium text-primary mb-2">{offer.value}</p>
                    </div>
                    <Button className="w-full rounded-xl font-medium hover:scale-105 transition-smooth">
                      {offer.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">What Every Partner Gets</h2>
              <p className="text-muted-foreground text-lg">Standard benefits included with all partnerships</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-glass text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-4">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Partnership Tiers */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Choose Your Partnership</h2>
              <p className="text-muted-foreground text-lg">Three tiers designed to match your school's needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-800">Essentials</Badge>
                  <CardTitle className="text-2xl font-medium">Simple & Ethical</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Perfect for schools wanting ethical uniforms without complexity
                  </p>
                  <Button variant="outline" className="w-full rounded-xl">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth border-primary/20">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-primary text-primary-foreground">Core</Badge>
                  <CardTitle className="text-2xl font-medium">Complete Solution</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Full features with impact tracking and educational resources
                  </p>
                  <Button className="w-full rounded-xl">
                    Most Popular
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-purple-100 text-purple-800">Impact</Badge>
                  <CardTitle className="text-2xl font-medium">Maximum Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Comprehensive program with global impact and student governance
                  </p>
                  <Button variant="outline" className="w-full rounded-xl">
                    Explore Impact
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss out on these limited-time offers. Book your free consultation today and discover how Kapes can transform your uniform program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Compare All Tiers
              </Button>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default Offers;
