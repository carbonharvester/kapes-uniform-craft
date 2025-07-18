import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              Let's Create{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Change Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Ready to transform your school's uniform program? We're here to help you every step of the way.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <div className="space-y-8">
              {/* General Inquiry Form */}
              <Card className="border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">General Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="rounded-xl" />
                      <Input placeholder="Last Name" className="rounded-xl" />
                    </div>
                    <Input placeholder="School Name" className="rounded-xl" />
                    <Input type="email" placeholder="Email Address" className="rounded-xl" />
                    <Input placeholder="Subject" className="rounded-xl" />
                    <Textarea placeholder="Your message..." rows={4} className="rounded-xl" />
                    <Button type="submit" className="w-full rounded-xl font-medium hover:scale-105 transition-smooth">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Schedule Demo */}
              <Card className="border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-medium">
                    <Calendar className="h-5 w-5" />
                    Schedule a Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    See KapesImpact™ in action and learn how we can transform your school's uniform program.
                  </p>
                  <Button className="w-full rounded-xl font-medium hover:scale-105 transition-smooth">
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>

              {/* Proposal Request */}
              <Card className="border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">Request a Proposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="School Name" className="rounded-xl" />
                    <Input type="number" placeholder="Number of Students" className="rounded-xl" />
                    <select className="w-full p-3 border rounded-xl bg-background">
                      <option value="">Select Preferred Tier</option>
                      <option value="ecolaunch">EcoLaunch</option>
                      <option value="sustainpro">SustainPro</option>
                      <option value="legacyimpact">LegacyImpact</option>
                    </select>
                    <Textarea placeholder="Additional requirements or questions..." rows={3} className="rounded-xl" />
                    <Button type="submit" className="w-full rounded-xl font-medium hover:scale-105 transition-smooth">
                      Request Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Support Details */}
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">Support Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Email Support</p>
                      <p className="text-muted-foreground">support@kapes.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Phone Support</p>
                      <p className="text-muted-foreground">+44 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">Our Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">UK Headquarters</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Sustainability Street<br />
                      London, SW1A 1AA<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Manufacturing Partners</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ethical factories across<br />
                      India, Portugal, and Turkey
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start rounded-xl hover:scale-105 transition-smooth">
                    Download Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl hover:scale-105 transition-smooth">
                    View Case Studies
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl hover:scale-105 transition-smooth">
                    Start Free Audit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
