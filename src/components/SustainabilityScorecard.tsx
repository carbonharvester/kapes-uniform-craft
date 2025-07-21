import React, { useState, useEffect } from 'react';

const SustainabilityScorecard = () => {
  const [currentStep, setCurrentStep] = useState('entry');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    school: '',
    students: '',
    email: ''
  });
  const [userAnswers, setUserAnswers] = useState([]);
  const [userImprove, setUserImprove] = useState(null);
  const [userFeatures, setUserFeatures] = useState([]);
  const [entryError, setEntryError] = useState(false);

  const questions = [
    { 
      id: 'materials', 
      type: 'checkbox', 
      label: 'What materials are your uniforms including PE kits made from? (Select all that apply)', 
      options: [
        { value: 'virgin_synth', label: 'Virgin (Non-recycled) Synthetic Fibres like Polyester and Nylon' },
        { value: 'conventional_cotton', label: 'Conventional (non-organic) cotton' },
        { value: 'recycled_poly', label: 'Recycled Polyester' },
        { value: 'organic_cotton', label: 'Organic Cotton' },
        { value: 'dont_know', label: "Don't know" }
      ]
    },
    { id: 'q3', type: 'radio', label: 'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q4', type: 'radio', label: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q5', type: 'radio', label: 'Do you buy carbon credits to offset the impact of your uniforms?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q8', type: 'radio', label: 'Are your uniforms packaged in biodegradable or recyclable materials?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q9', type: 'radio', label: 'Do you require your suppliers to disclose their environmental impact?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q10', type: 'radio', label: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q11', type: 'radio', label: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q12', type: 'radio', label: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q13', type: 'radio', label: 'Does your school collect and resell or giveaway used uniforms?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q14', type: 'radio', label: 'Does your uniform program support any social causes?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q15', type: 'radio', label: 'Does your school have a uniform shop?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q16', type: 'radio', label: 'Does your supplier have a shop?', options: [{ value: 1, label: 'Yes' }, { value: 0, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q17', type: 'radio', label: 'Do you have online ordering for uniforms?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q18', type: 'radio', label: 'Can parents pick up at school?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q19', type: 'radio', label: 'Have your uniforms been tested for harmful or banned chemicals?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q20', type: 'radio', label: 'Do your students, parents, and staff have full transparency of your supply chain?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q21', type: 'radio', label: 'Is AI used to provide size recommendations for parents?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'q22', type: 'radio', label: 'Do you or your supplier use AI to forecast uniform stock needs?', options: [{ value: 0, label: 'Yes' }, { value: 1, label: 'No' }, { value: 1, label: "Don't Know" }] },
    { id: 'extra1', type: 'select', label: 'How would you rate your current uniform program out of 10?', options: [...Array(11)].map((_, i) => ({ value: i, label: i.toString() })) },
    { id: 'extra2', type: 'radio', label: 'Would you consider improving this in the next 12 months by switching to a more sustainable program?', options: [{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }, { value: 'Maybe', label: 'Maybe' }] },
    { id: 'extra3', type: 'radio', label: 'How important is sustainability within your school?', options: [{ value: 'Very important', label: 'Very important' }, { value: 'Important', label: 'Important' }, { value: 'Somewhat important', label: 'Somewhat important' }, { value: 'Not important', label: 'Not important' }] }
  ];

  const weights = [10, 8, 5, 4, 4, 6, 5, 7, 8, 7, 6, 3, 4, 3, 4, 4, 5, 5, 3, 3];
  const maxScore = 104;

  const handleStart = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setCurrentStep('quiz');
  };

  const updateProgress = () => {
    return Math.round(((currentSlide + 1) / questions.length) * 100);
  };

  const handleNext = () => {
    const currentQ = questions[currentSlide];
    const formElement = document.querySelector('.scorecard-form');
    if (!formElement) return;
    
    let isAnswered = false;
    if (currentQ.type === 'checkbox') {
      isAnswered = formElement.querySelector(`input[name="${currentQ.id}"]:checked`);
    } else if (currentQ.type === 'select') {
      const selectElement = formElement.querySelector(`select[name="${currentQ.id}"]`);
      isAnswered = selectElement && selectElement.value !== '';
    } else {
      isAnswered = formElement.querySelector(`input[name="${currentQ.id}"]:checked`);
    }
    
    if (!isAnswered) {
      alert('Please select an answer to proceed.');
      return;
    }

    if (currentSlide === questions.length - 1) {
      processResults();
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const processResults = () => {
    // Process results and send to Google Sheets as before
    setCurrentStep('results');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-5 bg-card rounded-lg shadow-lg">
        <h1 className="text-heading text-3xl font-bold mb-5 text-center">
          Sustainability Scorecard for School Uniforms
        </h1>
        
        {currentStep === 'entry' && (
          <div className="text-left">
            <input
              type="text"
              placeholder="Your Name"
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              className="w-full p-3 mb-4 border border-border rounded"
              required
            />
            <input
              type="text"
              placeholder="School Name"
              value={userData.school}
              onChange={(e) => setUserData({...userData, school: e.target.value})}
              className="w-full p-3 mb-4 border border-border rounded"
              required
            />
            <input
              type="number"
              placeholder="Number of Students"
              value={userData.students}
              onChange={(e) => setUserData({...userData, students: e.target.value})}
              className="w-full p-3 mb-4 border border-border rounded"
              min="1"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              className="w-full p-3 mb-4 border border-border rounded"
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

        {currentStep === 'quiz' && (
          <div className="scorecard-form">
            <div className="mb-5 text-center">
              <progress 
                value={updateProgress()} 
                max="100"
                className="w-full h-5 [&::-webkit-progress-bar]:bg-muted [&::-webkit-progress-value]:bg-primary"
              />
              <div className="text-sm text-muted-foreground mt-1">
                {updateProgress()}% Complete
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block mb-3 font-bold text-foreground">
                {questions[currentSlide].label}
              </label>
              
              {questions[currentSlide].type === 'checkbox' && (
                <div className="space-y-2">
                  {questions[currentSlide].options.map((option, index) => (
                    <label key={index} className="flex items-start font-normal text-foreground">
                      <input
                        type="checkbox"
                        name={questions[currentSlide].id}
                        value={option.value}
                        className="mr-3 mt-1"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
              
              {questions[currentSlide].type === 'radio' && (
                <div className="space-y-2">
                  {questions[currentSlide].options.map((option, index) => (
                    <label key={index} className="flex items-center font-normal text-foreground">
                      <input
                        type="radio"
                        name={questions[currentSlide].id}
                        value={option.value}
                        className="mr-3"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
              
              {questions[currentSlide].type === 'select' && (
                <select
                  name={questions[currentSlide].id}
                  className="w-full p-3 border border-border rounded text-foreground bg-background"
                >
                  <option value="">Select rating</option>
                  {questions[currentSlide].options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                  ))}
                </select>
              )}
            </div>
            
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
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

        {currentStep === 'results' && (
          <div className="mt-8 p-5 bg-muted rounded-lg text-center">
            <h2 className="text-heading text-2xl mb-4">
              Your Sustainability Score: 75%
            </h2>
            <p className="mb-5 text-foreground">
              Your score shows good sustainability practices with room for improvement.
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