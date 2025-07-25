import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, BookOpen, Plane, ArrowRight, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";

const FactoryVisits = () => {

  const curriculumAreas = [
    {
      icon: BookOpen,
      title: "Design & Technology",
      description: "Understanding manufacturing processes and sustainable design"
    },
    {
      icon: Users,
      title: "Business Studies", 
      description: "Exploring ethical business practices and supply chains"
    },
    {
      icon: Globe,
      title: "Geography",
      description: "Learning about global trade and development"
    },
    {
      icon: Plane,
      title: "Global Citizenship",
      description: "Developing awareness of global interconnectedness"
    }
  ];

  const benefits = [
    {
      title: "Brings Ethics to Life",
      description: "Makes ethics and sustainability tangible and real for students"
    },
    {
      title: "Builds Appreciation",
      description: "Develops respect for the people behind their clothing"
    },
    {
      title: "Connects Learning", 
      description: "Links classroom theory to real-world action and impact"
    },
    {
      title: "Strengthens Credentials",
      description: "Enhances your school's ESG and sustainability profile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Farm & Factory Visits</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              From Classroom to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Production Line
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              See the journey first-hand. Most children wear uniforms without ever thinking about where they come from. At Kapes, we want to change that.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Visit Types */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
                In-Person Factory Visits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immersive educational experiences that bring ethics and sustainability to life for your students
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-glass hover-lift transition-smooth border border-gray-100/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg"
                    alt="Ethical production process"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Production Process</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    From cutting to stitching to quality checks — see the ethical production process firsthand
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Behind-the-scenes factory tours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Quality control demonstrations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-glass hover-lift transition-smooth border border-gray-100/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg"
                    alt="Sustainable materials in action"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <Plane className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Sustainable Materials</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Experience recycled fibers, biodegradable fabrics, and low-waste systems in action
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Organic cotton processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recycled fiber demonstration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-glass hover-lift transition-smooth border border-gray-100/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Meet the makers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Meet the Makers</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Connect with workers and factory managers to understand the human story behind each uniform
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Worker conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Management discussions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Connections */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Curriculum Connections</h2>
              <p className="text-muted-foreground text-lg">Learning opportunities across subjects</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {curriculumAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-glass text-center hover-lift transition-smooth">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why It Matters */}
          <section className="bg-gradient-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Why Farm & Factory Visits Matter</h2>
              <p className="text-muted-foreground text-lg">The educational impact</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Student Quote */}
          <section className="bg-gradient-light-warm-section py-16">
            <Card className="border-0 shadow-glass max-w-4xl mx-auto text-center">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                  "Seeing where my uniform was made helped me understand how important ethical fashion is — and made me feel proud to wear it."
                </blockquote>
                <cite className="text-muted-foreground">— Year 9 Student, Kapes Partner School</cite>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center" style={{ backgroundColor: '#cfeaff' }}>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Experience the Full Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Take your students behind the scenes and show them the positive impact of ethical manufacturing.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg hover:scale-105 transition-smooth">
                Apply for an In-Person Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FactoryVisits;
