import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Leaf, Users, Globe, Zap, Droplet, Trash2, Shirt, UtensilsCrossed } from "lucide-react";

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
    <section className="py-16 bg-muted/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
              Impact Value Calculator: Unlock Your School's Epic Sustainability Wins
            </h2>
            <p className="text-muted-foreground">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">School Location (Region):</label>
                    <Select value={location} onValueChange={setLocation} required>
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
                    <div className="text-destructive text-sm text-center">{error}</div>
                  )}
                  <Button type="submit" className="w-full">
                    Calculate Your Impact
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {showResults && results && (
            <div className="mt-16 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                  Your School's Projected Value Equation Boost
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* CO2 Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-2xl group-hover:bg-green-500/30 transition-colors">
                      <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-green-800 dark:text-green-200">
                      CO2 Conquest
                      <span className="block text-sm font-normal text-green-600 dark:text-green-400">(Emissions Saved)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">{results.co2} kg CO2e</div>
                      <div className="text-sm text-green-700 dark:text-green-300 italic">{results.co2Analogy}</div>
                    </div>
                  </div>
                </div>

                {/* Energy Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/50 dark:to-orange-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-2xl group-hover:bg-yellow-500/30 transition-colors">
                      <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-yellow-800 dark:text-yellow-200">
                      Energy Empire Built
                      <span className="block text-sm font-normal text-yellow-600 dark:text-yellow-400">(Energy Saved)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 mb-2">{results.energy} MJ</div>
                      <div className="text-sm text-yellow-700 dark:text-yellow-300 italic">{results.energyAnalogy}</div>
                    </div>
                  </div>
                </div>

                {/* Water Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/50 dark:to-cyan-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-colors">
                      <Droplet className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-blue-800 dark:text-blue-200">
                      Water Warrior Win
                      <span className="block text-sm font-normal text-blue-600 dark:text-blue-400">(Water Saved)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">{results.water} liters</div>
                      <div className="text-sm text-blue-700 dark:text-blue-300 italic">{results.waterAnalogy}</div>
                    </div>
                  </div>
                </div>

                {/* Waste Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950/50 dark:to-indigo-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
                      <Trash2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-purple-800 dark:text-purple-200">
                      Waste Annihilation
                      <span className="block text-sm font-normal text-purple-600 dark:text-purple-400">(Waste Diverted)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">{results.waste} kg</div>
                      <div className="text-sm text-purple-700 dark:text-purple-300 italic">Keeping landfills empty!</div>
                    </div>
                  </div>
                </div>

                {/* Uniforms Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/50 dark:to-rose-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-pink-500/20 rounded-2xl group-hover:bg-pink-500/30 transition-colors">
                      <Shirt className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-pink-800 dark:text-pink-200">
                      Uniform Uplift
                      <span className="block text-sm font-normal text-pink-600 dark:text-pink-400">(Free Uniforms Provided)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-900 dark:text-pink-100 mb-2">{results.uniforms} uniforms</div>
                      <div className="text-sm text-pink-700 dark:text-pink-300 italic">Matching your student body!</div>
                    </div>
                  </div>
                </div>

                {/* Meals Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-900/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-2xl group-hover:bg-orange-500/30 transition-colors">
                      <UtensilsCrossed className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3 text-orange-800 dark:text-orange-200">
                      Meal Miracle
                      <span className="block text-sm font-normal text-orange-600 dark:text-orange-400">(Free Meals Funded)</span>
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-2">{results.meals} meals</div>
                      <div className="text-sm text-orange-700 dark:text-orange-300 italic">Nourishing futures in Africa!</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-block p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-border/50 backdrop-blur-sm">
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    These estimates amplify your dream outcome of becoming a sustainability legend, with high likelihood based on real partner data, minimal time delay (setup in weeks), and zero effort (we manage it all).
                  </p>
                  <Button 
                    onClick={resetCalculator} 
                    variant="outline" 
                    className="mt-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    Recalculate
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};