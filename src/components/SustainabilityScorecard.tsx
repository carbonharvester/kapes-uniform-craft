import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ArrowLeft, Trophy, Target, Lightbulb } from 'lucide-react';

interface SustainabilityScorecardProps {
  initialData?: {
    firstName: string;
    surname: string;
    school: string;
    students: string;
    email: string;
  };
}

const SustainabilityScorecard = ({ initialData }: SustainabilityScorecardProps) => {
  const [showEntryForm, setShowEntryForm] = useState(!initialData);
  const [showQuiz, setShowQuiz] = useState(!!initialData);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entryError, setEntryError] = useState(false);
  const [sent, setSent] = useState(false);

  const [userData, setUserData] = useState({
    firstName: initialData?.firstName || '',
    surname: initialData?.surname || '',
    school: initialData?.school || '',
    country: '',
    students: initialData?.students || '',
    email: initialData?.email || ''
  });
  
  const [userAnswers, setUserAnswers] = useState<Array<{question: string, answer: string}>>([]);
  const [userFeatures, setUserFeatures] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [scoreDescription, setScoreDescription] = useState('');

  // Form answers state
  const [formAnswers, setFormAnswers] = useState<Record<string, string | string[]>>({});

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
    { id: 'materials', text: 'What materials are your uniforms including PE kits made from? (Select all that apply)', type: 'checkbox' },
    { id: 'q3', text: 'Do you know how much water, energy, and carbon emissions result from the production of your uniforms?', type: 'radio' },
    { id: 'q4', text: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?', type: 'radio' },
    { id: 'packaging', text: 'What materials are your uniforms packaged in? (Select all that apply)', type: 'checkbox' },
    { id: 'q9', text: 'Do you require your suppliers to disclose their environmental impact?', type: 'radio' },
    { id: 'q10', text: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?', type: 'radio' },
    { id: 'q11', text: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?', type: 'radio' },
    { id: 'q12', text: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?', type: 'radio' },
    { id: 'q13', text: 'Does your school collect and resell or giveaway used uniforms?', type: 'radio' },
    { id: 'q14', text: 'Does your uniform program support any social causes?', type: 'radio' },
    { id: 'distribution', text: 'How are uniforms distributed/ordered? (Select all that apply)', type: 'checkbox' },
    { id: 'q19', text: 'Have your uniforms been tested for harmful or banned chemicals?', type: 'radio' },
    { id: 'q20', text: 'Do your students, parents, and staff have full transparency of your supply chain?', type: 'radio' },
    { id: 'education', text: 'Do you educate your students about the impacts of fashion, related to their uniforms?', type: 'radio' },
    { id: 'ai_usage', text: 'Is AI integrated into your uniform program? (Select all that apply)', type: 'checkbox' },
    { id: 'extra3', text: 'How important is sustainability within your school?', type: 'radio' },
    { id: 'extra1', text: 'How would you rate your current uniform program out of 10?', type: 'select' },
    { id: 'extra2', text: 'Would you consider improving this in the next 12 months by switching to a more sustainable program?', type: 'radio' }
  ];

  const weights = [36, 5, 4, 6, 5, 7, 8, 7, 6, 3, 19, 5, 5, 5, 6]; // 15 scored questions
  const maxScore = 127;

  const columnNames: Record<string, string> = {
    'What materials are your uniforms including PE kits made from? (Select all that apply)': 'Materials Used',
    'Do you know how much water, energy, and carbon emissions result from the production of your uniforms?': 'Environmental Impact Knowledge',
    'Do you offset the environmental impact of the uniforms through verified carbon offset projects?': 'Carbon Offset Projects',
    'What materials are your uniforms packaged in? (Select all that apply)': 'Packaging Materials',
    'Do you require your suppliers to disclose their environmental impact?': 'Supplier Disclosure',
    'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?': 'Ethical Audits',
    'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?': 'Living Wages Policy',
    'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?': '3rd Party Certifications',
    'Does your school collect and resell or giveaway used uniforms?': 'Uniform Collection/Resale',
    'Does your uniform program support any social causes?': 'Social Causes Support',
    'How are uniforms distributed/ordered? (Select all that apply)': 'Distribution Methods',
    'Have your uniforms been tested for harmful or banned chemicals?': 'Chemical Testing',
    'Do your students, parents, and staff have full transparency of your supply chain?': 'Supply Chain Transparency',
    'Do you educate your students about the impacts of fashion, related to their uniforms?': 'Education on Fashion Impacts',
    'Is AI integrated into your uniform program? (Select all that apply)': 'AI Usage',
    'How would you rate your current uniform program out of 10?': 'Program Rating',
    'Would you consider improving this in the next 12 months by switching to a more sustainable program?': 'Willing to improve?',
    'How important is sustainability within your school?': 'Sustainability Importance',
    'Selected features:': 'Selected Features'
  };

  const getScoreColor = (score: number) => {
    if (score >= 67) return 'text-green-600';
    if (score >= 33) return 'text-yellow-600';
    return 'text-red-600';
  };

  useEffect(() => {
    // Check if user data exists in localStorage from homepage form
    const storedUserData = localStorage.getItem('scorecardUserData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      setShowEntryForm(false);
      setShowQuiz(true);
      localStorage.removeItem('scorecardUserData'); // Clean up
    }

    // Setup exclusive checkboxes
    const makeExclusive = (groupName: string, exclusiveValues: string[]) => {
      const handleChange = () => {
        const checkboxes = formRef.current?.querySelectorAll(`input[name="${groupName}"]`) as NodeListOf<HTMLInputElement>;
        if (!checkboxes) return;

        checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
            if (exclusiveValues.includes(checkbox.value) && checkbox.checked) {
              checkboxes.forEach(cb => {
                if (!exclusiveValues.includes(cb.value)) cb.checked = false;
              });
            } else if (checkbox.checked) {
              checkboxes.forEach(cb => {
                if (exclusiveValues.includes(cb.value)) cb.checked = false;
              });
            }
          });
        });
      };
      setTimeout(handleChange, 100);
    };

    makeExclusive('materials', ['dont_know']);
    makeExclusive('packaging', ['dont_know']);
    makeExclusive('distribution', ['dont_know']);
    makeExclusive('ai_usage', ['no', 'dont_know']);
  }, [showQuiz, currentSlide]);

  useEffect(() => {
    if (showResults && !sent) {
      console.log('🚀 Sending data to Google Sheets...');
      const sheetURL = 'https://script.google.com/macros/s/AKfycbzpBqnrvqN_UEoKkw75FcUh6O-HFyC9fv0RvouSW1KFdHBrDgx2-Vo6_Sp2gUCGmKb3/exec';
      const payload: Record<string, any> = {
        'First Name': userData.firstName,
        'Last Name': userData.surname,
        'Email': userData.email,
        'School': userData.school,
        'Country': userData.country,
        'Students': userData.students,
        'Score': score,
        'Timestamp': new Date().toISOString(),
      };

      console.log('📊 Processing answers:', userAnswers);
      userAnswers.forEach(({ question, answer }) => {
        const col = columnNames[question];
        console.log(`🔍 Question: "${question}"`);
        console.log(`📝 Column mapping: "${col}"`);
        if (col) {
          payload[col] = answer;
          console.log(`✅ Added to payload: ${col} = ${answer}`);
        } else {
          console.log(`❌ No column mapping found for: "${question}"`);
        }
      });

      // Add selected features if available
      if (userFeatures.length > 0) {
        payload['Selected Features'] = userFeatures.join(', ');
        console.log(`✅ Added Selected Features: ${userFeatures.join(', ')}`);
      }

      console.log('📤 Final payload being sent:', payload);

      fetch(sheetURL, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify(payload)),
        mode: 'no-cors',
      }).then(() => {
        console.log('✅ Data sent to Google Sheet (no-cors mode, response not readable)');
      }).catch(error => {
        console.error('❌ Error sending data to Google Sheet:', error);
      });

      setSent(true);
    }
  }, [showResults, sent, userData, score, userAnswers, userFeatures]);

  const handleStart = () => {
    if (!userData.firstName || !userData.surname || !userData.school || !userData.country || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowEntryForm(false);
    setShowQuiz(true);
  };

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setFormAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    const currentQ = questions[currentSlide];
    
    let isAnswered = false;
    if (currentQ.type === 'checkbox') {
      const answers = formAnswers[currentQ.id] as string[] || [];
      isAnswered = answers.length > 0;
    } else {
      isAnswered = !!formAnswers[currentQ.id];
    }
    
    if (!isAnswered) {
      alert('Please select an answer to proceed.');
      return;
    }
    
    if (currentSlide === questions.length - 1) {
      processResults();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const processResults = () => {
    console.log('🔍 Starting form validation and processing...');
    console.log('📊 Form element:', formRef.current);

    let totalScore = 0;
    const answers: Array<{question: string, answer: string}> = [];
    const missingQuestions: string[] = [];

    // Materials question
    console.log('📝 Processing materials question...');
    const materialSelections = formAnswers.materials as string[] || [];
    console.log('🎯 Materials selections:', materialSelections);
    
    if (materialSelections.length === 0) {
      console.log('❌ Materials question NOT answered');
      missingQuestions.push('Materials question');
    } else {
      console.log('✅ Materials question answered');
      const materialsAnswer = materialSelections.join(', ');
      answers.push({ question: "What materials are your uniforms including PE kits made from? (Select all that apply)", answer: materialsAnswer });
      
      if (materialSelections.includes('dont_know')) {
        totalScore += 0;
      } else {
        if (!materialSelections.includes('virgin_synth')) totalScore += 10;
        if (!materialSelections.includes('conventional_cotton')) totalScore += 8;
        if (materialSelections.includes('organic_cotton')) totalScore += 9;
        if (materialSelections.includes('recycled_poly')) totalScore += 9;
      }
    }

    // Packaging question
    console.log('📝 Processing packaging question...');
    const packagingSelections = formAnswers.packaging as string[] || [];
    console.log('🎯 Packaging selections:', packagingSelections);
    
    if (packagingSelections.length === 0) {
      console.log('❌ Packaging question NOT answered');
      missingQuestions.push('Packaging question');
    } else {
      console.log('✅ Packaging question answered');
      const packagingAnswer = packagingSelections.join(', ');
      answers.push({ question: "What materials are your uniforms packaged in? (Select all that apply)", answer: packagingAnswer });
      
      if (packagingSelections.includes('dont_know')) {
        totalScore += 0;
      } else {
        if (!packagingSelections.includes('plastic')) totalScore += 2;
        if (packagingSelections.includes('recycled_plastic')) totalScore += 2;
        if (packagingSelections.includes('paper')) totalScore += 2;
      }
    }

    // Single radio questions
    const radioQuestions = ['q3', 'q4', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q19', 'q20', 'education'];
    const questionWeights = [5, 4, 5, 7, 8, 7, 6, 3, 5, 5, 5];
    
    radioQuestions.forEach((qId, index) => {
      console.log(`📝 Processing question ${qId}...`);
      const selectedValue = formAnswers[qId] as string;
      console.log(`🎯 Question ${qId} selected:`, selectedValue);
      
      if (selectedValue) {
        console.log(`✅ Question ${qId} answered`);
        // Score: Yes=1 gets full points, No=0 and Don't Know=2 both get 0 points
        const scoreValue = selectedValue === '1' ? 1 : 0;
        totalScore += questionWeights[index] * scoreValue;
        
        const questionObj = questions.find(q => q.id === qId);
        let answerText = 'Not Answered';
        if (selectedValue === '1') answerText = 'Yes';
        else if (selectedValue === '0') answerText = 'No';
        else if (selectedValue === '2') answerText = 'Don\'t Know';
        
        answers.push({ question: questionObj?.text || '', answer: answerText });
      } else {
        console.log(`❌ Question ${qId} NOT answered`);
        const questionObj = questions.find(q => q.id === qId);
        missingQuestions.push(questionObj?.text || qId);
      }
    });

    // Distribution question
    console.log('📝 Processing distribution question...');
    const distSelections = formAnswers.distribution as string[] || [];
    console.log('🎯 Distribution selections:', distSelections);
    
    if (distSelections.length === 0) {
      console.log('❌ Distribution question NOT answered');
      missingQuestions.push('Distribution question');
    } else {
      console.log('✅ Distribution question answered');
      const distAnswer = distSelections.join(', ');
      answers.push({ question: "How are uniforms distributed/ordered? (Select all that apply)", answer: distAnswer });
      
      if (distSelections.includes('dont_know')) {
        totalScore += 0;
      } else {
        if (distSelections.includes('school_shop')) totalScore += 4;
        if (!distSelections.includes('supplier_shop')) totalScore += 3;
        if (distSelections.includes('online_ordering')) totalScore += 4;
        if (distSelections.includes('pickup_school')) totalScore += 4;
        if (distSelections.includes('popup_events')) totalScore += 4;
      }
    }

    // AI question
    console.log('📝 Processing AI question...');
    const aiSelections = formAnswers.ai_usage as string[] || [];
    console.log('🎯 AI selections:', aiSelections);
    
    if (aiSelections.length === 0) {
      console.log('❌ AI question NOT answered');
      missingQuestions.push('AI usage question');
    } else {
      console.log('✅ AI question answered');
      const aiAnswer = aiSelections.join(', ');
      answers.push({ question: "Is AI integrated into your uniform program? (Select all that apply)", answer: aiAnswer });
      
      if (aiSelections.includes('no') || aiSelections.includes('dont_know')) {
        totalScore += 0;
      } else {
        if (aiSelections.includes('size_recommend')) totalScore += 3;
        if (aiSelections.includes('forecast_stock')) totalScore += 3;
      }
    }

    console.log('📊 Validation Summary:');
    console.log('✅ Questions answered:', 15 - missingQuestions.length);
    console.log('❌ Missing questions:', missingQuestions.length);
    console.log('📋 Missing questions list:', missingQuestions);

    if (missingQuestions.length > 0) {
      alert(`Please answer the following questions:\n\n${missingQuestions.join('\n')}`);
      return;
    }

    // Process extra questions (non-scored)
    const extra1Answer = formAnswers.extra1 as string || 'Not Answered';
    answers.push({ question: "How would you rate your current uniform program out of 10?", answer: extra1Answer });

    const extra2Answer = formAnswers.extra2 as string || 'Not Answered';
    answers.push({ question: "Would you consider improving this in the next 12 months by switching to a more sustainable program?", answer: extra2Answer });

    const extra3Answer = formAnswers.extra3 as string || 'Not Answered';
    answers.push({ question: "How important is sustainability within your school?", answer: extra3Answer });

    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);

    // Build customized bodyText based on answers
    let baseText = '';
    let customFeedback: string[] = [];

    if (percentage >= 67) {
      baseText = 'Your high score reflects strong practices.';
    } else if (percentage >= 33) {
      baseText = 'Your medium score shows some positive steps but room for improvement.';
    } else {
      baseText = 'Your low score indicates opportunities for significant enhancements.';
    }

    // Analyze specific areas and add custom feedback
    // Materials
    if (materialSelections.includes('virgin_synth') || materialSelections.includes('conventional_cotton')) {
      customFeedback.push('Consider switching to more sustainable materials like organic cotton or recycled polyester to reduce environmental impact.');
    } else if (materialSelections.includes('dont_know')) {
      customFeedback.push('Gaining visibility into your uniform materials could help identify sustainable alternatives.');
    }

    // Carbon offsetting and environmental impact
    if (formAnswers['q4'] === '0' || formAnswers['q4'] === '2') {
      customFeedback.push('Implementing verified carbon offset projects could help mitigate the emissions from uniform production.');
    }
    if (formAnswers['q3'] === '0' || formAnswers['q3'] === '2') {
      customFeedback.push('Tracking water, energy, and carbon usage in production would improve your environmental awareness.');
    }

    // Packaging
    if (packagingSelections.includes('plastic') && !packagingSelections.includes('recycled_plastic')) {
      customFeedback.push('Opt for biodegradable or recycled packaging to minimize waste.');
    }

    // Ethical supply chain
    if (formAnswers['q10'] === '0' || formAnswers['q10'] === '2' || formAnswers['q11'] === '0' || formAnswers['q11'] === '2' || formAnswers['q12'] === '0' || formAnswers['q12'] === '2') {
      customFeedback.push('Strengthen your supply chain by requiring ethical audits, living wage policies, and third-party certifications.');
    }

    // Distribution
    if (distSelections.includes('supplier_shop') || !distSelections.includes('online_ordering') || !distSelections.includes('popup_events')) {
      customFeedback.push('Enhance distribution with online ordering, pop-up events, or school pickups to reduce carbon footprints from travel.');
    }

    // AI usage
    if (aiSelections.includes('no') || aiSelections.includes('dont_know')) {
      customFeedback.push('Incorporating AI for size recommendations or stock forecasting could optimize your program and reduce returns/waste.');
    }

    // Takeback and education
    if (formAnswers['q13'] === '0' || formAnswers['q13'] === '2') {
      customFeedback.push('Adding a uniform collection and resale program would promote circularity.');
    }
    if (formAnswers['education'] === '0' || formAnswers['education'] === '2') {
      customFeedback.push('Educating students on fashion impacts could foster greater sustainability engagement.');
    }

    // Transparency
    if (formAnswers['q20'] === '0' || formAnswers['q20'] === '2') {
      customFeedback.push('Increasing supply chain transparency for parents and students would build trust.');
    }

    // Combine into final description
    let bodyText = baseText;
    if (customFeedback.length > 0) {
      bodyText += ' Specific areas to focus on: ' + customFeedback.join(' ');
    } else {
      bodyText += ' Keep building on transparency, technology, and sustainable practices.';
    }

    setScoreDescription(bodyText);
    setUserAnswers(answers);

    console.log('🎯 Total score:', totalScore);
    console.log('🎉 Form successfully processed!');
    console.log(`📊 Final score: ${percentage}%`);

    setShowQuiz(false);
    if (percentage < 67) {
      setShowFeatures(true);
    } else {
      setShowResults(true);
    }
  };

  const handleFeaturesSubmit = () => {
    const formElement = formRef.current;
    if (!formElement) return;
    
    const selectedFeatures = Array.from(formElement.querySelectorAll('.features-list input:checked') as NodeListOf<HTMLInputElement>)
      .map(input => input.value);
    if (selectedFeatures.length === 0) {
      alert('Please select at least one feature.');
      return;
    }
    setUserFeatures(selectedFeatures);
    userAnswers.push({ question: 'Selected features:', answer: selectedFeatures.join(', ') });
    setShowFeatures(false);
    setShowResults(true);
  };

  const handleCheckboxChange = (questionId: string, value: string, checked: boolean) => {
    const currentValues = (formAnswers[questionId] as string[]) || [];
    if (checked) {
      handleAnswerChange(questionId, [...currentValues, value]);
    } else {
      handleAnswerChange(questionId, currentValues.filter(v => v !== value));
    }
  };

  const renderMaterialsQuestion = () => (
    <div className="space-y-4">
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="virgin_synth" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.materials as string[] || []).includes('virgin_synth')}
          onChange={(e) => handleCheckboxChange('materials', 'virgin_synth', e.target.checked)}
        />
        <span className="text-sm font-medium">Virgin (Non-recycled) Synthetic Fibres like Polyester and Nylon</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="conventional_cotton" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.materials as string[] || []).includes('conventional_cotton')}
          onChange={(e) => handleCheckboxChange('materials', 'conventional_cotton', e.target.checked)}
        />
        <span className="text-sm font-medium">Conventional (non-organic) cotton</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="recycled_poly" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.materials as string[] || []).includes('recycled_poly')}
          onChange={(e) => handleCheckboxChange('materials', 'recycled_poly', e.target.checked)}
        />
        <span className="text-sm font-medium">Recycled Polyester</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="organic_cotton" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.materials as string[] || []).includes('organic_cotton')}
          onChange={(e) => handleCheckboxChange('materials', 'organic_cotton', e.target.checked)}
        />
        <span className="text-sm font-medium">Organic Cotton</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="dont_know" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.materials as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('materials', 'dont_know', e.target.checked)}
        />
        <span className="text-sm font-medium">Don't know</span>
      </label>
    </div>
  );

  const renderPackagingQuestion = () => (
    <div className="space-y-4">
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="packaging" 
          value="plastic" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.packaging as string[] || []).includes('plastic')}
          onChange={(e) => handleCheckboxChange('packaging', 'plastic', e.target.checked)}
        />
        <span className="text-sm font-medium">Plastic</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="packaging" 
          value="recycled_plastic" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.packaging as string[] || []).includes('recycled_plastic')}
          onChange={(e) => handleCheckboxChange('packaging', 'recycled_plastic', e.target.checked)}
        />
        <span className="text-sm font-medium">Recycled plastic</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="packaging" 
          value="paper" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.packaging as string[] || []).includes('paper')}
          onChange={(e) => handleCheckboxChange('packaging', 'paper', e.target.checked)}
        />
        <span className="text-sm font-medium">Paper</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="packaging" 
          value="dont_know" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.packaging as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('packaging', 'dont_know', e.target.checked)}
        />
        <span className="text-sm font-medium">Don't know</span>
      </label>
    </div>
  );

  const renderDistributionQuestion = () => (
    <div className="space-y-4">
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="school_shop" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('school_shop')}
          onChange={(e) => handleCheckboxChange('distribution', 'school_shop', e.target.checked)}
        />
        <span className="text-sm font-medium">School shop</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="supplier_shop" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('supplier_shop')}
          onChange={(e) => handleCheckboxChange('distribution', 'supplier_shop', e.target.checked)}
        />
        <span className="text-sm font-medium">Supplier shop</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="online_ordering" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('online_ordering')}
          onChange={(e) => handleCheckboxChange('distribution', 'online_ordering', e.target.checked)}
        />
        <span className="text-sm font-medium">Online ordering</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="pickup_school" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('pickup_school')}
          onChange={(e) => handleCheckboxChange('distribution', 'pickup_school', e.target.checked)}
        />
        <span className="text-sm font-medium">Pickup at school</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="popup_events" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('popup_events')}
          onChange={(e) => handleCheckboxChange('distribution', 'popup_events', e.target.checked)}
        />
        <span className="text-sm font-medium">Pop-up events (these events usually happen once or twice a year at the school premises)</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="dont_know" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.distribution as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('distribution', 'dont_know', e.target.checked)}
        />
        <span className="text-sm font-medium">Don't know</span>
      </label>
    </div>
  );

  const renderAIQuestion = () => (
    <div className="space-y-4">
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="size_recommend" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('size_recommend')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'size_recommend', e.target.checked)}
        />
        <span className="text-sm font-medium">For size recommendations to reduce returns</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="forecast_stock" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('forecast_stock')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'forecast_stock', e.target.checked)}
        />
        <span className="text-sm font-medium">For forecasting stock needs</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="no" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('no')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'no', e.target.checked)}
        />
        <span className="text-sm font-medium">No</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="dont_know" 
          className="w-4 h-4 text-primary focus:ring-primary border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'dont_know', e.target.checked)}
        />
        <span className="text-sm font-medium">Don't know</span>
      </label>
    </div>
  );

  const renderRadioQuestion = (questionId: string) => {
    return (
      <div className="space-y-4">
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
          <input 
            type="radio" 
            name={questionId} 
            value="1" 
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={formAnswers[questionId] === '1'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span className="text-sm font-medium">Yes</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
          <input 
            type="radio" 
            name={questionId} 
            value="0" 
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={formAnswers[questionId] === '0'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span className="text-sm font-medium">No</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
          <input 
            type="radio" 
            name={questionId} 
            value="2" 
            className="w-4 h-4 text-primary focus:ring-primary border-border"
            checked={formAnswers[questionId] === '2'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span className="text-sm font-medium">Don't Know</span>
        </label>
      </div>
    );
  };

  const renderSelectQuestion = (questionId: string) => (
    <select 
      name={questionId} 
      className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
      value={formAnswers[questionId] as string || ''}
      onChange={(e) => handleAnswerChange(questionId, e.target.value)}
    >
      <option value="">Select rating</option>
      {[...Array(11)].map((_, i) => (
        <option key={i} value={i}>{i}</option>
      ))}
    </select>
  );

  const renderExtraRadioQuestion = (questionId: string) => {
    const options = questionId === 'extra2' 
      ? ['Yes', 'No', 'Maybe']
      : ['Very important', 'Important', 'Somewhat important', 'Not important'];
    
    return (
      <div className="space-y-4">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
            <input 
              type="radio" 
              name={questionId} 
              value={option} 
              className="w-4 h-4 text-primary focus:ring-primary border-border"
              checked={formAnswers[questionId] === option}
              onChange={(e) => handleAnswerChange(questionId, e.target.value)}
            />
            <span className="text-sm font-medium">{option}</span>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
        
        {showEntryForm && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
                Sustainability Scorecard for School Uniforms
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
                placeholder="Surname"
                value={userData.surname}
                onChange={(e) => setUserData({...userData, surname: e.target.value})}
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
                type="number"
                placeholder="Number of Students"
                value={userData.students}
                onChange={(e) => setUserData({...userData, students: e.target.value})}
                className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                min="1"
                required
              />
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
                Start Scorecard
              </Button>
            </CardContent>
          </Card>
        )}

        {showQuiz && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader className="pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4 text-center">
                Sustainability Scorecard for School Uniforms
              </CardTitle>
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
                
                {questions[currentSlide].id === 'materials' && renderMaterialsQuestion()}
                {questions[currentSlide].id === 'packaging' && renderPackagingQuestion()}
                {questions[currentSlide].id === 'distribution' && renderDistributionQuestion()}
                {questions[currentSlide].id === 'ai_usage' && renderAIQuestion()}
                {questions[currentSlide].type === 'radio' && !['extra1', 'extra2', 'extra3'].includes(questions[currentSlide].id) && 
                  renderRadioQuestion(questions[currentSlide].id)}
                {questions[currentSlide].id === 'extra1' && renderSelectQuestion(questions[currentSlide].id)}
                {['extra2', 'extra3'].includes(questions[currentSlide].id) && renderExtraRadioQuestion(questions[currentSlide].id)}
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
                  {currentSlide === questions.length - 1 ? 'Submit Scorecard' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {showFeatures && (
          <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-heading text-center">Select Priorities</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Select what's important to you:</h2>
              <ul className="features-list list-none p-0 space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  'Natural, Sustainable Materials',
                  'Ethical Manufacturing',
                  'Free Uniform Program',
                  'Fully Managed Takeback Scheme',
                  'Feeding Program',
                  'Real-Time Sustainability Dashboard',
                  'Carbon Offsetting',
                  'Educational Programs',
                  'Farm & Factory Visits',
                  'Student Board',
                  'On-Campus School Shops',
                  'E-Commerce Lockers'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <input type="checkbox" value={feature.split(' (')[0]} className="w-4 h-4 text-primary focus:ring-primary border-border" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={handleFeaturesSubmit}
                className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Submit Priorities
              </Button>
            </CardContent>
          </Card>
        )}

        {showResults && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Your Sustainability Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <div className={`text-6xl font-bold ${getScoreColor(score)} mb-4`}>
                  {score}%
                </div>
                <div className="text-lg text-muted-foreground">Overall Sustainability Rating</div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                {scoreDescription}
              </p>
              
              {userFeatures.length > 0 && (
                <div className="mb-8 p-6 bg-muted/30 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3">🎉 You Qualify for a Free Consultation!</h3>
                  <p className="text-muted-foreground">Based on your interests in sustainable solutions, our team is excited to help you improve your uniform program.</p>
                </div>
              )}
              
              <Button asChild className="px-8 py-3 text-lg font-semibold">
                <a href="/contact">
                  Book Your Free Consultation
                </a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SustainabilityScorecard;
