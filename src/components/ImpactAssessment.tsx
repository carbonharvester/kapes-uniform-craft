
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ImpactAssessmentProps {
  onComplete?: (results: any) => void;
}

export const ImpactAssessment = ({ onComplete }: ImpactAssessmentProps) => {
  const [studentCount, setStudentCount] = useState("");
  const [sustainability, setSustainability] = useState([3]);
  const [ethics, setEthics] = useState([3]);
  const [community, setCommunity] = useState([3]);
  const [education, setEducation] = useState([3]);
  const [transparency, setTransparency] = useState([3]);
  const [leadership, setLeadership] = useState([3]);
  const [showResult, setShowResult] = useState(false);
  const [impactScore, setImpactScore] = useState(0);
  const [readinessLevel, setReadinessLevel] = useState("");
  const [studentError, setStudentError] = useState(false);

  const handleAssessmentSubmit = () => {
    const count = parseInt(studentCount) || 0;
    
    if (!count || count < 500) {
      setStudentError(true);
      return;
    } else {
      setStudentError(false);
    }
    
    // Calculate impact readiness score
    const totalScore = sustainability[0] + ethics[0] + community[0] + education[0] + transparency[0] + leadership[0];
    const maxScore = 30; // 6 questions × 5 max points
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    setImpactScore(percentage);
    
    // Determine readiness level
    let level = '';
    if (percentage >= 80) {
      level = 'Impact Leader - Ready to Transform Education';
    } else if (percentage >= 60) {
      level = 'Impact Champion - Well-Positioned for Change';
    } else if (percentage >= 40) {
      level = 'Impact Explorer - Great Foundation to Build On';
    } else {
      level = 'Impact Starter - Perfect Time to Begin the Journey';
    }
    
    setReadinessLevel(level);
    setShowResult(true);
    
    if (onComplete) {
      onComplete({ score: percentage, level, responses: { sustainability, ethics, community, education, transparency, leadership } });
    }
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById('assessment-result')?.scrollIntoView({ behavior: 'smooth' });
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
        onFocus={(e) => e.preventDefault()}
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
        <h3 className="text-2xl md:text-3xl font-medium mb-4">Discover Your Impact Readiness</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Rate the importance of each value on a scale from 1 (Not Important) to 5 (Extremely Important) to discover how ready your school is to lead the impact revolution.
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
            <p className="text-destructive text-sm">Your school must have at least 500 students to qualify for our impact partnership.</p>
          )}
        </div>

        <div className="space-y-6">
          <Label className="text-base font-medium">Rate the importance of each value to your school:</Label>
          
          <SliderField
            label="Environmental sustainability and healing"
            value={sustainability}
            onChange={setSustainability}
          />
          
          <SliderField
            label="Ethical manufacturing and fair trade practices"
            value={ethics}
            onChange={setEthics}
          />
          
          <SliderField
            label="Supporting communities in need globally"
            value={community}
            onChange={setCommunity}
          />
          
          <SliderField
            label="Student engagement and leadership opportunities"
            value={education}
            onChange={setEducation}
          />
          
          <SliderField
            label="Transparency and supply chain visibility"
            value={transparency}
            onChange={setTransparency}
          />
          
          <SliderField
            label="Being a leader in educational innovation"
            value={leadership}
            onChange={setLeadership}
          />
        </div>

        <Button 
          onClick={handleAssessmentSubmit}
          className="w-full rounded-xl font-medium text-lg py-4 hover:scale-105 transition-smooth"
          size="lg"
        >
          Discover Your Impact Readiness
        </Button>

        {showResult && (
          <div id="assessment-result" className="mt-8 p-6 bg-muted/50 rounded-2xl border text-center">
            <div className="mb-6">
              <div className="text-6xl font-light text-primary mb-2">{impactScore}%</div>
              <div className="text-sm text-muted-foreground">Impact Readiness Score</div>
            </div>
            
            <h4 className="text-xl md:text-2xl font-medium mb-4 text-primary">
              {readinessLevel}
            </h4>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Your school shows strong alignment with impact-first values. You're ready to join the movement of schools transforming education through ethical, sustainable uniforms that make a real difference in the world.
            </p>
            
            <div className="space-y-4">
              <Button className="rounded-xl hover:scale-105 transition-smooth bg-[#030063] text-white border-[#030063] hover:bg-[#030063]/90 hover:text-white">
                Book Your Impact Partnership Consultation
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Ready to make a difference? Let's discuss how your school can lead the impact revolution.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
