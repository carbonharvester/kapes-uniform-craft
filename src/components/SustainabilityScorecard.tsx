import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, Star, Users, Leaf, ShoppingBag, Award, ArrowRight, ArrowLeft, FileText, Calendar, Mail, Building2, GraduationCap } from "lucide-react";
import jsPDF from 'jspdf';

interface Question {
  id: string;
  text: string;
  options: { text: string; value: string }[];
  chapter?: string;
}

interface UserData {
  name: string;
  school: string;
  students: string;
  email: string;
}

interface UserAnswer {
  question: string;
  answer: string;
}

const SustainabilityScorecard: React.FC = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    school: '',
    students: '',
    email: ''
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [entryError, setEntryError] = useState(false);

  // Check for user data from localStorage on component mount
  React.useEffect(() => {
    const storedUserData = localStorage.getItem('scorecardUserData');
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setShowAssessment(true);
        // Clear the stored data after using it
        localStorage.removeItem('scorecardUserData');
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
  }, []);

  const questions: Question[] = [
    { id: 'q1', text: 'Are your uniforms made using virgin synthetic fibres such as polyester, nylon, etc?', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '4' }, { text: "Don't Know", value: '0' }] },
    { id: 'q2', text: 'Are your uniforms made using conventional cotton?', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '4' }, { text: "Don't Know", value: '0' }] },
    { id: 'q3', text: 'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q4', text: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q5', text: 'Do you buy carbon credits to offset the impact of your uniforms?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q6', text: 'Do you use organic cotton as a primary material?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q7', text: 'Do you use recycled polyester as a primary material?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q8', text: 'Do you use hemp, bamboo, or lyocell as primary materials?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q9', text: 'Are your uniforms packaged in biodegradable or recyclable materials?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q10', text: 'Do you require your suppliers to disclose their environmental impact?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q11', text: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q12', text: 'Do you have a policy in place to ensure fair wages for all workers in the supply chain?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q13', text: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q14', text: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q15', text: 'Does your school collect and resell or giveaway used uniforms?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q16', text: 'Does your uniform program support any social causes?', options: [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q17', text: 'Does your school have a uniform shop?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q18', text: 'Does your supplier have a shop?', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '2' }, { text: "Don't Know", value: '0' }] },
    { id: 'q19', text: 'Do you have online ordering for uniforms?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q20', text: 'Can parents pick up at school?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q21', text: 'Have your uniforms been tested for harmful or banned chemicals?', options: [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q22', text: 'Do your students, parents, and staff have full transparency of your supply chain?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q23', text: 'Do you or your supplier use AI for uniform sizing to reduce returns?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { id: 'q24', text: 'Do you or your supplier use AI to forecast uniform stock needs?', options: [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    
    // Non-scored questions
    { id: 'nonscored1', text: 'Does your school value sustainability?', options: [{ text: 'Very High', value: 'very-high' }, { text: 'High', value: 'high' }, { text: 'Medium', value: 'medium' }, { text: 'Low', value: 'low' }] },
    { id: 'nonscored2', text: 'Would you like to improve the sustainability of your uniforms?', options: [{ text: 'Yes', value: 'yes' }, { text: 'No', value: 'no' }, { text: 'Maybe', value: 'maybe' }] },
    { id: 'nonscored3', text: 'Would you consider switching to sustainable uniforms for next academic year?', options: [{ text: 'Yes', value: 'yes' }, { text: 'No', value: 'no' }, { text: 'Maybe', value: 'maybe' }] },
    
    // Readiness questions
    { id: 'readiness1', text: 'Are you planning to review your uniform policy in the next 12 months?', options: [{ text: 'Yes', value: 'yes' }, { text: 'No', value: 'no' }, { text: 'Maybe', value: 'maybe' }], chapter: 'Readiness to Switch' },
    { id: 'readiness2', text: 'Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?', options: [{ text: 'Strong support', value: 'strong' }, { text: 'Moderate support', value: 'moderate' }, { text: 'Low/No support', value: 'low' }] },
    { id: 'readiness3', text: "What's your timeline for adopting sustainable uniforms?", options: [{ text: 'Within 6 months', value: 'immediate' }, { text: '6-12 months', value: 'short' }, { text: 'Over 12 months', value: 'long' }, { text: 'No plans', value: 'none' }] },
  ];

  const totalQuestions = questions.length;

  const handleStartAssessment = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowAssessment(true);
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    const currentQ = questions[currentSlide];
    const selected = answers[currentQ.id];

    // Require answers for sustainability questions (Q1-Q24), allow optional for others
    if (!selected && currentSlide < 24) {
      alert('Please answer the question to proceed.');
      return;
    }

    if (currentSlide === totalQuestions - 1) {
      // Validate that all required readiness questions are answered
      const readinessQuestions = ['readiness1', 'readiness2', 'readiness3'];
      const missingReadiness = readinessQuestions.some(id => !answers[id]);
      
      if (missingReadiness) {
        alert('Please answer all readiness questions.');
        return;
      }
      
      calculateResults();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    let score = 0;
    let answered = 0;
    const answeredQuestions: UserAnswer[] = [];

    // Calculate score from Q1-Q24 only (sustainability questions)  
    const weights = [4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 1, 2, 0, 2, 2, 4, 2, 2, 2];
    
    for (let i = 1; i <= 24; i++) {
      const questionId = `q${i}`;
      const selected = answers[questionId];
      if (selected) {
        score += parseInt(selected) * weights[i-1];
        answered++;
        const question = questions.find(q => q.id === questionId);
        const option = question?.options.find(opt => opt.value === selected);
        answeredQuestions.push({
          question: question?.text || '',
          answer: option?.text || ''
        });
      }
    }

    if (answered < 24) {
      alert('Please answer all 24 sustainability questions.');
      return;
    }

    // Add non-scored questions
    ['nonscored1', 'nonscored2', 'nonscored3'].forEach(id => {
      const selected = answers[id];
      const question = questions.find(q => q.id === id);
      const option = question?.options.find(opt => opt.value === selected);
      answeredQuestions.push({
        question: question?.text || '',
        answer: option?.text || 'Not Answered'
      });
    });

    // Add readiness questions
    ['readiness1', 'readiness2', 'readiness3'].forEach(id => {
      const selected = answers[id];
      const question = questions.find(q => q.id === id);
      const option = question?.options.find(opt => opt.value === selected);
      answeredQuestions.push({
        question: question?.text || '',
        answer: option?.text || ''
      });
    });

    const percentage = Math.round((score / 48) * 100);
    setScore(percentage);
    setUserAnswers(answeredQuestions);
    setShowResults(true);

    // Send data to Google Sheet
    const formData = {
      name: userData.name,
      email: userData.email,
      answers: answeredQuestions,
      score: percentage
    };

    fetch('https://script.google.com/macros/s/AKfycbxfC609-OnZB_UcV_7Njh8q-UcvJAAtVdiQtpTKtYqDG0sGrIGQVeQldJy7ty6LZtDV/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors'
    }).then(() => {
      console.log('Data sent to Google Sheet');
    }).catch(error => {
      console.error('Error sending data:', error);
    });
  };

  const getRecommendation = (questionNum: number, answer: string): string => {
    if (answer.toLowerCase() === 'no' || answer.toLowerCase() === "don't know") {
      switch (questionNum) {
        case 1: return 'Switch to non-synthetic materials to reduce pollution.';
        case 2: return 'Use organic cotton to lower water and pesticide use.';
        case 3: return 'Conduct an LCA to uncover hidden impacts.';
        case 4: return 'Implement verified carbon offset projects.';
        case 5: return 'Purchase carbon credits for reforestation.';
        case 6: return 'Switch to organic cotton for better sustainability.';
        case 7: return 'Use recycled polyester to reuse waste.';
        case 8: return 'Use hemp, bamboo, or lyocell for low-impact options.';
        case 9: return 'Use biodegradable or recyclable packaging.';
        case 10: return 'Require suppliers to disclose environmental impact.';
        case 11: return 'Audit factories with bodies like Sedex.';
        case 12: return 'Establish fair wage policies.';
        case 13: return 'Implement living wages and good working conditions.';
        case 14: return 'Require certifications for fair wages and safety.';
        case 15: return 'Collect and resell or giveaway used uniforms.';
        case 16: return 'Support social causes with your program.';
        case 17: return 'Set up a school shop to lower emissions.';
        case 18: return 'Minimize standalone shops for better sustainability.';
        case 19: return 'Offer online ordering to reduce visits.';
        case 20: return 'Enable pickup at school to cut shipping.';
        case 21: return 'Test for harmful chemicals to protect health.';
        case 22: return 'Provide full transparency of supply chain.';
        case 23: return 'Use AI for sizing to reduce returns.';
        case 24: return 'Use AI for stock forecasting to avoid waste.';
        default: return 'Book a consultation to discuss improvements.';
      }
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  const generateReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Kapes Uniforms Sustainability Scorecard Report', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${userData.name}`, 10, 20);
    doc.text(`School: ${userData.school}`, 10, 30);
    doc.text(`Number of Students: ${userData.students}`, 10, 40);
    doc.text(`Email: ${userData.email}`, 10, 50);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 60);
    
    doc.setFontSize(14);
    doc.text('Your Sustainability Score', 10, 70);
    doc.setFontSize(12);
    doc.text(`Score: ${score}%`, 10, 80);
    
    doc.setFontSize(14);
    doc.text('Your Answers and Recommendations', 10, 90);
    doc.setFontSize(12);
    
    let y = 100;
    userAnswers.forEach((ans, index) => {
      doc.text(`${index + 1}. Question: ${ans.question}`, 10, y);
      doc.text(`Answer: ${ans.answer}`, 10, y + 5);
      let recommendation = index < 24 ? getRecommendation(index + 1, ans.answer) : 'Book a consultation to discuss your next steps for adopting sustainable uniforms.';
      doc.text(`Recommendation: ${recommendation}`, 10, y + 10);
      y += 20;
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
    });

    doc.text('Next Steps', 10, y);
    y += 10;
    doc.text('Book a free consultation to discuss how Kapes Uniforms can help you improve your uniform program.', 10, y, { maxWidth: 180 });
    doc.text('Visit: /consultation', 10, y + 10);

    doc.save('Sustainability_Scorecard_Report.pdf');
  };

  const getScoreDescription = (score: number): string => {
    if (score < 33) {
      return 'Your low score is likely due to use of conventional materials and lack of ethical audits, leading to higher environmental impact. To improve, switch to organic fabrics and implement transparency measures.';
    } else if (score < 67) {
      return 'Your medium score reflects some positive steps but gaps in offsetting and distribution. Enhance by adding AI tools and takeback programs to reduce waste.';
    } else {
      return 'Your high score shows strong practices in materials and ethics. To maximize, double down on AI trends and full supply chain transparency.';
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12">
        <div className="max-w-2xl w-full mx-auto p-6 bg-card rounded-lg shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-primary">Your Sustainability Score: {score}%</h2>
            <p className="text-muted-foreground">{getScoreDescription(score)}</p>
            
            <div className="space-y-4">
              <Button onClick={generateReport} className="w-full">
                Download Your Personalized Report
              </Button>
              <Button className="w-full" asChild>
                <a href="/consultation">Book Your Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showAssessment) {
    const currentQuestion = questions[currentSlide];
    const chapterTitle = currentQuestion.chapter || '';
    
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto p-6">
          {chapterTitle && (
            <h2 className="text-xl font-semibold text-primary mb-4">{chapterTitle}</h2>
          )}
          
          <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
            <div className="text-center text-sm text-muted-foreground">
              Question {currentSlide + 1} of {totalQuestions}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{currentQuestion.text}</h3>
              
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentSlide === 0}
              >
                Previous
              </Button>
              <Button onClick={handleNext}>
                {currentSlide === totalQuestions - 1 ? 'Submit Scorecard' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-primary">Sustainability Scorecard for School Uniforms</h1>
            <p className="text-muted-foreground">
              Enter your details to access the scorecard. Answer questions one by one to assess your school's uniform sustainability. 
              At the end, get your score, a report, and book a consultation.
            </p>
          </div>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              required
            />
            <Input
              type="text"
              placeholder="School Name"
              value={userData.school}
              onChange={(e) => setUserData({...userData, school: e.target.value})}
              required
            />
            <Input
              type="number"
              placeholder="Number of Students"
              value={userData.students}
              onChange={(e) => setUserData({...userData, students: e.target.value})}
              min="1"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              required
            />
            
            {entryError && (
              <div className="text-destructive text-center">
                Please fill all fields to start.
              </div>
            )}
            
            <Button onClick={handleStartAssessment} className="w-full">
              Start Scorecard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityScorecard;