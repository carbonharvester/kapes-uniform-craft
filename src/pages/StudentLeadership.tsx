import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, Calendar, BookOpen, Megaphone, ArrowRight } from "lucide-react";

const StudentLeadership = () => {
  const boardActivities = [
    "Represent their school's voice in quarterly virtual meetings",
    "Contribute ideas on sustainability, ethics, and uniform design",
    "Co-create campaigns, educational materials, or social media content",
    "Learn about ethical fashion, circular economy, and social entrepreneurship",
    "Develop leadership, presentation, and collaboration skills",
    "Receive a certificate of participation and personal letter of recognition"
  ];

  const schoolActivities = [
    "Lead takeback drives or recycling awareness campaigns",
    "Present uniform impact data from the KapesImpact™ dashboard", 
    "Contribute feedback to future uniform designs",
    "Share their experiences in school newsletters or assemblies",
    "Participate in factory visits or Kapes Adventures trips"
  ];

  const impactAreas = [
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Representing student voices in policy and program decisions",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Users,
      title: "Innovation", 
      description: "Contributing fresh ideas for sustainable fashion and education",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Developing skills for future sustainability and social leadership", 
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const benefits = [
    {
      title: "Fosters Ownership",
      description: "Develops empathy, agency, and personal investment in outcomes"
    },
    {
      title: "Embeds Culture", 
      description: "Integrates sustainability into everyday school culture and values"
    },
    {
      title: "Builds Leadership",
      description: "Creates real-world leadership experience and transferable skills"
    },
    {
      title: "Aligns with SDGs",
      description: "Supports UN SDG 4.7 (Education for Sustainable Development)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752921383/leaners-leaders-3_x4afkc.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Student Leadership</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Giving Students a{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Voice
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              In what they wear — and what they stand for. At Kapes, students are co-creators of their future, not just consumers.
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
          
          {/* Key Message */}
          <section className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Real Leadership, Not Just Symbolism
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every LegacyImpact Tier school is invited to nominate one student to join the Kapes Young Leaders Council — a youth-led advisory group that shapes our programs, challenges our thinking, and helps steer the future of ethical school uniforms.
            </p>
          </section>

          {/* Leadership Programs */}
          <section>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-medium">The Kapes Young Leaders Council</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Each selected student becomes part of a global group representing Kapes partner schools.
                  </p>
                  <p className="mb-6 font-medium">As a board member, they will:</p>
                  <ul className="space-y-3 mb-8">
                    {boardActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">Meetings:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Once per term (virtually)</p>
                    </div>
                    
                    <div className="bg-accent/5 p-4 rounded-xl border border-accent/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="font-medium text-sm">Eligibility:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Open to LegacyImpact schools (1 student per school)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-medium">School-Level Engagement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Beyond the Young Leaders Council, LegacyImpact schools can engage students in meaningful ways.
                  </p>
                  <p className="mb-6 font-medium">Students can also:</p>
                  <ul className="space-y-3">
                    {schoolActivities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Impact Areas */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Student Impact Areas</h2>
              <p className="text-muted-foreground text-lg">How students shape our mission</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {impactAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-glass text-center hover-lift transition-smooth">
                  <CardHeader>
                    <div className={`w-16 h-16 ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <area.icon className="h-8 w-8" />
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
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Why It Matters</h2>
              <p className="text-muted-foreground text-lg">The impact of student leadership</p>
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
                  "Being on the Kapes Young Leaders Council made me realise I could actually change things — not just talk about them."
                </blockquote>
                <cite className="text-muted-foreground">— Young Leaders Council Member, 2024</cite>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-footer py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Empower Your Students to Shape the Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Give your students a platform to make real change and develop authentic leadership skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg hover:scale-105 transition-smooth">
                Nominate a Young Leaders Council Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-6 text-lg hover:scale-105 transition-smooth">
                See Our Student-Led Campaigns
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentLeadership;