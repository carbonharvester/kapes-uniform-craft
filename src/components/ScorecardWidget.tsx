import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ScorecardWidget = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    students: "",
    email: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.school && formData.students && formData.email) {
      // Store form data and navigate to scorecard page
      sessionStorage.setItem('scorecardData', JSON.stringify(formData));
      navigate('/sustainability-scorecard');
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="py-16 bg-background-warm relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-glass" style={{ backgroundColor: '#cfeaff' }}>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-3xl text-primary">
                Get Started
              </CardTitle>
              <p className="text-muted-foreground">
                Enter your details to begin your sustainability assessment
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="School Name" 
                    value={formData.school}
                    onChange={handleInputChange('school')}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="number" 
                    placeholder="Number of Students" 
                    value={formData.students}
                    onChange={handleInputChange('students')}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Start Scorecard Assessment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};