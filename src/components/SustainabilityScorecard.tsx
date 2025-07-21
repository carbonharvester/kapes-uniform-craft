import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

const SustainabilityScorecard: React.FC = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    school: '',
    students: '',
    email: ''
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{ question: string; answer: string }>>([]);
  const [entryError, setEntryError] = useState(false);
  const [showImproveSection, setShowImproveSection] = useState(false);
  const [showFeaturesSection, setShowFeaturesSection] = useState(false);
  const [showConsultationQualify, setShowConsultationQualify] = useState(false);

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

  const questions = [
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

  const questionOptions = [
    [{ text: 'Yes', value: '0' }, { text: 'No', value: '4' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '0' }, { text: 'No', value: '4' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '1' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '0' }, { text: 'No', value: '2' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '4' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: '2' }, { text: 'No', value: '0' }, { text: "Don't Know", value: '0' }],
    [{ text: 'Yes', value: 'yes' }, { text: 'No', value: 'no' }, { text: 'Maybe', value: 'maybe' }],
    [{ text: 'Strong support', value: 'strong' }, { text: 'Moderate support', value: 'moderate' }, { text: 'Low/No support', value: 'low' }],
    [{ text: 'Within 6 months', value: 'immediate' }, { text: '6-12 months', value: 'short' }, { text: 'Over 12 months', value: 'long' }, { text: 'No plans', value: 'none' }]
  ];

  const handleStartAssessment = () => {
    if (!userData.name || !userData.school || !userData.students || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowAssessment(true);
  };

  const handleAnswer = (questionIndex: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionIndex + 1}`]: value
    }));
  };

  const handleNext = () => {
    const selected = answers[`q${currentSlide + 1}`];
    
    if (!selected && currentSlide < 24) {
      alert('Please answer the question to proceed.');
      return;
    }

    if (currentSlide === questions.length - 1) {
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
    const answeredQuestions: Array<{ question: string; answer: string }> = [];
    const weights = [4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 1, 2, 0, 2, 2, 2];

    for (let i = 1; i <= 21; i++) {
      const selected = answers[`q${i}`];
      if (selected) {
        score += parseInt(selected) * weights[i-1];
        answered++;
        const selectedOption = questionOptions[i-1].find(opt => opt.value === selected);
        answeredQuestions.push({
          question: questions[i-1],
          answer: selectedOption?.text || ''
        });
      }
    }

    if (answered < 21) {
      alert('Please answer all 21 sustainability questions.');
      return;
    }

    // Add readiness questions
    for (let i = 25; i <= 27; i++) {
      const selected = answers[`q${i}`];
      if (!selected) {
        alert('Please answer all readiness questions.');
        return;
      }
      const selectedOption = questionOptions[i-1].find(opt => opt.value === selected);
      answeredQuestions.push({
        question: questions[i-1],
        answer: selectedOption?.text || ''
      });
    }

    const percentage = Math.min(Math.round((score / 48) * 100), 100);
    setScore(percentage);
    setUserAnswers(answeredQuestions);
    setShowResults(true);
    setShowAssessment(false);

    // Clear localStorage after assessment is complete
    localStorage.removeItem('scorecardUserData');

    // Send data to Google Sheet
    const formData = {
      name: userData.name,
      email: userData.email,
      answers: answeredQuestions,
      score: percentage
    };

    fetch('https://script.google.com/macros/s/AKfycbxfC609-OnZB_UcV_7Njh8q-UcvJAAtVdiQtpTKtYqDG0sGrIGQVeQldJy7ty6LZtDV/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors'
    }).then(() => {
      console.log('Data sent to Google Sheet');
    }).catch(error => {
      console.error('Error sending data:', error);
    });
  };

  const generateReport = () => {
    // @ts-ignore
    const { jsPDF } = window.jspdf || { jsPDF };
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
      doc.text(`${index + 1}. Question: ${ans.question}`, 10, y);
      doc.text(`Answer: ${ans.answer}`, 10, y + 5);
      let recommendation = index < 21 ? getRecommendation(index + 1, ans.answer) : 'Book a consultation to discuss your next steps for adopting sustainable uniforms.';
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
    if (answer.toLowerCase() === 'no' || answer.toLowerCase() === "don't know") {
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
        default: return 'Book a consultation to discuss improvements.';
      }
    } else {
      return 'Great job! Continue building on this strength.';
    }
  };

  const getScoreDescription = (score: number): string => {
    if (score < 33) {
      return 'Your low score is likely due to reliance on traditional materials and lack of transparency or ethical audits. To improve, focus on sustainable fabrics and supply chain practices.';
    } else if (score < 67) {
      return 'Your medium score shows some positive steps but gaps in offsetting and distribution. Enhance by adding AI tools and takeback programs.';
    } else {
      return 'Your high score reflects strong practices. To maximize, double down on transparency and technology.';
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      color: '#333',
      background: '#f9f9f9',
      textAlign: 'center' as const
    },
    scorecardContainer: {
      maxWidth: '700px',
      margin: '50px auto',
      padding: '20px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    h1: {
      color: '#4CAF50',
      fontSize: '28px',
      marginBottom: '20px'
    },
    h2: {
      color: '#4CAF50',
      fontSize: '20px',
      marginBottom: '15px'
    },
    entryForm: {
      textAlign: 'left' as const
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    },
    button: {
      background: '#4CAF50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s',
      width: '100%'
    },
    buttonHover: {
      background: '#45a049'
    },
    quizSection: {
      display: showAssessment ? 'block' : 'none',
      textAlign: 'left' as const
    },
    question: {
      marginBottom: '30px'
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    radioGroup: {
      marginBottom: '10px'
    },
    radioLabel: {
      fontWeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px'
    },
    radioInput: {
      marginRight: '10px'
    },
    results: {
      display: showResults ? 'block' : 'none',
      marginTop: '30px',
      padding: '20px',
      background: '#f0f0f0',
      borderRadius: '10px',
      textAlign: 'center' as const
    },
    resultScore: {
      fontSize: '28px',
      color: '#4CAF50',
      marginBottom: '20px'
    },
    consultationBtn: {
      marginTop: '20px'
    },
    error: {
      color: 'red',
      marginBottom: '15px',
      display: entryError ? 'block' : 'none',
      textAlign: 'center' as const
    },
    progress: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '20px',
      textAlign: 'center' as const
    },
    navButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px'
    },
    navButton: {
      width: '48%',
      background: '#4CAF50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };

  if (showResults) {
    return (
      <div style={styles.container}>
        <div style={styles.scorecardContainer}>
          <div style={styles.results}>
            <h2 style={{...styles.h2, fontSize: '24px'}}>Your Sustainability Score: <span style={styles.resultScore}>{score}%</span></h2>
            <p style={{marginBottom: '20px'}}>{getScoreDescription(score)}</p>
            <div style={{marginTop: '20px'}}>
              <button style={styles.button} onClick={generateReport}>Download Your Personalized Report</button>
            </div>
            <div style={styles.consultationBtn}>
              <button style={styles.button}><a href="/consultation" style={{color: 'white', textDecoration: 'none'}}>Book Your Free Consultation</a></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showAssessment) {
    const currentQuestion = questions[currentSlide];
    const options = questionOptions[currentSlide];
    
    return (
      <div style={styles.container}>
        <div style={styles.scorecardContainer}>
          <div style={styles.quizSection}>
            {currentSlide === 24 && <h2 style={styles.h2}>Readiness to Switch</h2>}
            <div style={styles.question}>
              <label style={styles.label}>{currentQuestion}</label>
              <div style={styles.radioGroup}>
                {options.map((option, index) => (
                  <label key={index} style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name={`q${currentSlide + 1}`} 
                      value={option.value}
                      checked={answers[`q${currentSlide + 1}`] === option.value}
                      onChange={(e) => handleAnswer(currentSlide, e.target.value)}
                      style={styles.radioInput}
                    />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
            <div style={styles.navButtons}>
              <button 
                type="button" 
                style={{...styles.navButton, display: currentSlide === 0 ? 'none' : 'inline-block'}}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button 
                type="button" 
                style={styles.navButton}
                onClick={handleNext}
              >
                {currentSlide === questions.length - 1 ? 'Submit Scorecard' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.scorecardContainer}>
        <h1 style={styles.h1}>Sustainability Scorecard for School Uniforms</h1>
        <p>Enter your details to access the scorecard. Answer questions one by one to assess your school's uniform sustainability. At the end, get your score, a report, and book a consultation.</p>
        
        <div style={styles.entryForm}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            style={styles.input}
            required 
          />
          <input 
            type="text" 
            placeholder="School Name" 
            value={userData.school}
            onChange={(e) => setUserData({...userData, school: e.target.value})}
            style={styles.input}
            required 
          />
          <input 
            type="number" 
            min="1" 
            placeholder="Number of Students" 
            value={userData.students}
            onChange={(e) => setUserData({...userData, students: e.target.value})}
            style={styles.input}
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            style={styles.input}
            required 
          />
          <div style={styles.error}>Please fill all fields to start.</div>
          <button type="button" style={styles.button} onClick={handleStartAssessment}>Start Scorecard</button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityScorecard;
