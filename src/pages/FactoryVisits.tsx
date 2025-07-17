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
              <span className="text-2xl">🏭</span>
              <span className="text-sm font-medium text-primary">Factory Visits</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              From Classroom to Production Line
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              See the Journey First-Hand — Most children wear uniforms every day without ever thinking about where they come from. At Kapes, we want to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced In-Person Visits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="group hover-lift transition-smooth animate-fade-in">
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-xl p-3 group-hover:scale-110 transition-smooth">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">🛠️ In-Person Factory Visits</h3>
                </div>
                <p className="text-muted-foreground mb-6">Available to Core and Impact tier schools</p>
                <p className="mb-6 font-medium">These immersive visits give your students and staff direct access to:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">The ethical production process — from cutting to stitching to quality checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Sustainable materials in action — recycled fibers, biodegradable fabrics, low-waste systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Conversations with workers and factory managers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Behind-the-scenes tours led by our team and local factory partners</span>
                  </li>
                </ul>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">Locations:</span>
                  </div>
                  <div className="grid gap-2">
                    {locations.map((location, index) => (
                      <div key={index} className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                        <div className="font-semibold">{location.country} - {location.city}</div>
                        <div className="text-sm text-muted-foreground">{location.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 rounded-xl p-3 group-hover:scale-110 transition-smooth">
                    <Monitor className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">💻 Virtual Factory Tours</h3>
                </div>
                <p className="text-muted-foreground mb-6">If you can't travel — we'll bring the experience to you</p>
                <p className="mb-6 font-medium">All schools (Base, Core, and Impact) can access:</p>
                <ul className="space-y-3 mb-8">
                  {virtualFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-accent/5 p-4 rounded-xl border border-accent/10">
                  <p className="text-sm text-accent font-medium">
                    <strong>Perfect for:</strong> assemblies, lessons, and global citizenship days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Curriculum Links */}
      <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">👨‍🏫 Curriculum Connections</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="group hover-lift transition-smooth animate-fade-in text-center">
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Design & Tech</h3>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in text-center" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Business Studies</h3>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in text-center" style={{ animationDelay: '0.2s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Geography</h3>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/10 rounded-2xl p-4 group-hover:scale-110 transition-smooth">
                    <Plane className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Global Citizenship</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why It Matters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">🧑‍🎓 Why Factory Visits Matter</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group hover-lift transition-smooth animate-fade-in">
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Brings Ethics to Life</h3>
                <p className="text-muted-foreground leading-relaxed">Makes ethics and sustainability tangible and real for students</p>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Builds Appreciation</h3>
                <p className="text-muted-foreground leading-relaxed">Develops respect for the people behind their clothing</p>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Connects Learning</h3>
                <p className="text-muted-foreground leading-relaxed">Links classroom theory to real-world action and impact</p>
              </div>
            </div>
            
            <div className="group hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="border-0 shadow-glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Strengthens Credentials</h3>
                <p className="text-muted-foreground leading-relaxed">Enhances your school's ESG and sustainability profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Student Quote */}
      <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/30 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-6 leading-relaxed">
              "Seeing where my uniform was made helped me understand how important ethical fashion is — and made me feel proud to wear it."
            </blockquote>
            <cite className="text-lg text-muted-foreground">— Year 9 Student, Kapes Partner School</cite>
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
              Experience the Full Story
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take your students behind the scenes and show them the positive impact of ethical manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-2xl px-8 py-6 text-lg hover-scale transition-smooth">
                Request a Virtual Tour
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary hover-scale transition-smooth">
                Apply for an In-Person Visit
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary hover-scale transition-smooth">
                Explore Kapes Adventures
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryVisits;