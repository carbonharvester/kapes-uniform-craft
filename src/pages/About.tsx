
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">About Kapes</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Changing Lives Through{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Ethical Fashion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Every uniform tells a story. We're making sure it's a story of sustainability, ethics, and positive change.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Our Story */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg">The mission that drives everything we do</p>
            </div>
            <Card className="border-0 shadow-glass">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Kapes was founded with a mission to revolutionize school uniforms through sustainability and ethics. 
                    We believe that what students wear should not only make them feel confident but also contribute to a better world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our commitment to ethical manufacturing and sustainable materials drives every decision we make, 
                    creating uniforms that change lives and save the planet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Ethical Manufacturing */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Ethical Manufacturing</h2>
              <p className="text-muted-foreground text-lg">Putting people first in everything we create</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-medium">Fair Labor Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    All our manufacturing partners provide fair wages and safe working conditions for their employees.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-medium">Zero Child Labor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict policies ensuring no child labor is used in any part of our supply chain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sustainable Materials */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Sustainable Materials</h2>
              <p className="text-muted-foreground text-lg">Innovation that heals our planet</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-medium">Regenerative Cotton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sourced from farms using regenerative agriculture practices that restore soil health.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-medium">Biodegradable Fabrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Materials that break down naturally at end of life, reducing environmental impact.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-medium">Recycled Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Incorporating recycled fibers to reduce waste and resource consumption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Press & Media */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Press & Media</h2>
              <p className="text-muted-foreground text-lg">Recognition for our innovative approach</p>
            </div>
            <Card className="border-0 shadow-glass">
              <CardContent className="p-8 md:p-12 text-center">
                <p className="text-lg leading-relaxed">
                  Kapes has been featured in leading publications for our innovative approach to sustainable school uniforms 
                  and ethical manufacturing practices.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to create positive change through ethical uniform programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-8 py-4 font-medium text-lg hover:scale-105 transition-smooth">
                Learn More
              </Button>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default About;
