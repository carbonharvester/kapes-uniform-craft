import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    jspdf: any;
  }
}

const SustainabilityScorecard = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState({ name: '', school: '', students: '', email: '' });
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [userImprove, setUserImprove] = useState<string | null>(null);
  const [userFeatures, setUserFeatures] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showImproveSection, setShowImproveSection] = useState(false);
  const [showFeaturesSection, setShowFeaturesSection] = useState(false);
  const [showConsultationQualify, setShowConsultationQualify] = useState(false);
  const [entryError, setEntryError] = useState(false);

  // Check for existing user data in localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('scorecardUserData');
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setShowAssessment(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('scorecardUserData');
      }
    }
  }, []);

  // Load jsPDF script
  useEffect(() => {
    if (!window.jspdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const questions = Array.from(document.querySelectorAll('.question')).map((_, index) => {
    const questionTexts = [
      'Are your uniforms made using virgin synthetic fibres such as polyester, nylon, etc?',
      'Are your uniforms made using conventional cotton?',
      'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.',
      'Do you offset the environmental impact of the uniforms through verified carbon offset projects?',
      'Do you buy carbon credits to offset the impact of your uniforms?',
      'Do you use organic cotton as a primary material?',
      'Do you use recycled polyester as a primary material?',
      'Do you use hemp, bamboo, or lyocell as primary materials?',
      'Are your uniforms packaged in biodegradable or recyclable materials?',
      'Do you require your suppliers to disclose their environmental impact?',
      'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?',
      'Do you have a policy in place to ensure fair wages for all workers in the supply chain?',
      'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?',
      'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?',
      'Does your school collect and resell or giveaway used uniforms?',
      'Does your uniform program support any social causes?',
      'Does your school have a uniform shop?',
      'Does your supplier have a shop?',
      'Do you have online ordering for uniforms?',
      'Can parents pick up at school?',
      'Have your uniforms been tested for harmful or banned chemicals?',
      'Do your students, parents, and staff have full transparency of your supply chain?',
      'Do you or your supplier use AI for uniform sizing to reduce returns?',
      'Do you or your supplier use AI to forecast uniform stock needs?',
      'Are you planning to review your uniform policy in the next 12 months?',
      'Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?',
      "What's your timeline for adopting sustainable uniforms?"
    ];
    return questionTexts[index] || '';
  });

  const questionData = [
    { name: 'q1', options: [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { name: 'q2', options: [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }] },
    { name: 'q3', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q4', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q5', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q6', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q7', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q8', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q9', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q10', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q11', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q12', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q13', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q14', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q15', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q16', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q17', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q18', options: [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '1' }] },
    { name: 'q19', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q20', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q21', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q22', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q23', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'q24', options: [{ text: 'Yes', value: '0' }, { text: 'No', value: '1' }, { text: "Don't Know", value: '1' }] },
    { name: 'readiness1', options: [{ text: 'Yes', value: 'yes' }, { text: 'No', value: 'no' }, { text: 'Maybe', value: 'maybe' }] },
    { name: 'readiness2', options: [{ text: 'Strong support', value: 'strong' }, { text: 'Moderate support', value: 'moderate' }, { text: 'Low/No support', value: 'low' }] },
    { name: 'readiness3', options: [{ text: 'Within 6 months', value: 'immediate' }, { text: '6-12 months', value: 'short' }, { text: 'Over 12 months', value: 'long' }, { text: 'No plans', value: 'none' }] }
  ];

  const chapterMap: { [key: number]: string } = {
    0: 'Materials and Environmental Impact',
    1: 'Materials and Environmental Impact',
    2: 'Materials and Environmental Impact',
    3: 'Materials and Environmental Impact',
    4: 'Materials and Environmental Impact',
    5: 'Materials and Environmental Impact',
    6: 'Materials and Environmental Impact',
    7: 'Materials and Environmental Impact',
    8: 'Materials and Environmental Impact',
    9: 'Supply Chain and Ethics',
    10: 'Supply Chain and Ethics',
    11: 'Supply Chain and Ethics',
    12: 'Supply Chain and Ethics',
    13: 'Supply Chain and Ethics',
    14: 'End of Life and Social Impact',
    15: 'End of Life and Social Impact',
    16: 'Distribution and Logistics',
    17: 'Distribution and Logistics',
    18: 'Distribution and Logistics',
    19: 'Distribution and Logistics',
    20: 'Health and Safety',
    21: 'Transparency and Technology',
    22: 'Transparency and Technology',
    23: 'Transparency and Technology',
    24: 'Readiness to Switch',
    25: 'Readiness to Switch',
    26: 'Readiness to Switch'
  };

  const weights = [10, 8, 5, 4, 4, 9, 9, 9, 6, 5, 7, 7, 8, 7, 6, 3, 4, 3, 4, 4, 5];
  const maxScore = 127;

  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleStartAssessment = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowAssessment(true);
  };

  const handleNext = () => {
    const currentQuestionData = questionData[currentSlide];
    const selected = answers[currentQuestionData.name];
    
    if (!selected) {
      alert('Please answer the question to proceed.');
      return;
    }

    if (currentSlide === questionData.length - 1) {
      processResults();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const processResults = () => {
    let score = 0;
    let answered = 0;
    const answeredQuestions: any[] = [];

    // Process first 21 questions (sustainability questions)
    for (let i = 1; i <= 21; i++) {
      const selected = answers[`q${i}`];
      if (selected) {
        score += weights[i-1] * (1 - parseInt(selected));
        answered++;
        const questionText = questions[i-1];
        const selectedOption = questionData[i-1].options.find(opt => opt.value === selected);
        answeredQuestions.push({ 
          question: questionText, 
          answer: selectedOption?.text || ''
        });
      }
    }

    if (answered < 21) {
      alert('Please answer all 21 sustainability questions.');
      return;
    }

    // Process readiness questions
    const readiness1 = answers.readiness1;
    const readiness2 = answers.readiness2;
    const readiness3 = answers.readiness3;

    if (!readiness1 || !readiness2 || !readiness3) {
      alert('Please answer all readiness questions.');
      return;
    }

    answeredQuestions.push(
      { question: "Are you planning to review your uniform policy in the next 12 months?", answer: readiness1 },
      { question: "Is there internal support (e.g., from leadership, parents) for switching to sustainable uniforms?", answer: readiness2 },
      { question: "What's your timeline for adopting sustainable uniforms?", answer: readiness3 }
    );

    const percentage = Math.round(100 - (score / maxScore) * 100);
    setUserAnswers(answeredQuestions);
    setShowAssessment(false);

    if (percentage < 67) {
      setShowImproveSection(true);
    } else {
      setShowResults(true);
    }

    // Clear localStorage after assessment is complete
    localStorage.removeItem('scorecardUserData');

    // Send data to Google Sheet
    const formData = {
      name: userData.name,
      email: userData.email,
      answers: answeredQuestions,
      score: percentage
    };

    fetch('https://docs.google.com/spreadsheets/d/1c7flY3b0SWJVhbYs-HqcNMrYQ2qm9r8xbJWm-37RxEk/edit?usp=sharing', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors'
    }).then(() => {
      console.log('Data sent to Google Sheet');
    }).catch(error => {
      console.error('Error sending data:', error);
    });
  };

  const handleImproveSubmit = () => {
    const selected = answers.improve;
    if (!selected) {
      alert('Please select an option.');
      return;
    }
    setUserImprove(selected);
    userAnswers.push({ question: 'Do you want to improve the sustainability of your school uniforms?', answer: selected });

    setShowImproveSection(false);
    if (selected === 'yes') {
      setShowFeaturesSection(true);
    } else {
      setShowResults(true);
    }
  };

  const handleFeaturesSubmit = () => {
    const selectedFeatures = userFeatures;
    if (selectedFeatures.length === 0) {
      alert('Please select at least one feature.');
      return;
    }
    userAnswers.push({ question: 'Selected features:', answer: selectedFeatures.join(', ') });

    setShowFeaturesSection(false);
    setShowConsultationQualify(true);
    setShowResults(true);
  };

  const generateReport = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Kapes Uniforms Sustainability Scorecard Report', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${userData.name}`, 10, 20);
    doc.text(`School: ${userData.school}`, 10, 30);
    doc.text(`Number of Students: ${userData.students}`, 10, 40);
    doc.text(`Email: ${userData.email}`, 10, 50);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 60);
    doc.setFontSize(14);
    doc.text('Your Sustainability Score', 10, 70);
    doc.setFontSize(12);
    doc.text(`Score: ${Math.round(100 - (0 / maxScore) * 100)}%`, 10, 80);
    doc.setFontSize(14);
    doc.text('Your Answers and Recommendations', 10, 90);
    doc.setFontSize(12);
    
    let y = 100;
    userAnswers.forEach((ans, index) => {
      doc.text(`${index + 1}. Question: ${ans.question}`, 10, y);
      doc.text(`Answer: ${ans.answer}`, 10, y + 5);
      let recommendation = getRecommendation(index + 1, ans.answer);
      doc.text(`Recommendation: ${recommendation}`, 10, y + 10);
      y += 20;
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
    });

    doc.text('Next Steps', 10, y);
    y += 10;
    doc.text('Book a free consultation to discuss how Kapes Uniforms can help you improve your uniform program.', 10, y, { maxWidth: 180 });
    doc.text('Visit: /consultation', 10, y + 10);

    doc.save('Sustainability_Scorecard_Report.pdf');
  };

  const getRecommendation = (questionNum: number, answer: string): string => {
    const badAnswers = ['Yes', "Don't Know"];
    if (badAnswers.includes(answer) || answer === 'No') {
      switch (questionNum) {
        case 1: return 'Switch to non-synthetic materials to reduce pollution.';
        case 2: return 'Use organic cotton to lower water and pesticide use.';
        case 3: return 'Conduct an LCA to uncover hidden impacts.';
        case 4: return 'Implement verified carbon offset projects.';
        case 5: return 'Purchase carbon credits for reforestation.';
        case 6: return 'Switch to organic cotton for better sustainability.';
        case 7: return 'Use recycled polyester to reuse waste.';
        case 8: return 'Use hemp, bamboo, or lyocell for low-impact options.';
        case 9: return 'Use biodegradable or recyclable packaging.';
        case 10: return 'Require suppliers to disclose environmental impact.';
        case 11: return 'Audit factories with bodies like Sedex.';
        case 12: return 'Establish fair wage policies.';
        case 13: return 'Implement living wages and good working conditions.';
        case 14: return 'Require certifications for fair wages and safety.';
        case 15: return 'Collect and resell or giveaway used uniforms.';
        case 16: return 'Support social causes with your program.';
        case 17: return 'Set up a school shop to lower emissions.';
        case 18: return 'Minimize standalone shops for better sustainability.';
        case 19: return 'Offer online ordering to reduce visits.';
        case 20: return 'Enable pickup at school to cut shipping.';
        case 21: return 'Test for harmful chemicals to protect health.';
        case 22: return 'Provide full supply chain transparency.';
        case 23: return 'Use AI for sizing to reduce returns and waste.';
        case 24: return 'Use AI for stock forecasting to minimize overproduction.';
        default: return 'Book a consultation to discuss improvements.';
      }
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  const score = Math.round(100 - (0 / maxScore) * 100);
  const bodyText = score < 33 
    ? 'Your low score is likely due to reliance on traditional materials and lack of transparency or ethical audits. To improve, focus on sustainable fabrics and supply chain practices.'
    : score < 67 
    ? 'Your medium score shows some positive steps but gaps in offsetting and distribution. Enhance by adding AI tools and takeback programs.'
    : 'Your high score reflects strong practices. To maximize, double down on transparency and technology.';

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, color: '#333', background: '#f9f9f9', textAlign: 'center' }}>
      <div style={{ maxWidth: '700px', margin: '50px auto', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#4CAF50', fontSize: '28px', marginBottom: '20px' }}>Sustainability Scorecard for School Uniforms</h1>
        <p>Enter your details to access the scorecard. Answer questions one by one to assess your school's uniform sustainability. At the end, get your score, a report, and book a consultation.</p>
        
        {!showAssessment && !showResults && !showImproveSection && !showFeaturesSection && (
          <div style={{ textAlign: 'left' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={userData.name}
              onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px' }}
              required 
            />
            <input 
              type="text" 
              placeholder="School Name" 
              value={userData.school}
              onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px' }}
              required 
            />
            <input 
              type="number" 
              placeholder="Number of Students" 
              value={userData.students}
              onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px' }}
              min="1" 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '5px' }}
              required 
            />
            {entryError && (
              <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>Please fill all fields to start.</div>
            )}
            <button 
              type="button" 
              onClick={handleStartAssessment}
              style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s', width: '100%' }}
            >
              Start Scorecard
            </button>
          </div>
        )}
        
        {showAssessment && currentSlide < questionData.length && (
          <div style={{ display: 'block', textAlign: 'left' }}>
            <h2 style={{ color: '#4CAF50', fontSize: '20px', marginBottom: '15px' }}>{chapterMap[currentSlide] || ''}</h2>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>{currentSlide + 1} / {questionData.length}</p>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                {questions[currentSlide]}
              </label>
              <div>
                {questionData[currentSlide].options.map((option, index) => (
                  <label key={index} style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <input 
                      type="radio" 
                      name={questionData[currentSlide].name} 
                      value={option.value}
                      checked={answers[questionData[currentSlide].name] === option.value}
                      onChange={(e) => setAnswers(prev => ({ ...prev, [questionData[currentSlide].name]: e.target.value }))}
                      style={{ marginRight: '10px' }}
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button 
                type="button" 
                onClick={handlePrevious}
                style={{ 
                  width: '48%', 
                  background: '#4CAF50', 
                  color: 'white', 
                  padding: '12px 20px', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer', 
                  fontSize: '16px',
                  display: currentSlide === 0 ? 'none' : 'inline-block'
                }}
              >
                Previous
              </button>
              <button 
                type="button" 
                onClick={handleNext}
                style={{ 
                  width: currentSlide === 0 ? '100%' : '48%', 
                  background: '#4CAF50', 
                  color: 'white', 
                  padding: '12px 20px', 
                  border: 'none', 
                  borderRadius: '5px', 
                  cursor: 'pointer', 
                  fontSize: '16px'
                }}
              >
                {currentSlide === questionData.length - 1 ? 'Submit Scorecard' : 'Next'}
              </button>
            </div>
          </div>
        )}
        
        {showImproveSection && (
          <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '10px', textAlign: 'left' }}>
            <h2 style={{ color: '#4CAF50', fontSize: '20px', marginBottom: '15px' }}>Do you want to improve the sustainability of your school uniforms?</h2>
            <div>
              <label style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input 
                  type="radio" 
                  name="improve" 
                  value="yes"
                  checked={answers.improve === 'yes'}
                  onChange={(e) => setAnswers(prev => ({ ...prev, improve: e.target.value }))}
                  style={{ marginRight: '10px' }}
                />
                Yes
              </label>
              <label style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input 
                  type="radio" 
                  name="improve" 
                  value="no"
                  checked={answers.improve === 'no'}
                  onChange={(e) => setAnswers(prev => ({ ...prev, improve: e.target.value }))}
                  style={{ marginRight: '10px' }}
                />
                No
              </label>
            </div>
            <button 
              type="button" 
              onClick={handleImproveSubmit}
              style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s', width: '100%', marginTop: '15px' }}
            >
              Submit
            </button>
          </div>
        )}

        {showFeaturesSection && (
          <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '10px', textAlign: 'left' }}>
            <h2 style={{ color: '#4CAF50', fontSize: '20px', marginBottom: '15px' }}>Select what's important to you:</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'EcoLegacy Fabrics (Natural, Sustainable Materials)',
                'Humanity-First Production (Ethical Manufacturing)',
                'Uniform Uplift Initiative (Free Uniform Program)',
                'CycleWorks Program (Fully Managed Takeback Scheme)',
                'Meal Miracle Mission (Feeding Program)',
                'KapesImpact Tracker (Real-Time Sustainability Dashboard)',
                'CO2 Conquest Credits (Carbon Offsetting)',
                'GreenFuture Curriculum (Educational Programs)',
                'Roots & Reality Tours (Farm & Factory Visits)',
                'EcoAmbassador Council (Student Board)',
                'EcoHub Shops (On-Campus School Shops)',
                'SmartDrop Lockers (E-Commerce Lockers)'
              ].map((feature, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                      type="checkbox" 
                      value={feature}
                      checked={userFeatures.includes(feature)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setUserFeatures(prev => [...prev, feature]);
                        } else {
                          setUserFeatures(prev => prev.filter(f => f !== feature));
                        }
                      }}
                      style={{ marginRight: '10px' }}
                    />
                    {feature}
                  </label>
                </li>
              ))}
            </ul>
            <button 
              type="button" 
              onClick={handleFeaturesSubmit}
              style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s', width: '100%' }}
            >
              Submit Priorities
            </button>
          </div>
        )}

        {showConsultationQualify && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <h2 style={{ color: '#4CAF50', fontSize: '20px', marginBottom: '15px' }}>You Qualify for a Free Consultation!</h2>
            <p>Based on your interests, we're excited to help. Book now to discuss tailored solutions with Kapes.</p>
            <button style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s' }}>
              <a href="/consultation" style={{ color: 'white', textDecoration: 'none' }}>Book Free Consultation</a>
            </button>
          </div>
        )}

        {showResults && (
          <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ color: '#4CAF50', fontSize: '24px' }}>Your Sustainability Score: <span style={{ fontSize: '28px', color: '#4CAF50', marginBottom: '20px' }}>{score}%</span></h2>
            <div style={{ marginBottom: '20px' }}>
              <p>{bodyText}</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={generateReport}
                style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s', width: 'auto' }}
              >
                Download Your Personalized Report
              </button>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button style={{ background: '#4CAF50', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', transition: 'background 0.3s' }}>
                <a href="/consultation" style={{ color: 'white', textDecoration: 'none' }}>Book Your Free Consultation</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainabilityScorecard;