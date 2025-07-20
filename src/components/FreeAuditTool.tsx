
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, TrendingUp, Award, Target, BarChart3 } from "lucide-react";

export const FreeAuditTool = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    email: "",
    students: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Audit form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const benefits = [
    {
      icon: BarChart3,
      title: "Sustainability Assessment",
      description: "Current environmental impact analysis with detailed metrics",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization Report",
      description: "Identify potential savings and efficiency improvements",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Target,
      title: "Impact Projections",
      description: "See your potential positive impact with Kapes partnership",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      title: "Custom Recommendations",
      description: "Tailored action plan specific to your school's needs",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Free Uniform Program Audit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a comprehensive analysis of your current uniform program with actionable recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  What You'll Receive:
                </h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className={`${benefit.bgColor} border-0 hover:scale-105 transition-transform duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                            <benefit.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Visual elements showing audit process */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Sample Audit Insights
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                    <span>Current CO₂ Impact</span>
                    <span className="font-medium text-red-600">High</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                    <span>Cost Efficiency</span>
                    <span className="font-medium text-yellow-600">Medium</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                    <span>Sustainability Score</span>
                    <span className="font-medium text-green-600">Improvable</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div>
              <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-0">
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Start Your Free Audit
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">School Name</label>
                      <Input
                        type="text"
                        placeholder="Your school name"
                        value={formData.schoolName}
                        onChange={(e) => handleInputChange("schoolName", e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Contact Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@school.edu"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Number of Students</label>
                      <Input
                        type="number"
                        placeholder="e.g., 500"
                        value={formData.students}
                        onChange={(e) => handleInputChange("students", e.target.value)}
                        className="h-11"
                        min="1"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Current Annual Uniform Budget</label>
                      <Input
                        type="number"
                        placeholder="e.g., £25,000"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="h-11"
                        min="0"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-xl"
                    >
                      Get My Free Audit Report
                    </Button>
                  </form>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      No commitment required • Report delivered within 2 business days
                      <br />
                      <span className="inline-flex items-center gap-1 mt-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        100% confidential analysis
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
