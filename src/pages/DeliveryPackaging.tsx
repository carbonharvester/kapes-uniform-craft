import { Button } from "@/components/ui/button";

export const DeliveryPackaging = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Delivery & Packaging</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Sustainable, Reliable, and Hassle-Free
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            At Kapes, how our uniforms reach your families matters just as much as how they're made.
          </p>
        </div>
      </section>

      {/* Next-Day Delivery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Next-Day Home Delivery:</h2>
            <div className="bg-secondary/10 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fast, reliable, next-day delivery to parents' homes ensures uniforms arrive exactly when needed, minimizing stress and maximizing convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Pickup Options Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Flexible Pickup Options:</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Parents can choose convenient delivery options including:
            </p>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-4 bg-background border rounded-lg p-6 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  Direct home delivery (next-day)
                </p>
              </div>

              <div className="flex items-start gap-4 bg-background border rounded-lg p-6 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  E-commerce lockers placed on-campus for 24/7 secure pickup
                </p>
              </div>

              <div className="flex items-start gap-4 bg-background border rounded-lg p-6 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  Direct pickup from fully managed on-campus uniform shops
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Packaging Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sustainable Packaging Options:</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary">Standard Packaging</h3>
                <div className="text-sm text-muted-foreground mb-4">(Base Tier)</div>
                <p className="text-muted-foreground">
                  Simple protective polybags for basic protection during delivery.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary">Recycled Plastic Packaging</h3>
                <div className="text-sm text-muted-foreground mb-4">(Core Tier)</div>
                <p className="text-muted-foreground">
                  100% recycled, reusable polybags—protect uniforms while significantly reducing environmental impact.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary">Plastic-Free Glassine Packaging</h3>
                <div className="text-sm text-muted-foreground mb-4">(Impact Tier)</div>
                <p className="text-muted-foreground">
                  Completely biodegradable, fully compostable glassine paper—beautifully sustainable and zero plastic waste.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our packaging reflects your school's sustainability level and helps reinforce your commitment to the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Returns & Exchanges Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Returns & Exchanges—Handled for You:</h2>
            <div className="bg-background border rounded-lg p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We manage all returns and exchanges directly with parents, ensuring hassle-free solutions for your school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Learn More About Our Delivery & Packaging →
          </Button>
        </div>
      </section>
    </div>
  );
};