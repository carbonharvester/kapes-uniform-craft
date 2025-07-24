import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Download, Settings, CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";

const UniformPolicyMakerPage = () => {
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

  const features = [
    {
      icon: FileText,
      title: "Custom Policy Templates",
      description: "Get professionally crafted uniform policies tailored to your school's specific needs and goals."
    },
    {
      icon: Target,
      title: "Goal-Oriented Framework",
      description: "Align your uniform policy with sustainability targets and educational objectives."
    },
    {
      icon: Users,
      title: "Stakeholder Considerations",
      description: "Include perspectives from students, parents, staff, and governing bodies in your policy."
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Ensure your policy meets current regulations and best practice standards."
    }
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero-to-warm">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
          backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
          backgroundPosition: "center center"
        }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Settings className="w-4 h-4 mr-2" />
              Policy Generator
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Uniform Policy{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Maker
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Create comprehensive, sustainable uniform policies tailored to your school's unique vision and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-xl px-8 hover:scale-105 transition-smooth">
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                View Sample Policy
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Why Use Our Policy Maker?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Save time and ensure comprehensive coverage with our intelligent policy generation tool
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-glass hover-lift transition-smooth text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Policy Builder Form */}
          <section className="py-16 bg-gradient-warm-section -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">
                <Lightbulb className="w-4 h-4 mr-2" />
                Build Your Policy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Create Your Custom Policy
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Answer a few questions and we'll generate a comprehensive uniform policy for your school
              </p>
            </div>

            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-medium">Policy Generator</CardTitle>
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

          {/* Benefits Section */}
          <section className="py-16 bg-gradient-light-warm-section -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg">
                Your generated policy includes all the essential components
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                "Policy objectives and scope",
                "Sustainability commitments",
                "Quality standards and specifications",
                "Cost management strategies",
                "Student and parent guidelines",
                "Supplier selection criteria",
                "Implementation timeline",
                "Monitoring and review process",
                "Emergency procedures"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UniformPolicyMakerPage;