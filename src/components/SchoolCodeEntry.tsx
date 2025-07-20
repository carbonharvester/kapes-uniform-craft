
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Store, Users } from "lucide-react";

export const SchoolCodeEntry = () => {
  const [schoolCode, setSchoolCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolCode.trim()) {
      // Handle school code submission
      console.log("School code submitted:", schoolCode);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-light-warm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                  I am a <span className="text-primary font-medium">parent</span> shopping for uniforms
                </h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enter your school's unique code to access their dedicated uniform store with custom designs, 
                sizing guides, and delivery options tailored specifically for your school community.
              </p>
              
              {/* Visual benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Store className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">School-specific designs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary">📦</span>
                  </div>
                  <span className="text-sm font-medium">Next-day delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Store className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Enter School Store</h3>
                    <p className="text-muted-foreground text-sm">
                      Access your school's custom uniform collection
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter your school code (e.g., ABC123)"
                        value={schoolCode}
                        onChange={(e) => setSchoolCode(e.target.value)}
                        className="h-12 text-center text-lg font-medium tracking-wider border-2 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 rounded-xl"
                    >
                      Enter Store
                    </Button>
                  </form>
                  
                  <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <HelpCircle className="w-4 h-4" />
                    <span>Need Help Finding Your School Code?</span>
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
