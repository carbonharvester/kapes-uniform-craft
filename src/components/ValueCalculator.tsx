import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

export const ValueCalculator = () => {
  const [students, setStudents] = useState("");
  const [uniformsPerYear, setUniformsPerYear] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateValue = () => {
    const numStudents = parseInt(students);
    const numUniforms = parseInt(uniformsPerYear);
    
    if (numStudents && numUniforms) {
      const totalUniforms = numStudents * numUniforms;
      const carbonSaved = totalUniforms * 2.3; // kg CO2 per uniform
      const mealsDonated = totalUniforms * 5;
      const costSavings = totalUniforms * 15; // estimated savings
      
      setResults({
        totalUniforms,
        carbonSaved,
        mealsDonated,
        costSavings
      });
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Value Calculator</h2>
            <p className="text-muted-foreground">
              Discover the impact your school can make with Kapes sustainable uniforms
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calculate Your School's Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students</label>
                    <Input
                      type="number"
                      placeholder="e.g., 500"
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Uniforms per Student per Year</label>
                    <Input
                      type="number"
                      placeholder="e.g., 3"
                      value={uniformsPerYear}
                      onChange={(e) => setUniformsPerYear(e.target.value)}
                    />
                  </div>
                  <Button onClick={calculateValue} className="w-full">
                    Calculate Impact
                  </Button>
                </div>
                
                {results && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Your Annual Impact:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{results.carbonSaved}kg</div>
                        <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{results.mealsDonated}</div>
                        <div className="text-sm text-muted-foreground">Meals Donated</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">£{results.costSavings}</div>
                        <div className="text-sm text-muted-foreground">Est. Savings</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{results.totalUniforms}</div>
                        <div className="text-sm text-muted-foreground">Total Uniforms</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};