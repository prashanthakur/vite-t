import React, { useState } from 'react';

const JsTest = () => {

  const questions = [
    {
      "question": "What is the correct way to concatenate two strings in JavaScript?",
      "options": ["str1.join(str2)", "str1.append(str2)", "str1.concat(str2)", "str1.combine(str2)"],
      "answerIndex": 2
    },
    {
      "question": "Which of the following is not a valid JavaScript data type?",
      "options": ["String", "Number", "Boolean", "Character"],
      "answerIndex": 3
    },
    {
      "question": "What is the result of the following expression?\n\"2\" + 2;",
      "options": ["4", "22", "\"22\"", "NaN"],
      "answerIndex": 1
    },
    {
      "question": "What is the correct way to declare a JavaScript array?",
      "options": ["var colors = [red, green, blue];", "var colors = {red, green, blue};", "var colors = [\"red\", \"green\", \"blue\"];", "var colors = \"red, green, blue\";"],
      "answerIndex": 2
    },
    {
      "question": "What is the output of the following code? \n console.log(3 == \"3\");",
      "options": ["true", "false", "NaN", "undefined"],
      "answerIndex": 0
    },
    {
      "question": "Which of the following is not a JavaScript data type?",
      "options": ["String", "Number", "Boolean", "Float"],
      "answer": 3
    },
    {
      "question": "Which keyword is used to declare a variable in JavaScript?",
      "options": ["var", "let", "const", "all of the above"],
      "answer": 3
    },
    {
      "question": "What is the output of the following code?\n\nconsole.log(2 + '2');",
      "options": ["4", "22", "NaN", "TypeError"],
      "answer": 1
    },
    {
      "question": "Which method is used to add an element to the end of an array in JavaScript?",
      "options": ["push()", "unshift()", "pop()", "shift()"],
      "answer": 0
    },
    {
      "question": "Which operator is used for strict equality comparison in JavaScript?",
      "options": ["==", "===", "=", "!="],
      "answer": 1
    },
    {
      "question": "What does the 'typeof' operator return?",
      "options": ["the type of a variable", "the value of a variable", "the size of a variable", "the scope of a variable"],
      "answer": 0
    },
    {
      "question": "What is the correct way to write a comment in JavaScript?",
      "options": ["/* comment */", "// comment", "<!-- comment -->", "comment()"],
      "answer": 1
    },
    {
      "question": "Which function is used to parse a string and return an integer in JavaScript?",
      "options": ["parseFloat()", "stringToInt()", "parseInteger()", "parseInt()"],
      "answer": 3
    },
    {
      "question": "What is the result of the following code?\n\nconsole.log(3 + 2 + '7');",
      "options": ["57", "12", "37", "NaN"],
      "answer": 0
    },
    {
      "question": "Which statement is used to exit a loop in JavaScript?",
      "options": ["exit", "break", "return", "continue"],
      "answer": 1
    },
    {
      "question": "Which method is used to remove the last element from an array in JavaScript?",
      "options": ["pop()", "shift()", "push()", "unshift()"],
      "answer": 0
    },
    {
      "question": "What does the 'typeof' operator return for null?",
      "options": ["object", "null", "undefined", "string"],
      "answer": 0
    },
    {
      "question": "Which function is used to convert a string to lowercase in JavaScript?",
      "options": ["toUpperCase()", "toLowerCase()", "convertToLower()", "string.lower()"],
      "answer": 1
    },
    {
      "question": "Which event is triggered when a button is clicked in JavaScript?",
      "options": ["click", "change", "load", "submit"],
      "answer": 0
    },
    {
      "question": "What is the correct way to write a conditional statement in JavaScript?",
      "options": ["for-loop", "switch-case", "if-else", "while-loop"],
      "answer": 2
    },
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
        className={`m-4 border-2 w-full rounded p-3 border-solid option hover:cursor-pointer md:w-1/3 ${selectedOption === index ? 'selected bg-primary border-indigo-600 p-3 text-whitish' : ''}`}
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
      <h2 className='text-center md:text-6xl text-pulp'>There are total {questions.length} questions</h2>
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

export default JsTest