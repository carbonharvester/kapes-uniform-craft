import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Shield, Award, Globe, Heart } from "lucide-react";

const OurFactories = () => {
  const factories = [
    {
      location: "Mumbai, India",
      name: "Ethical Textiles Co.",
      employees: 450,
      certifications: ["SA8000", "WRAP", "OEKO-TEX"],
      specialties: ["Cotton processing", "Natural dyes", "Traditional craftsmanship"]
    },
    {
      location: "Porto, Portugal", 
      name: "Atlantic Sustainable Mills",
      employees: 280,
      certifications: ["GOTS", "Cradle to Cradle", "EU Ecolabel"],
      specialties: ["Hemp processing", "Organic materials", "Zero-waste production"]
    },
    {
      location: "Istanbul, Turkey",
      name: "Aegean Fair Trade",
      employees: 320,
      certifications: ["Fair Trade", "BSCI", "OEKO-TEX"],
      specialties: ["Wool processing", "Technical fabrics", "Quality finishing"]
    }
  ];

  const standards = [
    {
      icon: Users,
      title: "Fair Labor Standards",
      description: "Living wages, safe working conditions, and worker empowerment in all facilities"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols and regular third-party audits"
    },
    {
      icon: Globe,
      title: "Environmental Responsibility",
      description: "Renewable energy, water conservation, and waste reduction programs"
    },
    {
      icon: Heart,
      title: "Community Investment",
      description: "Supporting local communities through education and development programs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Manufacturing Partners</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Where Ethics Meet{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Meet our carefully selected manufacturing partners who share our commitment to ethical production and environmental responsibility.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Factory Locations */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Global Partners</h2>
              <p className="text-muted-foreground text-lg">Ethical manufacturing across three continents</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {factories.map((factory, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-medium">{factory.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">{factory.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{factory.employees} employees</span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {factory.certifications.map((cert, certIndex) => (
                            <Badge key={certIndex} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Specialties:</h4>
                        <ul className="space-y-1">
                          {factory.specialties.map((specialty, specialtyIndex) => (
                            <li key={specialtyIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Standards */}
          <section className="py-16 bg-gradient-warm-section -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Manufacturing Standards</h2>
              <p className="text-muted-foreground text-lg">Non-negotiable principles that guide every partnership</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standards.map((standard, index) => (
                <Card key={index} className="border-0 shadow-glass text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <standard.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-4">{standard.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{standard.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Audit Process */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Audit Process</h2>
              <p className="text-muted-foreground text-lg">Rigorous verification ensures compliance and continuous improvement</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Initial Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive evaluation of facilities, practices, and documentation before partnership begins.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Regular Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Quarterly on-site inspections and monthly progress reviews with third-party verification.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Continuous Improvement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborative development programs to enhance standards and support worker welfare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Transparency */}
          <section className="bg-gradient-to-footer py-16 px-4 rounded-3xl">
            <Card className="border-0 shadow-glass">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Complete Transparency</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  We believe in full transparency about our supply chain. All audit reports, certifications, and impact assessments are available to our school partners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                    View Audit Reports
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                    Schedule Factory Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default OurFactories;
