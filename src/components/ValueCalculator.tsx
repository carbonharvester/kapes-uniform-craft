
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Leaf, Users } from "lucide-react";

export const ValueCalculator = () => {
  return (
    <section className="py-16 bg-muted/50 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1920&h=1080&fit=crop&crop=center" 
          alt="Innovation and sustainability" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Value Calculator: Unlock Your Impact</h2>
            <p className="text-muted-foreground">
              See the measurable difference Kapes can make for your school
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                  <p className="text-muted-foreground">Calculate your carbon footprint reduction, water savings, and waste elimination with our sustainable uniform program.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                  <p className="text-muted-foreground">Discover potential budget optimizations and long-term savings through our efficient supply chain.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                  <p className="text-muted-foreground">Measure the positive change your partnership creates in African communities through fair trade practices.</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculate Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students</label>
                    <Input type="number" placeholder="e.g., 500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Annual Uniform Budget</label>
                    <Input type="number" placeholder="e.g., £25,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Uniform Items per Student/Year</label>
                    <Input type="number" placeholder="e.g., 8" />
                  </div>
                  <Button type="submit" className="w-full">
                    Calculate My Impact
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
