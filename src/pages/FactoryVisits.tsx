import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, BookOpen, Plane, ArrowRight, Globe, Truck, Plus } from "lucide-react";
import { Footer } from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const FactoryVisits = () => {

  const curriculumAreas = [
    {
      icon: BookOpen,
      title: "Design & Technology",
      description: "Understanding manufacturing processes and sustainable design"
    },
    {
      icon: Users,
      title: "Business Studies", 
      description: "Exploring ethical business practices and supply chains"
    },
    {
      icon: Globe,
      title: "Geography",
      description: "Learning about global trade and development"
    },
    {
      icon: Plane,
      title: "Global Citizenship",
      description: "Developing awareness of global interconnectedness"
    }
  ];

  const benefits = [
    {
      title: "Brings Ethics to Life",
      description: "Makes ethics and sustainability tangible and real for students"
    },
    {
      title: "Builds Appreciation",
      description: "Develops respect for the people behind their clothing"
    },
    {
      title: "Connects Learning", 
      description: "Links classroom theory to real-world action and impact"
    },
    {
      title: "Strengthens Credentials",
      description: "Enhances your school's ESG and sustainability profile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Farm & Factory Visits</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              From Classroom to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Production Line
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              See the journey first-hand. Most children wear uniforms without ever thinking about where they come from. At Kapes, we want to change that.
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
          
          {/* Visit Types */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
                In-Person Factory Visits
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immersive educational experiences that bring ethics and sustainability to life for your students
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Production Process Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden border-0 bg-white rounded-3xl shadow-glass hover-lift transition-smooth cursor-pointer">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg"
                          alt="Production Process"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Plus className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                        <h3 className="text-xl font-semibold text-white mb-1">Production Process</h3>
                        <p className="text-white/90 text-sm">From cutting to stitching to quality checks — see the ethical production process firsthand</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
                      <img 
                        src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752781424/Filip-C-Agoo-Everland-Marketing-Kenya-9271-WEB-low-resolution-1_x3pigc.jpg"
                        alt="Production Process"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-light mb-4">Production Process</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        From cutting to stitching to quality checks — see the ethical production process firsthand. 
                        Our guided tours take you through every step of creating a school uniform, from the initial 
                        fabric preparation through to the final quality inspections.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                          <h3 className="font-semibold">What You'll See</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Behind-the-scenes factory tours</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Quality control demonstrations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Fabric cutting and pattern-making</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Skilled seamstress workstations</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold">Educational Value</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Understanding manufacturing processes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Appreciating skilled craftsmanship</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Learning about quality standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Seeing ethical practices in action</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Sustainable Materials Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden border-0 bg-white rounded-3xl shadow-glass hover-lift transition-smooth cursor-pointer">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg"
                          alt="Sustainable Materials"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Plus className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                        <h3 className="text-xl font-semibold text-white mb-1">Sustainable Materials</h3>
                        <p className="text-white/90 text-sm">Experience recycled fibers, biodegradable fabrics, and low-waste systems in action</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
                      <img 
                        src="https://res.cloudinary.com/dng12bd0a/image/upload/v1752904778/Filip-C-Agoo-Everland-Marketing-Kenya-8679-WEB-low-resolution_fwb4kw.jpg"
                        alt="Sustainable Materials"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-light mb-4">Sustainable Materials</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Experience recycled fibers, biodegradable fabrics, and low-waste systems in action. 
                        Our material selection process prioritizes environmental responsibility without compromising 
                        on quality, comfort, or durability.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                          <h3 className="font-semibold">Material Types</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Organic cotton processing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Recycled fiber demonstration</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Biodegradable fabric options</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Low-impact dye processes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold">Environmental Impact</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Reduced water consumption</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Lower carbon footprint</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Waste reduction systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Chemical-free processing</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Distribution Systems Card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden border-0 bg-white rounded-3xl shadow-glass hover-lift transition-smooth cursor-pointer">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          alt="Distribution Systems"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Plus className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                        <h3 className="text-xl font-semibold text-white mb-1">Distribution Systems</h3>
                        <p className="text-white/90 text-sm">Explore sustainable logistics and efficient distribution networks that minimize environmental impact</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Distribution Systems"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-light mb-4">Distribution Systems</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Explore sustainable logistics and efficient distribution networks that minimize environmental impact. 
                        Our distribution model prioritizes efficiency while maintaining our commitment to environmental responsibility.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                          <h3 className="font-semibold">Sustainable Solutions</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Sustainable packaging solutions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Carbon-neutral delivery systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Optimized delivery routes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Recyclable packaging materials</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold">Logistics Innovation</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Smart locker collection points</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Consolidated delivery schedules</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Real-time tracking systems</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Efficient return processes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* Curriculum Connections */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Curriculum Connections</h2>
              <p className="text-muted-foreground text-lg">Learning opportunities across subjects</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {curriculumAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-glass text-center hover-lift transition-smooth">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <area.icon className="h-8 w-8 text-primary" />
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
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Why Farm & Factory Visits Matter</h2>
              <p className="text-muted-foreground text-lg">The educational impact</p>
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


          {/* CTA Section */}
          <section className="py-16 text-center" style={{ backgroundColor: '#cfeaff' }}>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Experience the Full Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Take your students behind the scenes and show them the positive impact of ethical manufacturing.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg hover:scale-105 transition-smooth">
                Apply for an In-Person Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FactoryVisits;
