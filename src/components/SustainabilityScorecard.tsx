import React, { useState, useEffect } from 'react';

interface UserData {
  name: string;
  school: string;
  students: string;
  email: string;
}

const SustainabilityScorecard = () => {
  const [userData, setUserData] = useState<UserData>({ name: '', school: '', students: '', email: '' });
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showImprove, setShowImprove] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);
  const [userImprove, setUserImprove] = useState<string | null>(null);
  const [userFeatures, setUserFeatures] = useState<string[]>([]);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedData = localStorage.getItem('scorecardUserData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
        setShowAssessment(true);
        // Clear the stored data to prevent issues on subsequent visits
        localStorage.removeItem('scorecardUserData');
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }

    // Load jsPDF script
    if (!(window as any).jspdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const questions = [
    {
      id: 'q1',
      text: 'Are your uniforms made using virgin synthetic fibres such as polyester, nylon, etc?',
      options: [
        { value: '1', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: "Don't Know" }
      ]
    },
    {
      id: 'q2',
      text: 'Are your uniforms made using conventional cotton?',
      options: [
        { value: '1', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '0', label: "Don't Know" }
      ]
    },
    {
      id: 'q3',
      text: 'Have you conducted an LCA to calculate the environmental impact of your uniforms? This would include the use of water and energy, and the CO2 emitted.',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q4',
      text: 'Do you offset the environmental impact of the uniforms through verified carbon offset projects?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q5',
      text: 'Do you buy carbon credits to offset the impact of your uniforms?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q6',
      text: 'Do you use organic cotton as a primary material?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q7',
      text: 'Do you use recycled polyester as a primary material?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q8',
      text: 'Are your uniforms packaged in biodegradable or recyclable materials?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q9',
      text: 'Do you require your suppliers to disclose their environmental impact?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q10',
      text: 'Are all of the factories and suppliers in your supply chain audited by ethical bodies such as Sedex?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q11',
      text: 'Do you have a policy in place to ensure living wages and good working conditions for all workers in the supply chain?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q12',
      text: 'Do you require your uniform provider to provide 3rd party certifications to ensure that fair wages and safe working conditions are being adhered to?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q13',
      text: 'Does your school collect and resell or giveaway used uniforms?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q14',
      text: 'Does your uniform program support any social causes?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q15',
      text: 'Does your school have a uniform shop?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q16',
      text: 'Does your supplier have a shop?',
      options: [
        { value: '1', label: 'Yes' },
        { value: '0', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q17',
      text: 'Do you have online ordering for uniforms?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q18',
      text: 'Can parents pick up at school?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q19',
      text: 'Have your uniforms been tested for harmful or banned chemicals?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q20',
      text: 'Do your students, parents, and staff have full transparency of your supply chain?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q21',
      text: 'Is AI used to provide size recommendations for parents?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'q22',
      text: 'Do you or your supplier use AI to forecast uniform stock needs?',
      options: [
        { value: '0', label: 'Yes' },
        { value: '1', label: 'No' },
        { value: '1', label: "Don't Know" }
      ]
    },
    {
      id: 'extra1',
      type: 'select',
      text: 'How would you rate your current uniform program out of 10?',
      options: Array.from({ length: 11 }, (_, i) => ({ value: i.toString(), label: i.toString() }))
    },
    {
      id: 'extra2',
      text: 'Would you consider improving this in the next 12 months by switching to a more sustainable program?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        { value: 'Maybe', label: 'Maybe' }
      ]
    },
    {
      id: 'extra3',
      text: 'How important is sustainability within your school?',
      options: [
        { value: 'Very important', label: 'Very important' },
        { value: 'Important', label: 'Important' },
        { value: 'Somewhat important', label: 'Somewhat important' },
        { value: 'Not important', label: 'Not important' }
      ]
    }
  ];

  const weights = [10, 8, 5, 4, 4, 9, 9, 6, 5, 7, 8, 7, 6, 3, 4, 3, 4, 4, 5, 5, 3, 3]; // Updated for 22 scored questions
  const maxScore = 117;

  const handleStartAssessment = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      alert('Please fill all fields to start.');
      return;
    }
    setShowAssessment(true);
  };

  const handleNext = () => {
    const currentQuestion = questions[currentSlide];
    let isAnswered = false;
    
    if (currentQuestion.type === 'select') {
      const selectElement = document.querySelector(`select[name="${currentQuestion.id}"]`) as HTMLSelectElement;
      isAnswered = selectElement && selectElement.value !== '';
    } else {
      const selectedValue = document.querySelector(`input[name="${currentQuestion.id}"]:checked`) as HTMLInputElement;
      isAnswered = !!selectedValue;
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

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const processResults = () => {
    let calculatedScore = 0;
    let answered = 0;
    const answers: any[] = [];

    // Calculate score for q1-q22
    for (let i = 1; i <= 22; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`) as HTMLInputElement;
      if (selected) {
        calculatedScore += weights[i-1] * parseInt(selected.value);
        answered++;
        answers.push({
          question: questions[i-1].text,
          answer: selected.nextElementSibling?.textContent || selected.value
        });
      }
    }

    if (answered < 22) {
      alert('Please answer all sustainability questions.');
      return;
    }

    // Collect extra questions
    const extra1Select = document.querySelector('select[name="extra1"]') as HTMLSelectElement;
    const extra1Answer = extra1Select ? extra1Select.value : 'Not Answered';
    answers.push({ question: "How would you rate your current uniform program out of 10?", answer: extra1Answer });

    const extra2Selected = document.querySelector('input[name="extra2"]:checked') as HTMLInputElement;
    const extra2Answer = extra2Selected ? extra2Selected.nextElementSibling?.textContent : 'Not Answered';
    answers.push({ question: "Would you consider improving this in the next 12 months by switching to a more sustainable program?", answer: extra2Answer });

    const extra3Selected = document.querySelector('input[name="extra3"]:checked') as HTMLInputElement;
    const extra3Answer = extra3Selected ? extra3Selected.nextElementSibling?.textContent : 'Not Answered';
    answers.push({ question: "How important is sustainability within your school?", answer: extra3Answer });

    const percentage = Math.round((calculatedScore / maxScore) * 100);
    setScore(percentage);
    setUserAnswers(answers);

    // Send data to Google Sheet
    const sheetURL = 'https://script.google.com/macros/s/AKfycbxfC609-OnZB_UcV_7Njh8q-UcvJAAtVdiQtpTKtYqDG0sGrIGQVeQldJy7ty6LZtDV/exec';
    const formData = {
      name: userData.name,
      email: userData.email,
      answers: answers,
      score: percentage
    };

    fetch(sheetURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors'
    }).then(() => {
      console.log('Data sent to Google Sheet');
    }).catch(error => {
      console.error('Error sending data:', error);
    });

    setShowAssessment(false);
    if (percentage < 67) {
      setShowImprove(true);
    } else {
      setShowResults(true);
    }
  };

  const handleImproveSubmit = () => {
    const selected = document.querySelector('input[name="improve"]:checked') as HTMLInputElement;
    if (!selected) {
      alert('Please select an option.');
      return;
    }
    
    const improveValue = selected.value;
    setUserImprove(improveValue);
    setUserAnswers(prev => [...prev, { question: 'Do you want to improve the sustainability of your school uniforms?', answer: improveValue }]);
    
    setShowImprove(false);
    if (improveValue === 'yes') {
      setShowFeatures(true);
    } else {
      setShowResults(true);
    }
  };

  const handleFeaturesSubmit = () => {
    const selectedFeatures = Array.from(document.querySelectorAll('.features-list input:checked')).map(
      (input: any) => input.value
    );
    
    if (selectedFeatures.length === 0) {
      alert('Please select at least one feature.');
      return;
    }
    
    setUserFeatures(selectedFeatures);
    setUserAnswers(prev => [...prev, { question: 'Selected features:', answer: selectedFeatures.join(', ') }]);
    
    setShowFeatures(false);
    setShowConsultation(true);
    setShowResults(true);
  };

  const getScoreDescription = () => {
    if (score < 33) {
      return 'Your low score is likely due to reliance on traditional materials and lack of transparency or ethical audits. To improve, focus on sustainable fabrics and supply chain practices.';
    } else if (score < 67) {
      return 'Your medium score shows some positive steps but gaps in offsetting and distribution. Enhance by adding AI tools and takeback programs.';
    } else {
      return 'Your high score reflects strong practices. To maximize, double down on transparency and technology.';
    }
  };

  const generateReport = () => {
    // Using jsPDF to generate PDF report
    const { jsPDF } = (window as any).jspdf;
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
    doc.text(`Score: ${score}%`, 10, 80);
    doc.setFontSize(14);
    doc.text('Your Answers and Recommendations', 10, 90);
    doc.setFontSize(12);
    
    let y = 100;
    userAnswers.forEach((ans, index) => {
      doc.text(`${index + 1}. Question: ${ans.question}`, 10, y, { maxWidth: 180 });
      doc.text(`Answer: ${ans.answer}`, 10, y + 5);
      const recommendation = getRecommendation(index + 1, ans.answer);
      doc.text(`Recommendation: ${recommendation}`, 10, y + 10, { maxWidth: 180 });
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

  const getRecommendation = (questionNum: number, answer: string) => {
    const badAnswers = ['Yes', "Don't Know"];
    if ((questionNum <= 2 && badAnswers.includes(answer)) || (questionNum >= 3 && answer !== 'Yes')) {
      switch (questionNum) {
        case 1: return 'Switch to non-synthetic materials to reduce pollution.';
        case 2: return 'Use organic cotton to lower water and pesticide use.';
        case 3: return 'Conduct an LCA to uncover hidden impacts.';
        case 4: return 'Implement verified carbon offset projects.';
        case 5: return 'Purchase carbon credits for reforestation.';
        case 6: return 'Switch to organic cotton for better sustainability.';
        case 7: return 'Use recycled polyester to reuse waste.';
        case 8: return 'Use biodegradable or recyclable packaging.';
        case 9: return 'Require suppliers to disclose environmental impact.';
        case 10: return 'Audit factories with bodies like Sedex.';
        case 11: return 'Implement living wages and good working conditions.';
        case 12: return 'Require certifications for fair wages and safety.';
        case 13: return 'Collect and resell or giveaway used uniforms.';
        case 14: return 'Support social causes with your program.';
        case 15: return 'Set up a school shop to lower emissions.';
        case 16: return 'Minimize standalone shops for better sustainability.';
        case 17: return 'Offer online ordering to reduce visits.';
        case 18: return 'Enable pickup at school to cut shipping.';
        case 19: return 'Test for harmful chemicals to protect health.';
        case 20: return 'Provide full supply chain transparency.';
        case 21: return 'Use AI to provide size recommendations to reduce returns and waste.';
        case 22: return 'Use AI for stock forecasting to minimize overproduction.';
        default: return 'Book a consultation to discuss improvements.';
      }
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  // Custom styles to match the original HTML
  const customStyles = `
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; background: #f9f9f9; text-align: center; }
    .scorecard-container { 
      max-width: 700px; 
      margin: 50px auto; 
      padding: 20px; 
      background: #fff; 
      border-radius: 10px; 
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .scorecard-container h1 { 
      color: #4CAF50; 
      font-size: 28px; 
      margin-bottom: 20px; 
    }
    .scorecard-container h2 { 
      color: #4CAF50; 
      font-size: 20px; 
      margin-bottom: 15px; 
    }
    #entry-form { text-align: left; }
    #entry-form input { 
      width: 100%; 
      padding: 10px; 
      margin-bottom: 15px; 
      border: 1px solid #ddd; 
      border-radius: 5px; 
    }
    button { 
      background: #4CAF50; 
      color: white; 
      padding: 12px 20px; 
      border: none; 
      border-radius: 5px; 
      cursor: pointer; 
      font-size: 16px; 
      transition: background 0.3s; 
      width: 100%; 
    }
    button:hover { 
      background: #45a049; 
    }
    .question { 
      margin-bottom: 30px; 
      text-align: left;
    }
    .question label { 
      display: block; 
      margin-bottom: 10px; 
      font-weight: bold; 
    }
    .radio-group label { 
      font-weight: normal; 
      display: flex; 
      align-items: center; 
      margin-bottom: 5px; 
    }
    .radio-group input { 
      margin-right: 10px; 
    }
    .error { 
      color: red; 
      margin-bottom: 15px; 
      display: none; 
      text-align: center; 
    }
    .nav-buttons { 
      display: flex; 
      justify-content: space-between; 
      margin-top: 20px; 
    }
    .nav-buttons button { 
      width: 48%; 
    }
    .features-list { 
      list-style: none; 
      padding: 0; 
    }
    .features-list li { 
      margin-bottom: 10px; 
    }
    .features-list input { 
      margin-right: 10px; 
    }
    .result-sections {
      display: block; 
      margin-top: 30px; 
      padding: 20px; 
      background: #f0f0f0; 
      border-radius: 10px; 
      text-align: left;
    }
    .result-sections h2 { 
      color: #4CAF50; 
      font-size: 24px; 
    }
    .consultation-btn { 
      margin-top: 20px; 
    }
    .consultation-btn a { 
      color: white; 
      text-decoration: none; 
    }
    .report-btn { 
      margin-top: 20px; 
    }
    .report-btn button { 
      width: auto; 
    }
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    #progress-container { margin-bottom: 20px; text-align: center; }
    #progress-bar { width: 100%; height: 20px; }
    #progress-text { font-size: 14px; color: #666; margin-top: 5px; }
  `;

  if (!showAssessment && !showImprove && !showFeatures && !showResults) {
    return (
      <>
        <style>{customStyles}</style>
        <div className="scorecard-container">
          <h1>Sustainability Scorecard for School Uniforms</h1>
          
          <div id="entry-form">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={userData.name}
              onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
              required 
            />
            <input 
              type="text" 
              placeholder="School Name" 
              value={userData.school}
              onChange={(e) => setUserData(prev => ({ ...prev, school: e.target.value }))}
              required 
            />
            <input 
              type="number" 
              min="1" 
              placeholder="Number of Students" 
              value={userData.students}
              onChange={(e) => setUserData(prev => ({ ...prev, students: e.target.value }))}
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={userData.email}
              onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              required 
            />
            <div id="entry-error" className="error">Please fill all fields to start.</div>
            <button type="button" onClick={handleStartAssessment}>Start Scorecard</button>
          </div>
        </div>
      </>
    );
  }

  if (showAssessment) {
    const currentQuestion = questions[currentSlide];
    const progressPercentage = Math.round(((currentSlide + 1) / questions.length) * 100);
    
    return (
      <>
        <style>{customStyles}</style>
        <div className="scorecard-container">
          <h1>Sustainability Scorecard for School Uniforms</h1>
          
          <div id="progress-container">
            <progress id="progress-bar" value={progressPercentage} max="100"></progress>
            <div id="progress-text">{progressPercentage}% Complete</div>
          </div>
          
          <div className="question">
            <label>{currentQuestion.text}</label>
            {currentQuestion.type === 'select' ? (
              <select name={currentQuestion.id}>
                <option value="">Select rating</option>
                {currentQuestion.options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <div className="radio-group">
                {currentQuestion.options.map((option, index) => (
                  <label key={index}>
                    <input 
                      type="radio" 
                      name={currentQuestion.id} 
                      value={option.value} 
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}
          </div>
          
          <div className="nav-buttons">
            {currentSlide > 0 && (
              <button type="button" onClick={handlePrevious}>Previous</button>
            )}
            <button type="button" onClick={handleNext}>
              {currentSlide === questions.length - 1 ? 'Submit Scorecard' : 'Next'}
            </button>
          </div>
        </div>
      </>
    );
  }

  if (showImprove) {
    return (
      <>
        <style>{customStyles}</style>
        <div className="scorecard-container">
          <div className="result-sections">
            <h2>Do you want to improve the sustainability of your school uniforms?</h2>
            <div className="radio-group">
              <label><input type="radio" name="improve" value="yes" /> Yes</label>
              <label><input type="radio" name="improve" value="no" /> No</label>
            </div>
            <button type="button" onClick={handleImproveSubmit}>Submit</button>
          </div>
        </div>
      </>
    );
  }

  if (showFeatures) {
    return (
      <>
        <style>{customStyles}</style>
        <div className="scorecard-container">
          <div className="result-sections">
            <h2>Select what's important to you:</h2>
            <ul className="features-list">
              <li><input type="checkbox" value="EcoLegacy Fabrics" /> EcoLegacy Fabrics (Natural, Sustainable Materials)</li>
              <li><input type="checkbox" value="Humanity-First Production" /> Humanity-First Production (Ethical Manufacturing)</li>
              <li><input type="checkbox" value="Uniform Uplift Initiative" /> Uniform Uplift Initiative (Free Uniform Program)</li>
              <li><input type="checkbox" value="CycleWorks Program" /> CycleWorks Program (Fully Managed Takeback Scheme)</li>
              <li><input type="checkbox" value="Meal Miracle Mission" /> Meal Miracle Mission (Feeding Program)</li>
              <li><input type="checkbox" value="KapesImpact Tracker" /> KapesImpact Tracker (Real-Time Sustainability Dashboard)</li>
              <li><input type="checkbox" value="CO2 Conquest Credits" /> CO2 Conquest Credits (Carbon Offsetting)</li>
              <li><input type="checkbox" value="GreenFuture Curriculum" /> GreenFuture Curriculum (Educational Programs)</li>
              <li><input type="checkbox" value="Roots & Reality Tours" /> Roots & Reality Tours (Farm & Factory Visits)</li>
              <li><input type="checkbox" value="EcoAmbassador Council" /> EcoAmbassador Council (Student Board)</li>
              <li><input type="checkbox" value="EcoHub Shops" /> EcoHub Shops (On-Campus School Shops)</li>
              <li><input type="checkbox" value="SmartDrop Lockers" /> SmartDrop Lockers (E-Commerce Lockers)</li>
            </ul>
            <button type="button" onClick={handleFeaturesSubmit}>Submit Priorities</button>
          </div>
        </div>
      </>
    );
  }

  if (showResults) {
    return (
      <>
        <style>{customStyles}</style>
        <div className="scorecard-container">
          {showConsultation && (
            <div className="result-sections" style={{ textAlign: 'center' }}>
              <h2>You Qualify for a Free Consultation!</h2>
              <p>Based on your interests, we're excited to help. Book now to discuss tailored solutions with Kapes.</p>
              <button><a href="/consultation" style={{ color: 'white', textDecoration: 'none' }}>Book Free Consultation</a></button>
            </div>
          )}
          
          <div className="result-sections" style={{ textAlign: 'center' }}>
            <h2>Your Sustainability Score: {score}%</h2>
            <p id="score-desc">{getScoreDescription()}</p>
            <div className="report-btn">
              <button onClick={generateReport}>Download Your Personalized Report</button>
            </div>
            <div className="consultation-btn">
              <button>
                <a href="/consultation" style={{ color: 'white', textDecoration: 'none' }}>
                  Book Your Free Consultation
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default SustainabilityScorecard;