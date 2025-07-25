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
    students: '',
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
    { id: 'ethicalStandards', text: 'What ethical standards would you like for suppliers in your policy? (Select all that apply)', type: 'checkbox', options: ['Fair labor audits', 'Guarantee of fair wages above poverty levels', 'Certifications for safe and fair working conditions', 'No child labor and safe environments'] },
    { id: 'restrictedSubstances', text: 'Would you like to ban harmful chemicals in uniforms in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'policyReview', text: 'How often would you like the policy to be reviewed?', type: 'select', options: ['Annually (recommended for best practice)', 'Every 2 years', 'Every 3 years', 'Every 5 years'] },
    { id: 'materialsPreferences', text: 'What materials would you like to prefer for uniforms in your policy? (Select all that apply)', type: 'checkbox', options: ['Organic cotton (eco-friendly, pesticide-free)', 'Recycled polyester (from recycled plastic bottles)', 'Standard cotton', 'Synthetic fibers like polyester'] },
    { id: 'distributionMethods', text: 'How would you like uniforms to be sold or distributed in your policy? (Select all that apply)', type: 'checkbox', options: ['Online ordering (convenient, low carbon)', 'School store on campus', 'From a supplier\'s shop', 'Pickup at school', 'Pop-up events at school'] },
    { id: 'transparencyRequirements', text: 'Would you like the supply chain to be transparent in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'carbonOffsetting', text: 'Would you like to include offsetting carbon emissions in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'impactCalculation', text: 'Would you like to include measuring environmental impact in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'endOfLife', text: 'What options for old uniforms would you like in your policy? (Select all that apply)', type: 'checkbox', options: ['School collection for resale/giveaway', 'Recycling program', 'Donate to charity'] },
    { id: 'studentGovernance', text: 'Would you like students involved in uniform decisions in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'studentEducation', text: 'Would you like to educate students about the impacts of fashion, related to their uniforms, in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'farmFactoryVisits', text: 'Would you like to include farm and factory visits for students in your policy?', type: 'radio', options: ['Yes', 'No'] },
    { id: 'implementationTimeline', text: 'When do you pledge to implement this policy?', type: 'select', options: ['Within 12 months', 'Within 24 months', 'Within 36 months'] }
  ];

  const columnNames: Record<string, string> = {
    'What ethical standards would you like for suppliers in your policy? (Select all that apply)': 'Ethical Standards',
    'Would you like to ban harmful chemicals in uniforms in your policy?': 'Restricted Substances',
    'How often would you like the policy to be reviewed?': 'Policy Review',
    'What materials would you like to prefer for uniforms in your policy? (Select all that apply)': 'Materials Preferences',
    'How would you like uniforms to be sold or distributed in your policy? (Select all that apply)': 'Distribution Methods',
    'Would you like the supply chain to be transparent in your policy?': 'Transparency',
    'Would you like to include offsetting carbon emissions in your policy?': 'Carbon Offsetting',
    'Would you like to include measuring environmental impact in your policy?': 'Impact Calculation',
    'What options for old uniforms would you like in your policy? (Select all that apply)': 'End of Life',
    'Would you like students involved in uniform decisions in your policy?': 'Student Governance',
    'Would you like to educate students about the impacts of fashion, related to their uniforms, in your policy?': 'Student Education',
    'Would you like to include farm and factory visits for students in your policy?': 'Farm Factory Visits',
    'When do you pledge to implement this policy?': 'Implementation Timeline'
  };

  useEffect(() => {
    if (showResults && !sent) {
      generatePolicy();
      const sheetURL = 'https://script.google.com/macros/s/AKfycbzg6AGNI0Fd_QZg2Y0e_GZ4IBB6ub-MvkwO3GH62VRCx3aPgtEwx76tTw-3PoU_vgC8uQ/exec';
      const payload: Record<string, any> = {
        'First Name': userData.firstName,
        'Last Name': userData.lastName,
        'Email': userData.email,
        'School': userData.school,
        'Students': userData.students,
        'Country': userData.country,
        'Timestamp': new Date().toISOString(),
      };

      // Map implementation timeline to months for Commitment
      let commitmentMonths = '';
      const timeline = userAnswers['implementationTimeline'] as string || '';
      const match = timeline.match(/(\d+)/);
      if (match) {
        commitmentMonths = match[1];
      }
      payload['Commitment'] = commitmentMonths;

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
    if (!userData.firstName || !userData.lastName || !userData.school || !userData.students || !userData.country || !userData.email) {
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
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let policy = '';

    // Header
    policy += `## **Sustainable and Ethical Uniform Policy**\n\n**Institution: ${userData.school}**\n**Policy Creation Date: ${currentDate}**\n**Objective:** To establish a long-term, transparent, and accountable uniform procurement and management policy that promotes sustainability, ethical sourcing, and operational continuity across leadership transitions. This policy serves as a pledge, signed by school leadership, to implement changes within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}, and the school will be added to the list of pledged institutions.\n\n---\n\n`;

    // Policy Overview
    policy += `### **1. Overview**\n\nThis Uniform Policy for ${userData.school} represents a pledge to responsible procurement, emphasizing environmental stewardship, ethical labor practices, and social accountability. It addresses common challenges in school uniform management, such as inconsistent policies during leadership changes, by providing a comprehensive framework that prioritizes sustainability and ethics. The policy serves as a binding commitment, to be signed by school leadership, and includes a timeline for implementation to facilitate gradual, achievable progress. By adopting this policy, ${userData.school} joins a growing list of institutions dedicated to sustainable uniforms, contributing to broader environmental and social benefits.\n\n---\n\n`;

    // Materials and Sustainability
    policy += `### **2. Materials and Sustainability**\n\n${userData.school} commits to sourcing uniforms from materials that minimize environmental harm. Preferred materials include organic cotton, which is eco-friendly and pesticide-free, reducing water usage and chemical pollution, and recycled polyester, made from recycled plastic bottles to divert waste from landfills. The school pledges to prioritize these options in all future procurements.\n\nCarbon emissions from production and shipping will be offset through verifiable projects, such as local tree planting initiatives.\n\nEnvironmental impact, including water use, energy consumption, and pollution, will be measured using simple tools or expert consultations.\n\nFor end-of-life management, the school will introduce options such as school collection for resale or giveaway, recycling programs, and donating unused items to charity, to reduce waste.\n\nThese commitments will be implemented within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}.\n\n---\n\n`;

    // Ethical Manufacturing
    policy += `### **3. Ethics**\n\nTo uphold human rights and fair labor, ${userData.school} requires all suppliers to meet rigorous ethical standards. This includes fair labor audits to verify compliance, guarantees of wages above poverty levels, certifications for safe and fair working conditions, and strict prohibitions on child labor with safe environments for workers.\n\nThis ethical framework protects workers throughout the supply chain and aligns with international labor conventions, fostering long-term partnerships with responsible manufacturers. Non-compliance will result in immediate contract review and potential termination, ensuring accountability at every level.\n\n---\n\n`;

    // Safety
    policy += `### **4. Safety**\n\nTo safeguard student health, ${userData.school} prohibits harmful chemicals in uniforms, including toxic phthalates (endocrine disruptors), cancer-causing amines from azo dyes, nonylphenol ethoxylates (NPEs, toxic to aquatic life), and nonylphenol (NP), as highlighted in Greenpeace's Toxic Threads report and similar benchmarks. Suppliers must certify compliance, with independent chemical testing required for all batches to ensure safety.\n\nThese safety measures will be implemented within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}.\n\n---\n\n`;

    // Transparency
    policy += `### **5. Transparency**\n\nTransparency is essential to building trust and accountability in the uniform supply chain. ${userData.school} requires full end-to-end visibility, where suppliers disclose factory locations, materials origins, transport methods and emissions, and all certifications. This information will be shared with parents, staff, and students through annual reports or a dedicated online portal.\n\nSuch transparency not only empowers the school community but also encourages continuous improvement among suppliers, aligning with global best practices for ethical sourcing.\n\n---\n\n`;

    // Distribution
    policy += `### **6. Distribution**\n\n${userData.school} will distribute uniforms through methods that prioritize convenience, accessibility, and low environmental impact. Preferred channels include online ordering for its convenience and reduced carbon footprint, a school store on campus for direct access, supplier shops for variety, pickup at school to minimize shipping, and pop-up events for seasonal needs. These options will be optimized to reduce emissions from transportation, making uniforms affordable and easy to obtain for families.\n\nThese distribution methods will be implemented within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}.\n\n---\n\n`;

    // Student Engagement
    policy += `### **7. Student Engagement**\n\nStudent involvement in uniform decisions is ${userAnswers.studentGovernance === 'Yes' ? 'required' : 'optional'}, with a student committee providing feedback on comfort, design, and sustainability, reviewed annually.\n\nThe school commits to educating students about the impacts of fashion, related to their uniforms, integrating this into the curriculum to foster awareness and responsibility.\n\nTo enhance learning, the school will organize farm and factory visits for students to see sustainable practices firsthand.\n\nThese initiatives will be implemented within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}.\n\n---\n\n`;

    // Enforcement and Review
    policy += `### **8. Enforcement**\n\nThe policy will be formally reviewed ${userAnswers.policyReview || 'every 3 years'} by the Sustainability Committee to incorporate new best practices and address any gaps. During leadership transitions, the school board must reaffirm the policy annually to prevent disruptions.\n\n**Sustainable Uniform Pledge**\n${userData.school} pledges to implement this policy within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}. This pledge is part of a broader commitment to sustainability, and the school will be listed among pledged institutions. Students are encouraged to advocate for this pledge as part of their learning on sustainability.\n\n**Signed:** ______________________________ (School Leader)\n**Date:** ______________________________\n\n`;

    // Distribution and Sales
    policy += `### **5. Distribution and Sales Channels**\n\n${userData.school} will distribute uniforms through methods that prioritize convenience, accessibility, and low environmental impact. Preferred channels include online ordering for its convenience and reduced carbon footprint, a school store on campus for direct access, supplier shops for variety, pickup at school to minimize shipping, and pop-up events for seasonal needs. These options will be optimized to reduce emissions from transportation, making uniforms affordable and easy to obtain for families.\n\n---\n\n`;

    // Transparency
    policy += `### **6. Supply Chain Transparency**\n\nTransparency is essential to building trust and accountability in the uniform supply chain. ${userData.school} requires full end-to-end visibility, where suppliers disclose factory locations, materials origins, transport methods and emissions, and all certifications. This information will be shared with parents, staff, and students through annual reports or a dedicated online portal.\n\nSuch transparency not only empowers the school community but also encourages continuous improvement among suppliers, aligning with global best practices for ethical sourcing.\n\n---\n\n`;

    // Safety
    policy += `### **7. Safety**\n\nTo safeguard student health, ${userData.school} prohibits harmful chemicals in uniforms, including toxic phthalates (endocrine disruptors), cancer-causing amines from azo dyes, nonylphenol ethoxylates (NPEs, toxic to aquatic life), and nonylphenol (NP), as highlighted in Greenpeace's Toxic Threads report and similar benchmarks. Suppliers must certify compliance, with independent chemical testing required for all batches to ensure safety.\n\n---\n\n`;

    // Enforcement and Review
    policy += `### **8. Enforcement and Review**\n\nThe policy will be formally reviewed ${userAnswers.policyReview || 'every 3 years'} by the Sustainability Committee to incorporate new best practices and address any gaps. During leadership transitions, the school board must reaffirm the policy annually to prevent disruptions.\n\n**Sustainable Uniform Pledge**\n${userData.school} pledges to implement this policy within ${userAnswers.implementationTimeline || 'a reasonable timeframe'}. This pledge is part of a broader commitment to sustainability, and the school will be listed among pledged institutions. Students are encouraged to advocate for this pledge as part of their learning on sustainability.\n\n**Signed:** ______________________________ (School Leader)\n**Date:** ______________________________\n\n`;

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
              <input
                type="number"
                placeholder="Number of Students"
                value={userData.students}
                onChange={(e) => setUserData({...userData, students: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                min="1"
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