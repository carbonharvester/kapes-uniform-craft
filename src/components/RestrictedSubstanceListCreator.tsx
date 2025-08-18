import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import jsPDF from 'jspdf';

const RestrictedSubstanceListCreator = () => {
  const [showEntryForm, setShowEntryForm] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entryError, setEntryError] = useState(false);
  const [sent, setSent] = useState(false);
  const [rslText, setRslText] = useState('');

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    school: '',
    country: '',
    email: ''
  });
  
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

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

  const chemicals = [
    { id: 'npes', name: 'NPEs (Nonylphenol Ethoxylates)', explanation: 'NPEs are chemicals used in washing and dyeing clothes. They break down into substances that can harm fish and build up in the environment. They are found in many clothes and can pollute water when washed.' },
    { id: 'phthalates', name: 'Phthalates', explanation: 'Phthalates make plastics soft, like in printed designs on clothes. They can disrupt hormones in the body, causing health problems like allergies or issues with development in children. They are often found in clothing and can be absorbed through the skin.' },
    { id: 'azoDyes', name: 'Azo Dyes', explanation: 'Azo dyes are used to color fabrics. Some can break down into chemicals that cause cancer. They are banned in many places because they can be harmful if absorbed through skin or released into water.' },
    { id: 'formaldehyde', name: 'Formaldehyde', explanation: 'Formaldehyde is used to make clothes wrinkle-free or stiff. It can cause skin irritation, allergies, or even cancer with long exposure. It is often found in treated fabrics and can off-gas over time.' },
    { id: 'flameRetardants', name: 'Flame Retardants', explanation: 'Flame retardants are chemicals added to make clothes less flammable. Many contain toxic substances that can harm the brain or reproductive system and pollute the environment. They are common in children\'s clothes.' },
    { id: 'uvAbsorbers', name: 'UV Light Absorbers', explanation: 'UV absorbers protect fabrics from sun fading. Some can disrupt hormones or cause skin allergies. They are added to outdoor or colorful clothes but can leach out when washed.' },
    { id: 'phenylenediamine', name: 'Phenylenediamine', explanation: 'Phenylenediamine is used in hair dyes and sometimes in textile dyes. It can cause severe skin allergies or irritation. It\'s found in dark-colored fabrics and can be harmful with direct contact.' },
    { id: 'cremazoleDyes', name: 'Cremazole Dyes', explanation: 'Cremazole dyes (a type of reactive dye) are used for coloring fabrics. They can release harmful substances like azo compounds during breakdown, potentially causing allergies or environmental pollution.' },
    { id: 'endocrineDisruptors', name: 'Endocrine Disrupting Chemicals', explanation: 'Endocrine disruptors are chemicals that mess with hormones in the body, affecting growth, mood, or reproduction. Many like phthalates or NPEs are in clothes and can enter the body through skin.' },
    { id: 'benzidine', name: 'Benzidine', explanation: 'Benzidine is used in some dyes and can cause bladder cancer. It is banned in many countries but still found in some imported fabrics. It can be released from azo dyes in clothes.' }
  ];

  useEffect(() => {
    if (showResults && !sent) {
      generateRSL();
      const sheetURL = 'https://script.google.com/macros/s/AKfycbzg6AGNI0Fd_QZg2Y0e_GZ4IBB6ub-MvkwO3GH62VRCx3aPgtEwx76tTw-3PoU_vgC8uQ/exec';
      const payload: Record<string, any> = {
        'First Name': userData.firstName,
        'Last Name': userData.lastName,
        'Email': userData.email,
        'School': userData.school,
        'Country': userData.country,
        'Timestamp': new Date().toISOString(),
      };

      Object.entries(userAnswers).forEach(([chemicalId, answer]) => {
        const chemical = chemicals.find(c => c.id === chemicalId)?.name || chemicalId;
        payload[chemical] = answer;
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

      setSent(true);
    }
  }, [showResults, sent, userData, userAnswers]);

  const handleStart = () => {
    if (!userData.firstName || !userData.lastName || !userData.school || !userData.country || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowEntryForm(false);
    setShowQuiz(true);
  };

  const handleAnswerChange = (chemicalId: string, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [chemicalId]: value
    }));
  };

  const handleNext = () => {
    if (currentSlide < chemicals.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setShowQuiz(false);
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const generateRSL = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let rsl = `## **Restricted Substance List for School Uniforms**\n\n**School: ${userData.school}**\n**Date: ${currentDate}**\n**Prepared By: ${userData.firstName} ${userData.lastName}**\n\nThis Restricted Substance List (RSL) outlines the chemicals banned in your school's uniforms to ensure safety for students and the environment. It's based on your choices and references like Greenpeace's Toxic Threads report. Banned substances are those you selected to include.\n\n---\n\n`;

    const selectedChemicals = chemicals.filter(c => userAnswers[c.id] === 'Yes');

    if (selectedChemicals.length > 0) {
      rsl += `### **Banned Substances**\n\nThe following chemicals are restricted in all school uniforms and related materials:\n\n`;
      selectedChemicals.forEach(chem => {
        rsl += `#### **${chem.name}**\n\n${chem.explanation}\nThis chemical is banned to protect health and the environment. Suppliers must certify that uniforms are free from it, with testing required.\n\n`;
      });
    } else {
      rsl += `### **No Substances Restricted**\n\nBased on your choices, no specific chemicals are banned. We recommend reviewing Greenpeace's Toxic Threads report for common risks and considering additions for safety.\n\n`;
    }

    rsl += `### **Enforcement**\n\nAll suppliers must provide certificates of compliance. Independent testing will be conducted on samples. Non-compliance will lead to supplier disqualification.\n\n**Signed:** ______________________________ (School Representative)\n**Date:** ______________________________\n\n`;

    setRslText(rsl);
  };

  const downloadRSL = () => {
    const doc = new jsPDF();
    doc.text(rslText, 10, 10, { maxWidth: 190 });
    doc.save(`${userData.school}_Restricted_Substance_List.pdf`);
  };

  const renderChemicalQuestion = (chem: any) => (
    <div className="space-y-4">
      <p className="text-lg font-medium">{chem.name}</p>
      <p className="text-sm text-muted-foreground">{chem.explanation}</p>
      <div className="space-y-2">
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
          <input
            type="radio"
            name={chem.id}
            value="Yes"
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={userAnswers[chem.id] === 'Yes'}
            onChange={() => handleAnswerChange(chem.id, 'Yes')}
          />
          <span className="text-sm">Yes, ban this chemical</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
          <input
            type="radio"
            name={chem.id}
            value="No"
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={userAnswers[chem.id] === 'No'}
            onChange={() => handleAnswerChange(chem.id, 'No')}
          />
          <span className="text-sm">No, do not ban</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
        
        {showEntryForm && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
                Restricted Substance List Creator
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
                Start Creator
              </Button>
            </CardContent>
          </Card>
        )}

        {showQuiz && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="pb-4 md:pb-6">
              <div className="mb-4 md:mb-6">
                <Progress 
                  value={((currentSlide + 1) / chemicals.length) * 100} 
                  className="h-2 md:h-3 mb-4 md:mb-6"
                />
                <div className="text-sm md:text-base text-muted-foreground text-center font-medium">
                  {Math.round(((currentSlide + 1) / chemicals.length) * 100)}% Complete
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 md:mb-8">
                <CardTitle className="text-lg md:text-xl font-bold text-heading mb-4 md:mb-6 leading-relaxed">
                  Should this chemical be banned?
                </CardTitle>
                {renderChemicalQuestion(chemicals[currentSlide])}
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
                  {currentSlide === chemicals.length - 1 ? 'Generate List' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {showResults && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Your Restricted Substance List</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <pre className="whitespace-pre-wrap text-muted-foreground mb-8 leading-relaxed">
                {rslText}
              </pre>
              <Button onClick={downloadRSL} className="mr-4">
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

export default RestrictedSubstanceListCreator;