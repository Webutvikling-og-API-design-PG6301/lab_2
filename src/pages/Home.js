import React, { useState } from "react";
import { randomQuestion, isCorrectAnswer } from "../components/questions";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = ({ setIsAnswered }) => {
  const [question, setQuestion] = useState(randomQuestion());
  const [storeAnswer, setStoreAnswer] = useState(false);

  const navigate = useNavigate();

  const handleCorrectAnswer = (answer) => {
    if (isCorrectAnswer(question, answer)) {
      setIsAnswered(true);
      navigate("/answer/correct");
    } else {
      setIsAnswered(false);
      navigate("/answer/wrong");
    }
  };
  console.log(storeAnswer);
  return (
    <div className="container">
      <h1>{question.question}</h1>
      <div className="buttons">
        {Object.keys(question.answers)
          .filter((value) => question.answers[value])
          .map((answer) => {
            return (
              <button
                className="button"
                onClick={() => handleCorrectAnswer(answer)}
                key={answer}
              >
                {question.answers[answer]}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
