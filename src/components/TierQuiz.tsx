import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface TierQuizProps {
  onComplete?: (tier: string, description: string) => void;
}

export const TierQuiz = ({ onComplete }: TierQuizProps) => {
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
    
    if (onComplete) {
      onComplete(tier, desc);
    }
    
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

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-medium mb-4">Find Your Perfect Kapes Uniforms Tier</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Rate the importance of each priority on a scale from 1 (Not Important) to 5 (Extremely Important) to discover your ideal tier.
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
            label="Eco-friendly materials"
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
          Find Your Tier
        </Button>

        {showResult && (
          <div id="quiz-result" className="mt-8 p-6 bg-muted/50 rounded-2xl border text-center">
            <h4 className="text-xl md:text-2xl font-medium mb-4 text-primary">
              Your Perfect Tier: {recommendedTier}
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              {recommendationDesc}
            </p>
            <div className="space-y-4">
              <Button variant="outline" className="rounded-xl hover:scale-105 transition-smooth bg-[#030063] text-white border-[#030063] hover:bg-[#030063]/90">
                Take Our Sustainability Scorecard
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Earn your free consultation: Complete the Sustainability Scorecard to unlock booking options.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};