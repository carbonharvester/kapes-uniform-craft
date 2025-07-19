import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, MessageCircle, BarChart3, Leaf, Shield, Award } from 'lucide-react';
import jsPDF from 'jspdf';

interface Question {
  id: string;
  label: string;
  options: { value: string; label: string; score: number }[];
  section?: string;
  description?: string;
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
  const [userData, setUserData] = useState<UserData>({ name: '', school: '', students: '', email: '' });
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
    { id: 'q1', label: 'Are your uniforms made using virgin synthetic fibres such as polyester, nylon, etc?', options: [{ value: 'yes', label: 'Yes', score: 0 }, { value: 'no', label: 'No', score: 4 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q2', label: 'Are your uniforms made using conventional cotton?', options: [{ value: 'yes', label: 'Yes', score: 0 }, { value: 'no', label: 'No', score: 4 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q3', label: 'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q4', label: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q5', label: 'Do you buy carbon credits to offset the impact of your uniforms?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q6', label: 'Do you use organic cotton as a primary material?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q7', label: 'Do you use recycled polyester as a primary material?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q8', label: 'Do you use hemp, bamboo, or lyocell as primary materials?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q9', label: 'Are your uniforms packaged in biodegradable or recyclable materials?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q10', label: 'Do you require your suppliers to disclose their environmental impact?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q11', label: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q12', label: 'Do you have a policy in place to ensure fair wages for all workers in the supply chain?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q13', label: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q14', label: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q15', label: 'Does your school collect and resell or giveaway used uniforms?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q16', label: 'Does your uniform program support any social causes?', options: [{ value: 'yes', label: 'Yes', score: 1 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q17', label: 'Does your school have a uniform shop?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q18', label: 'Does your supplier have a shop?', options: [{ value: 'yes', label: 'Yes', score: 0 }, { value: 'no', label: 'No', score: 2 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q19', label: 'Do you have online ordering for uniforms?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q20', label: 'Can parents pick up at school?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q21', label: 'Have your uniforms been tested for harmful or banned chemicals?', options: [{ value: 'yes', label: 'Yes', score: 4 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q22', label: 'Do your students, parents, and staff have full transparency of your supply chain?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q23', label: 'Do you or your supplier use AI for uniform sizing to reduce returns?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    { id: 'q24', label: 'Do you or your supplier use AI to forecast uniform stock needs?', options: [{ value: 'yes', label: 'Yes', score: 2 }, { value: 'no', label: 'No', score: 0 }, { value: 'dont-know', label: 'Don\'t Know', score: 0 }] },
    
    // Readiness questions
    { id: 'readiness1', label: 'Are you planning to review your uniform policy in the next 12 months?', options: [{ value: 'yes', label: 'Yes', score: 0 }, { value: 'no', label: 'No', score: 0 }, { value: 'maybe', label: 'Maybe', score: 0 }] },
    { id: 'readiness2', label: 'Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?', options: [{ value: 'strong', label: 'Strong support', score: 0 }, { value: 'moderate', label: 'Moderate support', score: 0 }, { value: 'low', label: 'Low/No support', score: 0 }] },
    { id: 'readiness3', label: 'What\'s your timeline for adopting sustainable uniforms?', options: [{ value: 'immediate', label: 'Within 6 months', score: 0 }, { value: 'short', label: '6-12 months', score: 0 }, { value: 'long', label: 'Over 12 months', score: 0 }, { value: 'none', label: 'No plans', score: 0 }] }
  ];

  const currentQuestion = questions[currentSlide];
  const totalQuestions = questions.length;

  const handleStartAssessment = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      alert('Please fill all fields to start.');
      return;
    }
    setShowAssessment(true);
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
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
    let totalScore = 0;
    const answeredQuestions: UserAnswer[] = [];
    
    // Calculate score from Q1-Q24 only (sustainability questions)
    for (let i = 1; i <= 24; i++) {
      const questionId = `q${i}`;
      const question = questions.find(q => q.id === questionId);
      const answer = answers[questionId];
      
      if (question && answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
          answeredQuestions.push({
            question: question.label,
            answer: option.label
          });
        }
      }
    }

    // Add readiness questions to answers array
    ['readiness1', 'readiness2', 'readiness3'].forEach(id => {
      const question = questions.find(q => q.id === id);
      const answer = answers[id];
      if (question && answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          answeredQuestions.push({
            question: question.label,
            answer: option.label
          });
        }
      }
    });

    const maxScore = 52; // Total possible score from Q1-Q24
    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);
    setUserAnswers(answeredQuestions);
    setShowResults(true);

    // Send data to Google Sheet
    const formData = {
      name: userData.name,
      school: userData.school,
      students: userData.students,
      email: userData.email,
      score: percentage,
      answers: answeredQuestions
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
        case 13: return 'Combine living wages and safe conditions in policy.';
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
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
      
      // Split long text to fit within page width
      const questionLines = doc.splitTextToSize(`${index + 1}. Question: ${ans.question}`, 180);
      const answerLines = doc.splitTextToSize(`Answer: ${ans.answer}`, 180);
      
      questionLines.forEach((line: string) => {
        doc.text(line, 10, y);
        y += 5;
      });
      
      answerLines.forEach((line: string) => {
        doc.text(line, 10, y);
        y += 5;
      });
      
      let recommendation = 'Book a consultation to discuss your next steps for adopting sustainable uniforms.';
      if (index < 24) {
        recommendation = getRecommendation(index + 1, ans.answer);
      }
      
      const recommendationLines = doc.splitTextToSize(`Recommendation: ${recommendation}`, 180);
      recommendationLines.forEach((line: string) => {
        doc.text(line, 10, y);
        y += 5;
      });
      
      y += 5; // Add space between questions
    });

    if (y > 250) {
      doc.addPage();
      y = 10;
    }
    
    doc.text('Next Steps', 10, y);
    y += 10;
    const nextStepsText = 'Book a free consultation to discuss how Kapes Uniforms can help you improve your uniform program.';
    const nextStepsLines = doc.splitTextToSize(nextStepsText, 180);
    nextStepsLines.forEach((line: string) => {
      doc.text(line, 10, y);
      y += 5;
    });
    doc.text('Visit: /contact', 10, y + 5);

    doc.save('Sustainability_Scorecard_Report.pdf');
  };

