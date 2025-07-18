import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, Factory, Users, Download, Eye } from "lucide-react";

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
      icon: Play,
      title: "Short Films & Video Clips",
      description: "Perfect for assemblies, classroom sessions, or parent events",
      topics: [
        "How our uniforms are made",
        "What ethical manufacturing looks like",
        "Stories from children receiving free uniforms in Africa",
        "Behind-the-scenes at Kapes"
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
        "Nominate a Student Board Member for youth governance",
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
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
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
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">What's Included</h2>
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
      <section className="relative py-16 px-4 bg-muted/30 -mx-4 rounded-3xl">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Plug-and-Play Resources for Teachers</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We know teachers are busy. That's why we make it easy:
            </p>
          </div>
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
      <section className="relative py-16 px-4 bg-muted/30 -mx-4 rounded-3xl">
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
    </div>
  );
};

export default EducationalResources;