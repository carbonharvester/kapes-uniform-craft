import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Shield, Eye, Heart, Award } from "lucide-react";

const OurFactories = () => {
  const factories = [
    {
      location: "Chennai, India",
      specialty: "Organic Cotton Processing",
      workers: "280 employees",
      certifications: ["GOTS", "Fair Trade", "SA8000"],
      icon: MapPin
    },
    {
      location: "Nairobi, Kenya", 
      specialty: "Sustainable Garment Production",
      workers: "156 employees",
      certifications: ["WRAP", "OEKO-TEX", "Cradle to Cradle"],
      icon: MapPin
    },
    {
      location: "Dubai, UAE",
      specialty: "Quality Control & Distribution",
      workers: "94 employees", 
      certifications: ["ISO 14001", "OHSAS 18001", "ISO 9001"],
      icon: MapPin
    }
  ];

  const standards = [
    {
      icon: Shield,
      title: "Safe Working Conditions",
      description: "Every factory meets or exceeds international safety standards"
    },
    {
      icon: Heart,
      title: "Fair Wages",
      description: "All workers receive living wages, not just minimum wages"
    },
    {
      icon: Users,
      title: "Worker Rights",
      description: "Freedom of association, no forced labor, no child labor"
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Open-book policy with regular third-party audits"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Our Factories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Where Ethics Meet Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Every Kapes uniform is crafted in factories that share our commitment to people, planet, and product quality.
          </p>
        </div>
      </section>

      {/* Factory Locations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Factories</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {factories.map((factory, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <factory.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{factory.location}</CardTitle>
                  </div>
                  <CardDescription>{factory.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold">{factory.workers}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Certifications:</p>
                      <div className="flex flex-wrap gap-2">
                        {factory.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Standards</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {standards.map((standard, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <standard.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{standard.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl">Our Transparency Promise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We believe you have the right to know exactly where and how your uniforms are made:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-sm">Full supplier list available on request</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-sm">Annual factory audit reports published</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span className="text-sm">Worker feedback systems in place</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-sm">Factory visit opportunities for Impact Tier schools</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Worker Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Voices from Our Factories</h2>
          <blockquote className="text-lg font-semibold text-gray-900 mb-4">
            "Working with Kapes has given me not just a job, but a sense of pride. I know that what we create here makes a difference in the world."
          </blockquote>
          <cite className="text-muted-foreground">— Priya, Quality Control Supervisor, Chennai</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            See Our Factories for Yourself
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take a virtual tour or visit in person to experience our ethical manufacturing firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule a Virtual Tour
            </Button>
            <Button variant="outline" size="lg">
              Plan a Factory Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFactories;