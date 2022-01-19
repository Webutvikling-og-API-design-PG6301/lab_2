import React, { useState } from "react";
import { randomQuestion, isCorrectAnswer } from "../components/questions";
import { useNavigate } from "react-router-dom";
const Home = ({ setIsAnswered }) => {
  const [question, setQuestion] = useState(randomQuestion());
  const [storeAnswer, setStoreAnswer] = useState(false);

  const navigate = useNavigate();

  const handleCorrectAnswer = (answer) => {
    if (isCorrectAnswer(question, answer)) {
      setIsAnswered("Correct");
      navigate("/answer/correct");
    } else {
      setIsAnswered("Wrong");
      navigate("/answer/wrong");
    }
  };
  console.log(storeAnswer);
  return (
    <div>
      <h1>{question.question}</h1>
      <div>
        {Object.keys(question.answers)
          .filter((value) => question.answers[value])
          .map((answer) => {
            return (
              <button onClick={() => handleCorrectAnswer(answer)} key={answer}>
                {question.answers[answer]}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
