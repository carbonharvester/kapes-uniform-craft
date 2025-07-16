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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">📚 Educational Resources</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Because Uniforms Can Teach More Than Just Dress Code
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            At Kapes, we believe sustainability and ethics shouldn't be hidden in the background — they should be part of how students learn and grow.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">🎓 What's Included</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{topic}</span>
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
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🛠️ Plug-and-Play Resources for Teachers</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              We know teachers are busy. That's why we make it easy:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ready-to-Use Slides</h3>
                <p className="text-sm text-muted-foreground">Download and present immediately</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Printable Worksheets</h3>
                <p className="text-sm text-muted-foreground">Student activities and reflection sheets</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Eye className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Interactive Tools</h3>
                <p className="text-sm text-muted-foreground">Engaging digital experiences</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Factory className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">QR-Linked Experiences</h3>
                <p className="text-sm text-muted-foreground">Tied to real garment data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🎒 Why It Matters</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Builds Connection</h3>
                <p className="text-sm text-muted-foreground">Creates a deeper connection between students and what they wear</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Promotes Awareness</h3>
                <p className="text-sm text-muted-foreground">Develops understanding of ethical production and circular economy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Strengthens Curriculum</h3>
                <p className="text-sm text-muted-foreground">Enhances sustainability curriculum and ESG reporting</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Shows Values</h3>
                <p className="text-sm text-muted-foreground">Demonstrates to families that your values are lived, not just stated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
            "Education doesn't stop at the classroom. With Kapes, every uniform is a learning opportunity."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Uniforms Into Teaching Tools
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Engage your students with meaningful content that connects their daily uniform to global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Download a Sample Lesson
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo of Our Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalResources;