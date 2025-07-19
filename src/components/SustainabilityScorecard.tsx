import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Download, FileCheck } from 'lucide-react';
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
  const [userData, setUserData] = useState<UserData>({
    name: '',
    school: '',
    students: '',
    email: '',
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [scoreDescription, setScoreDescription] = useState('');
  const [readinessSummary, setReadinessSummary] = useState('');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [entryError, setEntryError] = useState(false);

  const questions = [
    {
      id: 'q1',
      section: 'Materials',
      question: 'Do your uniforms use virgin synthetic fibers (e.g., new polyester or nylon)?',
      description: 'These are plastic-based materials that don\'t break down naturally.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '4', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q2',
      section: 'Materials',
      question: 'Do your uniforms use conventional cotton?',
      description: 'Conventional cotton is grown with pesticides and uses a lot of water, unlike organic cotton.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '4', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q3',
      section: 'Materials',
      question: 'Do your uniforms use organic cotton?',
      description: 'Organic cotton is grown without harmful chemicals and uses less water.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q4',
      section: 'Materials',
      question: 'Do your uniforms use recycled polyester?',
      description: 'Recycled polyester is made from plastic waste, like bottles, reducing environmental impact.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q5',
      section: 'Materials',
      question: 'Do your uniforms use hemp, bamboo, or lyocell?',
      description: 'These are eco-friendly, plant-based fibers with low environmental impact.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q6',
      section: 'Manufacturing & Ethics',
      question: 'Have you measured the environmental impact of your uniforms?',
      description: 'This includes water, energy, and CO2 used in production and transport.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q7',
      section: 'Manufacturing & Ethics',
      question: 'Do you ask your uniform supplier to share their environmental impact?',
      description: 'For example, reports on emissions, water use, or waste.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q8',
      section: 'Manufacturing & Ethics',
      question: 'Are your uniform factories audited for ethical practices?',
      description: 'Audits (e.g., by Sedex) check for fair wages and no child labor.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q9',
      section: 'Manufacturing & Ethics',
      question: 'Do you have a policy to ensure fair wages for factory workers?',
      description: 'Fair wages cover basic needs like food and housing.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q10',
      section: 'Manufacturing & Ethics',
      question: 'Do you have a policy for safe working conditions in factories?',
      description: 'This ensures workers are in safe, healthy environments.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q11',
      section: 'Manufacturing & Ethics',
      question: 'Do you ensure workers earn a living wage?',
      description: 'A living wage allows workers to afford a decent standard of living.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q12',
      section: 'Manufacturing & Ethics',
      question: 'Do you require certifications for fair wages and safe conditions?',
      description: 'Certifications (e.g., Fair Trade) verify ethical standards.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q13',
      section: 'End-of-Life & Education',
      question: 'Does your school collect and resell or give away used uniforms?',
      description: 'This reduces waste by reusing uniforms.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q14',
      section: 'End-of-Life & Education',
      question: 'Do you offset uniform environmental impact with carbon credits?',
      description: 'Carbon credits (e.g., for tree planting) balance out emissions.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
    {
      id: 'q15',
      section: 'End-of-Life & Education',
      question: 'Do you offer educational resources on reusing/repairing uniforms?',
      description: 'Workshops or guides teach sustainability to students and parents.',
      options: [
        { value: '4', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: 'Don\'t Know' },
      ],
    },
  ];

  const readinessQuestions = [
    {
      id: 'readiness1',
      question: 'Are you planning to review your uniform policy in the next 12 months?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'maybe', label: 'Maybe' },
      ],
    },
    {
      id: 'readiness2',
      question: 'Have you budgeted for sustainable uniform upgrades in the next year?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'considering', label: 'Considering' },
      ],
    },
    {
      id: 'readiness3',
      question: 'Is there support from leadership/parents for sustainable uniforms?',
      options: [
        { value: 'strong', label: 'Strong support' },
        { value: 'moderate', label: 'Moderate support' },
        { value: 'low', label: 'Low/No support' },
      ],
    },
    {
      id: 'readiness4',
      question: 'What\'s your timeline for adopting sustainable uniforms?',
      options: [
        { value: 'immediate', label: 'Within 6 months' },
        { value: 'short', label: '6-12 months' },
        { value: 'long', label: 'Over 12 months' },
        { value: 'none', label: 'No plans' },
      ],
    },
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
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmitQuiz = () => {
    // Check if all sustainability questions are answered
    const sustainabilityAnswered = questions.every(q => answers[q.id]);
    const readinessAnswered = readinessQuestions.every(q => answers[q.id]);
    
    if (!sustainabilityAnswered || !readinessAnswered) {
      alert('Please answer all questions.');
      return;
    }

    // Calculate score
    let totalScore = 0;
    const answersList: UserAnswer[] = [];

    questions.forEach(q => {
      const answer = answers[q.id];
      const option = q.options.find(opt => opt.value === answer);
      if (option) {
        totalScore += parseInt(answer);
        answersList.push({
          question: q.question,
          answer: option.label,
        });
      }
    });

    setScore(totalScore);
    setUserAnswers(answersList);

    // Score description
    let description = '';
    if (totalScore < 20) {
      description = 'Your uniforms need significant sustainability improvements. Start with eco-friendly materials like organic cotton.';
    } else if (totalScore < 40) {
      description = 'Moderate sustainability—focus on ethics, transparency, and end-of-life practices to improve.';
    } else {
      description = 'Excellent! Your uniforms are highly sustainable; enhance with transparency and education initiatives.';
    }
    setScoreDescription(description);

    // Calculate readiness
    let readinessScore = 0;
    const readiness1 = answers.readiness1;
    const readiness2 = answers.readiness2;
    const readiness3 = answers.readiness3;
    const readiness4 = answers.readiness4;

    if (readiness1 === 'yes') readinessScore += 2;
    else if (readiness1 === 'maybe') readinessScore += 1;
    if (readiness2 === 'yes') readinessScore += 2;
    else if (readiness2 === 'considering') readinessScore += 1;
    if (readiness3 === 'strong') readinessScore += 2;
    else if (readiness3 === 'moderate') readinessScore += 1;
    if (readiness4 === 'immediate' || readiness4 === 'short') readinessScore += 2;
    else if (readiness4 === 'long') readinessScore += 1;

    let readiness = '';
    if (readinessScore >= 6) {
      readiness = 'High readiness—your school is poised to switch within 12 months.';
    } else if (readinessScore >= 3) {
      readiness = 'Moderate readiness—build support and budget for a switch.';
    } else {
      readiness = 'Low readiness—use our resources to prepare for a switch.';
    }
    setReadinessSummary(readiness);

    setCurrentStep('results');
  };

  const getRecommendation = (questionNum: number, answer: string): string => {
    if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'don\'t know') {
      const recommendations = [
        'Switch to recycled synthetics to reduce plastic waste.',
        'Opt for organic cotton to minimize pesticide use.',
        'Incorporate organic cotton for lower environmental impact.',
        'Use recycled polyester to repurpose plastic waste.',
        'Explore hemp or bamboo for low-water alternatives.',
        'Conduct an LCA to understand and reduce impacts.',
        'Require suppliers to report impacts for better transparency.',
        'Seek audited factories (e.g., Sedex) for ethics assurance.',
        'Implement a fair wage policy to support workers.',
        'Enforce safe conditions to protect factory workers.',
        'Ensure living wages for ethical supply chains.',
        'Demand 3rd-party certifications for verification.',
        'Start a resale program to extend uniform life.',
        'Invest in carbon credits for emission offsetting.',
        'Offer workshops on sustainability to educate stakeholders.',
      ];
      return recommendations[questionNum - 1] || 'General improvement: Focus on sustainable materials and ethics.';
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  const generateReport = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(16);
    doc.text('Kapes Uniforms Sustainability Scorecard Report', 10, 20);
    
    // User info
    doc.setFontSize(12);
    doc.text(`Name: ${userData.name}`, 10, 35);
    doc.text(`School: ${userData.school}`, 10, 45);
    doc.text(`Number of Students: ${userData.students}`, 10, 55);
    doc.text(`Email: ${userData.email}`, 10, 65);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 75);
    
    // Score section
    doc.setFontSize(14);
    doc.text('Your Sustainability Score', 10, 90);
    doc.setFontSize(12);
    doc.text(`Score: ${score}/60`, 10, 100);
    doc.text(scoreDescription, 10, 110, { maxWidth: 180 });
    
    // Readiness section
    doc.text('Readiness Assessment', 10, 130);
    doc.text(readinessSummary, 10, 140, { maxWidth: 180 });
    
    // Recommendations section
    doc.text('Detailed Recommendations', 10, 160);
    let y = 170;
    
    userAnswers.forEach((ans, index) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      
      const recommendation = getRecommendation(index + 1, ans.answer);
      doc.text(`${index + 1}. ${ans.question}`, 10, y);
      doc.text(`Answer: ${ans.answer}`, 10, y + 10);
      doc.text(`Recommendation: ${recommendation}`, 10, y + 20, { maxWidth: 180 });
      y += 35;
    });
    
    // Next steps
    if (y > 220) {
      doc.addPage();
      y = 20;
    }
    
    doc.text('Next Steps:', 10, y);
    doc.text('Book a free consultation to discuss how Kapes Uniforms can help you transition to sustainable uniforms.', 10, y + 10, { maxWidth: 180 });
    doc.text('Visit: /contact', 10, y + 25);
    
    doc.save('Sustainability_Scorecard_Report.pdf');
  };

  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = questions.length + readinessQuestions.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const currentSection = questions.reduce((acc, q, index) => {
    if (q.section !== acc[acc.length - 1]) {
      acc.push(q.section);
    }
    return acc;
  }, [] as string[]);

  if (currentStep === 'entry') {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-bold text-heading mb-4">
            Sustainability Scorecard for School Uniforms
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Answer 19 simple questions to see how sustainable your school's uniforms are. We'll explain terms to make it easy, even if you're new to sustainability. At the end, check your readiness to switch to eco-friendly uniforms and download a personalized report with recommendations.
          </p>
          
          <div className="space-y-4 text-left">
            <Input
              type="text"
              placeholder="Your Name"
              value={userData.name}
              onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <Input
              type="text"
              placeholder="School Name"
              value={userData.school}
              onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
              required
            />
            <Input
              type="number"
              placeholder="Number of Students"
              value={userData.students}
              onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
              min="1"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
            
            {entryError && (
              <div className="text-destructive text-center">
                Please fill all fields to start.
              </div>
            )}
            
            <Button onClick={handleStartQuiz} className="w-full" size="lg">
              Start Scorecard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (currentStep === 'quiz') {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <Card className="p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Progress: {answeredQuestions} of {totalQuestions} questions
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% complete
              </span>
            </div>
            <Progress value={progress} className="mb-4" />
          </div>

          <div className="space-y-8">
            {currentSection.map(section => (
              <div key={section}>
                <h2 className="text-2xl font-bold text-heading mb-6">{section}</h2>
                
                {questions
                  .filter(q => q.section === section)
                  .map((question, index) => (
                    <div key={question.id} className="space-y-4 mb-8 p-4 border rounded-lg bg-muted/20">
                      <div>
                        <Label className="text-base font-semibold leading-relaxed">
                          {questions.findIndex(q => q.id === question.id) + 1}. {question.question}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-2">
                          {question.description}
                        </p>
                      </div>
                      
                      <RadioGroup
                        value={answers[question.id] || ''}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                      >
                        {question.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                            <Label htmlFor={`${question.id}-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-heading mb-6">Readiness to Switch</h2>
              
              {readinessQuestions.map((question, index) => (
                <div key={question.id} className="space-y-4 mb-8 p-4 border rounded-lg bg-muted/20">
                  <Label className="text-base font-semibold leading-relaxed">
                    {16 + index}. {question.question}
                  </Label>
                  
                  <RadioGroup
                    value={answers[question.id] || ''}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                  >
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                        <Label htmlFor={`${question.id}-${option.value}`} className="cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>

            <Button onClick={handleSubmitQuiz} className="w-full" size="lg">
              Submit Scorecard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-bold text-heading mb-4">
            Your Sustainability Score: {score}/60
          </h2>
          
          <div className="mb-6 p-4 bg-muted/20 rounded-lg">
            <p className="text-muted-foreground mb-4">{scoreDescription}</p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Your readiness to switch:</span> {readinessSummary}
            </p>
          </div>

          <div className="space-y-4">
            <Button onClick={generateReport} className="w-full" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Your Personalized Report
            </Button>
            
            <Button variant="outline" className="w-full" size="lg" asChild>
              <a href="/contact">
                <FileCheck className="mr-2 h-4 w-4" />
                Book Your Free Consultation
              </a>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return null;
};

export default SustainabilityScorecard;