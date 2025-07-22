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
  const [showImprove, setShowImprove] = useState(false);
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
  const [userImprove, setUserImprove] = useState<string | null>(null);
  const [userFeatures, setUserFeatures] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [scoreDescription, setScoreDescription] = useState('');

  // Form answers state
  const [formAnswers, setFormAnswers] = useState<Record<string, string | string[]>>({});

  const formRef = useRef<HTMLDivElement>(null);

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
    { id: 'ai_usage', text: 'Do you use AI in your uniform program? (Select all that apply)', type: 'checkbox' },
    { id: 'extra3', text: 'How important is sustainability within your school?', type: 'radio' },
    { id: 'extra1', text: 'How would you rate your current uniform program out of 10?', type: 'select' }
  ];

  const weights = [36, 5, 4, 6, 5, 7, 8, 7, 6, 3, 19, 5, 5, 5, 6]; // 15 scored questions, updated for distribution (19) and added education (5)
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
    'Do you use AI in your uniform program? (Select all that apply)': 'AI Usage',
    'How would you rate your current uniform program out of 10?': 'Program Rating',
    'How important is sustainability within your school?': 'Sustainability Importance',
    'Do you want to improve the sustainability of your school uniforms?': 'Wants to Improve',
    'Selected features:': 'Selected Features'
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
      
      // Scroll to top when assessment starts
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      console.log('📤 Sending data to Google Sheets...');
      console.log('👤 User data:', userData);
      console.log('Score:', score);
      console.log('User answers:', userAnswers);

      const sheetURL = 'https://script.google.com/macros/s/AKfycbxpWh9rxKt3mBM-ENSgSwiHVhF5uP7YaHUqYo_viblyXVb32dSRwMyx4t6EfEHMKWe3/exec';
      
      // Create a simplified data structure
      const formData = {
        // User information
        firstName: userData.firstName,
        lastName: userData.surname, // Changed from 'surname' to 'lastName' for clarity
        email: userData.email,
        school: userData.school,
        country: userData.country,
        students: userData.students,
        score: score,
        timestamp: new Date().toISOString(),
        
        // Answers - send as key-value pairs using question IDs
        answers: {},
        
        // Special fields for easier access
        wantsToImprove: '', // Will be populated below
        selectedFeatures: '' // Will be populated below
      };

      // Add all answers using question IDs as keys
      userAnswers.forEach(({ question, answer }) => {
        // Find the question ID for this question text
        const questionObj = questions.find(q => q.text === question);
        if (questionObj) {
          formData.answers[questionObj.id] = answer;
        } else {
          // Handle special questions that aren't in the main questions array
          if (question === 'Do you want to improve the sustainability of your school uniforms?') {
            formData.answers['wants_improvement'] = answer;
            formData.wantsToImprove = answer; // Also add as top-level field
          } else if (question === 'Selected features:') {
            formData.answers['selected_features'] = answer;
            formData.selectedFeatures = answer; // Also add as top-level field
          }
        }
      });

      console.log('Final form data being sent:', formData);
      console.log('UserData check:', {
        firstName: userData.firstName,
        surname: userData.surname, 
        country: userData.country
      });
      console.log('UserAnswers array:', userAnswers);
      console.log('Looking for wants_improvement and selected_features...');
      userAnswers.forEach(({ question, answer }) => {
        if (question.includes('improve') || question.includes('features')) {
          console.log('Found special question:', question, '→', answer);
        }
      });

      fetch(sheetURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      }).then(() => {
        console.log('Data sent to Google Sheet successfully');
      }).catch(error => {
        console.error('Error sending data to Google Sheet:', error);
      });

      setSent(true);
    }
  }, [showResults, sent, userData, score, userAnswers, questions]);

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
      // Scroll to top of card on mobile for better UX
      setTimeout(() => {
        const card = document.querySelector('.bg-gradient-to-br');
        if (card && window.innerWidth < 768) {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const processResults = () => {
    console.log('Starting form validation and processing...');
    console.log('Form element:', formRef.current);

    let totalScore = 0;
    const answers: Array<{question: string, answer: string}> = [];
    const missingQuestions: string[] = [];

    // Materials question
    console.log('Processing materials question...');
    const materialSelections = formAnswers.materials as string[] || [];
    console.log('Materials selections:', materialSelections);
    
    if (materialSelections.length === 0) {
      console.log('Materials question NOT answered');
      missingQuestions.push('Materials question');
    } else {
      console.log('Materials question answered');
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
    console.log('Processing packaging question...');
    const packagingSelections = formAnswers.packaging as string[] || [];
    console.log('Packaging selections:', packagingSelections);
    
    if (packagingSelections.length === 0) {
      console.log('Packaging question NOT answered');
      missingQuestions.push('Packaging question');
    } else {
      console.log('Packaging question answered');
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
      console.log(`Processing question ${qId}...`);
      const selectedValue = formAnswers[qId] as string;
      console.log(`Question ${qId} selected:`, selectedValue);
      
      if (selectedValue) {
        console.log(`Question ${qId} answered`);
        const scoreValue = selectedValue === '2' ? 0 : parseInt(selectedValue);
        totalScore += questionWeights[index] * scoreValue;
        
        let answerText = '';
        if (selectedValue === '1') answerText = 'Yes';
        else if (selectedValue === '0') answerText = 'No';
        else if (selectedValue === '2') answerText = 'Don\'t Know';
        else answerText = selectedValue;
        
        answers.push({ question: questions.find(q => q.id === qId)?.text || '', answer: answerText });
      } else {
        console.log(`Question ${qId} NOT answered`);
        const questionObj = questions.find(q => q.id === qId);
        missingQuestions.push(questionObj?.text || qId);
      }
    });

    // Distribution question
    console.log('Processing distribution question...');
    const distSelections = formAnswers.distribution as string[] || [];
    console.log('Distribution selections:', distSelections);
    
    if (distSelections.length === 0) {
      console.log('Distribution question NOT answered');
      missingQuestions.push('Distribution question');
    } else {
      console.log('Distribution question answered');
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
    console.log('Processing AI question...');
    const aiSelections = formAnswers.ai_usage as string[] || [];
    console.log('AI selections:', aiSelections);
    
    if (aiSelections.length === 0) {
      console.log('AI question NOT answered');
      missingQuestions.push('AI usage question');
    } else {
      console.log('AI question answered');
      const aiAnswer = aiSelections.join(', ');
      answers.push({ question: "Do you use AI in your uniform program? (Select all that apply)", answer: aiAnswer });
      
      if (aiSelections.includes('no') || aiSelections.includes('dont_know')) {
        totalScore += 0;
      } else {
        if (aiSelections.includes('size_recommend')) totalScore += 3;
        if (aiSelections.includes('forecast_stock')) totalScore += 3;
      }
    }

    console.log('Validation Summary:');
    console.log('Questions answered:', 15 - missingQuestions.length);
    console.log('Missing questions:', missingQuestions.length);
    console.log('Missing questions list:', missingQuestions);

    if (missingQuestions.length > 0) {
      alert(`Please answer the following questions:\n\n${missingQuestions.join('\n')}`);
      return;
    }

    // Process extra questions (non-scored)
    const extra1Answer = formAnswers.extra1 as string || 'Not Answered';
    answers.push({ question: "How would you rate your current uniform program out of 10?", answer: extra1Answer });

    const extra2AnswerText = formAnswers.extra2 as string || 'Not Answered';
    answers.push({ question: "Would you consider improving this in the next 12 months by switching to a more sustainable program?", answer: extra2AnswerText });

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

    // Distribution - Fixed logic to only recommend when distribution is actually poor
    if (distSelections.includes('supplier_shop') && 
        !distSelections.includes('online_ordering') && 
        !distSelections.includes('pickup_school') && 
        !distSelections.includes('popup_events')) {
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

    console.log('Total score:', totalScore);
    console.log('Form successfully processed!');
    console.log(`Final score: ${percentage}%`);

    setShowQuiz(false);
    
    if (percentage < 67) {
      setShowImprove(true);
    } else {
      setShowResults(true);
    }
  };

  const handleImproveSubmit = () => {
    const formElement = formRef.current;
    if (!formElement) return;
    
    const selected = formElement.querySelector('input[name="improve"]:checked') as HTMLInputElement;
    if (!selected) {
      alert('Please select an option.');
      return;
    }
    setUserImprove(selected.value);
    setUserAnswers(prev => [...prev, { question: 'Do you want to improve the sustainability of your school uniforms?', answer: selected.value }]);
    setShowImprove(false);
    if (selected.value === 'yes') {
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
    setUserAnswers(prev => [...prev, { question: 'Selected features:', answer: selectedFeatures.join(', ') }]);
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

  // Progress calculation
  const progressValue = ((currentSlide + 1) / questions.length) * 100;

  // Score color based on percentage
  const getScoreColor = (score: number) => {
    if (score >= 67) return 'text-green-600';
    if (score >= 33) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 67) return <Trophy className="w-8 h-8 text-green-600" />;
    if (score >= 33) return <Target className="w-8 h-8 text-yellow-600" />;
    return <Lightbulb className="w-8 h-8 text-red-600" />;
  };

  const renderMaterialsQuestion = () => (
    <div className="space-y-4">
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="materials" 
          value="virgin_synth" 
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
          checked={(formAnswers.distribution as string[] || []).includes('popup_events')}
          onChange={(e) => handleCheckboxChange('distribution', 'popup_events', e.target.checked)}
        />
        <span className="text-sm font-medium">Pop-up events</span>
      </label>
      <label className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
        <input 
          type="checkbox" 
          name="distribution" 
          value="dont_know" 
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
          className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
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
    <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
      {showEntryForm && (
        <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
          <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
            <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-3 md:mb-4">
              Sustainability Scorecard for School Uniforms
            </CardTitle>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how sustainable your school uniform program is and get personalized recommendations for improvement.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={userData.firstName}
                  onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={userData.surname}
                  onChange={(e) => setUserData({...userData, surname: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">School Name</label>
                <input
                  type="text"
                  placeholder="Enter school name"
                  value={userData.school}
                  onChange={(e) => setUserData({...userData, school: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Country</label>
                <select
                  value={userData.country}
                  onChange={(e) => setUserData({...userData, country: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                >
                  <option value="">Select your country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Ivory Coast">Ivory Coast</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Number of Students</label>
                <input
                  type="number"
                  placeholder="Enter student count"
                  value={userData.students}
                  onChange={(e) => setUserData({...userData, students: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  min="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full p-3 md:p-4 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                  required
                />
              </div>
            </div>
            {entryError && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                Please fill all fields to start the assessment.
              </div>
            )}
            <Button
              onClick={handleStart}
              className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02]"
              size="lg"
            >
              Start Sustainability Assessment
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {showQuiz && (
        <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
          <CardHeader className="pb-4 md:pb-6 px-4 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <div className="text-sm font-medium text-muted-foreground">
                Question {currentSlide + 1} of {questions.length}
              </div>
              <div className="text-sm font-medium text-primary">
                {Math.round(progressValue)}% Complete
              </div>
            </div>
            <Progress value={progressValue} className="h-2 md:h-3 mb-4 md:mb-6" />
            <CardTitle className="text-lg md:text-xl font-bold text-heading leading-relaxed">
              {questions[currentSlide].text}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <div className="min-h-[160px] md:min-h-[200px]">
              {questions[currentSlide].id === 'materials' && renderMaterialsQuestion()}
              {questions[currentSlide].id === 'packaging' && renderPackagingQuestion()}
              {questions[currentSlide].id === 'distribution' && renderDistributionQuestion()}
              {questions[currentSlide].id === 'ai_usage' && renderAIQuestion()}
              {questions[currentSlide].type === 'radio' && !['extra1', 'extra2', 'extra3'].includes(questions[currentSlide].id) && 
                renderRadioQuestion(questions[currentSlide].id)}
              {questions[currentSlide].id === 'extra1' && renderSelectQuestion(questions[currentSlide].id)}
              {['extra2', 'extra3'].includes(questions[currentSlide].id) && renderExtraRadioQuestion(questions[currentSlide].id)}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 md:pt-6 border-t border-border gap-3 sm:gap-0">
              <Button
                onClick={handlePrev}
                variant="outline"
                className={`flex items-center justify-center space-x-2 w-full sm:w-auto order-2 sm:order-1 py-2.5 md:py-3 text-sm md:text-base ${currentSlide === 0 ? 'invisible' : ''}`}
                disabled={currentSlide === 0}
                size="lg"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              <Button
                onClick={handleNext}
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto order-1 sm:order-2 py-2.5 md:py-3 text-sm md:text-base"
                size="lg"
              >
                <span>{currentSlide === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {showImprove && (
        <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-xl md:text-2xl font-bold text-heading text-center">
              Ready to Improve Your Sustainability?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <p className="text-center text-muted-foreground text-base md:text-lg">
              Do you want to improve the sustainability of your school uniforms?
            </p>
            <div className="space-y-3 md:space-y-4">
              <label className="flex items-center space-x-3 p-3 md:p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <input type="radio" name="improve" value="yes" className="w-4 h-4 text-primary focus:ring-primary border-border" />
                <span className="text-base md:text-lg font-medium">Yes, I want to improve our sustainability</span>
              </label>
              <label className="flex items-center space-x-3 p-3 md:p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                <input type="radio" name="improve" value="no" className="w-4 h-4 text-primary focus:ring-primary border-border" />
                <span className="text-base md:text-lg font-medium">No, I'm satisfied with our current approach</span>
              </label>
            </div>
            <Button 
              onClick={handleImproveSubmit}
              className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {showFeatures && (
        <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-xl md:text-2xl font-bold text-heading text-center">
              What's Most Important to You?
            </CardTitle>
            <p className="text-center text-muted-foreground text-sm md:text-base">
              Select the features that matter most for your school's uniform program
            </p>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6">
            <div className="features-list grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                <label key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                  <input type="checkbox" value={feature.split(' (')[0]} className="w-4 h-4 text-primary focus:ring-primary border-border rounded" />
                  <span className="text-sm font-medium">{feature}</span>
                </label>
              ))}
            </div>
            <Button 
              onClick={handleFeaturesSubmit}
              className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Submit Priorities
            </Button>
          </CardContent>
        </Card>
      )}

      {showResults && (
        <Card className="bg-gradient-to-br from-background to-muted border-0 shadow-xl">
          <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
            <div className="flex justify-center mb-4 md:mb-6">
              {getScoreIcon(score)}
            </div>
            <CardTitle className="text-2xl md:text-4xl font-bold text-heading mb-2">
              Your Sustainability Score
            </CardTitle>
            <div className={`text-4xl md:text-6xl font-bold ${getScoreColor(score)} mb-3 md:mb-4`}>
              {score}%
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {scoreDescription}
            </p>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            {userFeatures.length > 0 && (
              <div className="mb-6 md:mb-8 p-4 md:p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="text-xl md:text-2xl font-bold text-heading mb-3 text-center">
                  You Qualify for a Free Consultation!
                </h3>
                <p className="text-center text-foreground text-base md:text-lg">
                  Based on your interests, we're excited to help. Book now to discuss tailored solutions with Kapes.
                </p>
              </div>
            )}
            
            {/* Check if user said no to improving in next 12 months */}
            {formAnswers.extra2 === '0' ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Button 
                    disabled
                    className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold bg-muted text-muted-foreground rounded-lg w-full sm:w-auto opacity-50 cursor-not-allowed"
                    size="lg"
                  >
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 text-red-500">✕</div>
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm md:text-base max-w-lg">
                  We would love to speak to you at a time when you are considering switching to a more sustainable school uniform program. Please reach out if this changes.
                </p>
              </div>
            ) : userImprove === 'no' ? (
              <div className="text-center">
                <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
                  We want to use your time as valuably as possible, so we would love to speak to you when you want to improve the sustainability of your uniform program.
                </p>
              </div>
            ) : (
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all transform hover:scale-[1.02] w-full sm:w-auto"
                  size="lg"
                >
                  <a href="/consultation">
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SustainabilityScorecard;
