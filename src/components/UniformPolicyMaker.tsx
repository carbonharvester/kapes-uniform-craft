import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Download, Settings } from "lucide-react";
import { toast } from "sonner";

const UniformPolicyMaker = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolType: "",
    sustainabilityGoals: [] as string[],
    policyFocus: "",
    customRequirements: "",
  });

  const sustainabilityOptions = [
    "Carbon neutrality by 2030",
    "Zero waste to landfill",
    "100% recycled materials",
    "Local supplier prioritization",
    "Student engagement programs",
    "Take-back scheme implementation"
  ];

  const handleSustainabilityChange = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sustainabilityGoals: checked 
        ? [...prev.sustainabilityGoals, option]
        : prev.sustainabilityGoals.filter(goal => goal !== option)
    }));
  };

  const generatePolicy = () => {
    if (!formData.schoolName || !formData.schoolType || !formData.policyFocus) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate policy generation
    toast.success("Your custom uniform policy has been generated!");
    
    // In a real implementation, this would generate and download a PDF
    // For now, we'll just show a success message
  };

  return (
    <section className="py-16 bg-gradient-warm-section">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary">
          <Settings className="w-4 h-4 mr-2" />
          Policy Generator
        </Badge>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
          Uniform Policy Maker
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Create a customized sustainable uniform policy tailored to your school's specific needs and goals
        </p>
      </div>

      <Card className="border-0 shadow-glass max-w-4xl mx-auto">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-medium">Build Your Policy</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {/* School Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name *</Label>
              <Input
                id="schoolName"
                placeholder="Enter your school name"
                value={formData.schoolName}
                onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolType">School Type *</Label>
              <Select value={formData.schoolType} onValueChange={(value) => setFormData(prev => ({ ...prev, schoolType: value }))}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select school type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="independent">Independent School</SelectItem>
                  <SelectItem value="academy">Academy</SelectItem>
                  <SelectItem value="international">International School</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Policy Focus */}
          <div className="space-y-2">
            <Label htmlFor="policyFocus">Primary Policy Focus *</Label>
            <Select value={formData.policyFocus} onValueChange={(value) => setFormData(prev => ({ ...prev, policyFocus: value }))}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select your main focus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="environmental">Environmental Impact</SelectItem>
                <SelectItem value="cost">Cost Effectiveness</SelectItem>
                <SelectItem value="quality">Quality & Durability</SelectItem>
                <SelectItem value="social">Social Impact</SelectItem>
                <SelectItem value="comprehensive">Comprehensive Approach</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sustainability Goals */}
          <div className="space-y-4">
            <Label>Sustainability Goals</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {sustainabilityOptions.map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 rounded-xl border hover:bg-accent/5 transition-colors">
                  <Checkbox
                    id={option}
                    checked={formData.sustainabilityGoals.includes(option)}
                    onCheckedChange={(checked) => handleSustainabilityChange(option, checked as boolean)}
                  />
                  <Label htmlFor={option} className="text-sm font-normal cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Requirements */}
          <div className="space-y-2">
            <Label htmlFor="customRequirements">Additional Requirements</Label>
            <Textarea
              id="customRequirements"
              placeholder="Describe any specific requirements, constraints, or priorities for your uniform policy..."
              value={formData.customRequirements}
              onChange={(e) => setFormData(prev => ({ ...prev, customRequirements: e.target.value }))}
              className="rounded-xl min-h-[120px]"
            />
          </div>

          {/* Generate Button */}
          <div className="text-center pt-6">
            <Button
              onClick={generatePolicy}
              size="lg"
              className="rounded-xl px-8 hover:scale-105 transition-smooth"
            >
              <Download className="w-5 h-5 mr-2" />
              Generate Custom Policy
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Your policy will be generated as a downloadable PDF document
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UniformPolicyMaker;