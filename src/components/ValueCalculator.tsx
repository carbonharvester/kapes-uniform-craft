
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TreePine, Droplets, Users, Heart, TrendingUp } from "lucide-react";

interface CalculationResults {
  students: number;
  region: string;
  co2Saved: number;
  waterSaved: number;
  mealsProvided: number;
  uniformsDonated: number;
  costSavings: number;
}

export const ValueCalculator = () => {
  const [students, setStudents] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateImpact = (studentCount: number, selectedRegion: string): CalculationResults => {
    // Base calculations per student per year
    const co2PerStudent = 12.5; // kg CO2 saved per student
    const waterPerStudent = 2500; // liters saved per student
    const mealsPerStudent = 2; // meals provided in Africa per student
    const uniformsPerStudent = 0.5; // uniforms donated per student
    
    // Regional multipliers for cost savings
    const regionalMultipliers: { [key: string]: number } = {
      europe: 1.3,
      "north-america": 1.2,
      asia: 0.9,
      africa: 0.8,
      other: 1.0
    };

    const multiplier = regionalMultipliers[selectedRegion] || 1.0;
    const baseCostSavings = studentCount * 45; // £45 average savings per student

    return {
      students: studentCount,
      region: selectedRegion,
      co2Saved: Math.round(studentCount * co2PerStudent),
      waterSaved: Math.round(studentCount * waterPerStudent),
      mealsProvided: Math.round(studentCount * mealsPerStudent),
      uniformsDonated: Math.round(studentCount * uniformsPerStudent),
      costSavings: Math.round(baseCostSavings * multiplier)
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!students || !region) return;

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const studentCount = parseInt(students);
    const calculatedResults = calculateImpact(studentCount, region);
    setResults(calculatedResults);
    setIsCalculating(false);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const impactCards = results ? [
    {
      icon: TreePine,
      title: "CO₂ Emissions Saved",
      value: formatNumber(results.co2Saved),
      unit: "kg per year",
      description: "Equivalent to planting trees",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Droplets,
      title: "Water Conserved",
      value: formatNumber(results.waterSaved),
      unit: "liters per year",
      description: "Clean drinking water saved",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Meals Provided",
      value: formatNumber(results.mealsProvided),
      unit: "meals in Africa",
      description: "Nutritious meals for children",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Users,
      title: "Uniforms Donated",
      value: formatNumber(results.uniformsDonated),
      unit: "to children in need",
      description: "Free uniforms for education",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ] : [];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Impact Value Calculator: Unlock Your School's Epic Sustainability Wins
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Input your school's details to reveal the massive dream outcomes: slashed emissions, conserved resources, 
              and life-changing impacts in Africa. Based on averages from partnered schools and industry data.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Impact Descriptions */}
            <div className="space-y-8">
              {/* Environmental Impact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TreePine className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Environmental Impact</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Calculate your carbon footprint reduction, water savings, and waste elimination with our 
                    sustainable uniform program.
                  </p>
                </div>
              </div>

              {/* Social Impact */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Social Impact</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Measure the positive change your partnership creates in African communities through fair 
                    trade practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Calculator Form */}
            <div className="lg:max-w-md">
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-6 h-6 text-slate-700" />
                    <CardTitle className="text-xl font-semibold text-slate-800">
                      Calculate Your Impact
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Number of Students:</label>
                      <Input
                        type="number"
                        placeholder="Enter number of students"
                        value={students}
                        onChange={(e) => setStudents(e.target.value)}
                        min="1"
                        className="h-12 border-slate-200 focus:border-slate-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">School Location (Region):</label>
                      <Select value={region} onValueChange={setRegion} required>
                        <SelectTrigger className="h-12 border-slate-200 focus:border-slate-400">
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

                    <Button
                      type="submit"
                      disabled={isCalculating || !students || !region}
                      className="w-full h-12 text-lg font-medium bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isCalculating ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Calculating Your Impact...
                        </div>
                      ) : (
                        "Calculate Your Impact"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="mt-16 space-y-8 animate-fade-in">
              <div className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Your Annual Impact for {formatNumber(results.students)} Students
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impactCards.map((card, index) => (
                  <Card key={index} className={`${card.bgColor} border-0 hover:scale-105 transition-transform duration-300`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${card.color} mx-auto mb-4 flex items-center justify-center`}>
                        <card.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                      <div className="space-y-1">
                        <div className={`text-3xl font-bold ${card.color}`}>
                          {card.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{card.unit}</div>
                        <div className="text-xs text-muted-foreground mt-2">{card.description}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Cost Savings Highlight */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Estimated Annual Cost Savings</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    £{formatNumber(results.costSavings)}
                  </div>
                  <p className="text-sm text-green-700">
                    Through efficiency gains, reduced waste, and partnership benefits
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
