import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, Calendar, BookOpen, Megaphone } from "lucide-react";

const StudentGovernance = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-6">
              <span className="text-2xl">🧑‍⚖️</span>
              <span className="text-sm font-medium text-primary">Student Governance</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Giving Students a Voice in What They Wear
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              — and What They Stand For. At Kapes, we believe students should be co-creators of their future, not just consumers of it.
            </p>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Real Leadership, Not Just Symbolism
          </h2>
          <p className="text-lg text-muted-foreground">
            Every Impact Tier school is invited to nominate one student to join the Kapes Young Leaders Council — a youth-led advisory group that shapes our programs, challenges our thinking, and helps steer the future of ethical school uniforms.
          </p>
        </div>
      </section>

      {/* Enhanced Student Board Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="group hover-lift transition-smooth animate-fade-in">
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-xl p-3 group-hover:scale-110 transition-smooth">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">🎓 The Kapes Young Leaders Council</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Each selected student becomes part of a global group representing Kapes partner schools
                </p>
                <p className="mb-6 font-medium">As a board member, they will:</p>
                <ul className="space-y-3 mb-8">
                  {boardActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">🕒 Meetings:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Once per term (virtually)</p>
                  </div>
                  
                  <div className="bg-accent/5 p-4 rounded-xl border border-accent/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-sm">🌍 Eligibility:</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Open to Impact Tier schools (1 student per school)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 rounded-xl p-3 group-hover:scale-110 transition-smooth">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">🏫 School-Level Engagement</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Beyond the Young Leaders Council, Impact schools can engage students in meaningful ways
                </p>
                <p className="mb-6 font-medium">Students can also:</p>
                <ul className="space-y-3">
                  {schoolActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">💡 Why It Matters</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Fosters Ownership</h3>
                <p className="text-sm text-muted-foreground">Develops empathy, agency, and personal investment in outcomes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Embeds Culture</h3>
                <p className="text-sm text-muted-foreground">Integrates sustainability into everyday school culture and values</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Builds Leadership</h3>
                <p className="text-sm text-muted-foreground">Creates real-world leadership experience and transferable skills</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Aligns with SDGs</h3>
                <p className="text-sm text-muted-foreground">Supports UN SDG 4.7 (Education for Sustainable Development)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-xl font-semibold text-gray-900 mb-4">
            "Being on the Kapes Young Leaders Council made me realise I could actually change things — not just talk about them."
          </blockquote>
          <cite className="text-muted-foreground">— Young Leaders Council Member, 2024</cite>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Student Impact Areas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Megaphone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-center">Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Representing student voices in policy and program decisions</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-center">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Contributing fresh ideas for sustainable fashion and education</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-center">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">Developing skills for future sustainability and social leadership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Empower Your Students to Shape the Future
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Give your students a platform to make real change and develop authentic leadership skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-2xl px-8 py-6 text-lg hover-scale transition-smooth">
                Nominate a Young Leaders Council Member
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary hover-scale transition-smooth">
                See Our Student-Led Campaigns
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentGovernance;