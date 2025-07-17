
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
    <section className="py-12 bg-gradient-to-b from-background via-background/95 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Value Calculator:{" "}
              <span className="font-medium bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Unlock Your Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
            </p>
          </div>

          {/* Calculator Card - Compact */}
          <div className="max-w-md mx-auto mb-8">
            <div className="glass rounded-xl p-6 shadow-glass border border-border/30 backdrop-blur-xl bg-background/80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="students" className="text-sm font-medium text-foreground/90">
                    Number of Students
                  </Label>
                  <Input
                    id="students"
                    type="number"
                    min="1"
                    placeholder="Enter number of students"
                    value={students}
                    onChange={(e) => setStudents(e.target.value)}
                    className="h-10 text-sm border-border/40 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 bg-background/60 backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-foreground/90">
                    School Location (Region)
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="h-10 text-sm border-border/40 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300 bg-background/60 backdrop-blur-sm">
                      <SelectValue placeholder="Select region..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-border/40 bg-background/95 backdrop-blur-xl">
                      <SelectItem value="europe" className="text-sm py-2 rounded-md">Europe (High Regulatory Savings)</SelectItem>
                      <SelectItem value="north-america" className="text-sm py-2 rounded-md">North America</SelectItem>
                      <SelectItem value="asia" className="text-sm py-2 rounded-md">Asia</SelectItem>
                      <SelectItem value="africa" className="text-sm py-2 rounded-md">Africa</SelectItem>
                      <SelectItem value="other" className="text-sm py-2 rounded-md">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <div className="p-3 bg-gradient-to-r from-destructive/10 to-destructive/5 border border-destructive/20 rounded-lg backdrop-blur-sm">
                    <p className="text-destructive text-center font-medium text-sm">
                      Please fill in all fields to calculate your impact.
                    </p>
                  </div>
                )}

                <Button 
                  onClick={calculateValue} 
                  className="w-full h-10 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
                >
                  Calculate Your Grand Slam Impact
                </Button>
              </div>
            </div>
          </div>

          {/* Results section */}
          {results && (
            <div className="animate-in fade-in duration-700 slide-in-from-bottom-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  Your School's{" "}
                  <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Impact Projection
                  </span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">🌍</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">CO2 Conquest</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.co2.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mb-2">kg CO2e saved</div>
                  <div className="text-sm text-muted-foreground italic">{results.co2Analogy}</div>
                </div>

                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Energy Empire</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.energy.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mb-2">MJ energy saved</div>
                  <div className="text-sm text-muted-foreground italic">{results.energyAnalogy}</div>
                </div>

                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">💧</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Water Warrior</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.water.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mb-2">liters saved</div>
                  <div className="text-sm text-muted-foreground italic">{results.waterAnalogy}</div>
                </div>

                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">🗑️</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Waste Annihilation</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.waste}</div>
                  <div className="text-sm text-muted-foreground mb-2">kg waste diverted</div>
                  <div className="text-sm text-muted-foreground italic">Keeping landfills empty!</div>
                </div>

                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">👕</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Uniform Uplift</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.uniforms.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mb-2">free uniforms provided</div>
                  <div className="text-sm text-muted-foreground italic">Matching your student body!</div>
                </div>

                <div className="group glass rounded-xl p-6 border border-border/50 hover-lift transition-smooth hover:shadow-glass">
                  <div className="text-4xl mb-3">🍲</div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Meal Miracle</h4>
                  <div className="text-2xl font-light mb-2 text-foreground">{results.meals.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mb-2">free meals funded</div>
                  <div className="text-sm text-muted-foreground italic">Nourishing futures in Africa!</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-base text-muted-foreground mb-6 max-w-3xl mx-auto">
                  These estimates amplify your dream outcome of becoming a sustainability legend, with high likelihood based on real partner data, minimal time delay (setup in weeks), and zero effort (we manage it all).
                </p>
                
                <Button 
                  onClick={resetCalculator} 
                  variant="outline" 
                  className="px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-border/40 hover:border-primary/40 hover:bg-primary/5"
                >
                  Recalculate Impact
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
