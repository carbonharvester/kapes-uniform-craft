import { Button } from "@/components/ui/button";

export const SchoolShopsLockers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">School Shops & Lockers</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Convenience Meets Sustainability—Right on Campus
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Make uniform shopping effortless for parents by offering professionally designed and fully managed uniform stores or convenient e-commerce lockers directly at your school.
          </p>
        </div>
      </section>

      {/* On-Campus School Shops Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">On-Campus School Shops:</h2>
            
            <div className="grid gap-6">
              <div className="bg-secondary/10 rounded-lg p-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Beautifully designed spaces tailored specifically for your school.
                </p>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Fully managed by Kapes—stocking, staffing, inventory management, and merchandising.
                </p>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6">
                <p className="text-lg text-muted-foreground">
                  Parents and students can conveniently shop, try-on, and purchase uniforms directly on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Lockers Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">E-Commerce Lockers (Pickup Solution):</h2>
            
            <div className="grid gap-6">
              <div className="bg-background border rounded-lg p-6 shadow-sm">
                <p className="text-lg text-muted-foreground mb-4">
                  Secure, self-service lockers placed strategically on campus.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6 shadow-sm">
                <p className="text-lg text-muted-foreground mb-4">
                  Parents order online and conveniently collect at their convenience—no more delivery uncertainty or missed parcels.
                </p>
              </div>

              <div className="bg-background border rounded-lg p-6 shadow-sm">
                <p className="text-lg text-muted-foreground">
                  Fully managed logistics by Kapes; zero extra work for your school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits to Schools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">Benefits to Schools:</h2>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 bg-secondary/10 rounded-lg p-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  Enhanced convenience for parents and students.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-secondary/10 rounded-lg p-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  Zero administrative burden—completely managed by us.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-secondary/10 rounded-lg p-6">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  A visible sign of your school's commitment to seamless service and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Request a Free Shop or Locker Consultation →
          </Button>
        </div>
      </section>
    </div>
  );
};