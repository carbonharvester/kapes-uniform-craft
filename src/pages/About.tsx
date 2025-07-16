import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Kapes</h1>
          
          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg mb-4">
                  Kapes was founded with a mission to revolutionize school uniforms through sustainability and ethics. 
                  We believe that what students wear should not only make them feel confident but also contribute to a better world.
                </p>
                <p className="text-lg">
                  Our commitment to ethical manufacturing and sustainable materials drives every decision we make, 
                  creating uniforms that change lives and save the planet.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Ethical Manufacturing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ethical Manufacturing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fair Labor Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All our manufacturing partners provide fair wages and safe working conditions for their employees.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Zero Child Labor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We maintain strict policies ensuring no child labor is used in any part of our supply chain.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sustainable Materials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Sustainable Materials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regenerative Cotton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sourced from farms using regenerative agriculture practices that restore soil health.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Biodegradable Fabrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Materials that break down naturally at end of life, reducing environmental impact.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recycled Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Incorporating recycled fibers to reduce waste and resource consumption.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Press & Media */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Press & Media</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-center">
                  Kapes has been featured in leading publications for our innovative approach to sustainable school uniforms 
                  and ethical manufacturing practices.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;