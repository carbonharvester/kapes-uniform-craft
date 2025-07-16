import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Monitor, Users, BookOpen, Plane } from "lucide-react";

const FactoryVisits = () => {
  const locations = [
    { country: "India", city: "Chennai", type: "Ethical Cotton Processing" },
    { country: "Kenya", city: "Nairobi", type: "Sustainable Garment Production" },
    { country: "UAE", city: "Dubai", type: "Quality Control & Distribution" }
  ];

  const virtualFeatures = [
    "Pre-recorded walk-throughs of our factories",
    "Short videos spotlighting different production stages", 
    "Interviews with real garment workers and tailors",
    "Discussion guides and teaching aids to enhance learning"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800">🏭 Factory Visits</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From Classroom to Production Line
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            See the Journey First-Hand — Most children wear uniforms every day without ever thinking about where they come from. At Kapes, we want to change that.
          </p>
        </div>
      </section>

      {/* In-Person Visits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">🛠️ In-Person Factory Visits</CardTitle>
                </div>
                <CardDescription>Available to Core and Impact tier schools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">These immersive visits give your students and staff direct access to:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-sm">The ethical production process — from cutting to stitching to quality checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm">Sustainable materials in action — recycled fibers, biodegradable fabrics, low-waste systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-sm">Conversations with workers and factory managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span className="text-sm">Behind-the-scenes tours led by our team and local factory partners</span>
                  </li>
                </ul>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-semibold">Locations:</span>
                  </div>
                  <div className="grid gap-2">
                    {locations.map((location, index) => (
                      <div key={index} className="bg-muted/50 p-3 rounded-lg">
                        <div className="font-semibold">{location.country} - {location.city}</div>
                        <div className="text-sm text-muted-foreground">{location.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">💻 Virtual Factory Tours</CardTitle>
                </div>
                <CardDescription>If you can't travel — we'll bring the experience to you</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">All schools (Base, Core, and Impact) can access:</p>
                <ul className="space-y-3 mb-6">
                  {virtualFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Perfect for:</strong> assemblies, lessons, and global citizenship days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Links */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">👨‍🏫 Curriculum Connections</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold">Design & Tech</h3>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold">Business Studies</h3>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold">Geography</h3>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Plane className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold">Global Citizenship</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">🧑‍🎓 Why Factory Visits Matter</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Brings Ethics to Life</h3>
                <p className="text-sm text-muted-foreground">Makes ethics and sustainability tangible and real for students</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Builds Appreciation</h3>
                <p className="text-sm text-muted-foreground">Develops respect for the people behind their clothing</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Connects Learning</h3>
                <p className="text-sm text-muted-foreground">Links classroom theory to real-world action and impact</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Strengthens Credentials</h3>
                <p className="text-sm text-muted-foreground">Enhances your school's ESG and sustainability profile</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Quote */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-xl font-semibold text-gray-900 mb-4">
            "Seeing where my uniform was made helped me understand how important ethical fashion is — and made me feel proud to wear it."
          </blockquote>
          <cite className="text-muted-foreground">— Year 9 Student, Kapes Partner School</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Full Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take your students behind the scenes and show them the positive impact of ethical manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request a Virtual Tour
            </Button>
            <Button variant="outline" size="lg">
              Apply for an In-Person Visit
            </Button>
            <Button variant="outline" size="lg">
              Explore Kapes Adventures
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryVisits;