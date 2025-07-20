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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impact Value Calculator
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See the transformational impact your school can make through sustainable uniform solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Environmental Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <TreePine className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Carbon Footprint Reduction</h4>
                      <p className="text-muted-foreground">Significant CO₂ savings through sustainable materials and manufacturing processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplets className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Water Conservation</h4>
                      <p className="text-muted-foreground">Massive water savings through responsible production and circular economy practices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Social Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Meals for Children</h4>
                      <p className="text-muted-foreground">Every uniform purchase provides nutritious meals to children in Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Free Uniforms</h4>
                      <p className="text-muted-foreground">Donated uniforms help children access education and break the cycle of poverty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calculator */}
            <Card className="bg-card border shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Calculate Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Number of Students</label>
                    <Input
                      type="number"
                      placeholder="Enter number of students"
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                      min="1"
                      className="h-12 text-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">School Region</label>
                    <Select value={region} onValueChange={setRegion} required>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe">Europe</SelectItem>
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
                    className="w-full h-12 text-lg"
                  >
                    {isCalculating ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Calculating...
                      </div>
                    ) : (
                      "Calculate Impact"
                    )}
                  </Button>
                </form>

                {/* Results */}
                {results && (
                  <div className="mt-8 space-y-6">
                    <div className="text-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Annual Impact for {formatNumber(results.students)} Students
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {impactCards.map((card, index) => (
                        <Card key={index} className={`${card.bgColor} border-0`}>
                          <CardContent className="p-4 text-center">
                            <div className={`w-8 h-8 ${card.color} mx-auto mb-2 flex items-center justify-center`}>
                              <card.icon className="w-6 h-6" />
                            </div>
                            <div className={`text-lg font-bold ${card.color}`}>
                              {card.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{card.unit}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Cost Savings */}
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4 text-center">
                        <h4 className="font-semibold text-green-800 mb-1">Annual Cost Savings</h4>
                        <div className="text-2xl font-bold text-green-600">
                          £{formatNumber(results.costSavings)}
                        </div>
                        <p className="text-xs text-green-700">
                          Through efficiency gains and partnership benefits
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};