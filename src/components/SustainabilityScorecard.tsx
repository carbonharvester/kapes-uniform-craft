import React, { useState, useRef, useEffect } from 'react';

interface SustainabilityScorecardProps {
  initialData?: {
    name: string;
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
    name: initialData?.name || '',
    school: initialData?.school || '',
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
    { id: 'extra1', text: 'How would you rate your current uniform program out of 10?', type: 'select' },
    { id: 'extra2', text: 'Would you consider improving this in the next 12 months by switching to a more sustainable program?', type: 'radio' },
    { id: 'extra3', text: 'How important is sustainability within your school?', type: 'radio' }
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
    'Would you consider improving this in the next 12 months by switching to a more sustainable program?': 'Improvement Consideration',
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
      const sheetURL = 'https://script.google.com/macros/s/AKfycbxpWh9rxKt3mBM-ENSgSwiHVhF5uP7YaHUqYo_viblyXVb32dSRwMyx4t6EfEHMKWe3/exec';
      const formData: Record<string, any> = {
        name: userData.name,
        email: userData.email,
        school: userData.school,
        students: userData.students,
        score: score,
      };

      userAnswers.forEach(({ question, answer }) => {
        const col = columnNames[question];
        if (col) {
          formData[col.replace(/ /g, '_')] = answer;
        }
      });

      fetch(sheetURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'no-cors'
      }).then(() => {
        console.log('Data sent to Google Sheet');
      }).catch(error => {
        console.error('Error sending data:', error);
      });

