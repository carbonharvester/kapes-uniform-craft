import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import jsPDF from 'jspdf';

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

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria',
    'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece',
    'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg',
    'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway',
    'Oman', 'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland',
    'Thailand', 'Turkey', 'UAE', 'Ukraine', 'United Kingdom', 'United States', 'Vietnam'
  ];

  const questions = [
    { id: 'ethicalStandards', text: 'What ethical standards would you like in your policy for suppliers? (Select all that apply)', type: 'checkbox', options: ['Fair labor audits', 'Guarantee of fair wages above poverty levels', 'Certifications for safe and fair working conditions', 'No child labor and safe environments'] },
    { id: 'restrictedSubstances', text: 'Would you like to ban harmful chemicals in uniforms in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'policyReview', text: 'How often would you like the policy to be reviewed?', type: 'select', options: ['Annually (recommended for best practice)', 'Every 2 years', 'Every 3 years', 'Every 5 years'] },
    { id: 'materialsPreferences', text: 'What materials would you like to prefer for uniforms in your policy? (Select all that apply)', type: 'checkbox', options: ['Organic cotton (eco-friendly, pesticide-free)', 'Recycled polyester (from recycled plastic bottles)', 'Standard cotton', 'Synthetic fibers like polyester'] },
    { id: 'distributionMethods', text: 'How would you like uniforms to be sold or distributed? (Select all that apply)', type: 'checkbox', options: ['Online ordering (convenient, low carbon)', 'School store on campus', 'From a supplier\'s shop', 'Pickup at school', 'Pop-up events at school'] },
    { id: 'transparencyRequirements', text: 'Would you like the supply chain to be transparent in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'carbonOffsetting', text: 'Would you like to include offsetting carbon emissions in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'impactCalculation', text: 'Would you like to include measuring environmental impact in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'endOfLife', text: 'What options for old uniforms would you like in your policy? (Select all that apply)', type: 'checkbox', options: ['School collection for resale/giveaway', 'Recycling program', 'Donate to charity'] },
    { id: 'studentGovernance', text: 'Would you like students involved in uniform decisions in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'implementationTimeline', text: 'When do you pledge to implement this policy?', type: 'select', options: ['Within 12 months', 'Within 24 months', 'Within 36 months'] },
    { id: 'pledge', text: 'Do you pledge to implement this sustainable uniform policy?', type: 'radio', options: ['Yes', 'No'] }
  ];

  const columnNames: Record<string, string> = {
    'What ethical standards would you like in your policy for suppliers? (Select all that apply)': 'Ethical Standards',
    'Would you like to ban harmful chemicals in uniforms in your policy?': 'Restricted Substances',
    'How often would you like the policy to be reviewed?': 'Policy Review',
    'What materials would you like to prefer for uniforms in your policy? (Select all that apply)': 'Materials Preferences',
    'How would you like uniforms to be sold or distributed? (Select all that apply)': 'Distribution Methods',
    'Would you like the supply chain to be transparent in your policy?': 'Transparency',
    'Would you like to include offsetting carbon emissions in your policy?': 'Carbon Offsetting',
    'Would you like to include measuring environmental impact in your policy?': 'Impact Calculation',
    'What options for old uniforms would you like in your policy? (Select all that apply)': 'End of Life',
    'Would you like students involved in uniform decisions in your policy?': 'Student Governance',
    'When do you pledge to implement this policy?': 'Implementation Timeline',
    'Do you pledge to implement this sustainable uniform policy?': 'Pledge'
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

      fetch(sheetURL, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify(payload)),
        mode: 'no-cors',
      }).then(() => {
        console.log('✅ Data sent to Google Sheet');
      }).catch(error => {
        console.error('❌ Error sending data to Google Sheet:', error);
      });

      // Send email with policy
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
      generatePolicy();
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
    const currentDate = 'July 24, 2025';
    let policy = '';

    // Header
    policy += `## **Sustainable and Ethical Uniform Policy**\n\n**Institution: ${userData.school}**\n**Effective Date: ${currentDate}**\n**Objective:** To establish a long-term, transparent, and accountable uniform procurement and management policy that promotes sustainability, ethical sourcing, and operational continuity across leadership transitions. This policy outlines current practices and commitments to future improvements.\n\n---\n\n`;

    // Policy Overview
    policy += `### **1. Policy Overview**\n\nThis Uniform Policy articulates ${userData.school}'s commitment to environmental sustainability, ethical manufacturing, and socially responsible procurement. It ensures that the school's uniform supply chain actively contributes to global climate goals, respects human rights, and maintains policy continuity independent of school leadership changes. The policy includes timelines for transitioning to better practices, ensuring progress toward sustainability goals.\n\n---\n\n`;

    // Materials and Sustainability
    policy += `### **2. Materials and Environmental Sustainability**\n\n**Preferred Materials**\nThe school prioritizes sustainable materials. Preferred materials include:\n* ${userAnswers.materialsPreferences ? (userAnswers.materialsPreferences as string[]).join('\n* ') : 'None specified'}.\n\n**Carbon Offsetting**\nThe school is committed to offsetting carbon emissions from uniform production and shipping through verifiable projects${userAnswers.carbonOffsetting === 'Yes' ? ', with implementation starting immediately' : ', with implementation to be considered'}.\n\n**Environmental Impact Calculation**\nThe school will measure the environmental impact of uniforms, including water use, energy consumption, and pollution${userAnswers.impactCalculation === 'Yes' ? ', starting immediately' : ', with implementation to be considered'}.\n\n**End-of-Life Management**\nTo reduce waste, the school will implement end-of-life options for uniforms, such as:\n* ${userAnswers.endOfLife ? (userAnswers.endOfLife as string[]).join('\n* ') : 'None specified'}.\n\n---\n\n`;

    // Ethical Manufacturing
    policy += `### **3. Ethical Manufacturing and Labour Standards**\n\n**Supplier Requirements**\nAll manufacturers and suppliers must comply with high ethical standards, including:\n* ${userAnswers.ethicalStandards ? (userAnswers.ethicalStandards as string[]).join('\n* ') : 'None specified'}.\n\n---\n\n`;

    // Distribution and Sales
    policy += `### **4. Distribution and Sales Channels**\n\nTo ensure accessibility and convenience for families while minimizing environmental impact, the following distribution models are preferred:\n* ${userAnswers.distributionMethods ? (userAnswers.distributionMethods as string[]).join('\n* ') : 'None specified'}.\n\n---\n\n`;

    // Transparency
    policy += `### **5. Supply Chain Transparency**\n\nFull end-to-end supply chain visibility is ${userAnswers.transparencyRequirements === 'Yes' ? 'mandatory' : 'encouraged'}.\nSuppliers must disclose factory locations, materials origin, transport methods, and certifications.\n\n---\n\n`;

    // Enforcement and Review
    policy += `### **6. Enforcement and Review**\n\n**Restricted Substances Policy (RSL)**\nUniforms must not contain harmful chemicals such as:\n* Toxic phthalates (endocrine disruptors)\n* Cancer-causing amines from azo dyes\n* Nonylphenol ethoxylates (NPEs, toxic to aquatic life)\n* Nonylphenol (NP)\n(based on Greenpeace's Toxic Threads report and other benchmarks).\nThe school commits to phasing out any restricted substances${userAnswers.restrictedSubstances === 'Yes' ? ' with immediate effect' : ' when feasible'}.\n\n**Student Governance**\nStudent involvement in uniform decisions is ${userAnswers.studentGovernance === 'Yes' ? 'required' : 'optional'}, with implementation of student committees for feedback.\n\n**Review Cycle**\nThe policy will be formally reviewed ${userAnswers.policyReview || 'every 3 years'} by the Sustainability Committee, with annual reaffirmation by the school board during leadership transitions.\n\n**Non-Compliance**\nViolation of this policy will lead to contract termination and removal from the approved vendor list.\n\n**Sustainable Uniform Pledge**\n${userData.school} pledges to implement this policy within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}. This pledge is part of a broader commitment to sustainability, and the school will be listed among pledged institutions.\n\n**Signed:** ______________________________ (School Leader)\n**Date:** ______________________________`;

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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-heading mb-6">
            Uniform Policy Maker
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Create a comprehensive sustainable uniform policy for your school - whether you're a <strong>student activist</strong> pushing for change, a <strong>teacher</strong> advocating for better practices, a <strong>school leader</strong> planning improvements, or a <strong>sustainability coordinator</strong> implementing green initiatives.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              This tool generates a professional policy document that serves as your school's guiding commitment to sustainable uniforms - regardless of where you're starting from. Perfect for schools ready to pledge meaningful change with clear timelines and accountability measures.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
        
        {showEntryForm && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-heading mb-3 md:mb-4">
                Get Started
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