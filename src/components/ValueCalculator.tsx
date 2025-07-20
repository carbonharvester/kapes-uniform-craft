
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Users, TreePine, Heart } from 'lucide-react';

export const ValueCalculator = () => {
  const [students, setStudents] = useState<number>(500);
  
  const calculations = {
    co2Saved: Math.round(students * 12.5), // kg CO2 per student per year
    treesEquivalent: Math.round(students * 0.8), // trees saved equivalent
    childrenHelped: Math.round(students * 0.6), // children helped in Africa
    plasticBottlesSaved: Math.round(students * 85), // plastic bottles equivalent
    costSavings: Math.round(students * 45), // annual cost savings
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Calculate Your School's Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real environmental and social impact your school could make by partnering with Kapes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Impact Calculator
              </CardTitle>
              <CardDescription>
                Enter your school size to see your potential impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="students" className="min-w-0 flex-shrink-0">
                    Number of Students:
                  </Label>
                  <Input
                    id="students"
                    type="number"
                    value={students}
                    onChange={(e) => setStudents(Math.max(1, parseInt(e.target.value) || 1))}
                    className="max-w-32"
                    min="1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">CO₂ Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {calculations.co2Saved.toLocaleString()} kg
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Equivalent to {calculations.treesEquivalent} trees planted
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Children Helped</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {calculations.childrenHelped.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Children in Africa receive free meals & uniforms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Plastic Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {calculations.plasticBottlesSaved.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Plastic bottles saved from landfill
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  £{calculations.costSavings.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Potential annual savings
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Impact Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