      setSent(true);
    }
  }, [showResults, sent, userData, score, userAnswers]);

  const handleStart = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
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
        totalScore += questionWeights[index] * parseInt(selectedValue);
        const questionObj = questions.find(q => q.id === qId);
        const answerText = selectedValue === '1' ? 'Yes' : selectedValue === '0' ? 'No/Don\'t Know' : selectedValue;
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
      answers.push({ question: "Do you use AI in your uniform program? (Select all that apply)", answer: aiAnswer });
      
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
    if (formAnswers['q4'] === '0') {
      customFeedback.push('Implementing verified carbon offset projects could help mitigate the emissions from uniform production.');
    }
    if (formAnswers['q3'] === '0') {
      customFeedback.push('Tracking water, energy, and carbon usage in production would improve your environmental awareness.');
    }

    // Packaging
    if (packagingSelections.includes('plastic') && !packagingSelections.includes('recycled_plastic')) {
      customFeedback.push('Opt for biodegradable or recycled packaging to minimize waste.');
    }

    // Ethical supply chain
    if (formAnswers['q10'] === '0' || formAnswers['q11'] === '0' || formAnswers['q12'] === '0') {
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
    if (formAnswers['q13'] === '0') {
      customFeedback.push('Adding a uniform collection and resale program would promote circularity.');
    }
    if (formAnswers['education'] === '0') {
      customFeedback.push('Educating students on fashion impacts could foster greater sustainability engagement.');
    }

    // Transparency
    if (formAnswers['q20'] === '0') {
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
    userAnswers.push({ question: 'Do you want to improve the sustainability of your school uniforms?', answer: selected.value });
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
    <div className="space-y-3">
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="materials" 
          value="virgin_synth" 
          className="rounded border-border"
          checked={(formAnswers.materials as string[] || []).includes('virgin_synth')}
          onChange={(e) => handleCheckboxChange('materials', 'virgin_synth', e.target.checked)}
        />
        <span>Virgin (Non-recycled) Synthetic Fibres like Polyester and Nylon</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="materials" 
          value="conventional_cotton" 
          className="rounded border-border"
          checked={(formAnswers.materials as string[] || []).includes('conventional_cotton')}
          onChange={(e) => handleCheckboxChange('materials', 'conventional_cotton', e.target.checked)}
        />
        <span>Conventional (non-organic) cotton</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="materials" 
          value="recycled_poly" 
          className="rounded border-border"
          checked={(formAnswers.materials as string[] || []).includes('recycled_poly')}
          onChange={(e) => handleCheckboxChange('materials', 'recycled_poly', e.target.checked)}
        />
        <span>Recycled Polyester</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="materials" 
          value="organic_cotton" 
          className="rounded border-border"
          checked={(formAnswers.materials as string[] || []).includes('organic_cotton')}
          onChange={(e) => handleCheckboxChange('materials', 'organic_cotton', e.target.checked)}
        />
        <span>Organic Cotton</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="materials" 
          value="dont_know" 
          className="rounded border-border"
          checked={(formAnswers.materials as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('materials', 'dont_know', e.target.checked)}
        />
        <span>Don't know</span>
      </label>
    </div>
  );

  const renderPackagingQuestion = () => (
    <div className="space-y-3">
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="packaging" 
          value="plastic" 
          className="rounded border-border"
          checked={(formAnswers.packaging as string[] || []).includes('plastic')}
          onChange={(e) => handleCheckboxChange('packaging', 'plastic', e.target.checked)}
        />
        <span>Plastic</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="packaging" 
          value="recycled_plastic" 
          className="rounded border-border"
          checked={(formAnswers.packaging as string[] || []).includes('recycled_plastic')}
          onChange={(e) => handleCheckboxChange('packaging', 'recycled_plastic', e.target.checked)}
        />
        <span>Recycled plastic</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="packaging" 
          value="paper" 
          className="rounded border-border"
          checked={(formAnswers.packaging as string[] || []).includes('paper')}
          onChange={(e) => handleCheckboxChange('packaging', 'paper', e.target.checked)}
        />
        <span>Paper</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="packaging" 
          value="dont_know" 
          className="rounded border-border"
          checked={(formAnswers.packaging as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('packaging', 'dont_know', e.target.checked)}
        />
        <span>Don't know</span>
      </label>
    </div>
  );

  const renderDistributionQuestion = () => (
    <div className="space-y-3">
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="school_shop" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('school_shop')}
          onChange={(e) => handleCheckboxChange('distribution', 'school_shop', e.target.checked)}
        />
        <span>School shop</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="supplier_shop" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('supplier_shop')}
          onChange={(e) => handleCheckboxChange('distribution', 'supplier_shop', e.target.checked)}
        />
        <span>Supplier shop</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="online_ordering" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('online_ordering')}
          onChange={(e) => handleCheckboxChange('distribution', 'online_ordering', e.target.checked)}
        />
        <span>Online ordering</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="pickup_school" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('pickup_school')}
          onChange={(e) => handleCheckboxChange('distribution', 'pickup_school', e.target.checked)}
        />
        <span>Pickup at school</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="popup_events" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('popup_events')}
          onChange={(e) => handleCheckboxChange('distribution', 'popup_events', e.target.checked)}
        />
        <span>Pop-up events (these events usually happen once or twice a year at the school premises)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="distribution" 
          value="dont_know" 
          className="rounded border-border"
          checked={(formAnswers.distribution as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('distribution', 'dont_know', e.target.checked)}
        />
        <span>Don't know</span>
      </label>
    </div>
  );

  const renderAIQuestion = () => (
    <div className="space-y-3">
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="size_recommend" 
          className="rounded border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('size_recommend')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'size_recommend', e.target.checked)}
        />
        <span>For size recommendations to reduce returns</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="forecast_stock" 
          className="rounded border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('forecast_stock')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'forecast_stock', e.target.checked)}
        />
        <span>For forecasting stock needs</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="no" 
          className="rounded border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('no')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'no', e.target.checked)}
        />
        <span>No</span>
      </label>
      <label className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          name="ai_usage" 
          value="dont_know" 
          className="rounded border-border"
          checked={(formAnswers.ai_usage as string[] || []).includes('dont_know')}
          onChange={(e) => handleCheckboxChange('ai_usage', 'dont_know', e.target.checked)}
        />
        <span>Don't know</span>
      </label>
    </div>
  );

  const renderRadioQuestion = (questionId: string) => {
    return (
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            name={questionId} 
            value="1" 
            className="border-border"
            checked={formAnswers[questionId] === '1'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span>Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            name={questionId} 
            value="0" 
            className="border-border"
            checked={formAnswers[questionId] === '0'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span>No</span>
        </label>
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            name={questionId} 
            value="0" 
            className="border-border"
            checked={formAnswers[questionId] === '0'}
            onChange={(e) => handleAnswerChange(questionId, e.target.value)}
          />
          <span>Don't Know</span>
        </label>
      </div>
    );
  };

  const renderSelectQuestion = (questionId: string) => (
    <select 
      name={questionId} 
      className="w-full p-3 border border-border rounded bg-background text-foreground"
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
      <div className="space-y-3">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input 
              type="radio" 
              name={questionId} 
              value={option} 
              className="border-border"
              checked={formAnswers[questionId] === option}
              onChange={(e) => handleAnswerChange(questionId, e.target.value)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-5 bg-card rounded-lg shadow-lg" ref={formRef}>
        <h1 className="text-heading text-3xl font-bold mb-5 text-center">
          Sustainability Scorecard for School Uniforms
        </h1>
        
        {showEntryForm && (
          <div className="text-left space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              className="w-full p-3 border border-border rounded bg-background text-foreground"
              required
            />
            <input
              type="text"
              placeholder="School Name"
              value={userData.school}
              onChange={(e) => setUserData({...userData, school: e.target.value})}
              className="w-full p-3 border border-border rounded bg-background text-foreground"
              required
            />
            <input
              type="number"
              placeholder="Number of Students"
              value={userData.students}
              onChange={(e) => setUserData({...userData, students: e.target.value})}
              className="w-full p-3 border border-border rounded bg-background text-foreground"
              min="1"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              className="w-full p-3 border border-border rounded bg-background text-foreground"
              required
            />
            {entryError && (
              <div className="text-destructive mb-4 text-center">
                Please fill all fields to start.
              </div>
            )}
            <button
              onClick={handleStart}
              className="w-full bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90"
            >
              Start Scorecard
            </button>
          </div>
        )}

        {showQuiz && (
          <div>
            <div className="mb-5 text-center">
              <progress 
                value={((currentSlide + 1) / questions.length) * 100} 
                max="100"
                className="w-full h-5 [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-primary"
              />
              <div className="text-sm text-muted-foreground mt-1">
                {Math.round(((currentSlide + 1) / questions.length) * 100)}% Complete
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block mb-3 font-bold text-foreground">
                {questions[currentSlide].text}
              </label>
              
              {questions[currentSlide].id === 'materials' && renderMaterialsQuestion()}
              {questions[currentSlide].id === 'packaging' && renderPackagingQuestion()}
              {questions[currentSlide].id === 'distribution' && renderDistributionQuestion()}
              {questions[currentSlide].id === 'ai_usage' && renderAIQuestion()}
              {questions[currentSlide].type === 'radio' && !['extra1', 'extra2', 'extra3'].includes(questions[currentSlide].id) && 
                renderRadioQuestion(questions[currentSlide].id)}
              {questions[currentSlide].id === 'extra1' && renderSelectQuestion(questions[currentSlide].id)}
              {['extra2', 'extra3'].includes(questions[currentSlide].id) && renderExtraRadioQuestion(questions[currentSlide].id)}
            </div>
            
            <div className="flex justify-between mt-5">
              <button
                onClick={handlePrev}
                className={`w-[48%] bg-secondary text-secondary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-secondary/80 ${currentSlide === 0 ? 'hidden' : 'inline-block'}`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="w-[48%] bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90 ml-auto"
              >
                {currentSlide === questions.length - 1 ? 'Submit Scorecard' : 'Next'}
              </button>
            </div>
          </div>
        )}

        {showImprove && (
          <div className="mt-8 p-5 bg-muted rounded-lg text-left">
            <h2 className="text-heading text-xl mb-4">Do you want to improve the sustainability of your school uniforms?</h2>
            <div className="space-y-3 mb-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="improve" value="yes" className="border-border" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="improve" value="no" className="border-border" />
                <span>No</span>
              </label>
            </div>
            <button 
              onClick={handleImproveSubmit}
              className="w-full bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90"
            >
              Submit
            </button>
          </div>
        )}

        {showFeatures && (
          <div className="mt-8 p-5 bg-muted rounded-lg text-left">
            <h2 className="text-heading text-xl mb-4">Select what's important to you:</h2>
            <ul className="features-list list-none p-0 space-y-2 mb-4">
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
                <li key={index} className="flex items-center space-x-2">
                  <input type="checkbox" value={feature.split(' (')[0]} className="rounded border-border" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleFeaturesSubmit}
              className="w-full bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90"
            >
              Submit Priorities
            </button>
          </div>
        )}

        {showResults && (
          <div className="mt-8 p-5 bg-muted rounded-lg text-center">
            <h2 className="text-heading text-2xl mb-4">
              Your Sustainability Score: {score}%
            </h2>
            <p className="mb-5 text-foreground">
              {scoreDescription}
            </p>
            
            {userFeatures.length > 0 && (
              <div className="mb-6 p-4 bg-background rounded-lg">
                <h3 className="text-heading text-xl mb-3">You Qualify for a Free Consultation!</h3>
                <p className="mb-4 text-foreground">Based on your interests, we're excited to help. Book now to discuss tailored solutions with Kapes.</p>
              </div>
            )}
            
            <div className="space-y-4">
              <button className="bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90">
                <a href="/consultation" className="text-primary-foreground no-underline">
                  Book Your Free Consultation
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainabilityScorecard;