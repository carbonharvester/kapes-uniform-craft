import React, { useState, useRef } from 'react';
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
    { id: 'npes', name: 'NPEs (Nonylphenol Ethoxylates)', explanation: 'NPEs are used in washing and dyeing clothes. They can turn into harmful substances that hurt fish and wildlife when washed into water. For kids, they might cause skin irritation or allergies.' },
    { id: 'phthalates', name: 'Phthalates', explanation: 'Phthalates make plastics soft, like in printed logos on uniforms. They can mess with hormones in children\'s bodies, potentially affecting growth or causing allergies. Kids are more sensitive because they\'re growing.' },
    { id: 'azoDyes', name: 'Azo Dyes', explanation: 'Azo dyes give clothes color but some can release cancer-causing chemicals. These can be absorbed through kids\' skin during wear or play, raising health risks over time.' },
    { id: 'formaldehyde', name: 'Formaldehyde', explanation: 'Formaldehyde makes clothes wrinkle-free. It can cause skin rashes, eye irritation, or breathing problems in children, especially if they have sensitive skin or allergies.' },
    { id: 'flameRetardants', name: 'Flame Retardants', explanation: 'Flame retardants make fabrics less flammable but some are toxic, affecting children\'s brain development or hormones. They can build up in dust or be absorbed through skin.' },
    { id: 'uvAbsorbers', name: 'UV Light Absorbers', explanation: 'UV absorbers protect fabrics from sun fading. Some can cause skin allergies or hormone issues in kids, and they don\'t break down easily in the environment.' },
    { id: 'phenylenediamine', name: 'Phenylenediamine', explanation: 'Phenylenediamine is in some dyes for dark colors. It can cause severe skin allergies or irritation, especially for children with sensitive skin during daily wear.' },
    { id: 'cremazoleDyes', name: 'Cremazole Dyes', explanation: 'Cremazole dyes are used for coloring. They can release harmful substances like azo compounds, causing allergies or environmental pollution when uniforms are washed.' },
    { id: 'endocrineDisruptors', name: 'Endocrine Disrupting Chemicals', explanation: 'Endocrine disruptors mess with hormones, affecting growth and development in children. Common in fabrics, they can lead to long-term health issues like learning problems.' },
    { id: 'benzidine', name: 'Benzidine', explanation: 'Benzidine is in some dyes and linked to bladder cancer. It can be released from fabrics, posing risks to children through skin contact or inhalation of dust.' },
    { id: 'heavyMetals', name: 'Heavy Metals (e.g., Antimony in Polyester)', explanation: 'Heavy metals like antimony are in synthetic fabrics. They can cause skin irritation or more serious health issues with long exposure, and they\'re toxic if they get into water.' }
  ];

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
      generateRSL();
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
    let rsl = `## **Restricted Substance List for School Uniforms**\n\n**School: ${userData.school}**\n**Date: ${currentDate}**\n**Prepared By: ${userData.firstName} ${userData.lastName}**\n\nThis Restricted Substance List (RSL) outlines the chemicals banned in your school's uniforms to ensure safety for students and the environment. It's based on your choices and references like Greenpeace's Toxic Threads report. Banned substances are those you selected to include. Since this is for children's uniforms, we've focused on chemicals that could affect kids' health, like causing allergies or disrupting growth.\n\n---\n\n`;

    const selectedChemicals = chemicals.filter(c => userAnswers[c.id] === 'Yes');

    if (selectedChemicals.length > 0) {
      rsl += `### **Banned Substances**\n\nThe following chemicals are restricted in all school uniforms and related materials:\n\n`;
      selectedChemicals.forEach(chem => {
        rsl += `#### **${chem.name}**\n\n${chem.explanation}\nThis chemical is banned to protect children's health and the environment. Suppliers must certify that uniforms are free from it, with testing required.\n\n`;
      });
    } else {
      rsl += `### **No Substances Restricted**\n\nBased on your choices, no specific chemicals are banned. We recommend reviewing Greenpeace's Toxic Threads report for common risks and considering additions for safety, especially since uniforms are worn by children daily.\n\n`;
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
            <CardContent className="text-left space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg border">
                <h2 className="text-2xl font-bold text-heading mb-4">Restricted Substance List for School Uniforms</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>School:</strong> {userData.school}</p>
                  <p><strong>Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p><strong>Prepared By:</strong> {userData.firstName} {userData.lastName}</p>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  This Restricted Substance List (RSL) outlines the chemicals banned in your school's uniforms to ensure safety for students and the environment. 
                  It's based on your choices and references like Greenpeace's Toxic Threads report. Banned substances are those you selected to include. 
                  Since this is for children's uniforms, we've focused on chemicals that could affect kids' health, like causing allergies or disrupting growth.
                </p>
              </div>

              {(() => {
                const selectedChemicals = chemicals.filter(c => userAnswers[c.id] === 'Yes');
                
                if (selectedChemicals.length > 0) {
                  return (
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-4">Banned Substances</h3>
                      <p className="text-muted-foreground mb-6">The following chemicals are restricted in all school uniforms and related materials:</p>
                      <div className="space-y-4">
                        {selectedChemicals.map(chem => (
                          <div key={chem.id} className="bg-destructive/5 border border-destructive/20 p-4 rounded-lg">
                            <h4 className="font-bold text-destructive mb-2">{chem.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{chem.explanation}</p>
                            <p className="text-sm font-medium text-destructive">This chemical is banned to protect children's health and the environment. Suppliers must certify that uniforms are free from it, with testing required.</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-4">No Substances Restricted</h3>
                      <div className="bg-muted/30 p-4 rounded-lg border">
                        <p className="text-muted-foreground">
                          Based on your choices, no specific chemicals are banned. We recommend reviewing Greenpeace's Toxic Threads report for common risks and considering additions for safety, especially since uniforms are worn by children daily.
                        </p>
                      </div>
                    </div>
                  );
                }
              })()}

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Enforcement</h3>
                <p className="text-muted-foreground mb-4">
                  All suppliers must provide certificates of compliance. Independent testing will be conducted on samples. Non-compliance will lead to supplier disqualification.
                </p>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">Signed:</span>
                    <div className="border-b-2 border-muted-foreground/30 flex-1 pb-1">
                      <span className="text-muted-foreground text-sm">(School Representative)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">Date:</span>
                    <div className="border-b-2 border-muted-foreground/30 w-48 pb-1"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={downloadRSL} className="flex-1 sm:flex-none">
                  Download PDF
                </Button>
                <p className="text-muted-foreground text-sm flex items-center">
                  A copy has been sent to your email: {userData.email}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RestrictedSubstanceListCreator;