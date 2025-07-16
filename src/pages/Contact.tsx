import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Forms */}
            <div className="space-y-8">
              {/* General Inquiry Form */}
              <Card>
                <CardHeader>
                  <CardTitle>General Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="School Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your message..." rows={4} />
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Schedule Demo */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule a Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    See KapesImpact™ in action and learn how we can transform your school's uniform program.
                  </p>
                  <Button className="w-full">Schedule Demo</Button>
                </CardContent>
              </Card>

              {/* Proposal Request */}
              <Card>
                <CardHeader>
                  <CardTitle>Request a Proposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="School Name" />
                    <Input type="number" placeholder="Number of Students" />
                    <select className="w-full p-3 border rounded-lg">
                      <option value="">Select Preferred Tier</option>
                      <option value="ecolaunch">EcoLaunch</option>
                      <option value="sustainpro">SustainPro</option>
                      <option value="legacyimpact">LegacyImpact</option>
                    </select>
                    <Textarea placeholder="Additional requirements or questions..." rows={3} />
                    <Button type="submit" className="w-full">Request Proposal</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Support Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Support Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-muted-foreground">support@kapes.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-muted-foreground">+44 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">UK Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Sustainability Street<br />
                      London, SW1A 1AA<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Manufacturing Partners</h3>
                    <p className="text-muted-foreground">
                      Ethical factories across<br />
                      India, Portugal, and Turkey
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Download Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    View Case Studies
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
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