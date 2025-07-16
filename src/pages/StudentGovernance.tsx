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
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">🧑‍⚖️ Student Governance</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Giving Students a Voice in What They Wear
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            — and What They Stand For. At Kapes, we believe students should be co-creators of their future, not just consumers of it.
          </p>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Real Leadership, Not Just Symbolism
          </h2>
          <p className="text-lg text-muted-foreground">
            Every Impact Tier school is invited to nominate one student to join the Kapes Student Board — a youth-led advisory group that shapes our programs, challenges our thinking, and helps steer the future of ethical school uniforms.
          </p>
        </div>
      </section>

      {/* Student Board Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-2xl">🎓 The Kapes Student Board</CardTitle>
                </div>
                <CardDescription>
                  Each selected student becomes part of a global group representing Kapes partner schools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">As a board member, they will:</p>
                <ul className="space-y-3 mb-8">
                  {boardActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span className="text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold text-sm">🕒 Meetings:</span>
                    </div>
                    <p className="text-sm">Once per term (virtually)</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-sm">🌍 Eligibility:</span>
                    </div>
                    <p className="text-sm">Open to Impact Tier schools (1 student per school)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">🏫 School-Level Engagement</CardTitle>
                </div>
                <CardDescription>
                  Beyond the Student Board, Impact schools can engage students in meaningful ways
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">Students can also:</p>
                <ul className="space-y-3">
                  {schoolActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span className="text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
            "Being on the Kapes Student Board made me realise I could actually change things — not just talk about them."
          </blockquote>
          <cite className="text-muted-foreground">— Student Board Member, 2024</cite>
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Empower Your Students to Shape the Future
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Give your students a platform to make real change and develop authentic leadership skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Nominate a Student Board Member
            </Button>
            <Button variant="outline" size="lg">
              See Our Student-Led Campaigns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentGovernance;