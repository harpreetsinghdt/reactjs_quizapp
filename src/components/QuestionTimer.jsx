import React, { useEffect, useRef, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const tmRef = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(tmRef);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intRef = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(intRef);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
};

export default QuestionTimer;
