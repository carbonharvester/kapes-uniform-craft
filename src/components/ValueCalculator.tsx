
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Leaf, Users } from "lucide-react";

export const ValueCalculator = () => {
  const [students, setStudents] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!students || !location) {
      setError("Please fill in all fields to calculate.");
      return;
    }
    
    setError("");
    
    const studentCount = parseInt(students);
    
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
    
    const totalCO2 = (co2PerStudent * studentCount * multiplier).toFixed(0);
    const totalEnergy = (energyPerStudent * studentCount * multiplier).toFixed(0);
    const totalWater = (waterPerStudent * studentCount * multiplier).toFixed(0);
    const totalWaste = (wastePerStudent * studentCount * multiplier).toFixed(2);
    const freeUniforms = studentCount;
    const returned = studentCount * returnRate;
    const freeMeals = (returned * mealsPerReturned).toFixed(0);
    
    // Analogies
    const co2PerCarAnnual = 4600; // kg
    const cars = (parseFloat(totalCO2) / co2PerCarAnnual).toFixed(1);
    const co2Analogy = `(Like removing ${cars} cars from the road annually!)`;
    
    const dailyHomeMJ = 108; // ~30 kWh/day * 3.6
    const homeDays = (parseFloat(totalEnergy) / dailyHomeMJ).toFixed(1);
    const energyAnalogy = `(Powering an average home for ${homeDays} days!)`;
    
    const olympicPoolLiters = 2500000;
    const pools = (parseFloat(totalWater) / olympicPoolLiters).toFixed(2);
    const waterAnalogy = `(Enough to fill ${pools} Olympic pools!)`;
    
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
    
    setShowResults(true);
  };

  const resetCalculator = () => {
    setStudents("");
    setLocation("");
    setError("");
    setShowResults(false);
    setResults(null);
  };

  return (
    <section className="py-16 bg-gradient-cool-warm relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-4">
              Impact Value Calculator: Unlock Your School's Epic Sustainability Wins
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Environmental Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Calculate your carbon footprint reduction, water savings, and waste elimination with our sustainable uniform program.</p>
                </div>
              </div>
              
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Social Impact</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Measure the positive change your partnership creates in African communities through fair trade practices.</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-glass order-1 lg:order-2">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-center gap-2 text-lg md:text-xl">
                  <Calculator className="h-4 w-4 md:h-5 md:w-5" />
                  Calculate Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Students:</label>
                    <Input 
                      type="number" 
                      placeholder="Enter number of students" 
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                      min="1"
                      required
                      className="h-10 md:h-12 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">School Location (Region):</label>
                    <Select value={location} onValueChange={setLocation} required>
                      <SelectTrigger className="h-10 md:h-12 text-sm md:text-base">
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
                    <div className="text-destructive text-sm text-center p-2 bg-destructive/10 rounded-lg">{error}</div>
                  )}
                  <Button type="submit" className="w-full h-10 md:h-12 text-sm md:text-base">
                    Calculate Your Impact
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {showResults && results && (
            <div className="mt-8 md:mt-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight text-center mb-6 md:mb-8 px-4">
                Your School's Projected Value Equation Boost
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">CO2 Conquest</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">(Emissions Saved)</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.co2} kg CO2e</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">{results.co2Analogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Energy Empire Built</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">(Energy Saved)</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.energy} MJ</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">{results.energyAnalogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Water Warrior Win</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">(Water Saved)</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.water} liters</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">{results.waterAnalogy}</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Waste Annihilation</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">(Waste Diverted)</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.waste} kg</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">Keeping landfills empty!</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Uniform Uplift (Free)</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">Uniforms Provided</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.uniforms} uniforms</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">Matching your student body!</div>
                  </CardContent>
                </Card>

                <Card className="text-center bg-background border border-border shadow-glass hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"></div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Meal Miracle (Free)</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">Meals Funded</p>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-foreground">{results.meals} meals</div>
                    <div className="text-xs md:text-sm text-muted-foreground italic">Nourishing futures in Africa!</div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-muted-foreground mt-6 md:mt-8 text-sm md:text-base px-4">
                These estimates amplify your dream outcome of becoming a sustainability legend, with high likelihood based on real partner data, minimal time delay (setup in weeks), and zero effort (we manage it all).
              </p>
              <div className="text-center mt-4 md:mt-6">
                <Button onClick={resetCalculator} variant="outline" className="px-6 py-2 text-sm md:text-base">
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
