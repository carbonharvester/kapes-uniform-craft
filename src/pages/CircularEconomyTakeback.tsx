import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Recycle, ArrowRight, School, Users, BarChart3, Package, Heart, Globe, RefreshCw, Target, CheckCircle, TrendingUp, Mail, MapPin, Calendar } from "lucide-react";
import { Footer } from "@/components/Footer";
const CircularEconomyTakeback = () => {
  const takebackSteps = [{
    title: "Parents Return Used Uniforms",
    description: "Whether outgrown, damaged, or end-of-year leftovers",
    icon: Package,
    step: "1"
  }, {
    title: "We Collect, Sort & Process",
    description: "Either for reuse, recycling, or responsible disposal",
    icon: RefreshCw,
    step: "2"
  }, {
    title: "We Fund School Meals",
    description: "For every item returned, we fund a school meal for a child in need in Africa",
    icon: Heart,
    step: "3"
  }];
  const schoolBenefits = [{
    title: "Fully Managed by Us",
    description: "No extra work for your team",
    icon: CheckCircle
  }, {
    title: "Built into Parent Experience",
    description: "Simple and friction-free ordering integration",
    icon: Users
  }, {
    title: "Tracked in KapesImpact™",
    description: "Your community can see the impact in real time",
    icon: BarChart3
  }];
  const parentOptions = [{
    title: "School Collection Bin",
    description: "Drop them into a convenient school collection bin",
    icon: MapPin
  }, {
    title: "Prepaid Return Label",
    description: "Send them back using our prepaid return system",
    icon: Mail
  }, {
    title: "Pop-up Events & Locker Pickups",
    description: "Hand them over during scheduled collection events",
    icon: Calendar
  }];
  const impactResults = [{
    title: "Uniforms Reused or Recycled",
    description: "Less textile waste in landfills",
    icon: Recycle,
    metric: "Environmental Impact"
  }, {
    title: "Meals Funded",
    description: "More children attending school",
    icon: Heart,
    metric: "Social Impact"
  }, {
    title: "Parent Engagement",
    description: "Stronger school community connections",
    icon: Users,
    metric: "Community Impact"
  }, {
    title: "Visible Metrics",
    description: "Easy reporting for leadership teams",
    icon: BarChart3,
    metric: "Transparency"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871032/2_30_s_is9zcc.jpg')",
          backgroundPosition: "center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Circular Economy & Takeback
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">Uniforms shouldn't end up in landfill</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              At Kapes, we believe school uniforms should be part of a circular system — not the waste stream. That's why we've built a fully managed takeback scheme that gives old uniforms a new life, and creates real-world impact with every item returned.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3">
              ♻️ How the Takeback Scheme Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {takebackSteps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="relative">
                  <Card className="hover:shadow-lg transition-shadow text-center h-full">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative dark:bg-blue-900/20">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < takebackSteps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>}
                </div>;
          })}
          </div>
          
          <div className="text-center bg-blue-50 p-6 rounded-lg dark:bg-blue-950/20">
            <p className="text-xl font-bold text-blue-800 dark:text-blue-200">
              One less uniform in landfill = one more child fed.
            </p>
          </div>
        </div>
      </section>

      {/* For Schools Section */}
      <section className="bg-gradient-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3">
              🏫 For Schools: Zero Admin, Real Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our takeback system is:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {schoolBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center dark:bg-green-900/20">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              Schools on the Core and Impact tiers automatically receive takeback integration and impact reporting.
            </p>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3">
              👨‍👩‍👧 For Parents: Simple & Purposeful
            </h2>
            <p className="text-lg text-muted-foreground">
              Returning old uniforms is as easy as:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {parentOptions.map((option, index) => {
            const IconComponent = option.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900/20">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              It's not just recycling — it's feeding children, reducing waste, and teaching values.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gradient-light-warm-section py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 flex items-center justify-center gap-3">
              📈 The Results Speak for Themselves
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-items-center">
            {impactResults.map((result, index) => {
            const IconComponent = result.icon;
            return <Card key={index} className="hover:shadow-lg transition-shadow text-center w-full max-w-sm">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center dark:bg-orange-900/20">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <Badge variant="outline" className="mb-2 mx-auto">
                      {result.metric}
                    </Badge>
                    <CardTitle className="text-lg text-center">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-center">{result.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-4">
              By making uniforms circular, we reduce environmental impact and increase social impact — without schools or parents having to change the way they shop.
            </p>
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
              Because impact shouldn't require effort — just better systems.
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to make your school uniforms part of the circular economy?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-2xl px-8 py-6 text-lg hover-scale transition-smooth">
                Learn About Partnership Tiers
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary hover-scale transition-smooth">
                See Impact Dashboard Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default CircularEconomyTakeback;