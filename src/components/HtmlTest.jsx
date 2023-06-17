import React ,{useState} from 'react';

const HtmlTest = () => {
    const questions = [
        {
          "question": "What does HTML stand for?",
          "options": [
            "Hyperlink and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language"
          ],
          "answer": 1
        },
        {
          "question": "Which HTML element is used to define a paragraph?",
          "options": [
            "p",
            "div",
            "span",
            "h1"
          ],
          "answer": 0
        },
        {
          "question": "What is the correct HTML element for inserting a line break?",
          "options": [
            "br",
            "lb",
            "break",
            "ln"
          ],
          "answer": 0
        },
        {
          "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
          "options": [
            "alt",
            "src",
            "title",
            "link"
          ],
          "answer": 0
        },
        {
          "question": "Which HTML element is used to define the title of a document?",
          "options": [
            "head",
            "meta",
            "title",
            "body"
          ],
          "answer": 2
        },
        {
          "question": "What is the correct HTML element for the largest heading?",
          "options": [
            "h1",
            "h2",
            "h3",
            "h4"
          ],
          "answer": 0
        },
        {
          "question": "Which HTML element defines the navigation links in the document?",
          "options": [
            "nav",
            "ul",
            "link",
            "a"
          ],
          "answer": 0
        },
        {
          "question": "What is the correct HTML for creating a hyperlink?",
          "options": [
            "<a href=\"https://example.com\">Link</a>",
            "<link href=\"https://example.com\">Link</link>",
            "<url href=\"https://example.com\">Link</url>",
            "<a src=\"https://example.com\">Link</a>"
          ],
          "answer": 0
        },
        {
          "question": "Which HTML element is used to specify a header for a section or document?",
          "options": [
            "header",
            "h1",
            "nav",
            "section"
          ],
          "answer": 0
        },
        {
          "question": "Which HTML element is used to define an unordered list?",
          "options": [
            "ul",
            "li",
            "ol",
            "list"
          ],
          "answer": 0
        }
      ]
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
              className={`m-5 border-2 w-1/3 p-3 border-solid option hover:cursor-pointer ${selectedOption === index ? 'selected bg-green-400 border-indigo-600 p-3' : ''}`}
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
          <div className="quiz-container" style={{marginTop:100}}>
            <h2 className='text-6xl text-center'>Question {currentQuestion + 1}</h2>
            <p className='question-text text-4xl m-5'>{questions[currentQuestion].question}</p>
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

export default HtmlTest