
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Globe, Zap, Droplets, Trash2, Shirt, UtensilsCrossed } from "lucide-react";

interface CalculationResults {
  co2: string;
  co2Analogy: string;
  energy: string;
  energyAnalogy: string;
  water: string;
  waterAnalogy: string;
  waste: string;
  uniforms: string;
  meals: string;
}

export const ValueCalculator = () => {
  const [students, setStudents] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [error, setError] = useState<string>("");

  const calculateImpact = () => {
    if (!students || !location) {
      setError("Please fill in all fields to calculate.");
      return;
    }

    setError("");
    
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
    
    const totalCO2 = (co2PerStudent * numStudents * multiplier).toFixed(0);
    const totalEnergy = (energyPerStudent * numStudents * multiplier).toFixed(0);
    const totalWater = (waterPerStudent * numStudents * multiplier).toFixed(0);
    const totalWaste = (wastePerStudent * numStudents * multiplier).toFixed(2);
    const freeUniforms = numStudents.toString();
    const returned = numStudents * returnRate;
    const freeMeals = (returned * mealsPerReturned).toFixed(0);
    
    // Analogies
    const co2PerCarAnnual = 4600; // kg
    const cars = (parseFloat(totalCO2) / co2PerCarAnnual).toFixed(1);
    const co2Analogy = `Like removing ${cars} cars from the road annually!`;
    
    const dailyHomeMJ = 108; // ~30 kWh/day * 3.6
    const homeDays = (parseFloat(totalEnergy) / dailyHomeMJ).toFixed(1);
    const energyAnalogy = `Powering an average home for ${homeDays} days!`;
    
    const olympicPoolLiters = 2500000;
    const pools = (parseFloat(totalWater) / olympicPoolLiters).toFixed(2);
    const waterAnalogy = `Enough to fill ${pools} Olympic pools!`;

    setResults({
      co2: totalCO2,
      co2Analogy,
      energy: totalEnergy,
      energyAnalogy,
      water: totalWater,
      waterAnalogy,
      waste: totalWaste,
      uniforms: freeUniforms,
      meals: freeMeals
    });
  };

  const resetCalculator = () => {
    setStudents("");
    setLocation("");
    setResults(null);
    setError("");
  };

  return (
    <section className="py-16 bg-muted/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              Value Calculator: Unlock Your School's Epic Sustainability Wins
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
            </p>
          </div>
          
          {!results ? (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculate Your Grand Slam Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students:</label>
                    <Input 
                      type="number" 
                      placeholder="Enter number of students"
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">School Location (Region):</label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
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
                    <div className="text-red-500 text-center text-sm">{error}</div>
                  )}
                  
                  <Button onClick={calculateImpact} className="w-full">
                    Calculate Your Grand Slam Impact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-4">Your School's Projected Value Equation Boost</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">CO2 Conquest (Emissions Saved)</h4>
                    <div className="text-2xl font-bold mb-2">{results.co2} kg CO2e</div>
                    <div className="text-sm text-muted-foreground italic">{results.co2Analogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">Energy Empire Built (Energy Saved)</h4>
                    <div className="text-2xl font-bold mb-2">{results.energy} MJ</div>
                    <div className="text-sm text-muted-foreground italic">{results.energyAnalogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <Droplets className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">Water Warrior Win (Water Saved)</h4>
                    <div className="text-2xl font-bold mb-2">{results.water} liters</div>
                    <div className="text-sm text-muted-foreground italic">{results.waterAnalogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <Trash2 className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">Waste Annihilation (Waste Diverted)</h4>
                    <div className="text-2xl font-bold mb-2">{results.waste} kg</div>
                    <div className="text-sm text-muted-foreground italic">Keeping landfills empty!</div>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <Shirt className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">Uniform Uplift (Free Uniforms Provided)</h4>
                    <div className="text-2xl font-bold mb-2">{results.uniforms} uniforms</div>
                    <div className="text-sm text-muted-foreground italic">Matching your student body!</div>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <UtensilsCrossed className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary text-lg mb-2">Meal Miracle (Free Meals Funded)</h4>
                    <div className="text-2xl font-bold mb-2">{results.meals} meals</div>
                    <div className="text-sm text-muted-foreground italic">Nourishing futures in Africa!</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  These estimates amplify your dream outcome of becoming a sustainability legend, with high likelihood based on real partner data, minimal time delay (setup in weeks), and zero effort (we manage it all).
                </p>
                <Button onClick={resetCalculator} variant="outline">
                  Recalculate
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
