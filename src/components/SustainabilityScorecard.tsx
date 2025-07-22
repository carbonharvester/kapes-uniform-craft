import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Download, ArrowLeft, Send, Mail, School, User, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';

interface Question {
  id: string;
  text: string;
  type: 'checkbox' | 'radio' | 'select';
  options: string[];
  points?: { [key: string]: number };
  required?: boolean;
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  schoolName: string;
  country: string;
  students: string;
}

const questions: Question[] = [
  {
    id: 'materials',
    text: 'What materials are your current school uniforms made from?',
    type: 'checkbox',
    options: ['Cotton', 'Polyester', 'Cotton/Polyester blend', 'Organic cotton', 'Recycled polyester', 'Other sustainable materials', 'I don\'t know'],
    points: {
      'Cotton': 3,
      'Polyester': 1,
      'Cotton/Polyester blend': 2,
      'Organic cotton': 5,
      'Recycled polyester': 5,
      'Other sustainable materials': 5,
      'I don\'t know': 0
    }
  },
  {
    id: 'certifications',
    text: 'Do your uniforms have any of the following certifications?',
    type: 'checkbox',
    options: ['GOTS (Global Organic Textile Standard)', 'OEKO-TEX Standard 100', 'Cradle to Cradle Certified', 'Fair Trade Certified', 'Bluesign approved', 'None of the above', 'I don\'t know'],
    points: {
      'GOTS (Global Organic Textile Standard)': 5,
      'OEKO-TEX Standard 100': 4,
      'Cradle to Cradle Certified': 5,
      'Fair Trade Certified': 4,
      'Bluesign approved': 4,
      'None of the above': 0,
      'I don\'t know': 0
    }
  },
  {
    id: 'manufacturing',
    text: 'Where are your school uniforms manufactured?',
    type: 'radio',
    options: ['Locally (within our country)', 'Regionally (neighboring countries)', 'Asia (China, India, Bangladesh, etc.)', 'Other international locations', 'I don\'t know'],
    points: {
      'Locally (within our country)': 5,
      'Regionally (neighboring countries)': 4,
      'Asia (China, India, Bangladesh, etc.)': 2,
      'Other international locations': 2,
      'I don\'t know': 0
    }
  },
  {
    id: 'supplier_ethics',
    text: 'Does your uniform supplier provide information about their ethical practices?',
    type: 'radio',
    options: ['Yes, detailed transparency reports', 'Some information is available', 'Limited information', 'No information provided', 'I haven\'t looked into this'],
    points: {
      'Yes, detailed transparency reports': 5,
      'Some information is available': 3,
      'Limited information': 2,
      'No information provided': 0,
      'I haven\'t looked into this': 0
    }
  },
  {
    id: 'durability',
    text: 'How long do your current uniforms typically last before needing replacement?',
    type: 'radio',
    options: ['3+ years', '2-3 years', '1-2 years', 'Less than 1 year', 'Varies significantly'],
    points: {
      '3+ years': 5,
      '2-3 years': 4,
      '1-2 years': 2,
      'Less than 1 year': 0,
      'Varies significantly': 1
    }
  },
  {
    id: 'packaging',
    text: 'What type of packaging do your uniforms come in?',
    type: 'radio',
    options: ['Plastic bags/packaging', 'Recyclable cardboard', 'Biodegradable packaging', 'Minimal/no packaging', 'Mixed packaging types', 'I don\'t know'],
    points: {
      'Plastic bags/packaging': 1,
      'Recyclable cardboard': 3,
      'Biodegradable packaging': 5,
      'Minimal/no packaging': 4,
      'Mixed packaging types': 2,
      'I don\'t know': 0
    }
  },
  {
    id: 'end_of_life',
    text: 'What happens to uniforms when students outgrow them or they wear out?',
    type: 'checkbox',
    options: ['Donated to other families', 'Sold in second-hand uniform shops', 'Recycled through textile programs', 'Thrown away', 'Kept as spare/backup uniforms', 'Returned to supplier for recycling', 'I don\'t know'],
    points: {
      'Donated to other families': 4,
      'Sold in second-hand uniform shops': 4,
      'Recycled through textile programs': 5,
      'Thrown away': 0,
      'Kept as spare/backup uniforms': 2,
      'Returned to supplier for recycling': 5,
      'I don\'t know': 0
    }
  },
  {
    id: 'purchasing_frequency',
    text: 'How often does your school review or change uniform suppliers?',
    type: 'radio',
    options: ['Every year', 'Every 2-3 years', 'Every 4-5 years', 'Rarely (5+ years)', 'Never changed suppliers'],
    points: {
      'Every year': 2,
      'Every 2-3 years': 3,
      'Every 4-5 years': 4,
      'Rarely (5+ years)': 3,
      'Never changed suppliers': 2
    }
  },
  {
    id: 'cost_consideration',
    text: 'How important is cost vs. sustainability when making uniform decisions?',
    type: 'radio',
    options: ['Cost is the primary factor', 'Cost is important, but sustainability matters', 'Both are equally important', 'Sustainability is more important than cost', 'Sustainability is the primary factor'],
    points: {
      'Cost is the primary factor': 1,
      'Cost is important, but sustainability matters': 2,
      'Both are equally important': 3,
      'Sustainability is more important than cost': 4,
      'Sustainability is the primary factor': 5
    }
  },
  {
    id: 'washing_care',
    text: 'What care instructions are provided for your current uniforms?',
    type: 'checkbox',
    options: ['Machine wash cold water', 'Machine wash warm/hot water', 'Dry cleaning required', 'Air dry recommended', 'Tumble dry safe', 'Special care instructions', 'No specific instructions provided'],
    points: {
      'Machine wash cold water': 4,
      'Machine wash warm/hot water': 2,
      'Dry cleaning required': 1,
      'Air dry recommended': 4,
      'Tumble dry safe': 2,
      'Special care instructions': 3,
      'No specific instructions provided': 0
    }
  },
  {
    id: 'parent_feedback',
    text: 'What feedback do you receive from parents about uniform sustainability?',
    type: 'radio',
    options: ['Strong interest in sustainable options', 'Some interest in sustainability', 'Neutral/no specific feedback', 'More concerned about cost than sustainability', 'No feedback received on this topic'],
    points: {
      'Strong interest in sustainable options': 5,
      'Some interest in sustainability': 4,
      'Neutral/no specific feedback': 2,
      'More concerned about cost than sustainability': 1,
      'No feedback received on this topic': 1
    }
  },
  {
    id: 'school_sustainability',
    text: 'Does your school have other sustainability initiatives?',
    type: 'checkbox',
    options: ['Recycling programs', 'Energy conservation measures', 'Sustainable food/catering', 'Environmental education programs', 'Green building features', 'Carbon footprint reduction goals', 'None of the above'],
    points: {
      'Recycling programs': 2,
      'Energy conservation measures': 2,
      'Sustainable food/catering': 2,
      'Environmental education programs': 3,
      'Green building features': 3,
      'Carbon footprint reduction goals': 4,
      'None of the above': 0
    }
  },
  {
    id: 'uniform_sizes',
    text: 'How many different sizes and items does your uniform program include?',
    type: 'select',
    options: ['Basic range (5-10 items)', 'Moderate range (11-20 items)', 'Extensive range (21-30 items)', 'Very extensive (30+ items)'],
    points: {
      'Basic range (5-10 items)': 3,
      'Moderate range (11-20 items)': 4,
      'Extensive range (21-30 items)': 3,
      'Very extensive (30+ items)': 2
    }
  },
  {
    id: 'student_input',
    text: 'Are students involved in uniform-related decisions?',
    type: 'radio',
    options: ['Yes, students have significant input', 'Students provide some feedback', 'Limited student involvement', 'Students are consulted occasionally', 'No student input in uniform decisions'],
    points: {
      'Yes, students have significant input': 4,
      'Students provide some feedback': 3,
      'Limited student involvement': 2,
      'Students are consulted occasionally': 2,
      'No student input in uniform decisions': 1
    }
  },
  {
    id: 'transportation',
    text: 'How are uniforms typically delivered to your school or families?',
    type: 'radio',
    options: ['Bulk delivery to school', 'Individual shipping to families', 'Local pickup options', 'Combination of methods', 'I don\'t know'],
    points: {
      'Bulk delivery to school': 4,
      'Individual shipping to families': 2,
      'Local pickup options': 4,
      'Combination of methods': 3,
      'I don\'t know': 0
    }
  },
  {
    id: 'budget_flexibility',
    text: 'How much flexibility does your school have in uniform budget allocation?',
    type: 'radio',
    options: ['High flexibility - can prioritize sustainability', 'Moderate flexibility - some room for sustainable options', 'Limited flexibility - cost is primary concern', 'Very limited - must choose cheapest options', 'Budget is fixed by external factors'],
    points: {
      'High flexibility - can prioritize sustainability': 5,
      'Moderate flexibility - some room for sustainable options': 4,
      'Limited flexibility - cost is primary concern': 2,
      'Very limited - must choose cheapest options': 1,
      'Budget is fixed by external factors': 1
    }
  },
  {
    id: 'timeline_flexibility',
    text: 'What is your timeline for potentially implementing changes to your uniform program?',
    type: 'radio',
    options: ['Within 6 months', '6-12 months', '1-2 years', '2+ years', 'No plans to change'],
    points: {
      'Within 6 months': 5,
      '6-12 months': 4,
      '1-2 years': 3,
      '2+ years': 2,
      'No plans to change': 1
    }
  },
  {
    id: 'improvement_consideration',
    text: 'Would you consider improving your score by switching to a sustainable solution in the next 12 months?',
    type: 'radio',
    options: ['Definitely yes', 'Probably yes', 'Maybe', 'Probably not', 'Definitely not'],
    points: {
      'Definitely yes': 5,
      'Probably yes': 4,
      'Maybe': 3,
      'Probably not': 2,
      'Definitely not': 1
    },
    required: true
  },
  {
    id: 'important_features',
    text: 'Which features would be most important to you in a sustainable uniform solution?',
    type: 'checkbox',
    options: ['Lower environmental impact', 'Cost savings over time', 'Better durability', 'Ethical manufacturing', 'Student comfort and satisfaction', 'Easy ordering and management', 'Transparency in supply chain'],
    points: {
      'Lower environmental impact': 3,
      'Cost savings over time': 2,
      'Better durability': 2,
      'Ethical manufacturing': 3,
      'Student comfort and satisfaction': 2,
      'Easy ordering and management': 1,
      'Transparency in supply chain': 3
    },
    required: true
  }
];

const SustainabilityScorecard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    country: '',
    students: ''
  });
  const [showUserForm, setShowUserForm] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('scorecardUserData');
    if (storedUserData) {
      const parsed = JSON.parse(storedUserData);
      setUserData(parsed);
      setShowUserForm(false);
    }
  }, []);

  const handleUserDataSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.schoolName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    localStorage.setItem('scorecardUserData', JSON.stringify(userData));
    setShowUserForm(false);
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    const answerArray = Array.isArray(answer) ? answer : [answer];
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerArray
    }));
  };

  const canProceed = () => {
    const question = questions[currentQuestion];
    const hasAnswer = answers[question.id] && answers[question.id].length > 0;
    return hasAnswer;
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateAndShowResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    questions.forEach(question => {
      if (question.points) {
        const userAnswers = answers[question.id] || [];
        const questionScore = userAnswers.reduce((sum, answer) => {
          return sum + (question.points![answer] || 0);
        }, 0);
        
        totalScore += questionScore;
        
        // Calculate max possible score for this question
        const maxQuestionScore = Math.max(...Object.values(question.points));
        maxPossibleScore += maxQuestionScore;
      }
    });

    const percentage = Math.round((totalScore / maxPossibleScore) * 100);
    return { totalScore, maxPossibleScore, percentage };
  };

  const getScoreAnalysis = (percentage: number) => {
    if (percentage >= 80) {
      return {
        grade: 'A',
        title: 'Excellent Sustainability Leader',
        description: 'Your school demonstrates exceptional commitment to sustainable practices in uniform management.',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      };
    } else if (percentage >= 65) {
      return {
        grade: 'B',
        title: 'Good Sustainability Foundation',
        description: 'Your school has solid sustainable practices with room for strategic improvements.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      };
    } else if (percentage >= 45) {
      return {
        grade: 'C',
        title: 'Developing Sustainability Practices',
        description: 'Your school shows awareness of sustainability with significant opportunities for enhancement.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      };
    } else {
      return {
        grade: 'D',
        title: 'Sustainability Opportunities Ahead',
        description: 'Your school has substantial opportunities to implement sustainable uniform practices.',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      };
    }
  };

  const generateRecommendations = (percentage: number) => {
    const recommendations = [];
    
    // Check specific areas for improvement based on answers
    if (!answers.materials?.includes('Organic cotton') && !answers.materials?.includes('Recycled polyester')) {
      recommendations.push('Consider switching to organic cotton or recycled polyester materials for better environmental impact.');
    }
    
    if (!answers.certifications || answers.certifications.includes('None of the above')) {
      recommendations.push('Look for suppliers with certifications like GOTS, OEKO-TEX, or Fair Trade to ensure ethical and sustainable practices.');
    }
    
    if (answers.end_of_life?.includes('Thrown away')) {
      recommendations.push('Implement a uniform take-back or recycling program to reduce textile waste.');
    }
    
    if (answers.packaging?.includes('Plastic bags/packaging')) {
      recommendations.push('Request sustainable packaging options from your supplier to reduce plastic waste.');
    }
    
    if (percentage < 50) {
      recommendations.push('Consider partnering with a specialized sustainable uniform provider to improve your overall sustainability score.');
    }
    
    return recommendations;
  };

  const submitToGoogleSheets = async () => {
    console.log('Starting submission to Google Sheets...');
    console.log('User Data:', userData);
    console.log('Answers:', answers);

    const { totalScore, maxPossibleScore, percentage } = calculateScore();
    const analysis = getScoreAnalysis(percentage);
    
    // Create submission data in Google Sheet column order
    const submissionData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      school: userData.schoolName,
      country: userData.country,
      students: userData.students,
      score: percentage,
      timestamp: new Date().toISOString(),
      // Map questions to Google Sheet column names in order
      materials: answers.materials ? answers.materials.join('; ') : '',
      environmental_impact: answers.certifications ? answers.certifications.join('; ') : '',
      carbon_offset: answers.manufacturing ? answers.manufacturing[0] : '',
      packaging: answers.packaging ? answers.packaging[0] : '',
      supplier_disclosure: answers.supplier_ethics ? answers.supplier_ethics[0] : '',
      ethical_audits: answers.durability ? answers.durability[0] : '',
      living_wages: answers.end_of_life ? answers.end_of_life.join('; ') : '',
      certifications: answers.purchasing_frequency ? answers.purchasing_frequency[0] : '',
      collection_resale: answers.cost_consideration ? answers.cost_consideration[0] : '',
      social_causes: answers.washing_care ? answers.washing_care.join('; ') : '',
      distribution: answers.transportation ? answers.transportation[0] : '',
      chemical_testing: answers.parent_feedback ? answers.parent_feedback[0] : '',
      supply_chain: answers.school_sustainability ? answers.school_sustainability.join('; ') : '',
      education: answers.uniform_sizes ? answers.uniform_sizes[0] : '',
      ai_usage: answers.student_input ? answers.student_input[0] : '',
      sustainability_importance: answers.budget_flexibility ? answers.budget_flexibility[0] : '',
      program_rating: answers.timeline_flexibility ? answers.timeline_flexibility[0] : '',
      willing_to_improve: answers.improvement_consideration ? answers.improvement_consideration[0] : '',
      selected_features: answers.important_features ? answers.important_features.join('; ') : ''
    };

    console.log('Submission data:', submissionData);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwmWAWYdFZZKKCmreTwNuHFd0K0SPUIIB33sWJi8nWqF5yAOsX7L6hRUaagU8vBZ3pMjg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const result = await response.text();
        console.log('Response result:', result);
        
        toast({
          title: "Assessment Submitted Successfully!",
          description: "Your sustainability scorecard has been recorded. We'll be in touch with your personalized recommendations.",
        });
        return true;
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your assessment. Please try again or contact support.",
        variant: "destructive"
      });
      return false;
    }
  };

  const calculateAndShowResults = async () => {
    setIsSubmitting(true);
    
    const success = await submitToGoogleSheets();
    
    if (success) {
      setShowResults(true);
    }
    
    setIsSubmitting(false);
  };

  const generatePDF = () => {
    const { totalScore, maxPossibleScore, percentage } = calculateScore();
    const analysis = getScoreAnalysis(percentage);
    const recommendations = generateRecommendations(percentage);

    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text('School Uniforms Sustainability Scorecard', 20, 30);
    
    // School Info
    doc.setFontSize(12);
    doc.text(`School: ${userData.schoolName}`, 20, 50);
    doc.text(`Contact: ${userData.firstName} ${userData.lastName}`, 20, 60);
    doc.text(`Email: ${userData.email}`, 20, 70);
    
    // Score
    doc.setFontSize(16);
    doc.text(`Overall Score: ${percentage}% (Grade ${analysis.grade})`, 20, 90);
    doc.text(`${totalScore}/${maxPossibleScore} points`, 20, 105);
    
    // Analysis
    doc.setFontSize(14);
    doc.text('Analysis:', 20, 125);
    doc.setFontSize(12);
    doc.text(analysis.title, 20, 140);
    
    const splitDescription = doc.splitTextToSize(analysis.description, 170);
    doc.text(splitDescription, 20, 155);
    
    // Recommendations
    doc.setFontSize(14);
    doc.text('Recommendations:', 20, 180);
    doc.setFontSize(12);
    
    let yPosition = 195;
    recommendations.forEach((rec, index) => {
      const splitRec = doc.splitTextToSize(`${index + 1}. ${rec}`, 170);
      doc.text(splitRec, 20, yPosition);
      yPosition += splitRec.length * 7 + 5;
    });
    
    doc.save(`${userData.schoolName}_Sustainability_Scorecard.pdf`);
  };

  if (showUserForm) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-background to-muted border-0 shadow-xl">
        <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
          <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
            School Uniforms Sustainability Scorecard
          </CardTitle>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Please provide your information to begin the assessment and receive your personalized sustainability report.
          </p>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <form onSubmit={handleUserDataSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2 text-sm md:text-base">
                  <User className="w-4 h-4" />
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={userData.firstName}
                  onChange={(e) => setUserData(prev => ({...prev, firstName: e.target.value}))}
                  placeholder="Your first name"
                  required
                  className="text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="flex items-center gap-2 text-sm md:text-base">
                  <User className="w-4 h-4" />
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  value={userData.lastName}
                  onChange={(e) => setUserData(prev => ({...prev, lastName: e.target.value}))}
                  placeholder="Your last name"
                  required
                  className="text-sm md:text-base"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData(prev => ({...prev, email: e.target.value}))}
                placeholder="your.email@school.edu"
                required
                className="text-sm md:text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="schoolName" className="flex items-center gap-2 text-sm md:text-base">
                <School className="w-4 h-4" />
                School Name *
              </Label>
              <Input
                id="schoolName"
                value={userData.schoolName}
                onChange={(e) => setUserData(prev => ({...prev, schoolName: e.target.value}))}
                placeholder="Enter your school name"
                required
                className="text-sm md:text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country" className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="w-4 h-4" />
                Country *
              </Label>
              <Input
                id="country"
                value={userData.country}
                onChange={(e) => setUserData(prev => ({...prev, country: e.target.value}))}
                placeholder="Your country"
                required
                className="text-sm md:text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="students" className="flex items-center gap-2 text-sm md:text-base">
                <School className="w-4 h-4" />
                Number of Students
              </Label>
              <Input
                id="students"
                type="number"
                value={userData.students}
                onChange={(e) => setUserData(prev => ({...prev, students: e.target.value}))}
                placeholder="Enter number of students"
                className="text-sm md:text-base"
              />
            </div>
            
            <Button type="submit" className="w-full py-3 md:py-4 text-base md:text-lg font-semibold">
              Start Assessment
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const { totalScore, maxPossibleScore, percentage } = calculateScore();
    const analysis = getScoreAnalysis(percentage);
    const recommendations = generateRecommendations(percentage);

    return (
      <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-background to-muted border-0 shadow-xl">
        <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${analysis.bgColor} mb-4 mx-auto`}>
            <span className={`text-2xl md:text-3xl font-bold ${analysis.color}`}>{analysis.grade}</span>
          </div>
          <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
            Your Sustainability Score: {percentage}%
          </CardTitle>
          <p className="text-lg md:text-xl font-semibold text-muted-foreground mb-2">
            {analysis.title}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {analysis.description}
          </p>
        </CardHeader>
        
        <CardContent className="px-4 md:px-6 space-y-6 md:space-y-8">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
              {totalScore}/{maxPossibleScore}
            </div>
            <p className="text-muted-foreground text-sm md:text-base">Total Points Achieved</p>
          </div>
          
          <Progress value={percentage} className="w-full h-3 md:h-4" />
          
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-heading">
              Personalized Recommendations
            </h3>
            <div className="space-y-3 md:space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-muted-foreground">{rec}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-6 md:pt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-heading mb-4 md:mb-6">
              Next Steps
            </h3>
            <div className="grid gap-4 md:gap-6">
              <div className="text-center">
                <Button 
                  onClick={generatePDF}
                  className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold mb-4"
                >
                  <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Download Your Report
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Get a comprehensive PDF report with your score, analysis, and personalized recommendations to share with your leadership team.
                </p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-base md:text-lg mb-2">Want to improve your score?</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Schedule a free consultation with our sustainability experts to learn how Kapes can help transform your uniform program.
                </p>
                <Button 
                  onClick={() => window.open('https://calendly.com/hello-kapes/kapes-discovery-call', '_blank')}
                  variant="outline" 
                  className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3"
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-background to-muted border-0 shadow-xl">
      <CardHeader className="pb-6 md:pb-8 px-4 md:px-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="text-sm md:text-base font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {currentQuestion > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={previousQuestion}
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm"
            >
              <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
              Back
            </Button>
          )}
        </div>
        
        <Progress value={progress} className="w-full h-2 md:h-3 mb-4 md:mb-6" />
        
        <CardTitle className="text-lg md:text-2xl font-semibold text-heading leading-tight">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-4 md:px-6 pb-6 md:pb-8">
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {question.type === 'checkbox' && (
            <div className="space-y-2 md:space-y-3">
              {question.options.map((option) => (
                <div key={option} className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-background/50 transition-colors">
                  <Checkbox
                    id={`${question.id}-${option}`}
                    checked={answers[question.id]?.includes(option) || false}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleAnswer(question.id, [...(answers[question.id] || []), option]);
                      } else {
                        handleAnswer(question.id, (answers[question.id] || []).filter(a => a !== option));
                      }
                    }}
                    className="mt-0.5"
                  />
                  <Label 
                    htmlFor={`${question.id}-${option}`} 
                    className="text-sm md:text-base leading-relaxed cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          )}
          
          {question.type === 'radio' && (
            <RadioGroup
              value={answers[question.id]?.[0] || ''}
              onValueChange={(value) => handleAnswer(question.id, [value])}
              className="space-y-2 md:space-y-3"
            >
              {question.options.map((option) => (
                <div key={option} className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-background/50 transition-colors">
                  <RadioGroupItem value={option} id={`${question.id}-${option}`} className="mt-0.5" />
                  <Label 
                    htmlFor={`${question.id}-${option}`} 
                    className="text-sm md:text-base leading-relaxed cursor-pointer flex-1"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
          
          {question.type === 'select' && (
            <Select
              value={answers[question.id]?.[0] || ''}
              onValueChange={(value) => handleAnswer(question.id, [value])}
            >
              <SelectTrigger className="w-full text-sm md:text-base">
                <SelectValue placeholder="Select an option..." />
              </SelectTrigger>
              <SelectContent>
                {question.options.map((option) => (
                  <SelectItem key={option} value={option} className="text-sm md:text-base">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        
        <div className="flex justify-end">
          <Button
            onClick={nextQuestion}
            disabled={!canProceed() || isSubmitting}
            className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold"
          >
            {isSubmitting ? (
              <>
                <Send className="mr-2 w-4 h-4 animate-spin" />
                Calculating...
              </>
            ) : currentQuestion === questions.length - 1 ? (
              <>
                Calculate Score
                <Send className="ml-2 w-4 h-4" />
              </>
            ) : (
              'Next Question'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityScorecard;
