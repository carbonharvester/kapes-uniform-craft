import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-6 py-2 font-medium">
              Real Impact. Real Change.
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
              KapesImpact™{" "}
              <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Track your school's positive impact on the environment and global communities in real-time
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Dashboard Demo */}
          <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Real-Time Impact Analytics</h2>
            <Card className="border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-4">2,450kg</div>
                    <p className="text-lg text-muted-foreground leading-relaxed">CO2 Saved This Year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-4">1,230</div>
                    <p className="text-lg text-muted-foreground leading-relaxed">Items Recycled</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-4">5,670</div>
                    <p className="text-lg text-muted-foreground leading-relaxed">Meals Donated</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="rounded-xl font-medium px-8 py-4 text-lg transition-all duration-300 hover:scale-105">View Full Dashboard</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Circular Economy */}
          <section>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Circular Economy Model</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Take-Back Scheme</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">We collect worn uniforms at end-of-life and process them through our circular system.</p>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">Zero Waste Goal</Badge>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Material Recovery</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">Recovered materials are recycled into new products or safely biodegraded.</p>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">100% Recovery Rate</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Social Contributions */}
          <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Social Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Meals for Africa</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">Every uniform purchased funds meals for children in need across Africa.</p>
                  <div className="mt-6">
                    <span className="text-3xl font-light tracking-tight text-primary">1 Uniform = 5 Meals</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Uniform Donations</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">Surplus and returned uniforms are donated to schools and communities in need.</p>
                  <div className="mt-6">
                    <span className="text-3xl font-light tracking-tight text-primary">500+ Uniforms Donated</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Educational Engagement */}
          <section>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Educational Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Factory Visits</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Students can visit our ethical manufacturing facilities to see sustainable production firsthand.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Student Trips</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Educational trips to understand global supply chains and sustainability practices.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Free Resources</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">Curriculum materials and lesson plans focused on sustainability and ethical consumption.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Case Studies */}
          <section className="bg-muted/30 -mx-4 px-4 py-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Greenfield Academy</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">"Partnering with Kapes transformed our approach to sustainability. Students are more engaged than ever."</p>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">50% Carbon Reduction</Badge>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Riverside School</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">"The KapesImpact™ dashboard helps us track our progress and celebrate achievements with the community."</p>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-xl px-4 py-2">1000+ Meals Donated</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Impact Calculator */}
          <section>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-12">Calculate Your School's Impact</h2>
            <Card className="max-w-2xl mx-auto border-0 shadow-glass hover-lift transition-smooth">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium mb-4">Number of Students</label>
                    <input type="number" placeholder="e.g., 500" className="w-full p-4 border rounded-xl text-lg transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-4">Uniforms per Student per Year</label>
                    <input type="number" placeholder="e.g., 3" className="w-full p-4 border rounded-xl text-lg transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <Button type="submit" className="w-full rounded-xl font-medium px-8 py-4 text-lg transition-all duration-300 hover:scale-105">Calculate Impact</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impact;