import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/sounds/start_play.mp3";
import checking from "../assets/sounds/waiting-[AudioTrimmer.com].mp3";
import correct from "../assets/sounds/correct_answer.mp3";
import wrong from "../assets/sounds/wrong_answer.mp3";

const Trivia = ({
  tiviaData,
  setStopTime,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [mclassName, setMclassName] = useState("answers");

  const [letplay] = useSound(play);

  const [waiting] = useSound(checking);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letplay();
  }, [letplay]);

  useEffect(() => {
    setQuestion(tiviaData[questionNumber - 1]);
  }, [tiviaData, questionNumber]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleCheck = (x) => {
    // console.log(x);
    waiting();

    setSelectAnswer(x);
    setMclassName("answers active");

    delay(3000, () => {
      setMclassName(
        question?.answers[x].correct ? "answers correct" : "answers wrong"
      );
    });

    delay(5000, () => {
      if (question.answers[x].correct) {
        correctAnswer();

        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectAnswer(null);
        });
      } else {
        wrongAnswer();

        delay(1000, () => {
          setStopTime(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question} </div>
      <div className="options">
        <div
          className={selectAnswer === 0 ? mclassName : "answers"}
          onClick={() => handleCheck(0)}
        >
          <span>a) </span>
          <span>{question?.answers[0].text}</span>
        </div>
        <div
          className={selectAnswer === 1 ? mclassName : "answers"}
          onClick={() => handleCheck(1)}
        >
          <span>b) </span>
          <span>{question?.answers[1].text}</span>
        </div>
        <div
          className={selectAnswer === 2 ? mclassName : "answers"}
          onClick={() => handleCheck(2)}
        >
          <span>c) </span>
          <span>{question?.answers[2].text}</span>
        </div>
        <div
          className={selectAnswer === 3 ? mclassName : "answers"}
          onClick={() => handleCheck(3)}
        >
          <span>d) </span>
          <span>{question?.answers[3].text}</span>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
