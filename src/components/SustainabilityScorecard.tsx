import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import jsPDF from 'jspdf';

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

const SustainabilityScorecard = () => {
  const [currentStep, setCurrentStep] = useState<'entry' | 'quiz' | 'results'>('entry');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    school: '',
    students: '',
    email: ''
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [entryError, setEntryError] = useState(false);

  const questions = [
    // The Wake-Up Call
    {
      id: 'q1',
      section: 'The Wake-Up Call: Hidden Costs of Traditional Uniforms',
      question: 'Are your uniforms made using virgin synthetic fibres such as polyester, nylon, etc?',
      description: 'This can increase pollution as they don\'t break down.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '4', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q2',
      section: 'The Wake-Up Call: Hidden Costs of Traditional Uniforms',
      question: 'Are your uniforms made using conventional cotton?',
      description: 'This type uses pesticides and high water.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '4', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q3',
      section: 'The Wake-Up Call: Hidden Costs of Traditional Uniforms',
      question: 'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.',
      description: 'This measures the full footprint.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // The Win-Win-Win Model
    {
      id: 'q4',
      section: 'The Win-Win-Win Model: Environment, Education, Economics',
      question: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?',
      description: 'This balances emissions with positive actions.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q5',
      section: 'The Win-Win-Win Model: Environment, Education, Economics',
      question: 'Do you offset the impact of your uniforms by purchasing carbon credits in deforestation or reforestation projects?',
      description: 'This supports tree planting to offset emissions.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Score Your Program
    {
      id: 'q6',
      section: 'Score Your Program: Sustainability Audit Checklist',
      question: 'Have you evaluated the environmental impact of the materials that you use and taken steps to minimise it?',
      description: 'This helps identify and reduce harm.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Fabrics That Don't Suck
    {
      id: 'q7',
      section: 'Fabrics That Don\'t Suck: Sustainable Material Choices',
      question: 'Do you use organic cotton as a primary material?',
      description: 'Organic cotton reduces pesticide use.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q8',
      section: 'Fabrics That Don\'t Suck: Sustainable Material Choices',
      question: 'Do you use recycled polyester as a primary material?',
      description: 'This reuses waste to lower impact.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q9',
      section: 'Fabrics That Don\'t Suck: Sustainable Material Choices',
      question: 'Do you use hemp, bamboo, or lyocell as primary materials?',
      description: 'These are low-impact natural fibers.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q10',
      section: 'Fabrics That Don\'t Suck: Sustainable Material Choices',
      question: 'Are your uniforms packaged in biodegradable or recyclable materials?',
      description: 'This avoids long-lasting plastic waste.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Building a Clean Supply Chain
    {
      id: 'q11',
      section: 'Building a Clean Supply Chain: Sourcing, Ethics, Certifications',
      question: 'Do you require your suppliers to disclose their environmental impact?',
      description: 'This promotes accountability in sourcing.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q12',
      section: 'Building a Clean Supply Chain: Sourcing, Ethics, Certifications',
      question: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?',
      description: 'Audits verify fair practices.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q13',
      section: 'Building a Clean Supply Chain: Sourcing, Ethics, Certifications',
      question: 'Do you have a policy in place to ensure fair wages for all workers in the supply chain?',
      description: 'This supports ethical labor.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q14',
      section: 'Building a Clean Supply Chain: Sourcing, Ethics, Certifications',
      question: 'Do you have a policy in place to ensure safe working conditions for all workers in the supply chain?',
      description: 'This protects workers from harm.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q15',
      section: 'Building a Clean Supply Chain: Sourcing, Ethics, Certifications',
      question: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?',
      description: 'Certifications confirm standards.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Takeback, Reuse, and CSR
    {
      id: 'q16',
      section: 'Takeback, Reuse, and CSR That Works',
      question: 'Does your school collect and resell or giveaway used uniforms?',
      description: 'This extends uniform life.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Uniforms as Access Tools
    {
      id: 'q17',
      section: 'Uniforms as Access Tools: Supporting Social Causes',
      question: 'Does your uniform program support any social causes?',
      description: 'This could include donations or free uniforms for needy students.',
      options: [
        { value: '1', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Rollout Without Chaos
    {
      id: 'q18',
      section: 'Rollout Without Chaos: Budgeting and Distribution',
      question: 'Does your school have a uniform shop?',
      description: 'This can reduce transport emissions.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q19',
      section: 'Rollout Without Chaos: Budgeting and Distribution',
      question: 'Does your supplier have a shop?',
      description: 'Standalone shops may increase transport emissions.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '2', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q20',
      section: 'Rollout Without Chaos: Budgeting and Distribution',
      question: 'Do you have online ordering for uniforms?',
      description: 'This can reduce store visits but increase shipping.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q21',
      section: 'Rollout Without Chaos: Budgeting and Distribution',
      question: 'Can parents pick up at school?',
      description: 'This minimizes shipping emissions.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Pitfalls + Power Moves
    {
      id: 'q22',
      section: 'Pitfalls + Power Moves: Avoiding Harmful Practices',
      question: 'Have your uniforms been tested for harmful or banned chemicals?',
      description: 'This protects students and the environment.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Tracking Impact
    {
      id: 'q23',
      section: 'Tracking Impact: Transparency and Metrics',
      question: 'Do your students, parents, and staff have full transparency of your supply chain?',
      description: 'This ensures accountability for sustainability.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // The Future of Uniforms
    {
      id: 'q24',
      section: 'The Future of Uniforms: Trends in Technology',
      question: 'Do you or your supplier use AI for uniform sizing to reduce returns?',
      description: 'This reduces waste from returns.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    {
      id: 'q25',
      section: 'The Future of Uniforms: Trends in Technology',
      question: 'Do you or your supplier use AI to forecast uniform stock needs?',
      description: 'This prevents overproduction and waste.',
      options: [
        { value: '2', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' }
      ]
    },
    // Non-Scored Questions
    {
      id: 'nonscored1',
      section: 'Additional Questions (Not Scored)',
      question: 'Does your school value sustainability?',
      description: '',
      options: [
        { value: 'very-high', label: 'Very High' },
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' }
      ]
    },
    {
      id: 'nonscored2',
      section: 'Additional Questions (Not Scored)',
      question: 'Would you like to improve the sustainability of your uniforms?',
      description: '',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'maybe', label: 'Maybe' }
      ]
    },
    {
      id: 'nonscored3',
      section: 'Additional Questions (Not Scored)',
      question: 'Would you consider switching to sustainable uniforms for next academic year?',
      description: '',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'maybe', label: 'Maybe' }
      ]
    },
    // Readiness Questions
    {
      id: 'readiness1',
      section: 'Readiness to Switch',
      question: 'Are you planning to review your uniform policy in the next 12 months?',
      description: '',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'maybe', label: 'Maybe' }
      ]
    },
    {
      id: 'readiness2',
      section: 'Readiness to Switch',
      question: 'Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?',
      description: '',
      options: [
        { value: 'strong', label: 'Strong support' },
        { value: 'moderate', label: 'Moderate support' },
        { value: 'low', label: 'Low/No support' }
      ]
    },
    {
      id: 'readiness3',
      section: 'Readiness to Switch',
      question: 'What\'s your timeline for adopting sustainable uniforms?',
      description: '',
      options: [
        { value: 'immediate', label: 'Within 6 months' },
        { value: 'short', label: '6-12 months' },
        { value: 'long', label: 'Over 12 months' },
        { value: 'none', label: 'No plans' }
      ]
    }
  ];

  const handleStartQuiz = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setCurrentStep('quiz');
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    const currentQuestion = questions[currentSlide];
    const selected = answers[currentQuestion.id];
    
    if (!selected && currentSlide < questions.length - 3) { // Allow non-scored and readiness to be optional if needed
      alert('Please answer the question to proceed.');
      return;
    }

    if (currentSlide === questions.length - 1) {
      processResults();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentSlide(prev => prev - 1);
  };

  const processResults = () => {
    // Calculate score from Q1-Q25 (weighted scoring, max 54 points)
    let totalScore = 0;
    let answered = 0;
    const newUserAnswers: UserAnswer[] = [];
    const weights = [4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 1, 2, 2, 2, 2, 4, 2, 2, 2]; // 25 weighted values

    for (let i = 1; i <= 25; i++) {
      const questionId = `q${i}`;
      const answer = answers[questionId];
      if (answer) {
        totalScore += parseInt(answer);
        answered++;
        const question = questions.find(q => q.id === questionId);
        if (question) {
          const selectedOption = question.options.find(opt => opt.value === answer);
          newUserAnswers.push({
            question: question.question,
            answer: selectedOption?.label || ''
          });
        }
      }
    }

    if (answered < 25) {
      alert('Please answer all sustainability questions.');
      return;
    }

    // Add non-scored questions
    const nonScored1 = answers.nonscored1;
    const nonScored2 = answers.nonscored2;
    const nonScored3 = answers.nonscored3;

    newUserAnswers.push(
      { question: "Does your school value sustainability?", answer: nonScored1 || 'Not Answered' },
      { question: "Would you like to improve the sustainability of your uniforms?", answer: nonScored2 || 'Not Answered' },
      { question: "Would you consider switching to sustainable uniforms for next academic year?", answer: nonScored3 || 'Not Answered' }
    );

    // Add readiness questions
    const readiness1 = answers.readiness1;
    const readiness2 = answers.readiness2;
    const readiness3 = answers.readiness3;

    if (!readiness1 || !readiness2 || !readiness3) {
      alert('Please answer all readiness questions.');
      return;
    }

    newUserAnswers.push(
      { question: "Are you planning to review your uniform policy in the next 12 months?", answer: readiness1 },
      { question: "Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?", answer: readiness2 },
      { question: "What's your timeline for adopting sustainable uniforms?", answer: readiness3 }
    );

    const percentage = Math.round((totalScore / 54) * 100); // Max score = 54
    setScore(percentage);
    setUserAnswers(newUserAnswers);
    setCurrentStep('results');
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
      const recommendation = index < 25 ? getRecommendation(index + 1, ans.answer) : 'Book a consultation to discuss your next steps for adopting sustainable uniforms.';
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

  const getRecommendation = (questionNum: number, answer: string): string => {
    if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'don\'t know') {
      switch (questionNum) {
        case 1: return 'Switch to non-synthetic materials to reduce pollution.';
        case 2: return 'Use organic cotton to lower water and pesticide use.';
        case 3: return 'Conduct an LCA to uncover hidden impacts.';
        case 4: return 'Implement verified carbon offset projects.';
        case 5: return 'Purchase carbon credits for reforestation.';
        case 6: return 'Evaluate and minimize material impacts.';
        case 7: return 'Switch to organic cotton for better sustainability.';
        case 8: return 'Use recycled polyester to reuse waste.';
        case 9: return 'Explore hemp or bamboo for low-impact alternatives.';
        case 10: return 'Use biodegradable or recyclable packaging.';
        case 11: return 'Require suppliers to disclose environmental impact.';
        case 12: return 'Audit factories with bodies like Sedex.';
        case 13: return 'Establish fair wage policies.';
        case 14: return 'Implement safe working condition policies.';
        case 15: return 'Require certifications for fair wages and safety.';
        case 16: return 'Collect and resell or giveaway used uniforms.';
        case 17: return 'Support social causes with your program.';
        case 18: return 'Set up a school shop to lower emissions.';
        case 19: return 'Minimize standalone shops for better sustainability.';
        case 20: return 'Offer online ordering to reduce visits.';
        case 21: return 'Enable pickup at school to cut shipping.';
        case 22: return 'Test for harmful chemicals to protect health.';
        case 23: return 'Provide full transparency of supply chain.';
        case 24: return 'Use AI for sizing to reduce returns.';
        case 25: return 'Use AI for stock forecasting to avoid waste.';
        default: return 'Book a consultation to discuss improvements.';
      }
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  if (currentStep === 'entry') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">
              Sustainability Scorecard for School Uniforms
            </CardTitle>
            <CardDescription className="text-lg">
              Answer 28 simple questions one at a time to see how sustainable your school's uniforms are. 
              We'll reveal hidden environmental and ethical issues with your current program and suggest improvements. 
              At the end, download a personalized report and book a free consultation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {entryError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please fill all fields to start.
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="school">School Name</Label>
                <Input
                  id="school"
                  value={userData.school}
                  onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
                  placeholder="School Name"
                />
              </div>
              <div>
                <Label htmlFor="students">Number of Students</Label>
                <Input
                  id="students"
                  type="number"
                  value={userData.students}
                  onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
                  placeholder="Number of Students"
                />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Your Email"
                />
              </div>
              <Button onClick={handleStartQuiz} className="w-full">
                Start Scorecard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'quiz') {
    const currentQuestion = questions[currentSlide];
    const progress = ((currentSlide + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8">
                Sustainability Scorecard for School Uniforms
              </h1>
              <p className="text-sm text-muted-foreground">
                Question {currentSlide + 1} of {questions.length}
              </p>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <Card className="w-full">
            <CardHeader>
              <h2 className="text-xl font-semibold text-primary mb-4">
                {currentQuestion.section}
              </h2>
              <CardTitle className="text-base font-medium">
                {currentQuestion.question}
              </CardTitle>
              {currentQuestion.description && (
                <CardDescription>
                  {currentQuestion.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                    <Label htmlFor={`${currentQuestion.id}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-4">
                <Button 
                  onClick={handlePrev} 
                  variant="outline" 
                  disabled={currentSlide === 0}
                  className="w-24"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={handleNext} className="w-24">
                  {currentSlide === questions.length - 1 ? 'Submit' : 'Next'}
                  {currentSlide !== questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Your Sustainability Score: {score}%
          </CardTitle>
          <CardDescription className="text-lg">
            Book a free consultation to discuss how you can improve your uniform program.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={generateReport} className="w-full" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Your Personalized Report
          </Button>
          <Button asChild className="w-full">
            <a href="/consultation">Book Your Free Consultation</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SustainabilityScorecard;