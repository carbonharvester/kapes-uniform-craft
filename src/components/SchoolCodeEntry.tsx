
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap } from "lucide-react";

export const SchoolCodeEntry = () => {
  const [schoolCode, setSchoolCode] = useState("");
  const [showAlert, setShowAlert] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolCode.trim()) {
      setShowAlert("Please enter a school code");
      return;
    }
    // Simulate code validation
    setShowAlert("Entered Code Is Wrong, Please Enter Correct Code.");
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(209 100% 91%) 20%, hsl(209 100% 91%) 80%, hsl(0 0% 100%) 100%)' }}>
      {/* Background illustration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          <GraduationCap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-primary/30" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Elegant typography */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                I am a{" "}
                <span className="font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  parent
                </span>{" "}
                shopping for uniforms
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Enter your school's unique code to access your dedicated uniform store with custom designs and sustainable options.
              </p>
            </div>
            
            {/* Right side - Clean form in card */}
            <div className="glass rounded-3xl p-8 shadow-glass border border-border/50 relative">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">School Code</label>
                  <Input
                    type="text"
                    placeholder="Enter your school code"
                    value={schoolCode}
                    onChange={(e) => setSchoolCode(e.target.value)}
                    className="h-12 text-lg border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  Enter Store
                </Button>
              </form>
              
              {showAlert && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive">{showAlert}</p>
                </div>
              )}
              
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground">?</span>
                </div>
                <span className="font-medium">Need help finding your school code?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
