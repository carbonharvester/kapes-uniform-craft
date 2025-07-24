import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import jsPDF from 'jspdf';

const countries = [
  'United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Ireland',
  'South Africa', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Belgium',
  'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Portugal',
  'Luxembourg', 'Greece', 'Cyprus', 'Malta', 'Other'
];

const UniformPolicyMaker = () => {
  const [showEntryForm, setShowEntryForm] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entryError, setEntryError] = useState(false);
  const [sent, setSent] = useState(false);
  const [policyText, setPolicyText] = useState('');

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    school: '',
    country: '',
    email: ''
  });
  
  const [userAnswers, setUserAnswers] = useState<Record<string, string | string[]>>({});

  const formRef = useRef<HTMLDivElement>(null);

  const questions = [
    { id: 'ethicalStandards', text: 'What ethical standards do you want for suppliers? (Select all that apply). These are basic requirements to ensure workers are treated fairly and safely.', type: 'checkbox', options: ['Regular checks (audits) on factories', 'Guarantee of fair wages', 'Certifications for safe working conditions', 'Good working conditions (no child labor, safe environment)', "Don't know/I want recommendations"] },
    { id: 'restrictedSubstances', text: 'Do you want a restricted substances list in your policy? This lists harmful chemicals that cannot be used in uniforms, like those that can cause health issues.', type: 'radio', options: ['Yes', 'No'] },
    { id: 'restrictedDetails', text: 'Any specific details or additions for the restricted substances list? (e.g., additional chemicals to ban)', type: 'textarea' },
    { id: 'policyReview', text: 'How often should the policy be reviewed to keep it up to date?', type: 'select', options: ['Annually', 'Every 2 years', 'Every 3 years', 'Every 5 years'] },
    { id: 'materialsPreferences', text: 'Preferred materials for uniforms? (Select all that apply). Sustainable options like organic cotton use less water and chemicals.', type: 'checkbox', options: ['Organic cotton (better for the environment)', 'Recycled polyester (made from recycled plastic)', 'Conventional cotton', 'Synthetic fibers (like polyester)', "Don't know/I want recommendations"] },
    { id: 'sustainabilityFocus', text: 'What level of sustainability focus do you want in the policy? This could include using eco-friendly materials and reducing waste.', type: 'radio', options: ['High (strong emphasis on green practices)', 'Medium (balanced approach)', 'Low (basic requirements)'] },
    { id: 'distributionMethods', text: 'Preferred ways to distribute uniforms? (Select all that apply). Options like online ordering can reduce travel emissions.', type: 'checkbox', options: ['Online ordering', 'School shop', 'Supplier shop', 'Pickup at school', 'Pop-up events', "Don't know/I want recommendations"] },
    { id: 'supplyChainTransparency', text: 'Do you want to require supply chain transparency? This means parents and staff can see where uniforms come from and how they are made.', type: 'radio', options: ['Yes', 'No'] },
    { id: 'carbonOffsetting', text: 'Do you want to include carbon offsetting in the policy? This means balancing out emissions from making uniforms by supporting green projects.', type: 'radio', options: ['Yes', 'No'] },
    { id: 'carbonDetails', text: 'Any specific details for carbon offsetting? (e.g., types of projects to support)', type: 'textarea' },
    { id: 'impactCalculation', text: 'Do you want to require calculating environmental impact? This tracks things like water use and carbon emissions from uniforms.', type: 'radio', options: ['Yes', 'No'] },
    { id: 'impactDetails', text: 'How should impact be calculated? (e.g., tools or methods)', type: 'textarea' },
    { id: 'endOfLife', text: 'Do you want end-of-life plans for uniforms? This covers recycling, resale, or giveaway programs when uniforms are no longer used.', type: 'radio', options: ['Yes', 'No'] },
    { id: 'endOfLifeDetails', text: 'Any specific details for end-of-life plans? (e.g., collection programs)', type: 'textarea' }
  ];

  const columnNames: Record<string, string> = {
    'What ethical standards do you want for suppliers? (Select all that apply). These are basic requirements to ensure workers are treated fairly and safely.': 'Ethical Standards',
    'Do you want a restricted substances list in your policy? This lists harmful chemicals that cannot be used in uniforms, like those that can cause health issues.': 'Restricted Substances List',
    'Any specific details or additions for the restricted substances list? (e.g., additional chemicals to ban)': 'Restricted Substances Details',
    'How often should the policy be reviewed to keep it up to date?': 'Policy Review Frequency',
    'Preferred materials for uniforms? (Select all that apply). Sustainable options like organic cotton use less water and chemicals.': 'Materials Preferences',
    'What level of sustainability focus do you want in the policy? This could include using eco-friendly materials and reducing waste.': 'Sustainability Focus',
    'Preferred ways to distribute uniforms? (Select all that apply). Options like online ordering can reduce travel emissions.': 'Distribution Methods',
    'Do you want to require supply chain transparency? This means parents and staff can see where uniforms come from and how they are made.': 'Supply Chain Transparency',
    'Do you want to include carbon offsetting in the policy? This means balancing out emissions from making uniforms by supporting green projects.': 'Carbon Offsetting',
    'Any specific details for carbon offsetting? (e.g., types of projects to support)': 'Carbon Offsetting Details',
    'Do you want to require calculating environmental impact? This tracks things like water use and carbon emissions from uniforms.': 'Impact Calculation',
    'How should impact be calculated? (e.g., tools or methods)': 'Impact Calculation Details',
    'Do you want end-of-life plans for uniforms? This covers recycling, resale, or giveaway programs when uniforms are no longer used.': 'End of Life Plans',
    'Any specific details for end-of-life plans? (e.g., collection programs)': 'End of Life Details'
  };

  useEffect(() => {
    if (showResults && !sent) {
      generatePolicy();
      const sheetURL = 'https://script.google.com/macros/s/AKfycbzpBqnrvqN_UEoKkw75FcUh6O-HFyC9fv0RvouSW1KFdHBrDgx2-Vo6_Sp2gUCGmKb3/exec';
      const payload: Record<string, any> = {
        'First Name': userData.firstName,
        'Last Name': userData.lastName,
        'Email': userData.email,
        'School': userData.school,
        'Country': userData.country,
        'Timestamp': new Date().toISOString(),
      };

      Object.entries(userAnswers).forEach(([questionId, answer]) => {
        const question = questions.find(q => q.id === questionId)?.text || questionId;
        const col = columnNames[question] || question;
        payload[col] = Array.isArray(answer) ? answer.join(', ') : answer;
      });

      console.log('📤 Final payload being sent:', payload);

      fetch(sheetURL, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify(payload)),
        mode: 'no-cors',
      }).then(() => {
        console.log('✅ Data sent to Google Sheet');
      }).catch(error => {
        console.error('❌ Error sending data:', error);
      });

      // Send email with policy (assume backend handles email sending)
      fetch('https://script.google.com/macros/s/[your-email-script-id]/exec', {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify({...payload, policy: policyText})),
        mode: 'no-cors',
      }).then(() => {
        console.log('✅ Policy sent by email');
      }).catch(error => {
        console.error('❌ Error sending email:', error);
      });

      setSent(true);
    }
  }, [showResults, sent, userData, userAnswers, policyText]);

  const handleStart = () => {
    if (!userData.firstName || !userData.lastName || !userData.school || !userData.country || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowEntryForm(false);
    setShowQuiz(true);
  };

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    const currentQ = questions[currentSlide];
    
    let isAnswered = false;
    if (currentQ.type === 'checkbox') {
      const answers = userAnswers[currentQ.id] as string[] || [];
      isAnswered = answers.length > 0;
    } else if (currentQ.type === 'textarea') {
      isAnswered = !!userAnswers[currentQ.id];
    } else {
      isAnswered = !!userAnswers[currentQ.id];
    }
    
    if (!isAnswered) {
      alert('Please provide an answer to proceed.');
      return;
    }
    
    if (currentSlide === questions.length - 1) {
      setShowQuiz(false);
      setShowResults(true);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const generatePolicy = () => {
    let policy = '';

    // Introduction
    policy += `Introduction\n\nThis Uniform Policy for ${userData.school} is designed to promote ethical practices, sustainability, and continuity. It ensures that uniforms are sourced responsibly, minimizing harm to people and the planet, and provides a framework that withstands changes in school leadership.\n\n`;

    // Materials and Sustainability
    policy += `Materials and Sustainability\n\nPreferred materials: ${userAnswers.materialsPreferences ? (userAnswers.materialsPreferences as string[]).join(', ') : 'None specified'}.\nSustainability focus: ${userAnswers.sustainabilityFocus || 'Not specified'}.\nCarbon offsetting: ${userAnswers.carbonOffsetting || 'No'}.\nDetails: ${userAnswers.carbonDetails || 'None'}.\nImpact calculation: ${userAnswers.impactCalculation || 'No'}.\nDetails: ${userAnswers.impactDetails || 'None'}.\nEnd of life plans: ${userAnswers.endOfLife || 'No'}.\nDetails: ${userAnswers.endOfLifeDetails || 'None'}.\n\n`;

    // Ethical Manufacturing
    policy += `Ethical Manufacturing\n\nEthical standards for suppliers: ${userAnswers.ethicalStandards ? (userAnswers.ethicalStandards as string[]).join(', ') : 'None specified'}.\n\n`;

    // Distribution and Sales
    policy += `Distribution and Sales\n\nPreferred methods: ${userAnswers.distributionMethods ? (userAnswers.distributionMethods as string[]).join(', ') : 'None specified'}.\n\n`;

    // Transparency
    policy += `Transparency\n\nSupply chain transparency required: ${userAnswers.supplyChainTransparency || 'No'}.\n\n`;

    // Enforcement and Review
    policy += `Enforcement and Review\n\nRestricted substances list: ${userAnswers.restrictedSubstances || 'No'}.\nDetails: The policy prohibits harmful chemicals such as phthalates, azo dyes (which can release cancer-causing amines), nonylphenol ethoxylates (NPEs), and other toxins identified in reports like Toxic Threads by Greenpeace. Additional details: ${userAnswers.restrictedDetails || 'None'}.\nPolicy review frequency: ${userAnswers.policyReview || 'Not specified'}.\nTo ensure continuity during leadership changes, the policy must be reviewed and approved by the school board annually.\n\n`;

    setPolicyText(policy);
  };

  const downloadPolicy = () => {
    const doc = new jsPDF();
    doc.text(policyText, 10, 10, { maxWidth: 190 });
    doc.save(`${userData.school}_Uniform_Policy.pdf`);
  };

  const handleCheckboxChange = (questionId: string, value: string, checked: boolean) => {
    const currentValues = (userAnswers[questionId] as string[]) || [];
    if (checked) {
      handleAnswerChange(questionId, [...currentValues, value]);
    } else {
      handleAnswerChange(questionId, currentValues.filter(v => v !== value));
    }
  };

  const renderCheckboxQuestion = (q: any) => (
    <div className="space-y-4">
      {q.options.map((option: string) => (
        <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
          <input 
            type="checkbox" 
            name={q.id} 
            value={option} 
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={(userAnswers[q.id] as string[] || []).includes(option)}
            onChange={(e) => handleCheckboxChange(q.id, option, e.target.checked)}
          />
          <span className="text-sm font-medium">{option}</span>
        </label>
      ))}
    </div>
  );

  const renderRadioQuestion = (q: any) => (
    <div className="space-y-4">
      {q.options.map((option: string) => (
        <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
          <input 
            type="radio" 
            name={q.id} 
            value={option} 
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={userAnswers[q.id] === option}
            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
          />
          <span className="text-sm font-medium">{option}</span>
        </label>
      ))}
    </div>
  );

  const renderSelectQuestion = (q: any) => (
    <select 
      name={q.id} 
      className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
      value={userAnswers[q.id] as string || ''}
      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
    >
      <option value="">Select option</option>
      {q.options.map((option: string) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );

  const renderTextareaQuestion = (q: any) => (
    <textarea
      name={q.id}
      placeholder="Enter details..."
      value={userAnswers[q.id] as string || ''}
      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
      className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base h-32"
    />
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
        
        {showEntryForm && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
                Uniform Policy Maker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="First Name"
                value={userData.firstName}
                onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                required
              />
              <input
                type="text"
                placeholder="School Name"
                value={userData.school}
                onChange={(e) => setUserData({...userData, school: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                required
              />
              <select
                value={userData.country}
                onChange={(e) => setUserData({...userData, country: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <input
                type="email"
                placeholder="Your Email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                required
              />
              {entryError && (
                <div className="text-destructive mb-4 text-center font-medium">
                  Please fill all fields to start.
                </div>
              )}
              <Button
                onClick={handleStart}
                className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        )}

        {showQuiz && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="pb-4 md:pb-6">
              <div className="mb-4 md:mb-6">
                <Progress 
                  value={((currentSlide + 1) / questions.length) * 100} 
                  className="h-2 md:h-3 mb-4 md:mb-6"
                />
                <div className="text-sm md:text-base text-muted-foreground text-center font-medium">
                  {Math.round(((currentSlide + 1) / questions.length) * 100)}% Complete
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 md:mb-8">
                <CardTitle className="text-lg md:text-xl font-bold text-heading mb-4 md:mb-6 leading-relaxed">
                  {questions[currentSlide].text}
                </CardTitle>
                
                {questions[currentSlide].type === 'checkbox' && renderCheckboxQuestion(questions[currentSlide])}
                {questions[currentSlide].type === 'radio' && renderRadioQuestion(questions[currentSlide])}
                {questions[currentSlide].type === 'select' && renderSelectQuestion(questions[currentSlide])}
                {questions[currentSlide].type === 'textarea' && renderTextareaQuestion(questions[currentSlide])}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className={`flex items-center justify-center space-x-2 w-full sm:w-auto py-2.5 md:py-3 text-sm md:text-base ${
                    currentSlide === 0 ? 'hidden' : 'inline-flex'
                  }`}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  onClick={handleNext}
                  className="w-full sm:w-auto py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02] ml-auto"
                >
                  {currentSlide === questions.length - 1 ? 'Generate Policy' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {showResults && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Your Uniform Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <pre className="whitespace-pre-wrap text-muted-foreground mb-8 leading-relaxed">
                {policyText}
              </pre>
              <Button onClick={downloadPolicy} className="mr-4">
                Download PDF
              </Button>
              <p className="text-muted-foreground mt-4">A copy has been sent to your email: {userData.email}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default UniformPolicyMaker;