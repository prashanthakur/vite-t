import React ,{useState} from 'react';

const CommonTest = ({questions}) => {
  
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [selectedOption, setSelectedOption] = useState(null);
        const [showScore, setShowScore] = useState(false);
        const [score, setScore] = useState(0);
      
        const handleOptionSelect = (optionIndex) => {
          setSelectedOption(optionIndex);
        };
      
        const handleNextQuestion = () => {
          if (selectedOption !== null) {
            if (selectedOption === questions[currentQuestion].answer) {
              setScore(score + 1);
            }
            setSelectedOption(null);
            setCurrentQuestion(currentQuestion + 1);
          }
        };
      
        const handleFinishQuiz = () => {
          if (selectedOption !== null) {
            if (selectedOption === questions[currentQuestion].answer) {
              setScore(score + 1);
            }
            setShowScore(true);
          }
        };
      
        const renderOptions = (options) => {
          return options.map((option, index) => (
            <div
              key={index}
              className={`m-4 border-2 w-full rounded p-3 border-solid option hover:cursor-pointer md:w-1/3 ${selectedOption === index ? 'selected bg-primary border-indigo-600 p-3' : ''}`}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </div>
          ));
        };
      
        if (showScore) {
          return (
            <div className="quiz-container">
              <h2 className='text-center text-4xl m-4'>Quiz Complete!</h2>
              <p className='quiz-complete text-center text-3xl m-12 font-extrabold'>Your Score: <span className='text-8xl text-green-600'>{score}</span>/{questions.length}</p>
              {/* <button>Retest </button> */}
            </div>
          );
        }
      
        if (!questions || questions.length === 0) {
          return <div className="quiz-container">No questions available.</div>;
        }
      
        return (
          <div className="quiz-container md:mt-[100px]">
            <h2 className='text-xl text-center md:text-6xl'>Question {currentQuestion + 1}</h2>
            <p className='question-text text-2xl m-5 md:text-4xl'>{questions[currentQuestion].question}</p>
            <div className="options-container m-4 p-4">{renderOptions(questions[currentQuestion].options)}</div>
            {currentQuestion < questions.length - 1 ? (
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-10 rounded-md shadow-md ml-5" onClick={handleNextQuestion}>
                Next
              </button>
            ) : (
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-10 rounded-md shadow-md ml-5" onClick={handleFinishQuiz}>
                Finish
              </button>
            )}
          </div>
        );
}

export default CommonTest