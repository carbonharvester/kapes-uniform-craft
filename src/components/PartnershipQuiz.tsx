import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PartnershipQuizProps {
  onComplete?: (recommendation: string, description: string) => void;
}

export const PartnershipQuiz = ({ onComplete }: PartnershipQuizProps) => {
  const [responses, setResponses] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const questions = [
    "How important is environmental sustainability to your school?",
    "How engaged are your students in social impact initiatives?",
    "How important is transparency in your supply chain?",
    "How much do you value student leadership opportunities?",
    "How important is detailed impact reporting and analytics?"
  ];

  const handleSubmit = () => {
    const averageScore = responses.reduce((sum, score) => sum + score, 0) / responses.length;
    
    let desc = "Based on your responses, our comprehensive Partnership Program will help you achieve your sustainability and impact goals while engaging your school community.";
    
    setRecommendation("Partnership Program");
    setIsComplete(true);
    
    if (onComplete) {
      onComplete("Partnership Program", desc);
    }
  };

  const updateResponse = (questionIndex: number, value: number) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Partnership Assessment</h2>
        <p className="text-muted-foreground">
          Rate the importance of each area to discover how our partnership program can best serve your school.
        </p>
      </div>
      
      {!isComplete ? (
        <>
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="space-y-3">
                <label className="text-sm font-medium">{question}</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button
                      key={value}
                      variant={responses[index] === value ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateResponse(index, value)}
                      className="w-10 h-10 rounded-full"
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={handleSubmit} 
            disabled={responses.length !== questions.length}
            className="w-full"
          >
            Get Recommendation
          </Button>
        </>
      ) : (
        <div className="text-center space-y-4 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold text-primary">
            Perfect Match: {recommendation}
          </h3>
          <p className="text-muted-foreground">
            Our comprehensive partnership program includes all the features and support your school needs.
          </p>
        </div>
      )}
    </div>
  );
};