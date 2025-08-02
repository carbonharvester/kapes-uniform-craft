import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Users, TreePine, Recycle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import ourMissionHero from "@/assets/our-mission-hero.jpg";
const OurMission = () => {
  const values = [{
    icon: Heart,
    title: "Ethical First",
    description: "Every decision we make puts people and planet before profit"
  }, {
    icon: Globe,
    title: "Global Impact",
    description: "Creating positive change that reaches communities worldwide"
  }, {
    icon: Users,
    title: "Student Voice",
    description: "Empowering young people to be co-creators of their future"
  }, {
    icon: TreePine,
    title: "Regenerative",
    description: "Going beyond sustainability to actively heal our planet"
  }, {
    icon: Recycle,
    title: "Circular",
    description: "Designing out waste through innovative takeback programs"
  }, {
    icon: GraduationCap,
    title: "Educational",
    description: "Every uniform becomes a tool for learning and empowerment"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${ourMissionHero})`,
        backgroundPosition: "center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Mission</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Reimagining School Uniforms for a{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Better World
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              We believe that what students wear should reflect the values we want them to live by — sustainability, ethics, empowerment, and global citizenship.
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
          
          {/* Mission Statement */}
          <section className="bg-gradient-warm-section py-16">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-4xl font-light text-foreground mb-8 leading-relaxed">
                "To transform school uniforms from a necessity into a force for positive change — empowering students, supporting communities, and healing our planet."
              </blockquote>
              <p className="text-lg text-muted-foreground">
                Every uniform tells a story. We're making sure it's a story worth telling.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-medium">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </section>

          {/* The Challenge */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">The Challenge We're Solving</h2>
              <p className="text-muted-foreground text-lg">Why the world needs better school uniforms</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-light text-primary mb-4">2.8B</div>
                  <h3 className="text-xl font-medium mb-4">Students Worldwide</h3>
                  <p className="text-muted-foreground">
                    Millions of students wear uniforms made in poor conditions with environmental harm
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-light text-primary mb-4">92M</div>
                  <h3 className="text-xl font-medium mb-4">Tons of Textile Waste</h3>
                  <p className="text-muted-foreground">
                    Annual fashion waste, much from fast fashion and disposable clothing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-light text-primary mb-4">75M</div>
                  <h3 className="text-xl font-medium mb-4">Garment Workers</h3>
                  <p className="text-muted-foreground">
                    Many working in unsafe conditions without fair wages or representation
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Solution */}
          <section className="bg-gradient-light-warm-section py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg">How we're creating positive change</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium mb-4">For Students</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      High-quality, comfortable uniforms they're proud to wear
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Educational opportunities about sustainability and ethics
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Agency in creating positive change in their world
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium mb-4">For Schools</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Zero administrative burden with full-service management
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Measurable impact data to share with stakeholders
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Alignment with sustainability and values-based education
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium mb-4">For Communities</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Fair trade partnerships creating sustainable livelihoods
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Community development programs and education initiatives
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Environmental restoration and regenerative practices
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium mb-4">For Planet</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Regenerative materials that actively improve ecosystems
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Circular design eliminating waste through takeback programs
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      Carbon negative supply chains with measurable impact
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16" style={{
          backgroundColor: '#cfeaff'
        }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Join the Movement
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a global community of schools creating positive change through ethical uniform programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth" asChild>
                <Link to="/social-impact-africa">Learn About Our Social Impact</Link>
              </Button>
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>;
};
export default OurMission;