  const getScoreDescription = (score: number): string => {
    if (score < 33) {
      return "Your score indicates major opportunities for improvement in sustainability. Traditional uniforms may be costing your school more in hidden environmental and ethical issues. Book a consultation to learn how Kapes can help.";
    } else if (score < 67) {
      return "Your score shows some sustainable practices, but there's room to enhance your program. Addressing these gaps can reduce costs and improve impact. Book a consultation to explore next steps with Kapes.";
    } else {
      return "Your score is strong, with good sustainable practices in place. To take it to the next level and lead in sustainability, book a consultation with Kapes for advanced strategies.";
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#cfeaff] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">Your Sustainability Score</h2>
              <div className="text-6xl font-bold text-primary mb-4">{score}%</div>
              <p className="text-muted-foreground mb-4">
                {getScoreDescription(score)}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={generateReport} className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Your Personalized Report
              </Button>
              <Button asChild className="w-full">
                <a href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book Your Free Consultation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showAssessment) {
    return (
      <div className="min-h-screen bg-[#cfeaff] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <div className="text-muted-foreground mb-2">
                Question {currentSlide + 1} of {totalQuestions}
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            <Card>
              <CardHeader>
                {/* Show section headers */}
                {currentSlide === 24 && (
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Readiness to Switch
                  </h3>
                )}
                <h2 className="text-xl font-bold">{currentQuestion.label}</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={answers[currentQuestion.id] === option.value}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      className="h-4 w-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}

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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#cfeaff]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dng12bd0a/image/upload/v1752871031/2_19_s_eyievk.jpg')",
            backgroundPosition: "20% center"
          }}
        ></div>
        
        {/* Overlay and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Free Assessment Tool</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
              Sustainability{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Scorecard
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Discover the hidden environmental and ethical issues in your school's uniform program. Get a personalized report with actionable improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setShowAssessment(true)}>
                <BarChart3 className="mr-2 h-5 w-5" />
                Start Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Why Take the Assessment?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Uncover opportunities for improvement and get a roadmap to sustainable uniforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
                  <p className="text-muted-foreground">
                    Measure your carbon footprint, water usage, and material sustainability across your uniform program.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Ethical Standards</h3>
                  <p className="text-muted-foreground">
                    Evaluate your supply chain for fair wages, safe working conditions, and ethical manufacturing practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Actionable Report</h3>
                  <p className="text-muted-foreground">
                    Receive personalized recommendations and a roadmap to improve your sustainability score.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Preview & What You'll Learn - Two Column Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4">
                Simple. Quick. Insightful.
              </h2>
              <p className="text-muted-foreground text-lg">
                Answer 27 questions across key sustainability areas to get your complete assessment
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* What You'll Learn - Left Column */}
              <div>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                  What You'll Learn
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Material Sustainability</h4>
                      <p className="text-muted-foreground">Evaluate fabrics, packaging, and material sourcing impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Supply Chain Ethics</h4>
                      <p className="text-muted-foreground">Assess factory conditions, fair wages, and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">End-of-Life Management</h4>
                      <p className="text-muted-foreground">Review takeback programs and circular economy practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Distribution Efficiency</h4>
                      <p className="text-muted-foreground">Analyze logistics, packaging, and delivery methods</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Innovation & Technology</h4>
                      <p className="text-muted-foreground">Explore AI sizing, demand forecasting, and future trends</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Readiness Assessment</h4>
                      <p className="text-muted-foreground">Determine your school's readiness for sustainable transitions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started - Right Column */}
              <div className="bg-[#cfeaff] p-8 rounded-lg">
                <Card className="max-w-lg mx-auto lg:mx-0">
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-center">Get Started</h3>
                    <p className="text-muted-foreground text-center">
                      Enter your details to begin your sustainability assessment
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={userData.name}
                      onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                    />
                    <Input
                      type="text"
                      placeholder="School Name"
                      value={userData.school}
                      onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
                    />
                    <Input
                      type="number"
                      placeholder="Number of Students"
                      value={userData.students}
                      onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={userData.email}
                      onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                    />
                    <Button onClick={handleStartAssessment} className="w-full">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Start Scorecard Assessment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f9f3df]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              Ready to Transform Your Uniform Program?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of schools already improving their sustainability impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleStartAssessment}>
                <BarChart3 className="mr-2 h-5 w-5" />
                Start Your Assessment
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Speak to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityScorecard;