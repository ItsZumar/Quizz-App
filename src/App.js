import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

export default function App() {
  const questions = [
    {
      questionText: " Pakistan is located in the?",
      answerOptions: [
        { answerText: " East Asia", isCorrect: false },
        { answerText: "West Asia", isCorrect: false },
        { answerText: "South Asia", isCorrect: true },
        { answerText: "Central Asia", isCorrect: false }
      ]
    },
    {
      questionText: "What is the capital of Pakistan?",
      answerOptions: [
        { answerText: "Karachi", isCorrect: false },
        { answerText: "Islamabad", isCorrect: true },
        { answerText: "Lahore", isCorrect: false },
        { answerText: "Rawalpindi", isCorrect: false }
      ]
    },
    {
      questionText: "Which animal is the national animal of Pakistan??",
      answerOptions: [
        { answerText: "Markhor", isCorrect: true },
        { answerText: "Tiger", isCorrect: false },
        { answerText: "Lion", isCorrect: false },
        { answerText: "Monkey", isCorrect: false }
      ]
    },
    {
      questionText: "Who is the captain of Pakistan's National Cricket Team?",
      answerOptions: [
        { answerText: "Imad Wasim", isCorrect: false },
        { answerText: "Sarfraz Ahmad", isCorrect: false },
        { answerText: "Shoaib Malik", isCorrect: false },
        { answerText: "Babar Azam", isCorrect: true }
      ]
    },
    {
      questionText: "What is the real name of Harry Potter is?",
      answerOptions: [
        { answerText: "John Smith", isCorrect: false },
        { answerText: "Daren Criss", isCorrect: false },
        { answerText: "James Weasly", isCorrect: false },
        { answerText: "Daniel Radcliffe", isCorrect: true }
      ]
    },
    {
      questionText: "“Pakistan Day” is celebrated each year on?",
      answerOptions: [
        { answerText: "1 May", isCorrect: false },
        { answerText: "4 July", isCorrect: false },
        { answerText: "6 September", isCorrect: false },
        { answerText: "23 March", isCorrect: true }
      ]
    },
    {
      questionText: "Badshahi Mosque is situated in?",
      answerOptions: [
        { answerText: "Hyderabad", isCorrect: false },
        { answerText: "Multan", isCorrect: false },
        { answerText: "Islamabad", isCorrect: false },
        { answerText: "Lahore", isCorrect: true }
      ]
    },
    {
      questionText: " 2 * 22 = ?",
      answerOptions: [
        { answerText: "16", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "60", isCorrect: false },
        { answerText: "44", isCorrect: true }
      ]
    },
    {
      questionText: "CPU stands for?",
      answerOptions: [
        { answerText: "Control Processing Unit", isCorrect: false },
        { answerText: "Central Programing Unit", isCorrect: false },
        { answerText: "Common Processing Unit", isCorrect: false },
        { answerText: "Central Processing Unit ", isCorrect: true }
      ]
    },
    {
      questionText: "The largest dam in Pakistan is?",
      answerOptions: [
        { answerText: "Bhasha Dam", isCorrect: false },
        { answerText: "Mangla Dam", isCorrect: false },
        { answerText: "Kalabagh Dam", isCorrect: false },
        { answerText: "Tarbela Dam", isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [inCorrectScore, setInCorrectScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setInCorrectScore(inCorrectScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="main-container">
      <h1 className="heading">Quiz App</h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <Pie
              data={{
                labels: ["CorrectAnswer", "InCorrectAnswer"],
                datasets: [
                  {
                    data: [score, inCorrectScore],
                    backgroundColor: ["green", "red"]
                  }
                ]
              }}
              width={400}
              height={400}
            />
          </div>
        ) : (
          <div className="container">
            <div className="question-section">
              <div className="question-Label">
                <h3>Question {currentQuestion + 1}</h3>
              </div>
              <div className="question-text">
                {currentQuestion + 1} :{" "}
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="btn"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            <p className="last-title">
              Question {currentQuestion + 1}/{questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
