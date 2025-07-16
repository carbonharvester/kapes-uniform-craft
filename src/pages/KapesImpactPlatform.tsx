import { Button } from "@/components/ui/button";

export const KapesImpactPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">KapesImpact™ Platform</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Real-Time Sustainability, at Your Fingertips
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            The KapesImpact™ Platform is a revolutionary sustainability dashboard that lets schools track, measure, and communicate their environmental and social impact—instantly.
          </p>
        </div>
      </section>

      {/* What KapesImpact Tracks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What KapesImpact™ Tracks:</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Carbon Savings:</h3>
                <p className="text-muted-foreground">
                  See the exact reduction in carbon footprint from using sustainable materials.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Uniform Recycling:</h3>
                <p className="text-muted-foreground">
                  Track exactly how many uniforms your community has diverted from landfill.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">Meals Donated:</h3>
                <p className="text-muted-foreground">
                  Every returned garment funds meals for children in need—see your impact grow throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Codes Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">QR Codes for Instant Transparency:</h2>
            <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-accent-foreground">(Impact Tier Only)</span>
            </div>
            <div className="bg-background border rounded-lg p-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Uniforms come embedded with QR codes. Students, parents, and staff can scan the code to see immediate transparency about how and where each garment was made, and the exact impact their purchase has generated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Reporting Made Easy:</h2>
            <div className="bg-secondary/10 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                KapesImpact™ generates clear, professional reports that schools can instantly share with parents, board members, and stakeholders, making your sustainability achievements clear and tangible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Schedule a Demo of KapesImpact™ →
          </Button>
        </div>
      </section>
    </div>
  );
};