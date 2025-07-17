
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Leaf, Users, TrendingUp } from "lucide-react";

export const ValueCalculator = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Calculate Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the measurable difference Kapes can make for your school, students, and communities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Impact metrics */}
            <Card className="border-0 shadow-sm bg-card/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                <p className="text-muted-foreground text-sm">Reduce carbon footprint and waste through sustainable practices</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm bg-card/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                <p className="text-muted-foreground text-sm">Optimize budget through efficient supply chain management</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm bg-card/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
                <p className="text-muted-foreground text-sm">Create positive change in African communities through fair trade</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Calculator form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border shadow-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Calculator className="h-6 w-6" />
                  Calculate Your School's Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Number of Students</label>
                      <Input type="number" placeholder="e.g., 500" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Annual Uniform Budget</label>
                      <Input type="number" placeholder="e.g., £25,000" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Uniform Items per Student/Year</label>
                    <Input type="number" placeholder="e.g., 8" className="h-12" />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-semibold">
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
