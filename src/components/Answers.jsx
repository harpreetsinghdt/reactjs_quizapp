import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffedAnswers = useRef();
  if (!shuffedAnswers.current) {
    shuffedAnswers.current = [...answers];
    shuffedAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffedAnswers.current.map((answer) => {
        let cssClass = "";
        const isSelected = selectedAnswer === answer;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
