import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ValueCalculator = () => {
  const [students, setStudents] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState<{
    co2: number;
    energy: number;
    water: number;
    waste: number;
    uniforms: number;
    meals: number;
    co2Analogy: string;
    energyAnalogy: string;
    waterAnalogy: string;
  } | null>(null);
  const [error, setError] = useState(false);

  const calculateValue = () => {
    if (!students || !location) {
      setError(true);
      return;
    }

    setError(false);
    
    const numStudents = parseInt(students);
    
    // Averages based on research
    const co2PerStudent = 15; // kg CO2e
    const energyPerStudent = 40; // MJ
    const waterPerStudent = 13500; // liters
    const wastePerStudent = 0.5; // kg
    const returnRate = 0.25; // 25%
    const mealsPerReturned = 5;
    
    // Location multiplier
    let multiplier = 1;
    if (location === 'europe') multiplier = 1.2;
    else if (location === 'africa') multiplier = 0.9;
    
    const totalCO2 = Math.round(co2PerStudent * numStudents * multiplier);
    const totalEnergy = Math.round(energyPerStudent * numStudents * multiplier);
    const totalWater = Math.round(waterPerStudent * numStudents * multiplier);
    const totalWaste = parseFloat((wastePerStudent * numStudents * multiplier).toFixed(2));
    const freeUniforms = numStudents;
    const returned = numStudents * returnRate;
    const freeMeals = Math.round(returned * mealsPerReturned);
    
    // Analogies
    const co2PerCarAnnual = 4600; // kg
    let cars = (totalCO2 / co2PerCarAnnual).toFixed(1);
    const co2Analogy = `Like removing ${cars} cars from the road annually!`;
    
    const dailyHomeMJ = 108; // ~30 kWh/day * 3.6
    let homeDays = (totalEnergy / dailyHomeMJ).toFixed(1);
    const energyAnalogy = `Powering an average home for ${homeDays} days!`;
    
    const olympicPoolLiters = 2500000;
    let pools = (totalWater / olympicPoolLiters).toFixed(2);
    const waterAnalogy = `Enough to fill ${pools} Olympic pools!`;

    setResults({
      co2: totalCO2,
      energy: totalEnergy,
      water: totalWater,
      waste: totalWaste,
      uniforms: freeUniforms,
      meals: freeMeals,
      co2Analogy,
      energyAnalogy,
      waterAnalogy,
    });
  };

  const resetCalculator = () => {
    setStudents("");
    setLocation("");
    setResults(null);
    setError(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 shadow-xl border">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Value Calculator: Unlock Your School's Epic Sustainability Wins
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="students">Number of Students:</Label>
                <Input
                  id="students"
                  type="number"
                  min="1"
                  placeholder="Enter number of students"
                  value={students}
                  onChange={(e) => setStudents(e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location">School Location (Region):</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select region..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe">Europe (High Regulatory Savings)</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && (
                <div className="text-destructive text-center text-sm">
                  Please fill in all fields to calculate.
                </div>
              )}

              <Button onClick={calculateValue} className="w-full" size="lg">
                Calculate Your Grand Slam Impact
              </Button>
            </div>
          </div>

          {results && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">
                Your School's Projected Value Equation Boost
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">🌍</div>
                  <div className="font-bold text-green-700 dark:text-green-300 text-lg mb-2">CO2 Conquest (Emissions Saved)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.co2.toLocaleString()} kg CO2e</div>
                  <div className="text-sm text-muted-foreground italic">{results.co2Analogy}</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="font-bold text-yellow-700 dark:text-yellow-300 text-lg mb-2">Energy Empire Built (Energy Saved)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.energy.toLocaleString()} MJ</div>
                  <div className="text-sm text-muted-foreground italic">{results.energyAnalogy}</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">💧</div>
                  <div className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-2">Water Warrior Win (Water Saved)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.water.toLocaleString()} liters</div>
                  <div className="text-sm text-muted-foreground italic">{results.waterAnalogy}</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">🗑️</div>
                  <div className="font-bold text-purple-700 dark:text-purple-300 text-lg mb-2">Waste Annihilation (Waste Diverted)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.waste} kg</div>
                  <div className="text-sm text-muted-foreground italic">Keeping landfills empty!</div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">👕</div>
                  <div className="font-bold text-indigo-700 dark:text-indigo-300 text-lg mb-2">Uniform Uplift (Free Uniforms Provided)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.uniforms.toLocaleString()} uniforms</div>
                  <div className="text-sm text-muted-foreground italic">Matching your student body!</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-3">🍲</div>
                  <div className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-2">Meal Miracle (Free Meals Funded)</div>
                  <div className="text-2xl font-bold text-foreground mb-2">{results.meals.toLocaleString()} meals</div>
                  <div className="text-sm text-muted-foreground italic">Nourishing futures in Africa!</div>
                </div>
              </div>

              <p className="text-center text-muted-foreground mb-6">
                These estimates amplify your dream outcome of becoming a sustainability legend, with high likelihood based on real partner data, minimal time delay (setup in weeks), and zero effort (we manage it all).
              </p>
              
              <Button onClick={resetCalculator} variant="outline" className="mx-auto block">
                Recalculate
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};