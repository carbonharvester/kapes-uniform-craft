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
    { id: 'heavyMetals', name: 'Heavy Metals (e.g., Antimony in Polyester)', explanation: 'Heavy metals like antimony are in synthetic fabrics. They can cause skin irritation or more serious health issues with long exposure, and they\'re toxic if they get into water.' },
    { id: 'pfas', name: 'PFAS (Per- and Polyfluoroalkyl Substances, "forever chemicals")', explanation: 'PFAS are used for water and stain resistance in fabrics. Called "forever chemicals" because they don\'t break down, they can cause immune system problems, cancer risks, or developmental issues in children. They build up in the body and environment over time.' }
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
          <div className="bg-white text-black p-8 print:p-12 max-w-none print:shadow-none shadow-lg rounded-lg print:rounded-none">
            {/* Document Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
              <h1 className="text-3xl font-bold mb-2 uppercase tracking-wide">Restricted Substance List</h1>
              <h2 className="text-xl font-semibold text-gray-700">for School Uniforms</h2>
            </div>

            {/* Document Details */}
            <div className="mb-8 bg-gray-50 p-6 print:bg-transparent print:border print:border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-semibold">School Institution:</p>
                  <p className="text-lg border-b border-gray-300 pb-1">{userData.school}</p>
                </div>
                <div>
                  <p className="font-semibold">Date Prepared:</p>
                  <p className="text-lg border-b border-gray-300 pb-1">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div>
                  <p className="font-semibold">Prepared By:</p>
                  <p className="text-lg border-b border-gray-300 pb-1">{userData.firstName} {userData.lastName}</p>
                </div>
                <div>
                  <p className="font-semibold">Country:</p>
                  <p className="text-lg border-b border-gray-300 pb-1">{userData.country}</p>
                </div>
              </div>
            </div>

            {/* Document Purpose */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Document Purpose</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                This Restricted Substance List (RSL) outlines the chemicals banned in your school's uniforms to ensure safety for students and the environment. 
                It's based on your selections and references industry standards including Greenpeace's Toxic Threads report. Banned substances are those you selected to include. 
                Since this document addresses children's uniforms, we've focused on chemicals that could affect kids' health, including those causing allergies or disrupting growth and development.
              </p>
            </div>

            {/* Banned Substances Section */}
            {(() => {
              const selectedChemicals = chemicals.filter(c => userAnswers[c.id] === 'Yes');
              
              if (selectedChemicals.length > 0) {
                return (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-gray-800 border-b-2 border-red-200 pb-2">Banned Substances</h3>
                    <p className="text-gray-700 mb-6 italic">The following chemicals are restricted in all school uniforms and related materials:</p>
                    <div className="space-y-6">
                      {selectedChemicals.map((chem, index) => (
                        <div key={chem.id} className="border-l-4 border-red-400 pl-4 py-2">
                          <h4 className="font-bold text-red-700 text-lg mb-2">{index + 1}. {chem.name}</h4>
                          <p className="text-gray-700 mb-3 leading-relaxed text-justify">{chem.explanation}</p>
                          <p className="text-red-600 font-medium text-sm bg-red-50 p-2 rounded print:bg-transparent print:border print:border-red-200">
                            <strong>Status:</strong> This chemical is banned to protect children's health and the environment. Suppliers must certify that uniforms are free from this substance, with independent testing required for verification.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">Substance Restrictions</h3>
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded print:bg-transparent">
                      <p className="text-gray-700 leading-relaxed">
                        Based on your selections, no specific chemicals are currently banned under this RSL. However, we strongly recommend reviewing 
                        Greenpeace's Toxic Threads report and other industry standards to identify common risks and consider adding restrictions for enhanced safety, 
                        especially since these uniforms are worn daily by children.
                      </p>
                    </div>
                  </div>
                );
              }
            })()}

            {/* Enforcement Section */}
            <div className="mb-12 bg-blue-50 print:bg-transparent print:border print:border-blue-200 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Enforcement and Compliance</h3>
              <div className="space-y-3 text-gray-700">
                <p>• All suppliers must provide certificates of compliance for restricted substances</p>
                <p>• Independent testing will be conducted on uniform samples to verify compliance</p>
                <p>• Non-compliance will result in immediate supplier disqualification</p>
                <p>• This policy applies to all uniform components including fabrics, dyes, treatments, and accessories</p>
                <p>• Regular audits will be conducted to ensure ongoing compliance</p>
              </div>
            </div>

            {/* Signature Section */}
            <div className="border-t-2 border-gray-300 pt-8 mt-12">
              <h3 className="text-lg font-bold mb-6 text-gray-800">Authorization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold mb-2">School Representative:</p>
                  <div className="border-b-2 border-gray-400 h-12 mb-2"></div>
                  <p className="text-sm text-gray-600">Signature</p>
                  <div className="mt-4">
                    <div className="border-b border-gray-300 h-8 mb-1"></div>
                    <p className="text-sm text-gray-600">Print Name</p>
                  </div>
                  <div className="mt-4">
                    <div className="border-b border-gray-300 h-8 mb-1"></div>
                    <p className="text-sm text-gray-600">Title/Position</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Date:</p>
                  <div className="border-b-2 border-gray-400 h-12 mb-2 w-48"></div>
                  <p className="text-sm text-gray-600">Date of Authorization</p>
                  
                  <div className="mt-8 p-4 bg-gray-100 print:bg-transparent print:border print:border-gray-300 rounded">
                    <p className="text-xs text-gray-600 leading-tight">
                      This document becomes effective upon signature and supersedes any previous 
                      restricted substance policies. Review and updates should be conducted annually 
                      or as new chemical safety information becomes available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Hidden when printing */}
            <div className="print:hidden flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-gray-200">
              <Button onClick={downloadRSL} className="flex-1 sm:flex-none bg-primary hover:bg-primary/90">
                Download PDF
              </Button>
              <Button 
                onClick={() => window.print()} 
                variant="outline" 
                className="flex-1 sm:flex-none"
              >
                Print Document
              </Button>
              <p className="text-muted-foreground text-sm flex items-center">
                Document prepared for: {userData.email}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestrictedSubstanceListCreator;