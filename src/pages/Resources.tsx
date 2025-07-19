import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ValueCalculator } from "@/components/ValueCalculator";
import { BookOpen, Download, Calculator } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Resources = () => {
  const [studentCount, setStudentCount] = useState("");
  const [budget, setBudget] = useState([3]);
  const [sustainability, setSustainability] = useState([3]);
  const [ethics, setEthics] = useState([3]);
  const [operations, setOperations] = useState([3]);
  const [impact, setImpact] = useState([3]);
  const [advanced, setAdvanced] = useState([3]);
  const [income, setIncome] = useState([3]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedTier, setRecommendedTier] = useState("");
  const [recommendationDesc, setRecommendationDesc] = useState("");
  const [studentError, setStudentError] = useState(false);

  const blogPosts = [{
    title: "Top Sustainability Challenges for Private Schools",
    excerpt: "Navigate the key challenges schools face when implementing sustainable practices.",
    category: "Sustainability"
  }, {
    title: "Ethical Fashion in Education: A Guide for Schools",
    excerpt: "Understanding how to make ethical choices in school uniform procurement.",
    category: "Ethics"
  }, {
    title: "Building Student Engagement Through Sustainability",
    excerpt: "Practical tips for involving students in your school's sustainability journey.",
    category: "Engagement"
  }];
  
  const faqs = [{
    question: "What are the contract terms for partnership?",
    answer: "Our partnerships are based on 3-year minimum agreements with flexible terms and upgrade options."
  }, {
    question: "How do the different tiers work?",
    answer: "We offer three tiers - EcoLaunch, SustainPro, and LegacyImpact - each with increasing levels of support and features."
  }, {
    question: "How is impact measured?",
    answer: "Through our KapesImpact™ dashboard, which tracks carbon savings, recycling rates, meals donated, and more in real-time."
  }];

  const handleQuizSubmit = () => {
    const count = parseInt(studentCount) || 0;
    
    if (!count || count < 500) {
      setStudentError(true);
      return;
    } else {
      setStudentError(false);
    }
    
    // Scoring logic: Higher scores for advanced priorities, penalize high budget/income focus for higher tiers
    let score = sustainability[0] + ethics[0] + operations[0] + impact[0] + advanced[0];
    if (budget[0] > 3 || income[0] > 3) score -= 3; // High focus on cost/income leans toward base
    if (count > 500) score += 2; // Larger schools may need more features
    
    // Recommend tier
    let tier = 'EcoLaunch (Base Tier)';
    let desc = 'Perfect for schools prioritizing budget and income with basic sustainability features like mixed materials and up to 20% revenue share.';
    if (score >= 12 && score < 20) {
      tier = 'SustainPro (Core Tier)';
      desc = 'Ideal for balanced priorities: 100% sustainable materials, full operations support, takeback schemes, and dashboards with negotiable commissions.';
    } else if (score >= 20) {
      tier = 'LegacyImpact (Flagship Tier)';
      desc = 'For high-impact focus: Advanced transparency, student engagement, zero commissions, and premium PR/educational support.';
    }
    
    setRecommendedTier(tier);
    setRecommendationDesc(desc);
    setShowResult(true);
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById('quiz-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const SliderField = ({ label, value, onChange }: { label: string; value: number[]; onChange: (value: number[]) => void }) => (
    <div className="space-y-4">
      <Label className="text-sm font-medium">{label}</Label>
      <Slider
        value={value}
        onValueChange={onChange}
        max={5}
        min={1}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not Important</span>
        <span>Slightly</span>
        <span>Moderate</span>
        <span>Very</span>
        <span>Extremely</span>
      </div>
    </div>
  );
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
        backgroundPosition: "20% center"
      }}></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-left">
          <div className="max-w-2xl space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Resources & Tools</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Get Started
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Guides, tools, and insights to help you build a more sustainable future for your school.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Blog Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Latest Articles</h2>
              <p className="text-muted-foreground text-lg">Insights and guidance for sustainable education</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map(post => <Card key={post.title} className="border-0 shadow-glass hover-lift transition-smooth">
                  <CardHeader>
                    <Badge className="w-fit mb-4 bg-primary/10 text-primary">{post.category}</Badge>
                    <CardTitle className="text-xl font-medium leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                    <Button variant="outline" size="sm" className="rounded-xl hover:scale-105 transition-smooth">
                      Read More
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </section>

          {/* Value Calculator */}
          <ValueCalculator />

          {/* Educational Tools */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Free Educational Tools</h2>
              <p className="text-muted-foreground text-lg">Resources to empower your sustainability journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium">Sustainability Guides</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive guides for implementing sustainability practices in schools.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl hover:scale-105 transition-smooth">
                    <Download className="h-4 w-4" />
                    Download Guides
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-glass hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium">Kapes Leaders Academy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ready-to-use lesson plans on sustainability, ethics, and global citizenship.
                  </p>
                  <Button variant="outline" className="flex items-center gap-2 rounded-xl hover:scale-105 transition-smooth">
                    <Download className="h-4 w-4" />
                    Download Plans
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Free Audit Tool */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Free School Uniform Sustainability Scorecard</h2>
              <p className="text-muted-foreground text-lg">Get personalized insights for your school</p>
            </div>
            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">Diagnostic Tool with Report Generation</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Get a comprehensive analysis of your current uniform program with personalized recommendations for improvement.
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">School Name</label>
                      <input type="text" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Uniform Supplier</label>
                      <input type="text" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Uniform Budget</label>
                      <input type="number" className="w-full p-3 border rounded-xl bg-background" />
                    </div>
                    <Button type="submit" className="w-full rounded-xl font-medium text-lg py-4 hover:scale-105 transition-smooth">
                      Start Free Audit
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Partnership Tier Quiz */}
          <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
            <Card className="border-0 shadow-glass max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">Find Your Perfect Kapes Uniforms Tier</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    Rate the importance of each priority on a scale from 1 (Not Important) to 5 (Extremely Important) to discover your ideal tier: EcoLaunch (Base), SustainPro (Core), or LegacyImpact (Flagship). Complete the quiz to unlock a free consultation.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="student-count" className="text-sm font-medium">
                      Approximately how many students does your school have?
                    </Label>
                    <Input
                      id="student-count"
                      type="number"
                      placeholder="Enter number"
                      value={studentCount}
                      onChange={(e) => setStudentCount(e.target.value)}
                      className="rounded-xl"
                      min="1"
                    />
                    {studentError && (
                      <p className="text-destructive text-sm">Your school must have at least 500 students to qualify.</p>
                    )}
                  </div>

                  <div className="space-y-6">
                    <Label className="text-base font-medium">Rate the importance of each priority:</Label>
                    
                    <SliderField
                      label="Budget-friendly options"
                      value={budget}
                      onChange={setBudget}
                    />
                    
                    <SliderField
                      label="Full sustainability and eco-materials"
                      value={sustainability}
                      onChange={setSustainability}
                    />
                    
                    <SliderField
                      label="Ethical production and transparency"
                      value={ethics}
                      onChange={setEthics}
                    />
                    
                    <SliderField
                      label="Streamlined operations (e.g., e-commerce, logistics)"
                      value={operations}
                      onChange={setOperations}
                    />
                    
                    <SliderField
                      label="Social impact (e.g., meals funded, student engagement)"
                      value={impact}
                      onChange={setImpact}
                    />
                    
                    <SliderField
                      label="Advanced features (e.g., QR codes, PR support)"
                      value={advanced}
                      onChange={setAdvanced}
                    />
                    
                    <SliderField
                      label="Generating income (e.g., revenue shares from sales)"
                      value={income}
                      onChange={setIncome}
                    />
                  </div>

                  <Button 
                    onClick={handleQuizSubmit}
                    className="w-full rounded-xl font-medium text-lg py-4 hover:scale-105 transition-smooth"
                    size="lg"
                  >
                    Unlock Free Consultation
                  </Button>

                  {showResult && (
                    <div id="quiz-result" className="mt-8 p-6 bg-muted/50 rounded-2xl border">
                      <h4 className="text-xl md:text-2xl font-medium mb-4 text-primary">
                        Your Perfect Tier: {recommendedTier}
                      </h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {recommendationDesc}
                      </p>
                      <div className="text-center space-y-4">
                        <Button variant="outline" className="rounded-xl hover:scale-105 transition-smooth">
                          Take Our Sustainability Scorecard
                        </Button>
                        <p className="text-sm text-muted-foreground italic">
                          Earn your free consultation: Complete the Sustainability Scorecard to unlock booking options.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Quick answers to common questions</p>
            </div>
            <div className="flex justify-center">
              <FAQAccordion />
            </div>
          </section>
        </div>
      </div>
    </div>;
};
export default Resources;