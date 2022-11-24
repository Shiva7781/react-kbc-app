import React from "react";

const Trivia = () => {
  return (
    <div className="trivia">
      <div className="question">Question </div>
      <div className="options">
        <div className="answers wrong">
          <span>a) </span>
          <span>A</span>
        </div>
        <div className="answers correct">
          <span>b) </span>
          <span>B</span>
        </div>
        <div className="answers">
          <span>c) </span>
          <span>C</span>
        </div>
        <div className="answers">
          <span>d) </span>
          <span>D</span>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
