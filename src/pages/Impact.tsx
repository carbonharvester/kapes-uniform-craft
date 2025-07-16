import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">KapesImpact™ Dashboard</h1>
          
          {/* Dashboard Demo */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Real-Time Impact Analytics</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2,450kg</div>
                    <p className="text-muted-foreground">CO2 Saved This Year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1,230</div>
                    <p className="text-muted-foreground">Items Recycled</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5,670</div>
                    <p className="text-muted-foreground">Meals Donated</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button>View Full Dashboard</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Circular Economy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Circular Economy Model</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Take-Back Scheme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We collect worn uniforms at end-of-life and process them through our circular system.</p>
                  <Badge variant="outline">Zero Waste Goal</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Material Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Recovered materials are recycled into new products or safely biodegraded.</p>
                  <Badge variant="outline">100% Recovery Rate</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Social Contributions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Social Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Meals for Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Every uniform purchased funds meals for children in need across Africa.</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">1 Uniform = 5 Meals</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Uniform Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Surplus and returned uniforms are donated to schools and communities in need.</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-primary">500+ Uniforms Donated</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Educational Engagement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Educational Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Factory Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Students can visit our ethical manufacturing facilities to see sustainable production firsthand.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Student Trips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Educational trips to understand global supply chains and sustainability practices.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Free Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Curriculum materials and lesson plans focused on sustainability and ethical consumption.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Greenfield Academy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">"Partnering with Kapes transformed our approach to sustainability. Students are more engaged than ever."</p>
                  <Badge>50% Carbon Reduction</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Riverside School</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">"The KapesImpact™ dashboard helps us track our progress and celebrate achievements with the community."</p>
                  <Badge>1000+ Meals Donated</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Impact Calculator */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Calculate Your School's Impact</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students</label>
                    <input type="number" placeholder="e.g., 500" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Uniforms per Student per Year</label>
                    <input type="number" placeholder="e.g., 3" className="w-full p-3 border rounded-lg" />
                  </div>
                  <Button type="submit" className="w-full">Calculate Impact</Button>
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