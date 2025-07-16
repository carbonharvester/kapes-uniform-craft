import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Users, TreePine, Recycle, GraduationCap } from "lucide-react";

const OurMission = () => {
  const values = [
    {
      icon: Heart,
      title: "Ethical First",
      description: "Every decision we make puts people and planet before profit"
    },
    {
      icon: Globe,
      title: "Global Impact", 
      description: "Creating positive change that reaches communities worldwide"
    },
    {
      icon: Users,
      title: "Student Voice",
      description: "Empowering young people to be co-creators of their future"
    },
    {
      icon: TreePine,
      title: "Regenerative",
      description: "Going beyond sustainability to actively heal our planet"
    },
    {
      icon: Recycle,
      title: "Circular",
      description: "Designing out waste through innovative takeback programs"
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Every uniform becomes a tool for learning and empowerment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">Our Mission</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reimagining School Uniforms for a Better World
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We believe that what students wear should reflect the values we want them to live by — sustainability, ethics, empowerment, and global citizenship.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            "To transform school uniforms from a necessity into a force for positive change — empowering students, supporting communities, and healing our planet."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            Every uniform tells a story. We're making sure it's a story worth telling.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of a global community of schools creating positive change through ethical uniform programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;