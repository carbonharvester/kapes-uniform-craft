import React, { useState, useRef, useEffect } from 'react';

declare global {
  interface Window {
    jsPDF: any;
  }
}

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
  const [showConsultation, setShowConsultation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entryError, setEntryError] = useState(false);

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

  const formRef = useRef<HTMLDivElement>(null);

  const questions = [
    { id: 'materials', text: 'What materials are your uniforms including PE kits made from? (Select all that apply)', type: 'checkbox' },
    { id: 'q3', text: 'Do you know how much water, energy, and carbon emissions result from the production of your uniforms?', type: 'radio' },
    { id: 'q4', text: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?', type: 'radio' },
    { id: 'q8', text: 'Are your uniforms packaged in biodegradable or recyclable materials?', type: 'radio' },
    { id: 'q9', text: 'Do you require your suppliers to disclose their environmental impact?', type: 'radio' },
    { id: 'q10', text: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?', type: 'radio' },
    { id: 'q11', text: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?', type: 'radio' },
    { id: 'q12', text: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?', type: 'radio' },
    { id: 'q13', text: 'Does your school collect and resell or giveaway used uniforms?', type: 'radio' },
    { id: 'q14', text: 'Does your uniform program support any social causes?', type: 'radio' },
    { id: 'q15', text: 'Does your school have a uniform shop?', type: 'radio' },
    { id: 'q16', text: 'Does your supplier have a shop?', type: 'radio' },
    { id: 'q17', text: 'Do you have online ordering for uniforms?', type: 'radio' },
    { id: 'q18', text: 'Can parents pick up at school?', type: 'radio' },
    { id: 'q19', text: 'Have your uniforms been tested for harmful or banned chemicals?', type: 'radio' },
    { id: 'q20', text: 'Do your students, parents, and staff have full transparency of your supply chain?', type: 'radio' },
    { id: 'q21', text: 'Is AI used to provide size recommendations for parents?', type: 'radio' },
    { id: 'q22', text: 'Do you or your supplier use AI to forecast uniform stock needs?', type: 'radio' },
    { id: 'extra1', text: 'How would you rate your current uniform program out of 10?', type: 'select' },
    { id: 'extra2', text: 'Would you consider improving this in the next 12 months by switching to a more sustainable program?', type: 'radio' },
    { id: 'extra3', text: 'How important is sustainability within your school?', type: 'radio' }
  ];

  const weights = [36, 5, 4, 6, 5, 7, 8, 7, 6, 3, 4, 3, 4, 4, 5, 5, 3, 3];
  const maxScore = 111;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = () => {
      console.log('jsPDF loaded');
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleStart = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowEntryForm(false);
    setShowQuiz(true);
  };

  const handleNext = () => {
    const formElement = formRef.current;
    if (!formElement) return;
    
    const currentQ = questions[currentSlide];
    
    let isAnswered = false;
    if (currentQ.type === 'checkbox') {
      isAnswered = !!formElement.querySelector(`input[name="${currentQ.id}"]:checked`);
    } else if (currentQ.type === 'select') {
      const selectElement = formElement.querySelector(`select[name="${currentQ.id}"]`) as HTMLSelectElement;
      isAnswered = selectElement && selectElement.value !== '';
    } else {
      isAnswered = !!formElement.querySelector(`input[name="${currentQ.id}"]:checked`);
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
    const formElement = formRef.current;
    if (!formElement) return;

    let totalScore = 0;
    const answers: Array<{question: string, answer: string}> = [];

    // Materials question (special handling)
    const materialSelections = Array.from(formElement.querySelectorAll('input[name="materials"]:checked') as NodeListOf<HTMLInputElement>)
      .map(cb => cb.value);
    const materialsAnswer = materialSelections.join(', ') || 'Not Answered';
    answers.push({ question: "What materials are your uniforms including PE kits made from?", answer: materialsAnswer });
    
    if (materialSelections.includes('dont_know')) {
      totalScore += 0;
    } else {
      if (!materialSelections.includes('virgin_synth')) totalScore += 10;
      if (!materialSelections.includes('conventional_cotton')) totalScore += 8;
      if (materialSelections.includes('organic_cotton')) totalScore += 9;
      if (materialSelections.includes('recycled_poly')) totalScore += 9;
    }

    const percentage = Math.round((totalScore / maxScore) * 100);
    setScore(percentage);
    
    let bodyText = '';
    if (percentage >= 67) {
      bodyText = 'Your high score reflects strong practices. To maximize, double down on transparency and technology.';
    } else if (percentage >= 33) {
      bodyText = 'Your medium score shows some positive steps but gaps in offsetting and distribution. Enhance by adding AI tools and takeback programs.';
    } else {
      bodyText = 'Your low score is likely due to reliance on traditional materials and lack of transparency or ethical audits. To improve, focus on sustainable fabrics and supply chain practices.';
    }
    setScoreDescription(bodyText);
    setUserAnswers(answers);

    setShowQuiz(false);
    if (percentage < 67) {
      setShowImprove(true);
    } else {
      setShowResults(true);
    }
  };

  const renderMaterialsQuestion = () => (
    <div className="space-y-3">
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="materials" value="virgin_synth" className="rounded border-border" />
        <span>Virgin (Non-recycled) Synthetic Fibres like Polyester and Nylon</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="materials" value="conventional_cotton" className="rounded border-border" />
        <span>Conventional (non-organic) cotton</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="materials" value="recycled_poly" className="rounded border-border" />
        <span>Recycled Polyester</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="materials" value="organic_cotton" className="rounded border-border" />
        <span>Organic Cotton</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="materials" value="dont_know" className="rounded border-border" />
        <span>Don't know</span>
      </label>
    </div>
  );

  const renderRadioQuestion = (questionId: string) => {
    const getValue = (option: string) => {
      if (questionId === 'q16' && option === 'No') return '1';
      if (questionId === 'q16' && (option === 'Yes' || option === "Don't Know")) return '0';
      return option === 'Yes' ? '1' : '0';
    };

    return (
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input type="radio" name={questionId} value={getValue('Yes')} className="border-border" />
          <span>Yes</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name={questionId} value={getValue('No')} className="border-border" />
          <span>No</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name={questionId} value={getValue("Don't Know")} className="border-border" />
          <span>Don't Know</span>
        </label>
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
              {questions[currentSlide].type === 'radio' && !['extra1', 'extra2', 'extra3'].includes(questions[currentSlide].id) && 
                renderRadioQuestion(questions[currentSlide].id)}
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

        {showResults && (
          <div className="mt-8 p-5 bg-muted rounded-lg text-center">
            <h2 className="text-heading text-2xl mb-4">
              Your Sustainability Score: {score}%
            </h2>
            <p className="mb-5 text-foreground">
              {scoreDescription}
            </p>
            <div className="space-y-4">
              <button className="bg-primary text-primary-foreground py-3 px-5 rounded cursor-pointer text-base transition-colors hover:bg-primary/90">
                Download Your Personalized Report
              </button>
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