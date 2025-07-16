import { Button } from "@/components/ui/button";

export const UniformSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Uniform Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Sustainable. Ethical. Durable.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At Kapes, we create school uniforms that reflect your school's values and commitment to sustainability—without sacrificing quality or comfort.
          </p>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Materials that Matter:</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Regenerative Organic Cotton:</h3>
                <p className="text-muted-foreground">
                  Naturally soft, breathable, and grown sustainably to improve soil and biodiversity.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Biodegradable Alternatives to Polyester:</h3>
                <p className="text-muted-foreground">
                  Advanced tech fabrics that safely biodegrade, leaving zero waste behind.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Recycled Fabrics:</h3>
                <p className="text-muted-foreground">
                  Durable materials made from recycled fibres, reducing plastic waste and carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform Types Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Uniform Types Available:</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-background border rounded-lg p-6 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Everyday Schoolwear:</h3>
                <p className="text-muted-foreground">
                  Shirts, trousers, skirts, dresses, shorts, blazers.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-background border rounded-lg p-6 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Sports & PE Kits:</h3>
                <p className="text-muted-foreground">
                  Durable, breathable, and performance-ready kits made from natural fibres or sustainable tech-fabrics.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-background border rounded-lg p-6 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Accessories & Essentials:</h3>
                <p className="text-muted-foreground">
                  Hats, bags, ties, socks—fully sustainable options to complete your uniform program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Sizing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">AI-Driven Sizing Made Easy:</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No more confusion or wasted time. Our AI-powered sizing tool ensures every parent gets the right fit, every time.
          </p>
          
          <Button size="lg" className="text-lg px-8 py-6">
            Book Your Free Uniform Consultation →
          </Button>
        </div>
      </section>
    </div>
  );
};