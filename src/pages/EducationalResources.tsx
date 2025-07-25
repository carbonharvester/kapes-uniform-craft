import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Factory, Users, Download, Eye, GraduationCap, Lightbulb, Target, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";

const EducationalResources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Lesson Plans & Activities",
      description: "Engaging, curriculum-aligned content for students across year groups",
      topics: [
        "The journey of a uniform: from field to factory to family",
        "The impact of fashion on people and planet", 
        "The future of materials and circular design",
        "Real stories from the factories and communities we work with"
      ]
    },
    {
      icon: Factory,
      title: "Factory Tours (Virtual or In-Person)",
      description: "Impact Tier schools gain access to guided factory visits",
      topics: [
        "See how sustainable uniforms are really made",
        "Meet the people behind the process",
        "Ask questions and reflect on global supply chains",
        "Perfect for geography, business, DT, or global citizenship"
      ]
    },
    {
      icon: Users,
      title: "Student Voice & Leadership Tools",
      description: "For Impact Tier schools, students can take the lead",
      topics: [
        "Nominate a Kapes Young Leaders Council Member for youth governance",
        "Lead takeback drives and sustainability campaigns",
        "Contribute to school-wide reporting via KapesImpact™",
        "Drive uniform redesign projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871034/2_20_s_ifqazy.jpg')",
            backgroundPosition: "center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Educational Resources</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Because Uniforms Can{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Teach More
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we believe sustainability and ethics shouldn't be hidden in the background — they should be part of how students learn and grow.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Resources Grid */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Turning Textiles into Learning Materials</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold leading-none tracking-tight">{resource.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-3">
                    {resource.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg">•</span>
                        <span className="text-muted-foreground leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plug and Play Section */}
      <section className="bg-gradient-warm-section relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Plug-and-Play Resources for Teachers</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Based on research and best practices for climate education, our resources are designed to:
            </p>
          </div>
          
          {/* Framework Overview */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Inquiry-Based Learning</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">Questions, problems, and challenges that students work together to address</p>
                <div className="text-xs text-primary font-medium">
                  Research Slides: 1, 2
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Climate Action Framework</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">Addresses emotions and encourages hopeful, actionable solutions</p>
                <div className="text-xs text-primary font-medium">
                  Research Slides: 3, 4
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Transferable Skills</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">Critical thinking, creativity, collaboration, and global citizenship</p>
                <div className="text-xs text-primary font-medium">
                  Research Slides: 5, 6
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Global Standards</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">Connected to UN SDGs, GreenComp, and UNESCO frameworks</p>
                <div className="text-xs text-primary font-medium">
                  Research Slides: 7, 8, 9, 10
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Foundation */}
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Based on research and best practices for climate education, our resources are designed to address key challenges:
            </p>
          </div>
          
          <div className="bg-background/50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium mb-4">The Challenge (UNESCO):</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 95% of teachers feel climate education is important</li>
                  <li>• Only 30% feel prepared to teach the subject</li>
                  <li>• 70% of young people cannot explain climate change</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Our Solution:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ready-to-use, research-backed resources</li>
                  <li>• Action-focused, hope-building content</li>
                  <li>• Real-world connections through uniforms</li>
                  <li>• No preparation required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Simple Implementation Message */}
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to bring sustainability education to life in your classroom.
            </p>
          </div>

          {/* Implementation Tools */}
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <Download className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Ready-to-Use Slides</h3>
                <p className="text-muted-foreground leading-relaxed">Download and present immediately</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Printable Worksheets</h3>
                <p className="text-muted-foreground leading-relaxed">Student activities and reflection sheets</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Interactive Tools</h3>
                <p className="text-muted-foreground leading-relaxed">Engaging digital experiences</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass text-center hover-lift transition-smooth">
              <CardContent className="p-8">
                <Factory className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">QR-Linked Experiences</h3>
                <p className="text-muted-foreground leading-relaxed">Tied to real garment data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Why It Matters</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Builds Connection</h3>
                <p className="text-muted-foreground leading-relaxed">Creates a deeper connection between students and what they wear</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Promotes Awareness</h3>
                <p className="text-muted-foreground leading-relaxed">Develops understanding of ethical production and circular economy</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Strengthens Curriculum</h3>
                <p className="text-muted-foreground leading-relaxed">Enhances sustainability curriculum and ESG reporting</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Shows Values</h3>
                <p className="text-muted-foreground leading-relaxed">Demonstrates to families that your values are lived, not just stated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-light-warm-section relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            "Education doesn't stop at the classroom. With Kapes, every uniform is a learning opportunity."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
            Transform Your Uniforms Into Teaching Tools
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
            Engage your students with meaningful content that connects their daily uniform to global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Download a Sample Lesson
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
              Book a Demo of Our Resources
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EducationalResources;