import React ,{useState} from 'react';

const HtmlTest = () => {

    const questions = [
      {
        "question": "Which CSS property is used to control the spacing between letters?",
        "options": [
          "letter-spacing",
          "word-spacing",
          "line-height",
          "margin"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to change the background color of an element?",
        "options": [
          "background-color",
          "color",
          "text-color",
          "background"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to make text italic?",
        "options": [
          "font-weight",
          "text-decoration",
          "text-style",
          "font-style"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS property is used to add shadows to elements?",
        "options": [
          "text-shadow",
          "box-shadow",
          "shadow",
          "element-shadow"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to specify the type of cursor to be displayed?",
        "options": [
          "mouse-cursor",
          "cursor-type",
          "cursor",
          "pointer-type"
        ],
        "answer": 2
      },
      {
        "question": "Which CSS property is used to control the size of the text?",
        "options": [
          "text-size",
          "font-size",
          "text-style",
          "font-style"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to set the space between lines of text?",
        "options": [
          "line-spacing",
          "line-height",
          "text-spacing",
          "text-height"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to specify the size of an element's border?",
        "options": [
          "border-size",
          "border-width",
          "border-style",
          "element-border"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to control the order of flexible items in a flex container?",
        "options": [
          "order",
          "flex-direction",
          "align-items",
          "justify-content"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to add a transition effect to an element?",
        "options": [
          "transition",
          "animation",
          "transform",
          "effect"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to control the visibility of an element?",
        "options": [
          "display",
          "visibility",
          "hidden",
          "opacity"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to specify the alignment of text within its container?",
        "options": [
          "text-align",
          "align-text",
          "text-style",
          "align-content"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to specify the position of an element?",
        "options": [
          "position",
          "place",
          "align",
          "location"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to add rounded corners to an element?",
        "options": [
          "border-radius",
          "corner-radius",
          "element-radius",
          "rounded-corner"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to control the order of grid items?",
        "options": [
          "grid-order",
          "grid-template",
          "grid-column",
          "order"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS property is used to control the visibility of an element without affecting the layout?",
        "options": [
          "visibility",
          "display",
          "opacity",
          "hidden"
        ],
        "answer":2
      },
      {
        "question": "Which CSS property is used to add a background image to an element?",
        "options": [
          "background-image",
          "image",
          "background",
          "background-src"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to control the order of flex items in a flex container?",
        "options": [
          "order",
          "flex-order",
          "flex-direction",
          "align-items"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to add a border around an element?",
        "options": [
          "border",
          "border-style",
          "element-border",
          "outline"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to specify the amount of space between an element's content and its border?",
        "options": [
          "padding",
          "margin",
          "spacing",
          "border-spacing"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to specify the size and shape of an element's box model?",
        "options": [
          "width",
          "height",
          "box-size",
          "box-sizing"
        ],
        "answer": 3
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

export default HtmlTest