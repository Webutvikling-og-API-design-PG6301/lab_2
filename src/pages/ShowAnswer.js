import React from "react";
import "./home.css";
const ShowAnswer = ({ title, storeCorrectAnswer }) => {
  console.log(storeCorrectAnswer);
  return (
    <div className="container">
      <h1>{title}</h1>
      {title === "Correct" ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h4>{storeCorrectAnswer.title}</h4>
          <h5 style={{ marginTop: 10, color: "green" }}>
            {storeCorrectAnswer.answer}
          </h5>
        </div>
      ) : null}
    </div>
  );
};

export default ShowAnswer;
